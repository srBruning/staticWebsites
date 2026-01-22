import { Phone, MapPin, Mail, Navigation } from 'lucide-react';

export function Contact() {
  const phoneNumber = '5554984151823';
  const address = 'Doraci de Andrade, Garopaba 88495000';
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contato" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center hover:border-red-600 transition-all duration-300">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Telefone</h3>
            <a
              href={`tel:+${phoneNumber}`}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              (54) 98415-1823
            </a>
            <div className="mt-4">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center hover:border-red-600 transition-all duration-300">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Endereço</h3>
            <p className="text-gray-400 mb-4">
              Doraci de Andrade<br />
              Garopaba - SC<br />
              CEP: 88495-000
            </p>
          </div>

          {/* Navigation */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center hover:border-red-600 transition-all duration-300">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Como Chegar</h3>
            <div className="flex flex-col gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Waze
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden h-[400px]">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
