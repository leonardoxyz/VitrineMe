import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface TemplatePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  templateUrl: string;
  templateTitle: string;
}

const TemplatePreview = ({ isOpen, onClose, templateUrl, templateTitle }: TemplatePreviewProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Overlay 
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
      />
      <DialogPrimitive.Content 
        className={`fixed left-[50%] top-[50%] z-50 flex flex-col translate-x-[-50%] translate-y-[-50%] shadow-2xl outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ${
          isFullscreen 
            ? 'w-screen h-screen max-w-none m-0 rounded-none' 
            : 'max-w-[90%] w-full h-[90vh] rounded-xl overflow-hidden'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-[#0f172a]">
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <h2 className="font-display font-semibold text-white/90 ml-2">{templateTitle}</h2>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(templateUrl, '_blank')}
              className="hover:bg-white/10 transition-colors h-8 w-8"
              title="Abrir em nova aba"
            >
              <ExternalLink className="h-4 w-4 text-white/70" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="hover:bg-white/10 transition-colors h-8 w-8"
              title={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4 text-white/70" />
              ) : (
                <Maximize2 className="h-4 w-4 text-white/70" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-white/10 transition-colors h-8 w-8"
              title="Fechar"
            >
              <X className="h-4 w-4 text-white/70" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-sm text-gray-500">Carregando preview...</p>
              </div>
            </div>
          )}
          <iframe
            src={templateUrl}
            title={templateTitle}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogPrimitive.Content>
    </Dialog>
  );
};

export default TemplatePreview; 