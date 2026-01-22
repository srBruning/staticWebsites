# Configuração SEO - Bruning Automotiva

## Indexação de Conteúdo React

### Status Atual
O site usa React para renderização, o que apresenta desafios para SEO:

**✅ O que é indexado:**
- GoogleBot executa JavaScript e indexa o conteúdo React
- Meta tags estáticas no HTML

**❌ O que pode não ser indexado:**
- Outros crawlers (Bing, Yahoo) têm dificuldade com JS
- Content renderizado dinamicamente pode ser indexado mais lentamente
- Alguns bots não executam JavaScript

### Solução Implementada: Pre-render + Schema Markup

**1. Pre-render HTML**
- Script `scripts/prerender.mjs` gera HTML com conteúdo estruturado
- Conteúdo visível em `<noscript>` para crawlers não-JS
- Executado automaticamente no build: `npm run build:seo`

**2. Schema Markup (JSON-LD)**
Adicionado no `index.html`:
- **LocalBusiness** - Informações da empresa
- **Service** - Serviços oferecidos
- **PostalAddress** - Endereço e localização
- **Organization** - Dados da organização

**3. Fallback para Navegadores Sem JS**
```html
<noscript>
  <h1>Bruning - Recuperadora e Estética Automotiva</h1>
  <p>Conteúdo estruturado visível para crawlers...</p>
</noscript>
```

### Básico
- ✅ Title otimizado com keywords
- ✅ Meta description clara e concisa
- ✅ Meta keywords relevantes
- ✅ Viewport para responsividade

### Open Graph (Social Media)
- ✅ og:type, og:title, og:description
- ✅ og:url, og:image
- ✅ Compatible com Facebook, LinkedIn, WhatsApp

### Twitter Card
- ✅ twitter:card (summary_large_image)
- ✅ twitter:title, twitter:description
- ✅ twitter:image

### Técnico
- ✅ Canonical URL
- ✅ Lang attribute (pt-BR)
- ✅ Charset UTF-8
- ✅ Theme color

### Arquivos SEO
- ✅ robots.txt - Instrui crawlers
- ✅ sitemap.xml - Mapa do site

## Performance & Build

### Otimizações Implementadas
1. **Code Splitting**
   - vendor.js (React, React-DOM)
   - swiper.js (Swiper library)
   - modal.js (React-Modal)
   - icons.js (Lucide React)

2. **Minification**
   - Terser para JS minification
   - CSS code splitting
   - Console logs removidos em produção

3. **Lazy Loading**
   - Imagens com loading="lazy"
   - Pré-carregamento em background

4. **Hashing**
   - Assets com hash único
   - Cache busting automático

## Como Fazer Build

```bash
# Build otimizado com pre-render e schema markup
npm run build:seo

# Ou apenas build padrão
npm run build

# Servir o build gerado
npm run serve:build

# Preview do build
npm run preview
```

## Checklist SEO

- [x] Título único e descritivo
- [x] Meta description (150-160 chars)
- [x] H1 relevante no Hero
- [x] Imagens com alt text descritivo
- [x] Estrutura semântica HTML5
- [x] Mobile-first responsive design
- [x] Fast loading times (minification)
- [x] Sitemap XML
- [x] Robots.txt
- [x] Social media previews
- [x] Canonical URL
- [x] Schema markup ready (estruturado)

## Próximas Melhorias Sugeridas

1. Adicionar JSON-LD Schema para estrutura de dados
2. Implementar Service Worker para PWA
3. Adicionar Google Analytics
4. Implementar breadcrumb schema
5. Otimizar imagens com WebP
6. Adicionar blog/artigos para mais conteúdo