export const business = {
  name: 'Auto Recuperadora Bruning',
  shortName: 'Bruning',
  tagline: 'Deixamos seu carro novo, de novo.',
  description: 'Especialistas em chapeação, pintura automotiva, retoques, polimento e recuperação estética veicular com acabamento impecável em Caxias do Sul / RS.',
  instagram: 'auto_recuperadora_bruning',
  instagramUrl: 'https://www.instagram.com/auto_recuperadora_bruning/',
  address: {
    street: 'Rua Oscar Serafini, 91',
    neighborhood: 'Esplanada',
    city: 'Caxias do Sul',
    state: 'RS',
    country: 'BR',
    full: 'Rua Oscar Serafini, 91 — Esplanada — Caxias do Sul / RS',
    mapsUrl: 'https://www.google.com/maps/place/Auto+Recuperadora+Bruning/@-29.1973085,-51.2020313,18.82z/data=!4m6!3m5!1s0x951ea30049df687d:0xc7da3f3b8d41f20a!8m2!3d-29.1972453!4d-51.2018627!16s%2Fg%2F11xljkfwc7?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
    wazeUrl: 'https://waze.com/ul?ll=-29.19720614143396,-51.20187893119833&navigate=yes',
    latitude: -29.19720614143396,
    longitude: -51.20187893119833,
  },
  phones: [
    {
      label: '(54) 98136-5147',
      e164: '+5554981365147',
      rawNumber: '5554981365147',
      primary: true,
      whatsapp: true,
    },
    {
      label: '(54) 98437-2394',
      e164: '+5554984372394',
      rawNumber: '5554984372394',
      primary: false,
      whatsapp: true,
    },
  ],
  workingHours: 'Segunda a Sexta: 08:00 - 18:00',
  getWhatsappUrl: (message?: string) => {
    const msg = message || 'Olá! Vi o site da Auto Recuperadora Bruning e gostaria de solicitar uma avaliação/orçamento para meu veículo.';
    return `https://wa.me/5554981365147?text=${encodeURIComponent(msg)}`;
  }
} as const;
