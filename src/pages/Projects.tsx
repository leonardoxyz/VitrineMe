import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContent } from "@/contexts/ContentContext";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  const { projects } = useContent();

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
                Nossos <span className="gradient-text">Projetos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Conheça alguns dos nossos trabalhos mais recentes
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-primary font-medium">
                        {project.type}
                      </span>
                      {project.featured && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => navigate(`/project/${project.id}`)}
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

export default Projects;
