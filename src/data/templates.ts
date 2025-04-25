interface Template {
  id: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  technologies: string[];
  features: string[];  
  link: string;
  featured: boolean;
}

export const templates: Template[] = [
  {
    id: "restaurant-template",
    title: "Restaurante Moderno",
    type: "Template para Restaurantes",
    description: "Template profissional e elegante para restaurantes e estabelecimentos gastronômicos",
    longDescription: "Template completo e responsivo para restaurantes, com seções para cardápio, reservas, galeria de fotos e integração com sistemas de delivery. Design moderno e elegante que destaca a identidade do seu estabelecimento.",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Restaurante", "Gastronomia", "Responsivo"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Strapi CMS"],
    features: [
      "Cardápio Digital",
      "Sistema de Reservas",
      "Integração com Delivery",
      "Galeria de Fotos",
      "Blog de Receitas"
    ],
    link: "#",
    featured: false
  },
  {
    id: "beauty-salon-template",
    title: "Essence Spa",
    type: "Template para Salões",
    description: "Template elegante e moderno para salões de beleza e spas",
    longDescription: "Template completo para salões de beleza e spas, com sistema de agendamento online, galeria de serviços e depoimentos de clientes. Design sofisticado que transmite profissionalismo e qualidade.",
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    ],
    tags: ["Beleza", "Spa", "Agendamento"],
    technologies: ["React", "Styled Components", "Node.js", "MongoDB"],
    features: [
      "Agendamento Online",
      "Catálogo de Serviços",
      "Depoimentos",
      "Blog de Beleza",
      "Área do Cliente"
    ],
    link: "https://essence-spa.vercel.app",
    featured: true
  },
  {
    id: "real-estate-template",
    title: "Imobiliária Digital",
    type: "Template para Imobiliárias",
    description: "Template profissional para imobiliárias e corretores de imóveis",
    longDescription: "Template completo para imobiliárias, com sistema de busca avançada de imóveis, tour virtual, formulários de contato e área do corretor. Design moderno que destaca seu portfólio de imóveis.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
    ],
    tags: ["Imobiliária", "Imóveis", "Tour Virtual"],
    technologies: ["React", "Next.js", "Prisma", "PostgreSQL"],
    features: [
      "Busca Avançada",
      "Tour Virtual 360°",
      "Área do Corretor",
      "Favoritos",
      "Calculadora de Financiamento"
    ],
    link: "https://imobpro.vercel.app",
    featured: true
  },
  {
    id: "videomaker-portfolio",
    title: "VideoMaker Pro",
    type: "Portfolio Profissional",
    description: "Template profissional para videomakers e produtores de conteúdo audiovisual exibirem seus trabalhos de forma impactante.",
    longDescription: "Um template moderno e dinâmico projetado especificamente para profissionais do audiovisual. Com seções otimizadas para exibição de vídeos, showreels e projetos cinematográficos, este template oferece a plataforma perfeita para destacar seu trabalho de forma profissional e envolvente. Ideal para cinegrafistas, editores de vídeo, produtoras e criadores de conteúdo.",
    thumbnail: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Portfolio", "Vídeo", "Audiovisual", "Produção", "Cinema"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Player",
      "Vimeo API",
      "YouTube API"
    ],
    features: [
      "Player de vídeo otimizado",
      "Galeria de projetos categorizada",
      "Seção de showreel em destaque",
      "Integração com Vimeo e YouTube",
      "Página de serviços personalizável",
      "Sistema de orçamento integrado",
      "Blog para conteúdo",
      "Portfólio categorizado"
    ],
    link: "https://videomakerpro.vercel.app",
    featured: true
  },
  {
    id: "reforma-ideal",
    title: "Reforma Ideal",
    type: "Plataforma de Construção",
    description: "Plataforma completa para conectar profissionais de construção e reforma com clientes.",
    longDescription: "A Reforma Ideal é uma plataforma inovadora que conecta profissionais qualificados da área de construção e reforma com clientes que buscam serviços de qualidade. Com um sistema de avaliação, orçamentos personalizados e acompanhamento de projetos, a plataforma facilita todo o processo de reforma e construção, garantindo transparência e satisfação para ambas as partes.",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Construção", "Reforma", "Profissionais", "Orçamentos", "Projetos"],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Stripe"
    ],
    features: [
      "Cadastro de profissionais verificados",
      "Sistema de busca avançada",
      "Orçamentos personalizados",
      "Acompanhamento de projetos",
      "Sistema de avaliação e comentários",
      "Pagamentos integrados",
      "Chat entre cliente e profissional",
      "Galeria de projetos concluídos"
    ],
    link: "https://reforma-ideal.vercel.app",
    featured: false
  },
  {
    id: "teachskills",
    title: "TeachSkills",
    type: "Plataforma Educacional",
    description: "Plataforma de ensino online para desenvolvimento de habilidades profissionais.",
    longDescription: "TeachSkills é uma plataforma educacional moderna que oferece cursos online de alta qualidade para desenvolvimento profissional. Com uma interface intuitiva, conteúdo atualizado e professores especialistas, a plataforma permite que usuários aprendam novas habilidades e aprimorem seus conhecimentos em diversas áreas. O sistema inclui vídeos, exercícios práticos, certificados e uma comunidade ativa de alunos.",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Educação", "Cursos Online", "Aprendizado", "Desenvolvimento Profissional", "Certificados"],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "AWS S3",
      "Stripe"
    ],
    features: [
      "Cursos em vídeo de alta qualidade",
      "Exercícios práticos e avaliações",
      "Certificados de conclusão",
      "Comunidade de alunos",
      "Progresso de aprendizado",
      "Acesso vitalício aos cursos",
      "Suporte personalizado",
      "Aplicativo móvel"
    ],
    link: "https://teachskills.vercel.app",
    featured: false
  }
]; 