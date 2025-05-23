import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContent } from "@/contexts/ContentContext";
import { ArrowLeft, ArrowRight, Link as LinkIcon } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useContent();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-display font-bold mb-6">Projeto não encontrado</h1>
          <Button asChild>
            <Link to="/projects">Voltar para Projetos</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  // Find previous and next projects
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/projects" className="text-sm flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para Projetos
                </Link>
              </div>
              <div>
                <p className="text-primary font-medium mb-2">{project.type}</p>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-muted text-sm px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="pb-20">
          <div className="container">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display font-bold mb-6">Sobre o Projeto</h2>
                <p className="text-gray-700 mb-6">{project.longDescription}</p>
                
                <div className="mt-12">
                  <h3 className="text-xl font-display font-bold mb-4">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech} 
                        className="bg-gray-100 text-sm px-3 py-1 rounded-md text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="sticky top-32">
                  <div className="glassmorphism rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-display font-bold mb-4">Informações do Projeto</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Cliente:</span>
                        <span className="font-medium">{project.client}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tipo:</span>
                        <span className="font-medium">{project.type}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full gradient-bg mb-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Visitar Site <LinkIcon className="h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full hover:text-white">
                    <Link to="/contato">Solicitar Orçamento</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="pb-20">
          <div className="container">
            <h2 className="text-2xl font-display font-bold mb-8">Galeria do Projeto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next/Previous Project */}
        <section className="pb-20">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
              {prevProject ? (
                <Link 
                  to={`/project/${prevProject.id}`} 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>
                    <span className="text-sm text-muted-foreground block">Projeto Anterior</span>
                    <span>{prevProject.title}</span>
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextProject && (
                <Link 
                  to={`/project/${nextProject.id}`} 
                  className="flex items-center gap-2 hover:text-primary transition-colors text-right mt-4 md:mt-0"
                >
                  <span>
                    <span className="text-sm text-muted-foreground block">Próximo Projeto</span>
                    <span>{nextProject.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
