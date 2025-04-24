
interface Project {
  id: string;
  title: string;
  client: string;
  type: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  technologies: string[];
  testimonial?: {
    name: string;
    position: string;
    content: string;
    avatar: string;
  };
  link: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "aurora-cosmeticos",
    title: "Aurora Cosméticos",
    client: "Aurora Cosméticos",
    type: "E-commerce",
    description: "Loja online de produtos de beleza com sistema completo de e-commerce",
    longDescription: "A Aurora Cosméticos precisava de uma plataforma de e-commerce moderna e atrativa para vender seus produtos de beleza premium. Desenvolvemos uma solução completa com catálogo de produtos, sistema de pagamento integrado, área do cliente e painel administrativo personalizado.",
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1522335160883-7ac2172f423e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80"
    ],
    tags: ["E-commerce", "Beleza", "Responsivo"],
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "Sanity CMS"],
    testimonial: {
      name: "Sofia Mendes",
      position: "CEO da Aurora Cosméticos",
      content: "O site desenvolvido superou todas as nossas expectativas. Tivemos um aumento de 40% nas vendas online já no primeiro mês após o lançamento.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    link: "#",
    featured: true
  },
  {
    id: "azul-piscinas",
    title: "Azul Piscinas",
    client: "Azul Piscinas",
    type: "Site Institucional",
    description: "Site institucional para empresa de construção e manutenção de piscinas",
    longDescription: "A Azul Piscinas precisava de um site moderno que apresentasse seus serviços de construção e manutenção de piscinas, além de uma galeria de projetos já realizados. Desenvolvemos um site responsivo com design clean e elegante, focado na apresentação visual dos projetos.",
    thumbnail: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Institucional", "Serviços", "Galeria"],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
    testimonial: {
      name: "Ricardo Torres",
      position: "Proprietário da Azul Piscinas",
      content: "O novo site foi fundamental para aumentarmos nossa presença online e conseguirmos clientes em novas regiões. Estamos muito satisfeitos com o resultado.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    link: "#",
    featured: false
  },
  {
    id: "estilo-real",
    title: "Estilo Real",
    client: "Estilo Real",
    type: "Loja de Roupas",
    description: "E-commerce completo para loja de roupas femininas",
    longDescription: "A Estilo Real precisava de uma plataforma de e-commerce focada em moda feminina, com experiência de compra simplificada e destaque para as imagens dos produtos. Desenvolvemos uma solução completa que incluiu sistema de busca avançada, filtros por categorias, integração com meios de pagamento e gerenciamento de estoque.",
    thumbnail: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1589363460779-68b0f61a6c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["E-commerce", "Moda", "Loja Virtual"],
    technologies: ["React", "Styled Components", "Node.js", "MongoDB", "AWS"],
    testimonial: {
      name: "Carolina Lima",
      position: "Diretora da Estilo Real",
      content: "Desde o lançamento da loja online, conseguimos expandir nossas vendas para todo o Brasil. A plataforma é intuitiva tanto para nós quanto para as clientes.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    },
    link: "#",
    featured: true
  },
  {
    id: "captura-fotografia",
    title: "Captura Fotografia",
    client: "João Silva",
    type: "Portfolio de Fotógrafo",
    description: "Portfolio para fotógrafo profissional com galeria otimizada",
    longDescription: "João Silva precisava de um site portfolio para exibir seus trabalhos fotográficos de maneira elegante e profissional. Desenvolvemos um site com foco na exibição de imagens em alta qualidade, com galerias otimizadas para carregamento rápido e sistema de agendamento de sessões.",
    thumbnail: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80",
    images: [
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80",
      "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80",
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Portfolio", "Fotografia", "Galerias"],
    technologies: ["HTML", "CSS", "JavaScript", "Gatsby", "Netlify CMS"],
    testimonial: {
      name: "João Silva",
      position: "Fotógrafo Profissional",
      content: "O site ficou exatamente como eu imaginava. A forma como as imagens são exibidas valoriza muito meu trabalho e tem me ajudado a conquistar novos clientes.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    link: "#",
    featured: false
  },
  {
    id: "consultoria-financeira",
    title: "MR Consultoria Financeira",
    client: "MR Consultoria",
    type: "Site Institucional",
    description: "Site corporativo para empresa de consultoria financeira",
    longDescription: "A MR Consultoria precisava de um site institucional que transmitisse credibilidade e profissionalismo, com informações sobre seus serviços e artigos sobre mercado financeiro. Desenvolvemos uma plataforma com design clean e corporativo, blog integrado e sistema de agendamento de consultas.",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Institucional", "Finanças", "Blog"],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    testimonial: {
      name: "Marcos Ribeiro",
      position: "Diretor da MR Consultoria",
      content: "Nosso site transmite exatamente a imagem que queremos passar aos clientes. A integração com nosso sistema de agendamento facilitou muito o processo de captação de leads.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    link: "#",
    featured: false
  },
  {
    id: "eventos-perfeitos",
    title: "Eventos Perfeitos",
    client: "Eventos Perfeitos",
    type: "Landing Page",
    description: "Landing page para empresa de organização de eventos",
    longDescription: "A Eventos Perfeitos precisava de uma landing page eficiente para captar leads interessados em seus serviços de organização de eventos corporativos e sociais. Desenvolvemos uma página com design atrativo, showcases de eventos anteriores e formulários de captura otimizados.",
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    tags: ["Landing Page", "Eventos", "Conversão"],
    technologies: ["HTML", "CSS", "JavaScript", "HubSpot", "Google Analytics"],
    testimonial: {
      name: "Ana Oliveira",
      position: "Diretora de Marketing da Eventos Perfeitos",
      content: "Nossa taxa de conversão aumentou em 60% com a nova landing page. O design ficou exatamente como queríamos e as integrações com nossas ferramentas de marketing funcionam perfeitamente.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    link: "#",
    featured: true
  }
];
