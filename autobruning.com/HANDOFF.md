# HANDOFF — Auto Recuperadora Bruning

> Documento de transição e referência sobre a implementação do site institucional da **Auto Recuperadora Bruning**.

---

## 1. Visão Geral & Objetivo Atual

O objetivo da sessão foi criar o site institucional responsivo, moderno e fortemente focado em conversão para a **Auto Recuperadora Bruning** em Caxias do Sul/RS. 

O projeto foi construído do zero seguindo rigorosamente o guia de identidade visual [identidade-visual-auto-recuperadora-bruning.md](identidade-visual-auto-recuperadora-bruning.md), utilizando imagens reais do portfólio no diretório `imgs_instagram` e a marca oficial fornecida.

### Principais Atributos da Marca Transmitidos:
- Especialização em chapeação, pintura automotiva em estufa, retoques, polimento e revitalização de faróis.
- Estética dark premium (preto `#070707` + vermelho `#F1262D` + branco `#FFFFFF`).
- Foco em conversão rápida via WhatsApp e SEO local para Caxias do Sul / RS.

---

## 2. O Que Foi Feito (Status Atual)

### 2.1 Estrutura de Arquivos Criados
```text
/home/diego/projetos/sites/autobruning.com/
├── package.json                   # Configuração de dependências (Astro 5, Tailwind v4, TS)
├── astro.config.mjs               # Configuração do Astro com plugin Vite Tailwind CSS v4
├── tsconfig.json                  # Configuração TypeScript estrita
├── public/
│   ├── images/
│   │   ├── brand/                 # Logos oficiais (principal black, compacto white, designer logo, icon)
│   │   └── gallery/               # Fotos de veículos e artes do Instagram (cars01-07, idvisu01-06)
│   ├── favicon.ico, etc.          # Favicons e site.webmanifest
│   ├── robots.txt                 # Instruções de indexação para buscadores
│   └── sitemap.xml                # Mapa do site para SEO
├── src/
│   ├── styles/
│   │   └── global.css             # Design tokens Tailwind v4, fontes Montserrat/Inter, acentos visuais
│   ├── data/
│   │   ├── business.ts            # Centralização de contatos, endereço e links de WhatsApp
│   │   ├── services.ts            # Dados dos 6 serviços oferecidos
│   │   └── gallery.ts             # Dados de transformações antes/depois e galeria do portfólio
│   ├── components/
│   │   ├── Header.astro           # Cabeçalho sticky com logo, links de navegação e menu mobile
│   │   ├── Hero.astro             # Seção principal com headline marcante, background real e CTAs
│   │   ├── Differentials.astro    # Faixa com 4 diferenciais competitivos da oficina
│   │   ├── ServicesGrid.astro     # Grid com os 6 cards de serviços e botão de orçamento individual
│   │   ├── BeforeAfter.astro      # Slider interativo para comparação antes e depois
│   │   ├── HeadlightRestoration.astro # Bloco de destaque para revitalização de faróis
│   │   ├── InteractiveQuote.astro # Calculadora/Formulário que pré-preenche mensagem no WhatsApp
│   │   ├── ResultsGallery.astro   # Galeria editorial com filtro por categoria
│   │   ├── AboutSection.astro     # Seção institucional sobre a experiência e atenção aos detalhes
│   │   ├── ContactSection.astro   # Endereço, telefones, horário, mapa e links diretos
│   │   ├── CtaBanner.astro        # Banner final de conversão ("Arranhou, amassou ou riscou?")
│   │   ├── Footer.astro           # Rodapé institucional completo
│   │   └── WhatsAppButton.astro   # Botão flutuante responsivo de WhatsApp com badge animado
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout base com meta tags, OpenGraph e dados estruturados JSON-LD
│   └── pages/
│       ├── index.astro            # Landing page principal completa
│       ├── servicos.astro         # Página dedicada a serviços
│       ├── resultados.astro       # Página dedicada ao portfólio e antes/depois
│       └── contato.astro          # Página dedicada a endereço e mapa
```

### 2.2 Funcionalidades Concluídas e Testadas
- ✅ **Design System Tailwind CSS v4:** Configurado via `@tailwindcss/vite` com variáveis no `@theme` de `global.css`.
- ✅ **Slider Antes & Depois Interativo:** Desenvolvido em TypeScript nativo no client-side sem dependências externas, compatível com touch/pointer e acessível via teclado (`ArrowLeft`/`ArrowRight`). Configurado com imagens reais (`antes` e `depois`) e textos descritivos condizentes com os serviços.
- ✅ **Gerador de Mensagem para WhatsApp:** Formulário interativo em `InteractiveQuote.astro` que formata o texto com modelo do veículo e tipo de serviço, abrindo diretamente o `wa.me`.
- ✅ **Filtro da Galeria por Categoria:** Alternância dinâmica de cartões em `ResultsGallery.astro` entre *Todos, Pintura, Chapeação, Retoques e Faróis*.
- ✅ **Menu Mobile Hambúrguer:** Transição suave e controle de navegação responsiva.
- ✅ **SEO Local Completo:** Inclusão de `AutoRepair` JSON-LD em `BaseLayout.astro`, `sitemap.xml`, `robots.txt` e OpenGraph. O placeholder de imagem (OG) foi alterado para foto real do portfólio.
- ✅ **Revisão de Identidade Visual Aplicada:** Substituição de imagens placeholder, fixação do uso do logo principal correto (mantendo a coloração original) em cabeçalhos e rodapés, e atualização da imagem de revitalização de faróis.
- ✅ **Build de Produção Limpo:** O comando `npm run build` foi executado e aprovado com **0 erros, 0 avisos e 0 hints**.

---

## 3. Pendências & Próximos Passos (To-Do)

### 3.1 Próximos Passos Recomendados para Produção
- [ ] **Validação Factual de Horários de Atendimento:** Confirmar com o cliente os horários exatos de funcionamento (atualmente configurado como padrão *Segunda a Sexta: 08:00 - 18:00* em `src/data/business.ts`).
- [ ] **Configuração do Domínio e Hospedagem:** Deploy em plataforma estática (Vercel, Netlify, Cloudflare Pages ou Firebase Hosting) apontando para o subdomínio `autobruning.dibr3.com`.
- [ ] **Google Analytics / Pixel (Opcional):** Adicionar scripts de rastreamento de conversão apenas se o cliente solicitar.
- [ ] **Expansão do Portfólio de Fotos:** Conforme novas fotos de carros finalizados forem disponibilizadas, basta adicionar aos objetos em `src/data/gallery.ts`.

---

## 4. Decisões Arquiteturais e Contexto Técnico

1. **Stack Técnica:**
   - **Astro 5:** Gerador de site estático (SSG) de alta performance.
   - **Tailwind CSS v4:** Importado no CSS global `@import "tailwindcss";` e plugado no Vite via `@tailwindcss/vite`.
   - **TypeScript Strict Mode:** Tipagem estrita ativada sem uso de `any`.

2. **Desempenho & Dependências Mínimas:**
   - Sem frameworks de cliente pesados (React/Vue/Svelte). Toda a interatividade (slider antes/depois, menu mobile, filtro de galeria, form WhatsApp) foi feita com **Vanilla TypeScript** integrado nos componentes Astro.
   - Imagens servidas localmente em `public/images/` para garantir carregamento ultra-rápido.

3. **Centralização de Dados da Empresa:**
   - Todos os telefones, links de WhatsApp, endereço e horário estão centralizados em `src/data/business.ts`. **Não hardcodear** números ou endereços em novos componentes; sempre importar de `business.ts`.

---

## 5. Instruções de Execução e Testes

### Instalação de Dependências
```bash
npm install
```

### Servidor de Desenvolvimento Local
```bash
npm run dev
```
Acesse em: `http://localhost:4321`

### Verificação de Tipos e Build de Produção
```bash
npm run build
```
O arquivo estático gerado fica disponível em `dist/`.

---
*Documento gerado automaticamente ao final da sessão de desenvolvimento.*
