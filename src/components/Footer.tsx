
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-display font-bold gradient-text">
              DevPortfolio
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Transformando ideias em experiências digitais memoráveis com dedicação e inovação.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                contato@devportfolio.com.br
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                (11) 99999-9999
              </li>
              <li className="text-sm text-gray-600">
                CNPJ: 12.345.678/0001-90
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Meios de Pagamento</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white border border-gray-200 rounded-md px-2 py-1 text-xs">
                PIX
              </span>
              <span className="bg-white border border-gray-200 rounded-md px-2 py-1 text-xs">
                Cartão
              </span>
              <span className="bg-white border border-gray-200 rounded-md px-2 py-1 text-xs">
                Boleto
              </span>
              <span className="bg-white border border-gray-200 rounded-md px-2 py-1 text-xs">
                Transferência
              </span>
            </div>
            
            <h3 className="font-medium text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} DevPortfolio. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/termos" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
