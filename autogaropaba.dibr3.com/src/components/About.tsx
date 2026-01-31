import { Award, CheckCircle, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Award,
    title: 'Materiais Padrão de Fábrica',
    description: 'Utilizamos apenas peças e materiais originais para garantir a qualidade'
  },
  {
    icon: CheckCircle,
    title: 'Qualidade Garantida',
    description: 'Compromisso com a excelência em cada serviço realizado'
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais capacitados e experientes no setor automotivo'
  },
  {
    icon: Clock,
    title: 'Agilidade',
    description: 'Prazos respeitados sem comprometer a qualidade do serviço'
  }
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 rounded-lg transform translate-x-4 translate-y-4"></div>
            <ImageWithFallback
              src="/assets/photo-about.webp"
              alt="Estética Automotiva"
              className="relative rounded-lg w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que Escolher a Bruning?
            </h2>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-300 mb-8">
              Somos referência em recuperação e estética automotiva, oferecendo
              serviços de alta qualidade com tecnologia de ponta e profissionais
              altamente qualificados. Seu veículo merece o melhor cuidado.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
