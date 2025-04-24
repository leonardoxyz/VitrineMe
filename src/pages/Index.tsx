
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">Projetos em Destaque</h2>
                <p className="text-muted-foreground">Conheça alguns dos nossos trabalhos mais recentes</p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0">
                <Link to="/projetos" className="flex items-center gap-2">
                  Ver Todos <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  client={project.client}
                  type={project.type}
                  thumbnail={project.thumbnail}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">Serviços Especializados</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Desenvolvimento web personalizado para diversos tipos de projetos e necessidades
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Landing Pages</h3>
                <p className="text-muted-foreground">
                  Páginas de alto impacto visual e conversão para campanhas, produtos e serviços específicos
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">E-commerce</h3>
                <p className="text-muted-foreground">
                  Lojas virtuais completas com gerenciamento de produtos, pagamentos e experiência de compra otimizada
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Sites Institucionais</h3>
                <p className="text-muted-foreground">
                  Websites corporativos que transmitem credibilidade e profissionalismo para sua empresa
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Portfolios</h3>
                <p className="text-muted-foreground">
                  Websites para fotógrafos, designers e artistas exibirem seus trabalhos de forma elegante e profissional
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Sistemas Web</h3>
                <p className="text-muted-foreground">
                  Aplicações web personalizadas para gerenciamento, CRM, agendamentos e automação de processos
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Manutenção e Suporte</h3>
                <p className="text-muted-foreground">
                  Serviços de atualização, otimização e suporte para sites existentes, garantindo segurança e performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">O que Clientes Dizem</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A opinião de quem já utilizou nossos serviços
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.testimonial)
                .slice(0, 3)
                .map((project) => (
                  <div key={project.id} className="p-8 rounded-xl glassmorphism">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={project.testimonial?.avatar} 
                        alt={project.testimonial?.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{project.testimonial?.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.testimonial?.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{project.testimonial?.content}"</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl gradient-bg text-white">
              <h2 className="text-3xl font-display font-bold mb-4">Pronto para Transformar sua Presença Digital?</h2>
              <p className="mb-8 max-w-xl mx-auto">
                Entre em contato para discutirmos seu projeto e como podemos desenvolver a solução ideal para sua empresa ou negócio.
              </p>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/contato">Vamos Conversar</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
