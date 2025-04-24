
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Sobre <span className="gradient-text">Nós</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Conheça nossa história, missão e o que nos move a criar experiências digitais excepcionais
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-display font-bold mb-6">Nossa História</h2>
                <p className="text-gray-700 mb-6">
                  Fundada em 2017, a DevPortfolio nasceu da paixão por criar websites excepcionais que não apenas parecem impressionantes, mas também entregam resultados tangíveis para nossos clientes. Começamos como uma pequena equipe de desenvolvedores e designers que acreditavam que cada negócio, independentemente do tamanho, merece uma presença digital de alta qualidade.
                </p>
                <p className="text-gray-700 mb-6">
                  Ao longo dos anos, expandimos nossa equipe e aprimoramos nossa expertise, trabalhando com clientes de diversos segmentos, desde pequenas empresas locais até empresas multinacionais. Nossa abordagem centrada no cliente e nosso compromisso com a excelência técnica nos permitiram construir uma reputação sólida no mercado.
                </p>
                <p className="text-gray-700">
                  Hoje, somos reconhecidos por entregar soluções web que combinam design inovador, usabilidade excepcional e código limpo e escalável. Continuamos apaixonados por ajudar empresas a maximizar seu potencial online através de experiências digitais memoráveis.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full -z-10" />
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-full -z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Nossa equipe" 
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Missão e Valores</h2>
              <p className="text-lg text-gray-700">
                Nossa missão é transformar ideias em experiências digitais memoráveis que impulsionem o crescimento dos nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Inovação</h3>
                <p className="text-muted-foreground">
                  Buscamos constantemente novas tecnologias e abordagens para proporcionar soluções criativas e eficientes.
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Comunicação</h3>
                <p className="text-muted-foreground">
                  Mantemos uma comunicação transparente e eficaz com nossos clientes durante todo o processo de desenvolvimento.
                </p>
              </div>

              <div className="p-8 rounded-xl glassmorphism hover-card">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Qualidade</h3>
                <p className="text-muted-foreground">
                  Comprometemo-nos com a excelência técnica e a entrega de produtos que excedam as expectativas dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Nosso Processo</h2>
              <p className="text-lg text-gray-700">
                Uma abordagem estruturada para transformar suas ideias em realidade digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Descoberta</h3>
                <p className="text-muted-foreground">
                  Entendemos suas necessidades, objetivos e expectativas para o projeto.
                </p>
              </div>

              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Planejamento</h3>
                <p className="text-muted-foreground">
                  Criamos wireframes, protótipos e definimos a arquitetura técnica do projeto.
                </p>
              </div>

              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Desenvolvimento</h3>
                <p className="text-muted-foreground">
                  Transformamos os designs em código limpo e otimizado, seguindo as melhores práticas.
                </p>
              </div>

              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Entrega & Suporte</h3>
                <p className="text-muted-foreground">
                  Lançamos o projeto e fornecemos suporte contínuo para garantir seu sucesso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Nossa Equipe</h2>
              <p className="text-lg text-gray-700">
                Conheça os profissionais talentosos por trás dos nossos projetos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="hover-card">
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Marcos Silva" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Marcos Silva</h3>
                <p className="text-muted-foreground">Fundador & Diretor</p>
              </div>

              <div className="hover-card">
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Carla Mendes" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Carla Mendes</h3>
                <p className="text-muted-foreground">Designer UX/UI</p>
              </div>

              <div className="hover-card">
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Rafael Costa" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Rafael Costa</h3>
                <p className="text-muted-foreground">Desenvolvedor Frontend</p>
              </div>

              <div className="hover-card">
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                    alt="Juliana Ferreira" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Juliana Ferreira</h3>
                <p className="text-muted-foreground">Desenvolvedora Backend</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl gradient-bg text-white">
              <h2 className="text-3xl font-display font-bold mb-4">Vamos Trabalhar Juntos?</h2>
              <p className="mb-8 max-w-xl mx-auto">
                Se você está procurando uma equipe para transformar suas ideias em realidade digital, estamos aqui para ajudar.
              </p>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
