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
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Oscar+Serafini+91+Esplanada+Caxias+do+Sul+RS',
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
