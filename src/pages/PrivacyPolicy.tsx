import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Database, 
  Settings, 
  Cookie, 
  Lock, 
  UserCheck, 
  RefreshCw, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const PrivacyPolicy = () => {
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
                <Shield className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Documento Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Política de <span className="gradient-text">Privacidade</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entenda como coletamos, usamos e protegemos suas informações pessoais. Sua privacidade é nossa prioridade.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="pb-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Table of Contents */}
              <div className="glassmorphism rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Índice
                </h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#introducao" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>1. Introdução</span>
                    </a>
                  </li>
                  <li>
                    <a href="#coleta" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>2. Informações que Coletamos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#uso" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>3. Como Usamos Suas Informações</span>
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>4. Cookies e Tecnologias de Rastreamento</span>
                    </a>
                  </li>
                  <li>
                    <a href="#seguranca" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>5. Segurança de Dados</span>
                    </a>
                  </li>
                  <li>
                    <a href="#direitos" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>6. Seus Direitos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#alteracoes" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>7. Alterações nesta Política</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="flex items-center text-gray-700 hover:text-primary transition-colors group">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>8. Contato</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Privacy Sections */}
              <div id="introducao" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">1. Introdução</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    A VitrineMe está comprometida em proteger sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, processamos e divulgamos suas informações pessoais, em conjunto com os serviços que oferecemos.
                  </p>
                  <p className="text-gray-700">
                    Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política. Recomendamos que você leia esta política com atenção para entender como tratamos suas informações pessoais.
                  </p>
                </div>
              </div>

              <div id="coleta" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">2. Informações que Coletamos</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Podemos coletar os seguintes tipos de informações:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Informações de identificação pessoal (nome, e-mail, telefone, endereço)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Informações de pagamento (dados de cartão de crédito, histórico de transações)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Informações de uso (dados de acesso, preferências, interações com o site)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Informações técnicas (endereço IP, tipo de navegador, sistema operacional)</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Coletamos essas informações quando você se registra em nosso site, preenche um formulário, faz uma compra, ou interage conosco de outras formas.
                  </p>
                </div>
              </div>

              <div id="uso" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">3. Como Usamos Suas Informações</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Utilizamos as informações coletadas para:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Fornecer, manter e melhorar nossos serviços</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Processar suas transações e enviar confirmações</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Enviar comunicações relacionadas ao serviço, incluindo atualizações e alertas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Responder a suas solicitações, comentários e perguntas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">Personalizar sua experiência e fornecer conteúdo relevante</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta política.
                  </p>
                </div>
              </div>

              <div id="cookies" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">4. Cookies e Tecnologias de Rastreamento</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Utilizamos cookies e tecnologias similares para rastrear a atividade em nosso site e manter certas informações. Os cookies são arquivos com uma pequena quantidade de dados que podem incluir um identificador único anônimo.
                  </p>
                  <p className="text-gray-700">
                    Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, pode não ser possível usar algumas partes de nosso site.
                  </p>
                </div>
              </div>

              <div id="seguranca" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">5. Segurança de Dados</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    A segurança de seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
                  </p>
                  <p className="text-gray-700">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </div>
              </div>

              <div id="direitos" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">6. Seus Direitos</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais, incluindo:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">O direito de acessar suas informações pessoais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">O direito de corrigir informações imprecisas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">O direito de solicitar a exclusão de suas informações</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700">O direito de se opor ao processamento de suas informações</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Para exercer esses direitos, entre em contato conosco através das informações de contato fornecidas abaixo.
                  </p>
                </div>
              </div>

              <div id="alteracoes" className="glassmorphism rounded-xl p-8 mb-12 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">7. Alterações nesta Política</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização".
                  </p>
                  <p className="text-gray-700">
                    Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações nesta Política de Privacidade são efetivas quando publicadas nesta página.
                  </p>
                </div>
              </div>

              <div id="contato" className="glassmorphism rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">8. Contato</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-6">
                    Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do formulário de contato em nosso site.
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

export default PrivacyPolicy; 