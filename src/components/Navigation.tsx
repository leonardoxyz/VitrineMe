
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: "Início", path: "/" },
    { name: "Projetos", path: "/projetos" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold gradient-text">
          DevPortfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="gradient-bg" size="sm">
            Vamos Conversar
          </Button>
        </nav>
        
        {/* Mobile Navigation Trigger */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <nav className="container flex flex-col py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button className="gradient-bg w-full" size="sm" onClick={closeMenu}>
              Vamos Conversar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
