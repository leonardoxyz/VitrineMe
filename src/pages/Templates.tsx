import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContent } from "@/contexts/ContentContext";
import { ArrowRight } from "lucide-react";

const Templates = () => {
  const navigate = useNavigate();
  const { templates } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Nossos <span className="gradient-text">Templates</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore nossa coleção de templates prontos para usar
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="group relative overflow-hidden rounded-lg border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={template.thumbnail}
                      alt={template.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-primary font-medium">
                        {template.type}
                      </span>
                      {template.featured && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      {template.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                      {template.features.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          +{template.features.length - 3}
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => navigate(`/template/${template.id}`)}
                      className="w-full"
                    >
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Templates; 