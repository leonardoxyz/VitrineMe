
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>
    
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in">
            Transformando <span className="gradient-text">ideias</span> em experiências <span className="gradient-text">digitais</span> memoráveis
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Desenvolvimento web personalizado, moderno e responsivo para elevar a presença online da sua empresa ou projeto.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button asChild className="gradient-bg" size="lg">
              <Link to="/projetos" className="flex items-center gap-2">
                Ver Projetos <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contato">Vamos Conversar</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div>
              <p className="text-3xl font-display font-bold">50+</p>
              <p className="text-sm text-muted-foreground">Projetos Entregues</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold">6</p>
              <p className="text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold">40+</p>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Projetos Responsivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
