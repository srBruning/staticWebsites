export interface BeforeAfterItem {
  id: string;
  title: string;
  service: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  vehicleModel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'chapeacao' | 'pintura' | 'retoques' | 'polimento' | 'farois';
  categoryLabel: string;
  image: string;
  caption: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Recuperação Estética',
    service: 'Funilaria e Pintura',
    description: 'Trabalho focado em restaurar a originalidade e o acabamento premium do veículo.',
    beforeImage: '/images/gallery/antes00.jpg',
    afterImage: '/images/gallery/depois00.jpg',
    vehicleModel: 'Veículo em Reparo'
  },
  {
    id: 'ba-2',
    title: 'Correção de Avarias',
    service: 'Chapeação',
    description: 'Alinhamento preciso e recuperação das linhas originais da carroceria.',
    beforeImage: '/images/gallery/antes01.jpg',
    afterImage: '/images/gallery/depois01.jpg',
    vehicleModel: 'Reparo Detalhado'
  },
  {
    id: 'ba-3',
    title: 'Repintura Automotiva',
    service: 'Pintura',
    description: 'Preparação rigorosa de superfície, acerto de cor e aplicação de verniz para brilho intenso.',
    beforeImage: '/images/gallery/antes02.jpg',
    afterImage: '/images/gallery/depois02.jpg',
    vehicleModel: 'Acabamento Espelhado'
  },
  {
    id: 'ba-4',
    title: 'Polimento e Refinamento',
    service: 'Estética Automotiva',
    description: 'Remoção de imperfeições, restauração da cor e proteção da pintura.',
    beforeImage: '/images/gallery/antes03.jpg',
    afterImage: '/images/gallery/depois03.jpg',
    vehicleModel: 'Resultado Final'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Acabamento Espelhado de Pintura',
    category: 'pintura',
    categoryLabel: 'Pintura Automotiva',
    image: '/images/gallery/cars01.jpg',
    caption: 'Reflexo cristalino obtido após repintura completa e cura em estufa.'
  },
  {
    id: 'g-2',
    title: 'Alinhamento de Lataria e Chapeação',
    category: 'chapeacao',
    categoryLabel: 'Chapeação',
    image: '/images/gallery/cars02.jpg',
    caption: 'Alinhamento perfeito das vincos e vãos de lataria.'
  },
  {
    id: 'g-3',
    title: 'Retoque de Para-choque',
    category: 'retoques',
    categoryLabel: 'Retoques',
    image: '/images/gallery/cars03.jpg',
    caption: 'Correção cirúrgica de arranhões mantendo a cor original.'
  },
  {
    id: 'g-4',
    title: 'Polimento Técnico e Cristalização',
    category: 'polimento',
    categoryLabel: 'Polimento',
    image: '/images/gallery/cars04.jpg',
    caption: 'Restauração do brilho e proteção da camada de verniz.'
  },
  {
    id: 'g-5',
    title: 'Restauração de Lentes de Farol',
    category: 'farois',
    categoryLabel: 'Faróis',
    image: '/images/gallery/idvisu04.jpg',
    caption: 'Restauração de transparência com verniz protetor contra UV.'
  },
  {
    id: 'g-6',
    title: 'Entrega Final com Controle de Qualidade',
    category: 'pintura',
    categoryLabel: 'Pintura & Acabamento',
    image: '/images/gallery/cars07.jpg',
    caption: 'Veículo pronto para entrega com inspeção de detalhes finalizada.'
  },
  {
    id: 'g-7',
    title: 'Comunicação e Identidade Bruning',
    category: 'pintura',
    categoryLabel: 'Padrão Bruning',
    image: '/images/gallery/idvisu01.jpg',
    caption: 'Compromisso Bruning com o resultado visual do seu carro.'
  },
  {
    id: 'g-8',
    title: 'Especialização em Recuperação Estética',
    category: 'chapeacao',
    categoryLabel: 'Estética Automotiva',
    image: '/images/gallery/idvisu06.jpg',
    caption: 'Atendimento qualificado para devolver a confiança ao seu veículo.'
  }
];
