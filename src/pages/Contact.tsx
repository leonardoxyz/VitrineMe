
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    // Here you would typically send the data to your backend or email service
    
    toast({
      title: "Mensagem Enviada!",
      description: "Retornaremos em breve. Obrigado pelo contato.",
      duration: 5000,
    });
    
    // Reset form
    reset();
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Entre em <span className="gradient-text">Contato</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Estamos prontos para discutir seu projeto e criar a solução digital perfeita para você
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="lg:order-2">
                <div className="p-8 rounded-xl glassmorphism h-full">
                  <h2 className="text-2xl font-display font-bold mb-8">Informações de Contato</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="mr-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-muted-foreground mb-1">Para propostas e orçamentos:</p>
                        <p className="font-medium">contato@devportfolio.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Telefone</h3>
                        <p className="text-muted-foreground mb-1">Segunda à Sexta, 9h às 18h:</p>
                        <p className="font-medium">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Endereço</h3>
                        <p className="text-muted-foreground mb-1">Nosso escritório:</p>
                        <p className="font-medium">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-medium mb-4">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">Segunda à Sexta: 9h às 18h</p>
                    <p className="text-muted-foreground">Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:order-1">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-2">Nome Completo</label>
                    <Input 
                      id="name"
                      placeholder="Seu nome"
                      {...register("name", { required: "Nome é obrigatório" })}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">Email</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      {...register("email", { 
                        required: "Email é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido"
                        }
                      })}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-medium mb-2">Telefone</label>
                    <Input 
                      id="phone"
                      placeholder="(11) 99999-9999"
                      {...register("phone", { required: "Telefone é obrigatório" })}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block font-medium mb-2">Empresa (Opcional)</label>
                    <Input 
                      id="company"
                      placeholder="Nome da sua empresa"
                      {...register("company")}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">Mensagem</label>
                    <Textarea 
                      id="message"
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={6}
                      {...register("message", { required: "Mensagem é obrigatória" })}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full gradient-bg" size="lg">
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-24">
          <div className="container">
            <div className="rounded-xl overflow-hidden h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951322574!2d-46.65499548502215!3d-23.564214284681167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c877db184f%3A0x46a736398fce39!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1625160929404!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Localização no mapa"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-12 text-center">Perguntas Frequentes</h2>
              
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-medium mb-3">Quanto tempo leva para desenvolver um site?</h3>
                  <p className="text-gray-700">
                    O tempo de desenvolvimento varia dependendo da complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos como e-commerce ou sistemas web personalizados podem levar de 2 a 4 meses.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-medium mb-3">Qual o investimento necessário?</h3>
                  <p className="text-gray-700">
                    Os valores variam conforme as necessidades e escopo de cada projeto. Trabalhamos com orçamentos personalizados que se adaptam às necessidades e orçamento de cada cliente. Entre em contato para receber uma proposta detalhada.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-medium mb-3">Vocês oferecem hospedagem e manutenção?</h3>
                  <p className="text-gray-700">
                    Sim, oferecemos serviços de hospedagem, manutenção e suporte contínuo para garantir que seu site funcione perfeitamente. Nossos planos são escaláveis e se adaptam ao crescimento do seu negócio.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-medium mb-3">Como é o processo de desenvolvimento?</h3>
                  <p className="text-gray-700">
                    Nosso processo inclui descoberta (entendimento das necessidades), planejamento (wireframes e protótipos), desenvolvimento, testes e lançamento. Mantemos o cliente envolvido em cada etapa para garantir que o resultado final atenda às expectativas.
                  </p>
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

export default Contact;
