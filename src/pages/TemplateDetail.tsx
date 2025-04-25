import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContent } from "@/contexts/ContentContext";
import { ArrowLeft, ArrowRight, Link as LinkIcon } from "lucide-react";
import TemplatePreview from "@/components/TemplatePreview";

const TemplateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { templates } = useContent();
  const template = templates.find((t) => t.id === id);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!template) {
    return (
      <>
        <Navigation />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-display font-bold mb-6">Template não encontrado</h1>
          <Button asChild>
            <Link to="/templates">Voltar para Templates</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  // Find previous and next templates
  const currentIndex = templates.findIndex(t => t.id === id);
  const prevTemplate = currentIndex > 0 ? templates[currentIndex - 1] : null;
  const nextTemplate = currentIndex < templates.length - 1 ? templates[currentIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/templates" className="text-sm flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para Templates
                </Link>
              </div>
              <div>
                <p className="text-primary font-medium mb-2">{template.type}</p>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{template.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{template.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="pb-20">
          <div className="container">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={template.thumbnail} 
                alt={template.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Template Details */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display font-bold mb-6">Sobre o Template</h2>
                <p className="text-gray-700 mb-6">{template.longDescription}</p>
                
                <div className="mt-12">
                  <h3 className="text-xl font-display font-bold mb-4">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-3">
                    {template.technologies.map((tech) => (
                      <span
                        key={tech} 
                        className="bg-gray-100 text-sm px-3 py-1 rounded-md text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-display font-bold mb-4">Funcionalidades</h3>
                  <ul className="space-y-3">
                    {template.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="sticky top-32">
                  <div className="glassmorphism rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-display font-bold mb-4">Informações do Template</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tipo:</span>
                        <span className="font-medium">{template.type}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full gradient-bg mb-3"
                    onClick={() => setIsPreviewOpen(true)}
                  >
                    <span className="flex items-center gap-2">
                      Ver Demo <LinkIcon className="h-4 w-4" />
                    </span>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full hover:text-white">
                    <Link to="/contato">Solicitar Orçamento</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="pb-20">
          <div className="container">
            <h2 className="text-2xl font-display font-bold mb-8">Galeria do Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {template.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${template.title} - Imagem ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next/Previous Template */}
        <section className="pb-20">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
              {prevTemplate ? (
                <Link 
                  to={`/template/${prevTemplate.id}`} 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>
                    <span className="text-sm text-muted-foreground block">Template Anterior</span>
                    <span>{prevTemplate.title}</span>
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextTemplate && (
                <Link 
                  to={`/template/${nextTemplate.id}`} 
                  className="flex items-center gap-2 hover:text-primary transition-colors text-right mt-4 md:mt-0"
                >
                  <span>
                    <span className="text-sm text-muted-foreground block">Próximo Template</span>
                    <span>{nextTemplate.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <TemplatePreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        templateUrl={template.link}
        templateTitle={template.title}
      />
    </>
  );
};

export default TemplateDetail; 