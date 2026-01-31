# Bruning - Recuperadora e Estética Automotiva

![Bruning Logo](public/favicon.ico)


## 🚀 Tecnologias

- **Frontend:** React 18 + TypeScript
- **Build:** Vite 6.3.5
- **Styling:** Tailwind CSS
- **Componentes:** Radix UI
- **Carrossel:** Swiper.js
- **Modal:** React Modal
- **Ícones:** Lucide React
- **Minificação:** Terser

## 📋 Funcionalidades

### ✅ Seções do Site
- **Hero:** Banner com chamada para ação
- **Serviços:** 6 serviços principais com cards
- **Sobre:** Informações sobre a empresa
- **Garopaba:** Galeria com carrossel Swiper com 13 imagens
- **Modal de Imagens:** Visualização em tela cheia ao clicar
- **Contato:** CTA com botão WhatsApp/Telefone
- **Footer:** Links e informações adicionais

### 🎨 Design
- Tema escuro profissional (preto e vermelho)
- Responsive design (mobile-first)
- Animações suaves
- Scroll comportamento nativo

### 📱 Responsividade
- Desktop
- Tablet
- Mobile
- Todos os componentes otimizados para telas pequenas

## 🔍 SEO Otimizado

### Meta Tags
- ✅ Title otimizado com keywords
- ✅ Meta description (150-160 caracteres)
- ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Language tag (pt-BR)

### Schema Markup
- ✅ LocalBusiness JSON-LD
- ✅ Service JSON-LD
- ✅ PostalAddress estruturado
- ✅ Telefone e redes sociais

### Arquivos SEO
- ✅ `robots.txt` - Instruções para crawlers
- ✅ `sitemap.xml` - Mapa do site
- ✅ `favicon.ico` - Ícone personalizado

### Performance
- Code splitting (5 chunks)
- Lazy loading de imagens
- Minificação com Terser
- Gzip compressão
- Cache busting com hashes

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/autogaropaba.com.git
cd autogaropaba.com

# Instalar dependências
npm install

# Desenvolvimento local (Astro)
npm run dev

# Build otimizado para produção (Astro)
npm run build:seo

# Servir build localmente
npm run serve:build
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor de desenvolvimento |
| `npm run build` | Build padrão para produção |
| `npm run build:seo` | Build otimizado com pre-render e schema markup |
| `npm run prerender` | Injetar schema markup no HTML |
| `npm run preview` | Preview do build com Vite |
| `npm run serve:build` | Servir build em localhost:8000 (Linux/Mac) |
| `npm run serve:build:win` | Servir build em localhost:8000 (Windows) |
| `npm run sitemap` | Gerar sitemap (mensagem) |

## 📁 Estrutura do Projeto

```
autogaropaba.com/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Banner principal
│   │   ├── Services.tsx          # Seção de serviços
│   │   ├── About.tsx             # Sobre a empresa
│   │   ├── Cidade.tsx            # Garopaba com galeria
│   │   ├── Contact.tsx           # Contato
│   │   ├── Footer.tsx            # Rodapé
│   │   └── ui/                   # Componentes Radix UI
│   ├── assets/                   # Imagens e recursos
│   ├── styles/                   # CSS global
│   ├── App.tsx                   # Componente raiz
│   └── main.tsx                  # Entrada do app
├── public/
│   ├── sitemap.xml               # Mapa do site
│   ├── robots.txt                # Instruções para bots
│   ├── favicon.ico               # Ícone do site
│   └── assets/                   # Imagens do projeto
├── scripts/
│   └── prerender.mjs             # Script de pre-render SEO
├── build/                        # Build otimizado (gerado)
├── index.html                    # HTML principal
├── vite.config.ts                # Configuração Vite
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependências
├── SEO_CONFIG.md                 # Documentação SEO
└── README.md                     # Este arquivo
```

## 🖼️ Galeria de Imagens

O site inclui 13 imagens de Garopaba no carrossel:
- Praias paradisíacas
- Pontos turísticos
- Paisagens naturais
- Fotos da equipe Bruning

**Localização:** `/public/assets/foto-garopaba-sc_*.jpg`

## 📧 Informações de Contato

- **Telefone:** +55 54 98415-1823
- **Localização:** Garopaba, SC - Brasil
- **Endereço:** Garopaba, SC 88495-000


 
## 📚 Documentação Adicional

- **SEO:** Veja `SEO_CONFIG.md` para detalhes de otimização
- **Componentes:** Componentes Radix UI em `src/components/ui/`
- **Estilos:** Tailwind CSS configurado em `tailwind.config.ts`

 