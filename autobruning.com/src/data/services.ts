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
}

export const services: Service[] = [
  {
    id: 'chapeacao',
    slug: 'chapeacao',
    title: 'Chapeação e Funilaria',
    headline: 'Alinhamento preciso e eliminação de amassados',
    summary: 'Correção de amassados, danos de colisão e deformações de lataria com preservação das linhas originais do veículo.',
    description: 'Nossa equipe atua na restauração da estrutura e chaparia do veículo com técnicas modernas de desamassamento, alinhamento de painéis e recuperação de avarias de impacto leve e médio.',
    iconName: 'Wrench',
    features: [
      'Recuperação de peças amassadas ou dobradas',
      'Alinhamento rigoroso de portas, capô e para-choques',
      'Desamassamento com preservação da estrutura',
      'Tratamento antiferrugem prévio'
    ],
    image: '/images/gallery/cars01.jpg',
    featured: true
  },
  {
    id: 'pintura-automotiva',
    slug: 'pintura-automotiva',
    title: 'Pintura Automotiva',
    headline: 'Brilho intenso, fidelidade de cor e acabamento de fábrica',
    summary: 'Preparação rigorosa de superfície e aplicação de tinta de alta qualidade com secagem e cura adequadas.',
    description: 'Realizamos pintura total ou parcial com acerto de tonalidade impecável. Processo em ambiente controlado para garantir aderência, brilho e durabilidade contra intempéries.',
    iconName: 'Paintbrush',
    features: [
      'Acerto de tonalidade e colormetria precisa',
      'Aplicação de verniz de alta durabilidade e brilho',
      'Pintura em estufa com temperatura controlada',
      'Garantia de uniforme cobertura e ausência de escorridos'
    ],
    image: '/images/gallery/cars02.jpg',
    featured: true
  },
  {
    id: 'retoques',
    slug: 'retoques',
    title: 'Retoques e Pequenos Reparos',
    headline: 'Solução rápida e localizada para riscos e arranhões',
    summary: 'Correções pontuais para riscos laterais, batidas de pedra e pequenos arranhões sem refazer o painel inteiro.',
    description: 'Serviço ágil ideal para manter o carro impecável no dia a dia. Reparamos avarias localizadas economizando tempo e mantendo a originalidade do restante da peça.',
    iconName: 'Sparkles',
    features: [
      'Eliminação de riscos de chaves, pedras e estacionamento',
      'Economia comparada ao repintura de peça inteira',
      'Agilidade na entrega do veículo',
      'Integração perfeita da área retocada com a tinta antiga'
    ],
    image: '/images/gallery/cars03.jpg',
    featured: true
  },
  {
    id: 'polimento',
    slug: 'polimento',
    title: 'Polimento e Acabamento',
    headline: 'Remoção de imperfeições e renovação do reflexo da pintura',
    summary: 'Processo técnico de polimento comercial e técnico para remover hologramas, oxidação e restaurar o reflexo espelhado.',
    description: 'O acabamento final é o que destaca um trabalho profissional. Eliminamos opacidade, manchas de sol e swirls da lataria, devolvendo a cor profunda do automóvel.',
    iconName: 'ShieldCheck',
    features: [
      'Remoção de riscos superficiais e teias de aranha',
      'Restauração de profundidade da cor',
      'Proteção selante contra raios UV e contaminantes',
      'Aspecto de carro recém saído da concessionária'
    ],
    image: '/images/gallery/cars04.jpg',
    featured: true
  },
  {
    id: 'farois',
    slug: 'farois',
    title: 'Revitalização de Faróis',
    headline: 'Clareza, transparência e segurança renovadas',
    summary: 'Restauração de lentes amareladas e queimadas pelo sol com selamento protetor contra novos danos.',
    description: 'Faróis foscos prejudicam a iluminação noturna e envelhecem o visual do carro. Lixamos, polimos e aplicamos camada de verniz transparente com proteção UV.',
    iconName: 'Sun',
    features: [
      'Remoção completa do amarelado e da camada oxidada',
      'Melhoria visível da eficiência e alcance da iluminação',
      'Aplicação de camada de proteção duradoura',
      'Valorização estética imediata da dianteira'
    ],
    image: '/images/gallery/idvisu04.jpg',
    featured: true
  },
  {
    id: 'recuperacao-completa',
    slug: 'recuperacao-completa',
    title: 'Recuperação Completa',
    headline: 'Transformação estética total do seu veículo',
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
    featured: true
  }
];
