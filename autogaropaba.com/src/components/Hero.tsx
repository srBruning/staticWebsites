import { Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/logo.png';

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/assets/photo-capa-02.jpeg"
          alt="Funilaria Automotiva"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <img
            src={logo}
            alt="Bruning Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Bruning
          </h1>
          <div className="h-1 w-32 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl text-red-500 mb-4">
            <strong>Recuperadora</strong> e <strong>Estética Automotiva</strong> em <strong>Garopaba - SC</strong>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Excelência em <strong>Funilaria</strong> & <strong>Estética Automotiva</strong>
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Transformamos danos em perfeição
          </p>

          <a
            href="tel:+5554984151823"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Entre em Contato
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}