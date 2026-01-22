import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import logo from 'figma:asset/f4d68675a5e04ba97bcb72894b683d713c8fa804.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Bruning Logo"
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold text-white">Bruning</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Recuperadora e Estética Automotiva
            </p>
            <p className="text-gray-500 text-sm">
              Excelência em Funilaria & Estética Automotiva
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-red-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-red-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4 mb-6">

              <a
                href="https://www.instagram.com/bruningautorecuperadora/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="tel:+5554984151823"
                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (54) 98415-1823
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bruning Recuperadora e Estética Automotiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}