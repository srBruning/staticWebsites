export interface BeforeAfterItem {
  id: string;
  title: string;
  service: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  vehicleModel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'chapeacao' | 'pintura' | 'retoques' | 'polimento' | 'farois';
  categoryLabel: string;
  image: string;
  altText: string;
  caption: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Recuperação Estética em Caxias do Sul',
    service: 'Funilaria e Pintura Automotiva',
    description: 'Trabalho focado em restaurar a originalidade e o acabamento premium do veículo em nossa oficina em Caxias do Sul.',
    beforeImage: '/images/gallery/antes00.jpg',
    afterImage: '/images/gallery/depois00.jpg',
    beforeAlt: 'Antes da funilaria e pintura automotiva em Caxias do Sul - Auto Recuperadora Bruning',
    afterAlt: 'Depois da funilaria e pintura automotiva em Caxias do Sul com acabamento premium',
    vehicleModel: 'Veículo Recuperado'
  },
  {
    id: 'ba-2',
    title: 'Correção de Avarias e Chapeação',
    service: 'Chapeação Caxias do Sul',
    description: 'Alinhamento preciso e recuperação das linhas originais da carroceria com serviço de chapeação.',
    beforeImage: '/images/gallery/antes01.jpg',
    afterImage: '/images/gallery/depois01.jpg',
    beforeAlt: 'Carro avariado antes do serviço de chapeação em Caxias do Sul',
    afterAlt: 'Lataria alinhada após chapeação especializada em Caxias do Sul',
    vehicleModel: 'Reparo de Lataria'
  },
  {
    id: 'ba-3',
    title: 'Repintura Automotiva em Estufa',
    service: 'Pintura Automotiva Caxias do Sul',
    description: 'Preparação rigorosa de superfície, acerto de cor e aplicação de verniz para brilho intenso em estufa.',
    beforeImage: '/images/gallery/antes02.jpg',
    afterImage: '/images/gallery/depois02.jpg',
    beforeAlt: 'Antes da repintura automotiva em Caxias do Sul',
    afterAlt: 'Acabamento espelhado após pintura automotiva em estufa em Caxias do Sul',
    vehicleModel: 'Acabamento Espelhado'
  },
  {
    id: 'ba-4',
    title: 'Polimento Técnico e Cristalização',
    service: 'Polimento Automotivo Caxias do Sul',
    description: 'Remoção de imperfeições, restauração da cor e proteção da pintura com polimento profissional.',
    beforeImage: '/images/gallery/antes03.jpg',
    afterImage: '/images/gallery/depois03.jpg',
    beforeAlt: 'Pintura opaca antes do polimento automotivo em Caxias do Sul',
    afterAlt: 'Pintura brilhante após polimento técnico e cristalização em Caxias do Sul',
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
    altText: 'Acabamento espelhado de pintura automotiva em estufa em Caxias do Sul',
    caption: 'Reflexo cristalino obtido após repintura completa e cura em estufa.'
  },
  {
    id: 'g-2',
    title: 'Alinhamento de Lataria e Chapeação',
    category: 'chapeacao',
    categoryLabel: 'Chapeação',
    image: '/images/gallery/cars02.jpg',
    altText: 'Serviço de chapeação e alinhamento de lataria automotiva em Caxias do Sul',
    caption: 'Alinhamento perfeito das vincos e vãos de lataria.'
  },
  {
    id: 'g-3',
    title: 'Retoque Automotivo e Micropintura',
    category: 'retoques',
    categoryLabel: 'Retoques Automotivos',
    image: '/images/gallery/cars03.jpg',
    altText: 'Retoque de para-choque e micropintura rápida em Caxias do Sul',
    caption: 'Correção cirúrgica de arranhões mantendo a cor original.'
  },
  {
    id: 'g-4',
    title: 'Polimento Técnico e Cristalização',
    category: 'polimento',
    categoryLabel: 'Polimento Automotivo',
    image: '/images/gallery/cars04.jpg',
    altText: 'Carro com polimento técnico e cristalização da pintura em Caxias do Sul',
    caption: 'Restauração do brilho e proteção da camada de verniz.'
  },
  {
    id: 'g-5',
    title: 'Revitalização de Faróis Caxias do Sul',
    category: 'farois',
    categoryLabel: 'Revitalização de Faróis',
    image: '/images/gallery/idvisu04.jpg',
    altText: 'Revitalização de lentes de faróis automotivos em Caxias do Sul',
    caption: 'Restauração de transparência com verniz protetor contra UV.'
  },
  {
    id: 'g-6',
    title: 'Entrega Final com Controle de Qualidade',
    category: 'pintura',
    categoryLabel: 'Pintura & Acabamento',
    image: '/images/gallery/cars07.jpg',
    altText: 'Controle de qualidade de pintura automotiva em oficina de Caxias do Sul',
    caption: 'Veículo pronto para entrega com inspeção de detalhes finalizada.'
  },
  {
    id: 'g-7',
    title: 'Comunicação e Identidade Bruning',
    category: 'pintura',
    categoryLabel: 'Padrão Bruning',
    image: '/images/gallery/idvisu01.jpg',
    altText: 'Auto Recuperadora Bruning - Especialista em Estética Automotiva em Caxias do Sul',
    caption: 'Compromisso Bruning com o resultado visual do seu carro.'
  },
  {
    id: 'g-8',
    title: 'Especialistas em Recuperação Estética',
    category: 'chapeacao',
    categoryLabel: 'Auto Recuperadora',
    image: '/images/gallery/idvisu06.jpg',
    altText: 'Oficina Auto Recuperadora em Caxias do Sul especializada em batidas e arranhões',
    caption: 'Atendimento qualificado para devolver a confiança ao seu veículo.'
  }
];
