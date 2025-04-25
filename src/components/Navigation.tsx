import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ContactModal from "./ContactModal";
import AdminLoginModal from "./AdminLoginModal";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const { isAdmin } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl + Shift + A para abrir o modal de login
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminLoginOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Função auxiliar para navegar para uma seção
  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleTemplateClick = (e) => {
    e.preventDefault();
    navigateToSection('templates');
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    navigateToSection('projects');
  };
  
  const navItems = [
    { name: "Início", path: "/" },
    { name: "Projetos", path: "/#projects", onClick: handleProjectsClick },
    { name: "Templates", path: "/#templates", onClick: handleTemplateClick },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];
  
  const closeMenu = () => setIsMenuOpen(false);

  const whatsappNumber = "5516993137105";
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : ""}`}>
      <nav className="container flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-display font-bold gradient-text">
          VitrineMe
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={item.onClick}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {isAdmin && (
            <Link
              to="/admin"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              <Settings className="h-5 w-5" />
            </Link>
          )}
          <Button 
            className="gradient-bg" 
            size="sm"
            onClick={() => setIsContactModalOpen(true)}
          >
            Vamos Conversar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="container py-20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => {
                    if (item.onClick) {
                      item.onClick(e);
                    } else {
                      closeMenu();
                    }
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={closeMenu}
                  className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Settings className="h-5 w-5" />
                  Administração
                </Link>
              )}
              <Button 
                className="gradient-bg w-full" 
                size="sm"
                onClick={() => {
                  setIsContactModalOpen(true);
                  closeMenu();
                }}
              >
                Vamos Conversar
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} whatsappNumber={whatsappNumber} />
      <AdminLoginModal open={isAdminLoginOpen} onOpenChange={setIsAdminLoginOpen} />
    </header>
  );
};

export default Navigation;
