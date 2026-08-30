export interface Service {
  id: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export const services: Service[] = [
  {
    id: 'chapeacao',
    slug: 'chapeacao-e-pintura-caxias-do-sul',
    title: 'Chapeação e Funilaria',
    headline: 'Oficina de Chapeação Especializada em Caxias do Sul',
    summary: 'Correção de amassados, danos de colisão e deformações de lataria com preservação das linhas originais do veículo.',
    description: 'Nossa equipe atua na restauração da estrutura e chaparia do veículo com técnicas modernas de desamassamento, alinhamento de painéis e recuperação de avarias de impacto leve e médio em Caxias do Sul.',
    iconName: 'Wrench',
    features: [
      'Recuperação de peças amassadas ou dobradas',
      'Alinhamento rigoroso de portas, capô e para-choques',
      'Desamassamento com preservação da estrutura',
      'Tratamento antiferrugem prévio'
    ],
    image: '/images/gallery/cars01.jpg',
    featured: true,
    seoTitle: 'Chapeação e Funilaria em Caxias do Sul | Auto Recuperadora Bruning',
    seoDescription: 'Especialistas em chapeação, funilaria e recuperação de batidas em Caxias do Sul. Alinhamento perfeito e eliminação de amassados. Orçamento via WhatsApp.'
  },
  {
    id: 'pintura-automotiva',
    slug: 'pintura-automotiva-em-estufa-caxias-do-sul',
    title: 'Pintura Automotiva',
    headline: 'Pintura Automotiva em Estufa em Caxias do Sul',
    summary: 'Preparação rigorosa de superfície e aplicação de tinta de alta qualidade com secagem e cura adequadas.',
    description: 'Realizamos pintura total ou parcial com acerto de tonalidade impecável. Processo em ambiente controlado (estufa) em Caxias do Sul para garantir aderência, brilho e durabilidade contra intempéries.',
    iconName: 'Paintbrush',
    features: [
      'Acerto de tonalidade e colormetria precisa',
      'Aplicação de verniz de alta durabilidade e brilho',
      'Pintura em estufa com temperatura controlada',
      'Garantia de cobertura uniforme e ausência de escorridos'
    ],
    image: '/images/gallery/cars02.jpg',
    featured: true,
    seoTitle: 'Pintura Automotiva em Estufa Caxias do Sul | Bruning',
    seoDescription: 'Repintura automotiva profissional em estufa em Caxias do Sul. Brilho espelhado, secagem correta e acerto de cor perfeito. Traga seu veículo!'
  },
  {
    id: 'retoques',
    slug: 'retoques-e-micropintura-caxias-do-sul',
    title: 'Retoques e Pequenos Reparos',
    headline: 'Micropintura e Retoques Automotivos em Caxias do Sul',
    summary: 'Correções pontuais para riscos laterais, batidas de pedra e pequenos arranhões sem refazer o painel inteiro.',
    description: 'Serviço ágil ideal para manter o carro impecável no dia a dia. Reparamos avarias localizadas economizando tempo e mantendo a originalidade do restante da peça.',
    iconName: 'Sparkles',
    features: [
      'Eliminação de riscos de chaves, pedras e estacionamento',
      'Economia comparada a repintura de peça inteira',
      'Agilidade na entrega do veículo',
      'Integração perfeita da área retocada com a tinta antiga'
    ],
    image: '/images/gallery/micropintura_retoques_automotivos.jpeg',
    featured: true,
    seoTitle: 'Retoque Automotivo e Micropintura Caxias do Sul',
    seoDescription: 'Conserto rápido de arranhões e riscos no seu carro. Serviço de micropintura e retoque de para-choque em Caxias do Sul. Agende uma avaliação!'
  },
  {
    id: 'polimento',
    slug: 'polimento-automotivo-caxias-do-sul',
    title: 'Polimento e Acabamento',
    headline: 'Polimento Técnico e Cristalização em Caxias do Sul',
    summary: 'Processo técnico de polimento comercial e técnico para remover hologramas, oxidação e restaurar o reflexo espelhado.',
    description: 'O acabamento final é o que destaca um trabalho profissional. Eliminamos opacidade, manchas de sol e swirls da lataria, devolvendo a cor profunda do automóvel.',
    iconName: 'ShieldCheck',
    features: [
      'Remoção de riscos superficiais e teias de aranha',
      'Restauração de profundidade da cor',
      'Proteção selante contra raios UV e contaminantes',
      'Aspecto de carro recém saído da concessionária'
    ],
    image: '/images/gallery/polimento_tecnico_cristalizacao.jpeg',
    featured: true,
    seoTitle: 'Polimento Automotivo Técnico Caxias do Sul',
    seoDescription: 'Polimento profissional, espelhamento e cristalização automotiva em Caxias do Sul. Devolva o brilho original ao seu carro.'
  },
  {
    id: 'farois',
    slug: 'revitalizacao-de-farois-caxias-do-sul',
    title: 'Revitalização de Faróis',
    headline: 'Revitalização e Polimento de Faróis em Caxias do Sul',
    summary: 'Restauração de lentes amareladas e queimadas pelo sol com selamento protetor contra novos danos.',
    description: 'Faróis foscos prejudicam a iluminação noturna e envelhecem o visual do carro. Lixamos, polimos e aplicamos camada de verniz transparente com proteção UV.',
    iconName: 'Sun',
    features: [
      'Remoção completa do amarelado e da camada oxidada',
      'Melhoria visível da eficiência e alcance da iluminação',
      'Aplicação de camada de proteção duradoura contra UV',
      'Valorização estética imediata da dianteira'
    ],
    image: '/images/gallery/idvisu04.jpg',
    featured: true,
    seoTitle: 'Revitalização de Faróis Caxias do Sul | Restauração',
    seoDescription: 'Faróis amarelados ou foscos? Oferecemos polimento e revitalização de faróis com verniz UV em Caxias do Sul. Serviço rápido!'
  },
  {
    id: 'recuperacao-completa',
    slug: 'auto-recuperadora-completa-caxias-do-sul',
    title: 'Recuperação Completa',
    headline: 'Auto Recuperadora Especializada em Caxias do Sul',
    summary: 'Combo integrado de chapeação, pintura e detalhamento para veículos com avarias múltiplas.',
    description: 'Avaliação completa do estado do carro com plano de execução estruturado para devolver a estética e o valor de mercado ao seu automóvel.',
    iconName: 'Car',
    features: [
      'Atendimento personalizado e detalhado',
      'Combinação de funilaria + repintura + polimento',
      'Avaliação criteriosa de todos os ângulos do veículo',
      'Entrega com inspeção de qualidade de acabamento'
    ],
    image: '/images/gallery/cars07.jpg',
    featured: true,
    seoTitle: 'Auto Recuperadora Caxias do Sul | Reparo Completo',
    seoDescription: 'Sofreu uma colisão? Oferecemos reparo completo, funilaria e pintura em Caxias do Sul para deixar seu carro novo de novo.'
  }
];
