import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Shield, 
  AlertCircle, 
  Scale, 
  XCircle, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const TermsOfUse = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <FileText className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Documento Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Termos de <span className="gradient-text">Uso</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leia atentamente os termos que regem o uso de nossos serviços. Estes termos foram criados para garantir uma experiência segura e transparente para todos os usuários.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pb-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Table of Contents */}
              <div className="glassmorphism rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Índice
                </h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#aceitacao" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>1. Aceitação dos Termos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#descricao" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>2. Descrição dos Serviços</span>
                    </a>
                  </li>
                  <li>
                    <a href="#uso" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>3. Uso dos Serviços</span>
                    </a>
                  </li>
                  <li>
                    <a href="#propriedade" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>4. Propriedade Intelectual</span>
                    </a>
                  </li>
                  <li>
                    <a href="#responsabilidade" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>5. Limitação de Responsabilidade</span>
                    </a>
                  </li>
                  <li>
                    <a href="#rescisao" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>6. Rescisão</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>7. Contato</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Terms Sections */}
              <div id="aceitacao" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">1. Aceitação dos Termos</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Ao acessar e utilizar os serviços da VitrineMe, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá utilizar nossos serviços.
                  </p>
                  <p className="text-gray-700">
                    Estes termos podem ser atualizados periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.
                  </p>
                </div>
              </div>

              <div id="descricao" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">2. Descrição dos Serviços</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    A VitrineMe oferece serviços de desenvolvimento web, incluindo a criação de websites, templates e soluções digitais personalizadas. Nossos serviços são fornecidos "como estão" e "conforme disponível".
                  </p>
                  <p className="text-gray-700">
                    Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto dos serviços a qualquer momento, sem aviso prévio.
                  </p>
                </div>
              </div>

              <div id="uso" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">3. Uso dos Serviços</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Ao utilizar nossos serviços, você concorda em:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Fornecer informações precisas e completas quando solicitado</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Não utilizar os serviços para fins ilegais ou não autorizados</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Não interferir ou interromper a integridade ou o desempenho dos serviços</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Não tentar obter acesso não autorizado a qualquer parte dos serviços</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    A VitrineMe se reserva o direito de encerrar ou suspender o acesso aos serviços para qualquer usuário que viole estes termos.
                  </p>
                </div>
              </div>

              <div id="propriedade" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">4. Propriedade Intelectual</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Todo o conteúdo, marcas, logos, designs, textos, gráficos, interfaces e código-fonte disponíveis através dos serviços são de propriedade da VitrineMe ou de seus licenciadores e são protegidos por leis de propriedade intelectual.
                  </p>
                  <p className="text-gray-700">
                    Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte dos serviços, nem realizar engenharia reversa ou tentar extrair o código-fonte de qualquer software associado aos serviços.
                  </p>
                </div>
              </div>

              <div id="responsabilidade" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">5. Limitação de Responsabilidade</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    A VitrineMe não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou da impossibilidade de uso dos serviços.
                  </p>
                  <p className="text-gray-700">
                    Em nenhum caso a responsabilidade total da VitrineMe para com você por todos os danos, perdas e causas de ação excederá o valor pago por você pelos serviços.
                  </p>
                </div>
              </div>

              <div id="rescisao" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <XCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">6. Rescisão</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Estes termos são efetivos até serem rescindidos por você ou pela VitrineMe. Você pode rescindir estes termos a qualquer momento, notificando a VitrineMe que não deseja mais utilizar os serviços.
                  </p>
                  <p className="text-gray-700">
                    A VitrineMe pode rescindir estes termos a qualquer momento, sem aviso prévio, se você violar qualquer disposição destes termos.
                  </p>
                </div>
              </div>

              <div id="contato" className="glassmorphism rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">7. Contato</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-6">
                    Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do formulário de contato em nosso site.
                  </p>
                  <Button asChild className="gradient-bg">
                    <Link to="/contato">Entre em Contato</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUse; 