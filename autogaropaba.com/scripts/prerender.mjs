import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho do arquivo HTML gerado pelo Vite
const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

// Imagens do carrossel para preload
const garopabaImages = [
    '/assets/foto-garopaba-sc_por_raul-rodrigues-zeferino-m5J0rk_4TeA-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_pedro-kummel-VSwFHRUg8aU-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_pedro-kummel-ryGu_SPR1rs-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_paulo-freitas-SqZuDwGOQFY-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_ivan-cheremisin-qnU5k4fLpd4-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_ivan-cheremisin-ihdcAg7MVrM-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_ivan-cheremisin-4o4z--__Q2o-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_claudia-back-83Fr00tILOg-unsplash.jpg',
    '/assets/foto-garopaba-sc_por_diego-bruning-05.jpg',
    '/assets/foto-garopaba-sc_por_diego-bruning-04.jpg',
    '/assets/foto-garopaba-sc_por_diego-bruning-03.jpg',
    '/assets/foto-garopaba-sc_por_diego-bruning-02.jpg',
    '/assets/foto-garopaba-sc_por_diego-bruning-01.jpg'
];

// Gerar links de preload para as primeiras 4 imagens (otimização de performance)
const preloadLinks = garopabaImages.slice(0, 4)
    .map(img => `    <link rel="preload" as="image" href="${img}" />`)
    .join('\n');

// Ler o HTML gerado pelo Vite
let htmlContent = fs.readFileSync(indexPath, 'utf-8');

// Injetar Schema Markup se ainda não estiver presente
const schemaMarkup = `    <!-- Schema Markup - Organization -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Bruning Recuperadora e Estética Automotiva",
      "image": "/assets/photo-capa-02.jpeg",
      "description": "Especialista em funilaria, pintura automotiva e estética automotiva em Garopaba",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Garopaba",
        "addressLocality": "Garopaba",
        "addressRegion": "SC",
        "postalCode": "88495-000",
        "addressCountry": "BR"
      },
      "telephone": "+55 54 98415-1823",
      "url": "https://autogaropaba.com",
      "sameAs": [
        "https://www.instagram.com/bruningautorecuperadora/",
        "https://www.instagram.com/bruningautorecuperadora/"
      ]
    }
    </script>

    <!-- Schema Markup - Service -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Funilaria e Estética Automotiva",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Bruning"
      },
      "areaServed": "Garopaba, SC, Brasil",
      "serviceType": ["Funilaria", "Pintura Automotiva", "Estética Automotiva", "Restauração"]
    }
    </script>`;

// Injetar conteúdo noscript para crawlers
const noscriptContent = `    
    <!-- Conteúdo estruturado visível para crawlers -->
    <noscript>
      <h1>Bruning - Recuperadora e Estética Automotiva</h1>
      <p>Especializada em funilaria, pintura automotiva, estética e restauração de veículos em Garopaba, Santa Catarina.</p>
      
      <h2>Serviços</h2>
      <ul>
        <li>Funilaria</li>
        <li>Pintura Automotiva</li>
        <li>Estética Automotiva</li>
        <li>Proteção de Pintura</li>
        <li>Restauração de Veículos</li>
        <li>Higienização Automotiva</li>
      </ul>
      
      <h2>Garopaba - Nossa Casa, Seu Destino</h2>
      <p>Garopaba é famosa por suas praias paradisíacas como a Praia da Ferrugem, Praia do Silveira e Praia de Garopaba. Venha conhecer a Bruning quando estiver visitando nossa cidade.</p>
      
      <h2>Contato</h2>
      <p>Telefone: +55 54 98415-1823</p>
    </noscript>`;

// Verificar se schema markup já existe
if (!htmlContent.includes('@context')) {
  // Injetar antes da tag </head>
  htmlContent = htmlContent.replace('</head>', schemaMarkup + '\n  </head>');
}

// Injetar preload links se ainda não estiverem presentes
if (!htmlContent.includes('rel="preload" as="image"')) {
  // Injetar após o favicon e antes de </head>
  htmlContent = htmlContent.replace('</head>', '\n' + preloadLinks + '\n  </head>');
}

// Injetar noscript antes da tag </body>
if (!htmlContent.includes('<noscript>')) {
  htmlContent = htmlContent.replace('</body>', noscriptContent + '\n  </body>');
}

// Escrever o arquivo atualizado
fs.writeFileSync(indexPath, htmlContent);
console.log('✅ Pre-render completo! Schema markup, preload de imagens e noscript injetados.');