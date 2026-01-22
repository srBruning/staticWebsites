import { Wrench, Sparkles, Paintbrush, Shield, Car, Droplets } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Funilaria',
    description: 'Reparação completa de lataria com precisão e qualidade'
  },
  {
    icon: Paintbrush,
    title: 'Pintura Automotiva',
    description: 'Pintura profissional com acabamento impecável'
  },
  {
    icon: Sparkles,
    title: 'Estética Automotiva',
    description: 'Polimento, cristalização e revitalização de pintura'
  },
  {
    icon: Shield,
    title: 'Proteção de Pintura',
    description: 'Aplicação de PPF e vitrificação para proteção duradoura'
  },
  {
    icon: Car,
    title: 'Restauração',
    description: 'Restauração completa de veículos antigos e clássicos'
  },
  {
    icon: Droplets,
    title: 'Higienização',
    description: 'Limpeza profunda interna e externa do veículo'
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Soluções completas para seu veículo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
