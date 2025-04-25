import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TemplatePreview from "@/components/TemplatePreview";

interface TemplateCardProps {
  id: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
  tags: string[];
  link: string;
}

const TemplateCard = ({ id, title, type, description, thumbnail, tags, link }: TemplateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  return (
    <>
      <div 
        className="group rounded-xl overflow-hidden hover-card glassmorphism p-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 w-full">
              <p className="text-xs font-medium text-white/70 mb-1">{type}</p>
              <h3 className="text-xl font-display text-white mb-4">{title}</h3>
              <Button 
                variant="outline" 
                className="text-black border-white hover:bg-white hover:text-gray-500" 
                size="sm"
                onClick={() => setIsPreviewOpen(true)}
              >
                <span className="flex items-center gap-2">
                  Ver Template<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200 hover:text-black" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-display text-xl font-medium mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200 hover:text-black shrink-0"
              onClick={() => setIsPreviewOpen(true)}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <TemplatePreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        templateUrl={link}
        templateTitle={title}
      />
    </>
  );
};

export default TemplateCard; 