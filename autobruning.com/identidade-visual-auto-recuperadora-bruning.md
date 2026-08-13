# Guia de identidade visual e implementação do site — Auto Recuperadora Bruning

> Documento de referência para um agente de desenvolvimento implementar o site institucional da **Auto Recuperadora Bruning** usando **TypeScript, Astro e Tailwind CSS**.
>
> Base visual: peças fornecidas pelo cliente + informações públicas indexadas do perfil `@auto_recuperadora_bruning` no Instagram em agosto de 2026.

---

## 1. Objetivo do site

Criar um site institucional rápido, moderno, responsivo e fortemente orientado a conversão para a **Auto Recuperadora Bruning**, transmitindo os atributos que aparecem de forma consistente nas peças da marca:

- qualidade de acabamento;
- confiança;
- recuperação estética do veículo;
- especialização em pintura, chapeação, retoques e reparos;
- resultado visual de alto impacto;
- atendimento local em Caxias do Sul/RS;
- contato rápido, principalmente por WhatsApp.

O site não deve parecer uma oficina mecânica genérica. A comunicação visual deve remeter a **funilaria/chapeação, recuperação estética, pintura automotiva e acabamento premium**, com predominância de preto, vermelho e branco.

A sensação esperada ao abrir a página é: **oficina especializada + acabamento profissional + transformação visual do carro**.

---

## 2. Referências extraídas da comunicação existente

### 2.1 Nome da marca

**AUTO RECUPERADORA BRUNING**

A palavra **BRUNING** deve receber maior peso visual. Nas peças fornecidas, ela aparece em caixa alta, bold/extrabold e normalmente em vermelho.

### 2.2 Mensagens recorrentes da marca

As peças fornecidas usam chamadas como:

- “Seu carro merece um novo visual!”
- “Deixamos seu carro novo, de novo!”
- “Arranhou, amassou ou riscou?”
- “Deixe seu carro com quem entende do assunto.”
- “Recuperação rápida.”
- “Acabamento impecável.”
- “Seu carro merece este cuidado!”
- “Resultado que entrega confiança!”
- “Venha nos visitar!”
- “Revitalização de faróis”.

No conteúdo público indexado do Instagram aparecem também referências a:

- pintura e polimento;
- chapeação e retoques;
- recuperação completa;
- pintura de para-choque;
- comunicação centrada em devolver brilho e aparência ao veículo.

### 2.3 Informações de contato presentes nas peças

**Endereço exibido nas artes:**

Rua Oscar Serafini, 91 — Esplanada — Caxias do Sul/RS

**Telefones exibidos nas artes:**

- (54) 98136-5147
- (54) 98437-2394

**Instagram:**

`@auto_recuperadora_bruning`

> **Atenção antes da publicação:** algumas listagens públicas externas apresentam numeração/endereço diferente (por exemplo, número 67). Como as peças recentes fornecidas pelo cliente repetem o número **91**, este documento assume **Rua Oscar Serafini, 91** como referência visual atual. O agente deve deixar endereço e telefones centralizados em um arquivo de configuração para que possam ser confirmados e alterados sem editar vários componentes.

---

# 3. Personalidade da marca

A identidade deve ser construída sobre cinco características:

### Profissional

Evitar estética amadora de “oficina de bairro”. Usar grid consistente, espaçamento generoso, fotografia de boa qualidade e tipografia forte.

### Direta

A comunicação deve usar frases curtas e objetivas, como as peças atuais. Evitar textos institucionais longos na primeira dobra.

### Confiante

A marca comunica resultado e segurança: “acabamento impecável”, “resultado que entrega confiança”, “com quem entende do assunto”.

### Visual

O produto vendido é muito demonstrável. Fotos de **antes/depois**, reflexo da pintura, detalhes de acabamento e carros recuperados devem ter prioridade sobre blocos grandes de texto.

### Local e acessível

Mesmo com aparência premium, o site deve continuar próximo e simples. O principal caminho de conversão deve ser falar diretamente pelo WhatsApp.

---

# 4. Identidade visual

## 4.1 Paleta principal

A análise das peças mostra três cores dominantes: **preto**, **vermelho vivo** e **branco**, com cinzas usados como suporte.

### Tokens recomendados

| Token | Cor | Uso |
|---|---:|---|
| `brand-black` | `#070707` | fundo principal, hero, header, footer |
| `brand-surface` | `#111111` | cards e superfícies elevadas |
| `brand-surface-2` | `#191919` | hover, seções secundárias |
| `brand-red` | `#F1262D` | cor primária da marca e CTAs |
| `brand-red-strong` | `#E31E24` | hover, detalhes e contraste |
| `brand-red-bright` | `#FF3132` | destaque pontual inspirado nas peças mais claras |
| `brand-white` | `#FFFFFF` | títulos e elementos sobre fundo escuro |
| `brand-gray-100` | `#F3F3F3` | fundo claro eventual |
| `brand-gray-300` | `#C9C9C9` | texto secundário claro |
| `brand-gray-600` | `#747474` | texto auxiliar |

### Regra de proporção visual

Como orientação geral:

- 60–70% preto/grafite;
- 20–30% branco/cinza/fotografia;
- 8–12% vermelho.

O vermelho deve parecer **intencional**, não ocupar toda a interface. É a cor de ação e assinatura.

---

## 4.2 Gradientes

Usar apenas de forma discreta e predominantemente sobre fotografias.

Exemplo:

```css
background: linear-gradient(
  90deg,
  rgba(0, 0, 0, 0.94) 0%,
  rgba(0, 0, 0, 0.72) 44%,
  rgba(0, 0, 0, 0.2) 100%
);
```

Também é permitido um glow vermelho muito sutil:

```css
background: radial-gradient(
  circle at 80% 20%,
  rgba(241, 38, 45, 0.14),
  transparent 34%
);
```

Evitar gradientes multicoloridos.

---

## 4.3 Tipografia

As peças usam uma linguagem tipográfica próxima de sans-serif geométrica/grotesca, com títulos grandes e muito peso.

### Recomendação

**Títulos:** `Montserrat`, `Manrope` ou `Archivo` em `700–900`.

**Texto:** `Inter` ou `Manrope` em `400–600`.

Preferência de implementação:

- `Montserrat` para headings;
- `Inter` para corpo, navegação e botões.

Caso seja desejado reduzir dependências externas, usar fontes locais ou o stack:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Estilo dos títulos

- caixa alta apenas quando contribuir para a chamada;
- peso `800` ou `900` para headlines;
- letter-spacing levemente negativo em títulos grandes;
- frases curtas;
- destacar uma palavra ou trecho em vermelho.

Exemplo:

> RESULTADO QUE ENTREGA **CONFIANÇA**

---

## 4.4 Formas e grafismos

As artes usam com frequência:

- blocos retangulares vermelhos;
- molduras geométricas;
- linhas finas brancas/vermelhas;
- cantos arredondados moderados;
- padrões inspirados em bandeira quadriculada/pista;
- texturas pontilhadas/halftone;
- manchas/pinceladas vermelhas atrás do veículo;
- fotos recortadas sobre fundo preto.

No site, esses elementos devem ser usados com moderação. A versão web deve parecer mais refinada que um post social.

### Padrão quadriculado

Pode ser usado em áreas pequenas como detalhe de seção ou separador, nunca como fundo dominante.

Exemplo conceitual:

```css
background-image:
  linear-gradient(45deg, #f1262d 25%, transparent 25%),
  linear-gradient(-45deg, #f1262d 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #f1262d 75%),
  linear-gradient(-45deg, transparent 75%, #f1262d 75%);
```

---

## 4.5 Fotografia

A fotografia é parte central da identidade.

Priorizar:

1. carros finalizados dentro da recuperadora;
2. closes de pintura, reflexos e alinhamento de peças;
3. comparativos antes/depois;
4. faróis antes/depois;
5. processo de preparação/pintura/chapeação;
6. oficina/equipe, caso existam fotos adequadas.

### Tratamento das imagens

- preservar cores reais do veículo;
- evitar filtros pesados;
- contraste levemente elevado;
- fundos escuros funcionam bem com a marca;
- usar overlays pretos para garantir leitura de texto;
- preferir `object-fit: cover`;
- fornecer WebP/AVIF quando possível.

Não gerar imagens de carros por IA para representar trabalhos executados pela empresa. O portfólio precisa usar trabalhos reais.

---

# 5. Logo e assinatura

Nas peças, a assinatura aparece em diferentes variações, mas mantém o padrão:

**AUTO RECUPERADORA**
**BRUNING**

Usar a marca oficial em SVG/PNG transparente caso o arquivo esteja disponível.

Se o cliente ainda não possuir arquivo vetorial, **não redesenhar o logo automaticamente**. Usar temporariamente uma composição tipográfica de placeholder e solicitar o arquivo oficial para produção.

O header deve ter logo branco/vermelho sobre fundo preto.

---

# 6. Direção de interface

## 6.1 Estilo geral

O site deve ser predominantemente **dark**.

Características:

- background quase preto;
- grandes áreas de respiro;
- títulos brancos fortes;
- destaques e botões vermelhos;
- cards em `#111111`;
- bordas `rgba(255,255,255,.08)`;
- sombras discretas;
- fotos grandes e nítidas;
- animações curtas e funcionais.

Evitar:

- glassmorphism excessivo;
- neon;
- degradês coloridos;
- interface futurista de aplicativo SaaS;
- muitos ícones diferentes;
- excesso de vermelho como fundo;
- carrosséis automáticos agressivos.

---

# 7. Estrutura recomendada da página inicial

## 7.1 Header

Desktop:

- logo à esquerda;
- links: `Início`, `Serviços`, `Antes e depois`, `Sobre`, `Contato`;
- CTA: `Solicitar orçamento`;
- header escuro, inicialmente sobreposto ao hero ou sólido com transparência discreta;
- sticky após scroll.

Mobile:

- logo;
- botão hambúrguer;
- CTA de WhatsApp visível ou dentro do menu;
- menu fullscreen/slide simples, sem bibliotecas pesadas.

---

## 7.2 Hero

O hero deve ocupar aproximadamente `80–95svh` no desktop e `70–90svh` no mobile.

### Conteúdo sugerido

Eyebrow:

`AUTO RECUPERADORA • CAXIAS DO SUL`

Título:

**Deixamos seu carro novo, de novo.**

Alternativa:

**Seu carro merece um novo visual.**

Texto:

`Chapeação, pintura, retoques e recuperação estética com acabamento que devolve confiança ao seu veículo.`

CTAs:

- primário: `Solicitar orçamento no WhatsApp`;
- secundário: `Ver resultados`.

Background:

- fotografia real de um veículo recuperado;
- overlay preto forte da esquerda para direita;
- detalhe vermelho discreto.

Adicionar abaixo dos CTAs uma microprova visual:

`Pintura • Chapeação • Retoques • Polimento`

---

## 7.3 Faixa de diferenciais

Logo após o hero, uma faixa curta com 3 ou 4 itens:

- Acabamento impecável
- Atendimento direto
- Recuperação de colisões e amassados
- Pintura de alta qualidade

Usar ícones lineares simples.

---

## 7.4 Serviços

Título:

**Cuidado completo para recuperar o visual do seu carro.**

Cards recomendados:

### Chapeação e funilaria

Correção de amassados, danos de colisão e deformações de lataria.

### Pintura automotiva

Preparação e pintura com foco em uniformidade de cor e acabamento.

### Retoques e pequenos reparos

Correção localizada para riscos, marcas e pequenas avarias.

### Polimento e acabamento

Recuperação do brilho e refinamento visual da pintura.

### Revitalização de faróis

Recuperação da transparência para renovar o visual e melhorar a eficiência luminosa.

### Recuperação completa

Solução combinada para veículos que necessitam de múltiplos serviços estéticos e de funilaria.

> Não prometer serviços que não forem confirmados pelo cliente. Estes itens são derivados das peças fornecidas e de conteúdo público indexado do perfil.

---

## 7.5 Antes e depois

Esta deve ser uma das seções mais importantes do site.

Título:

**O resultado fala por si.**

Implementar cards de transformação com:

- imagem “antes”;
- imagem “depois”;
- serviço executado;
- pequeno resumo opcional.

### Componente recomendado

Criar um `BeforeAfter.astro` com slider acessível, permitindo mover uma divisória horizontal sobre duas imagens.

Requisitos:

- funcionar via pointer e teclado;
- `aria-label` adequado;
- não depender de framework JS pesado;
- fallback em duas imagens lado a lado caso JavaScript esteja desabilitado.

No mobile, permitir também cards simples empilhados caso o slider prejudique a usabilidade.

---

## 7.6 Galeria de resultados

Grid editorial de 6 a 10 fotos.

Desktop:

- grid 12 colunas;
- algumas fotos ocupando 6 colunas e outras 3/4;
- uma imagem destaque maior.

Mobile:

- 1 coluna ou scroll horizontal controlado.

Não exibir mais de aproximadamente 8–10 imagens na home. Criar uma página `/resultados` para portfólio completo caso existam fotos suficientes.

---

## 7.7 Sobre

Título sugerido:

**Experiência para cuidar de cada detalhe.**

Evitar inventar anos de mercado, certificações ou quantidade de clientes.

O texto deve enfatizar:

- atendimento próximo;
- avaliação cuidadosa;
- preocupação com acabamento;
- confiança;
- trabalho em veículos de diferentes portes/modelos.

Se o cliente fornecer história, equipe ou tempo de atuação, expandir essa seção.

---

## 7.8 Revitalização de faróis

Como já existe peça específica para o serviço, criar um bloco visual próprio.

Estrutura:

- comparativo antes/depois;
- título `Revitalização de faróis`;
- benefícios mostrados nas peças:
  - visual renovado;
  - valorização do veículo;
  - mais segurança;
- CTA `Quero revitalizar meus faróis`.

---

## 7.9 CTA final

Fundo vermelho ou fotografia com overlay preto/vermelho.

Título:

**Arranhou, amassou ou riscou?**

Texto:

`Fale com a Auto Recuperadora Bruning e solicite uma avaliação.`

Botão:

`Chamar no WhatsApp`

---

## 7.10 Contato e localização

Mostrar:

- Rua Oscar Serafini, 91 — Esplanada — Caxias do Sul/RS;
- telefone principal;
- telefone secundário;
- Instagram;
- botão para abrir rota;
- horário de atendimento apenas depois de confirmado pelo cliente.

Em vez de carregar iframe de mapa imediatamente, preferir:

- uma imagem/mapa estático ou bloco de localização;
- botão `Abrir no Google Maps`;
- iframe opcional com `loading="lazy"` apenas se realmente necessário.

---

## 7.11 Footer

Conteúdo mínimo:

- logo;
- endereço;
- telefones;
- Instagram;
- links de navegação;
- copyright;
- link para política de privacidade se houver formulário/analytics.

---

# 8. CTAs e WhatsApp

O site deve priorizar WhatsApp em todos os principais pontos de conversão.

Número principal sugerido com base nas peças:

```text
+55 54 98136-5147
```

Link:

```text
https://wa.me/5554981365147
```

Mensagem pré-preenchida recomendada:

```text
Olá! Vi o site da Auto Recuperadora Bruning e gostaria de solicitar uma avaliação/orçamento para meu veículo.
```

URL codificada deve ser gerada programaticamente com `encodeURIComponent()` quando necessário.

### Botão flutuante

Permitido no mobile e desktop, porém:

- não cobrir conteúdo;
- respeitar `safe-area-inset-bottom`;
- tamanho mínimo de toque de 44×44px;
- usar rótulo visível em desktop e apenas ícone + `aria-label` em telas pequenas, se necessário.

---

# 9. Tom de voz e copywriting

## Usar

- frases curtas;
- verbos de ação;
- linguagem direta;
- foco em resultado visual;
- segurança/confiança;
- prova por imagens reais.

Exemplos:

- `Recupere o visual do seu carro.`
- `Acabamento que faz diferença nos detalhes.`
- `Do amassado ao acabamento final.`
- `Seu carro merece este cuidado.`
- `Veja o antes. Compare o depois.`

## Evitar

- “Somos líderes absolutos...”;
- “a melhor de Caxias” sem evidência;
- “100% garantido”;
- números de clientes não confirmados;
- linguagem excessivamente técnica;
- textos longos sobre missão/visão.

---

# 10. Arquitetura técnica

## Stack obrigatória

- **Astro**
- **TypeScript**
- **Tailwind CSS**

Usar Astro como framework principal e gerar o máximo possível de HTML estático.

Não adicionar React/Vue/Svelte apenas para componentes simples. Usar JavaScript client-side apenas nos pontos realmente interativos, como menu mobile, slider antes/depois e lightbox.

### Tailwind CSS

Usar **Tailwind CSS v4** com o plugin oficial para Vite, conforme a documentação atual.

Instalação:

```bash
npm create astro@latest auto-recuperadora-bruning
cd auto-recuperadora-bruning
npm install tailwindcss @tailwindcss/vite
```

`astro.config.mjs`:

```ts
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

CSS global:

```css
@import "tailwindcss";
```

### TypeScript

Usar configuração strict:

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

---

# 11. Design tokens no Tailwind CSS v4

Centralizar a identidade no CSS global, utilizando a configuração CSS-first do Tailwind v4.

Exemplo:

```css
@import "tailwindcss";

@theme {
  --color-brand-black: #070707;
  --color-brand-surface: #111111;
  --color-brand-surface-2: #191919;
  --color-brand-red: #f1262d;
  --color-brand-red-strong: #e31e24;
  --color-brand-red-bright: #ff3132;
  --color-brand-white: #ffffff;
  --color-brand-gray-100: #f3f3f3;
  --color-brand-gray-300: #c9c9c9;
  --color-brand-gray-600: #747474;

  --font-heading: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
}

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
  background: var(--color-brand-black);
}

body {
  margin: 0;
  background: var(--color-brand-black);
  color: var(--color-brand-white);
  font-family: var(--font-body);
}

::selection {
  background: var(--color-brand-red);
  color: white;
}
```

---

# 12. Estrutura de arquivos sugerida

```text
src/
├── assets/
│   ├── brand/
│   ├── gallery/
│   └── services/
├── components/
│   ├── Header.astro
│   ├── MobileMenu.astro
│   ├── Hero.astro
│   ├── SectionHeading.astro
│   ├── ServiceCard.astro
│   ├── ServicesGrid.astro
│   ├── BeforeAfter.astro
│   ├── ResultsGallery.astro
│   ├── HeadlightRestoration.astro
│   ├── About.astro
│   ├── ContactSection.astro
│   ├── WhatsAppButton.astro
│   └── Footer.astro
├── data/
│   ├── business.ts
│   ├── services.ts
│   └── gallery.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── servicos.astro
│   ├── resultados.astro
│   └── contato.astro
├── scripts/
│   ├── mobile-menu.ts
│   └── before-after.ts
└── styles/
    └── global.css
public/
├── favicon.svg
├── og-image.jpg
└── robots.txt
astro.config.mjs
tsconfig.json
```

Se o site inicialmente tiver pouco conteúdo, pode ser uma landing page de uma única página. Mesmo assim, manter componentes e dados separados para facilitar expansão.

---

# 13. Dados centralizados da empresa

Criar `src/data/business.ts`:

```ts
export const business = {
  name: 'Auto Recuperadora Bruning',
  shortName: 'Bruning',
  instagram: 'auto_recuperadora_bruning',
  address: {
    street: 'Rua Oscar Serafini, 91',
    neighborhood: 'Esplanada',
    city: 'Caxias do Sul',
    state: 'RS',
    country: 'BR',
  },
  phones: [
    {
      label: '(54) 98136-5147',
      e164: '+5554981365147',
      whatsapp: true,
    },
    {
      label: '(54) 98437-2394',
      e164: '+5554984372394',
      whatsapp: true,
    },
  ],
} as const;
```

Todo endereço, telefone e link social deve vir deste arquivo.

---

# 14. Componentização

## Componentes Astro estáticos

Usar `.astro` para:

- Header;
- Hero;
- Serviços;
- cards;
- galeria;
- CTA;
- footer;
- SEO/schema.

## JavaScript/TypeScript no cliente

Usar apenas para:

- menu mobile;
- comparação antes/depois;
- lightbox, caso exista;
- event tracking de CTA, caso analytics seja configurado.

Evitar hidratar toda a página.

---

# 15. Responsividade

Projetar **mobile-first**.

Breakpoints de referência:

- mobile: `< 640px`;
- tablet: `640–1024px`;
- desktop: `> 1024px`;
- wide: `> 1280px`.

### Mobile

- hero com texto sobre imagem;
- headline de aproximadamente 40–52px conforme viewport;
- cards em uma coluna;
- CTAs ocupando largura confortável;
- contato sempre fácil de acessar;
- evitar imagens excessivamente altas que empurrem o CTA para fora da primeira tela.

### Desktop

- hero em duas áreas visuais ou imagem full-width com texto à esquerda;
- max-width geral entre `1200px` e `1320px`;
- espaçamento vertical amplo (`80–120px` por seção);
- grids com 3 colunas para serviços.

---

# 16. Acessibilidade

O agente deve implementar no mínimo:

- HTML semântico;
- um único `h1` por página;
- hierarquia correta de headings;
- `alt` descritivo nas fotos relevantes;
- alt vazio para imagens puramente decorativas;
- contraste WCAG AA;
- foco visível em links e botões;
- navegação completa por teclado;
- `aria-expanded` no menu mobile;
- labels em botões de ícone;
- `prefers-reduced-motion` para reduzir animações;
- áreas de toque com pelo menos 44px;
- não depender apenas de cor para indicar estado.

Exemplo:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 17. Performance

Meta: Lighthouse alto e carregamento muito rápido em 4G.

Implementar:

- SSG do Astro;
- `astro:assets` para imagens locais quando possível;
- AVIF/WebP;
- dimensões explícitas de imagens para evitar CLS;
- lazy loading abaixo da dobra;
- hero com imagem prioritária sem exagerar na resolução;
- zero bibliotecas de animação se CSS resolver;
- SVG para ícones;
- evitar sliders/carrosséis de terceiros;
- JS mínimo;
- fontes com `font-display: swap`;
- preferir self-host de fontes se houver licença e arquivos adequados.

---

# 18. SEO local

Cada página deve possuir:

- title único;
- meta description;
- canonical;
- Open Graph;
- favicon;
- `robots.txt`;
- `sitemap.xml`;
- dados estruturados `AutoRepair`/`LocalBusiness` quando as informações estiverem confirmadas.

### Exemplo de title da home

```text
Auto Recuperadora Bruning | Chapeação e Pintura em Caxias do Sul
```

### Meta description sugerida

```text
Chapeação, pintura automotiva, retoques, polimento e recuperação estética em Caxias do Sul. Fale com a Auto Recuperadora Bruning e solicite uma avaliação.
```

### Schema JSON-LD

Gerar a partir de `business.ts`, sem duplicar strings manualmente.

Não preencher:

- `openingHours` sem confirmação;
- `aggregateRating` sem fonte real;
- coordenadas sem validação;
- preços inventados.

---

# 19. Open Graph e compartilhamento

Criar uma imagem OG `1200x630` alinhada à identidade:

- fundo preto;
- foto de carro recuperado;
- logo Bruning;
- título curto: `Seu carro merece um novo visual.`;
- detalhe vermelho;
- endereço/cidade pequeno opcional.

Não sobrecarregar com telefones e listas de serviços.

---

# 20. Animação e microinterações

Usar animação com parcimônia.

Permitido:

- fade/translate suave na entrada de blocos;
- zoom muito leve em imagem no hover;
- underline vermelho animado em links;
- botão vermelho escurecendo no hover;
- antes/depois interativo.

Duração típica:

```text
150ms–350ms
```

Evitar:

- parallax pesado;
- animação contínua;
- carros deslizando pela tela;
- texto piscando;
- efeitos que atrasem acesso ao conteúdo.

---

# 21. Botões

## Primário

Fundo vermelho, texto branco, peso `700`.

```text
bg-brand-red
hover:bg-brand-red-strong
text-white
rounded-xl
```

## Secundário

Fundo transparente, borda clara ou cinza.

```text
border border-white/20
hover:border-white/40
hover:bg-white/5
```

## Formato

Preferir cantos de `10–14px`. As peças usam retângulos fortes; não usar botões extremamente arredondados no estilo pill em todo o site.

---

# 22. Cards

Padrão recomendado:

```text
background: #111111
border: 1px solid rgba(255,255,255,.08)
border-radius: 16px
```

No hover desktop:

- borda levemente vermelha;
- imagem com `scale(1.02)`;
- transição curta.

Não aplicar box-shadow exagerada.

---

# 23. Ícones

Preferir uma única biblioteca leve ou SVGs próprios.

Sugestão:

- Lucide Icons;
- SVG inline.

Ícones úteis:

- MapPin;
- Phone;
- MessageCircle;
- Instagram;
- Paintbrush;
- Wrench/Car;
- Sparkles;
- ShieldCheck.

Não misturar estilos de ícones preenchidos e lineares aleatoriamente.

---

# 24. Conteúdo e galeria

Os dados de serviços devem ficar em `src/data/services.ts`.

Exemplo:

```ts
export interface Service {
  slug: string;
  title: string;
  summary: string;
  image?: string;
}

export const services: Service[] = [
  {
    slug: 'chapeacao',
    title: 'Chapeação e funilaria',
    summary: 'Correção de amassados e danos de colisão com atenção ao alinhamento e acabamento.',
  },
  {
    slug: 'pintura-automotiva',
    title: 'Pintura automotiva',
    summary: 'Preparação e pintura para recuperar uniformidade, brilho e aparência do veículo.',
  },
];
```

Para portfólio, usar estrutura de dados com `before`, `after`, `alt`, `service` e `featured`.

---

# 25. Formulário de orçamento

O formulário é opcional, porque o WhatsApp é o canal mais natural para este tipo de serviço.

Caso exista, pedir apenas:

- nome;
- telefone/WhatsApp;
- veículo;
- descrição do reparo;
- fotos opcionais.

Não solicitar dados desnecessários.

Se não houver backend definido, **não criar formulário que aparenta enviar e perde os dados**. Nesse caso, usar um pequeno formulário local que gere a mensagem e abra o WhatsApp.

Exemplo de fluxo:

1. usuário preenche veículo e descrição;
2. TypeScript monta a mensagem;
3. navegador abre `wa.me` com mensagem codificada.

---

# 26. Página de serviços

Se houver conteúdo suficiente, criar `/servicos` com blocos detalhados para cada serviço.

Cada serviço deve responder:

- qual problema resolve;
- como o processo é tratado em termos gerais;
- exemplos reais;
- CTA para avaliação.

Evitar detalhar processos proprietários sem confirmação.

---

# 27. Página de resultados

Criar `/resultados` se houver pelo menos 10–12 conjuntos de imagens.

Filtros possíveis:

- Todos;
- Pintura;
- Chapeação;
- Retoques;
- Faróis.

Filtros podem ser implementados com JavaScript vanilla e progressive enhancement.

---

# 28. Conteúdo do Instagram

Não incorporar feed do Instagram por script de terceiros na home por padrão.

Motivos:

- performance;
- privacidade;
- instabilidade do embed;
- dependência externa.

Melhor solução:

- selecionar manualmente trabalhos relevantes;
- publicar as fotos no site com autorização;
- adicionar botão `Ver mais no Instagram`.

Se o cliente exigir integração dinâmica, avaliar uma solução oficial/API separadamente.

---

# 29. Segurança e privacidade

- não expor tokens no frontend;
- não armazenar segredos em `PUBLIC_*`;
- links externos com comportamento apropriado;
- formulário com validação server-side se houver backend;
- política de privacidade quando houver analytics, formulário ou coleta de dados;
- evitar trackers desnecessários.

---

# 30. Checklist de implementação para o agente

## Fase 1 — Preparação

- [ ] Criar projeto Astro com TypeScript strict.
- [ ] Instalar Tailwind CSS v4 via `@tailwindcss/vite`.
- [ ] Criar tokens de marca no CSS global.
- [ ] Criar `business.ts` com todos os contatos centralizados.
- [ ] Receber logo oficial em SVG/PNG transparente.
- [ ] Organizar fotos reais em `src/assets`.
- [ ] Confirmar endereço, telefones e horário antes do deploy.

## Fase 2 — Layout

- [ ] Implementar BaseLayout e SEO.
- [ ] Implementar Header responsivo.
- [ ] Implementar Hero com CTA para WhatsApp.
- [ ] Implementar faixa de diferenciais.
- [ ] Implementar seção de serviços.
- [ ] Implementar antes/depois.
- [ ] Implementar galeria.
- [ ] Implementar bloco de revitalização de faróis.
- [ ] Implementar Sobre.
- [ ] Implementar CTA final.
- [ ] Implementar contato/localização.
- [ ] Implementar Footer.
- [ ] Implementar botão flutuante de WhatsApp.

## Fase 3 — Qualidade

- [ ] Validar mobile 360px/390px.
- [ ] Validar tablet.
- [ ] Validar desktop 1440px.
- [ ] Testar teclado e leitores de tela básicos.
- [ ] Testar `prefers-reduced-motion`.
- [ ] Otimizar imagens.
- [ ] Validar Core Web Vitals.
- [ ] Revisar contraste.
- [ ] Executar `astro check`.
- [ ] Executar build de produção.

## Fase 4 — SEO e publicação

- [ ] Adicionar sitemap.
- [ ] Adicionar `robots.txt`.
- [ ] Adicionar canonical.
- [ ] Criar OG image.
- [ ] Adicionar JSON-LD com dados confirmados.
- [ ] Testar links WhatsApp/Instagram/Maps.
- [ ] Confirmar domínio final.
- [ ] Configurar analytics apenas se solicitado.

---

# 31. Critérios de aceite

O trabalho só deve ser considerado pronto se:

1. a identidade parecer claramente derivada das peças da Bruning;
2. preto/vermelho/branco forem usados de forma consistente;
3. a home possuir CTA visível para WhatsApp na primeira dobra;
4. o portfólio usar fotos reais;
5. a experiência mobile estiver completa;
6. não houver conteúdo inventado sobre tempo de empresa, avaliações ou garantias;
7. endereço e telefone estiverem centralizados em configuração;
8. não houver dependência de React/Vue para interações triviais;
9. o site funcionar com JavaScript mínimo;
10. as imagens estiverem otimizadas;
11. todos os controles forem acessíveis por teclado;
12. o build Astro finalizar sem erros;
13. o site tiver SEO local básico configurado;
14. links de WhatsApp e localização estiverem testados.

---

# 32. Prompt operacional para o agente de desenvolvimento

Use o texto abaixo como instrução direta para o agente responsável pela implementação:

```text
Implemente o site da Auto Recuperadora Bruning seguindo integralmente este guia de identidade visual.

Stack obrigatória:
- Astro
- TypeScript em modo strict
- Tailwind CSS v4 com @tailwindcss/vite

Princípios:
- mobile-first;
- HTML estático sempre que possível;
- JavaScript mínimo;
- sem React/Vue/Svelte salvo necessidade real e justificada;
- componentes reutilizáveis;
- dados empresariais centralizados em src/data/business.ts;
- fotos reais do portfólio;
- foco em conversão por WhatsApp;
- acessibilidade WCAG AA;
- SEO local;
- alta performance.

Direção visual:
- fundo preto/grafite;
- vermelho #F1262D como cor primária;
- branco para tipografia principal;
- headings pesados e curtos;
- fotografia automotiva em destaque;
- grafismos geométricos discretos inspirados nas peças atuais;
- sem visual genérico de template SaaS;
- sem efeitos futuristas/neon;
- sem excesso de animação.

Antes de implementar conteúdo factual que não esteja neste documento, não invente. Marque como TODO e solicite confirmação, especialmente horário, endereço, serviços adicionais, tempo de atuação, garantias, avaliações, coordenadas e informações da equipe.

Implemente primeiro a home completa e funcional. Depois crie páginas adicionais somente quando houver conteúdo suficiente.
```

---

# 33. Fontes e referências consultadas

## Marca e empresa

- Instagram oficial informado pelo cliente: https://www.instagram.com/auto_recuperadora_bruning/
- Resultado público indexado do perfil: bio com telefone principal e conteúdo recente relacionado a pintura/polimento, chapeação, retoques e recuperação.
- Peças de identidade visual fornecidas pelo cliente nesta conversa.

## Stack técnica

- Astro — instalação e setup: https://docs.astro.build/en/install-and-setup/
- Astro — TypeScript: https://docs.astro.build/en/guides/typescript/
- Tailwind CSS — instalação com Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- Tailwind CSS v4 — upgrade/configuração via Vite: https://tailwindcss.com/docs/upgrade-guide

---

# 34. Observação final

A principal força da identidade da Auto Recuperadora Bruning é a combinação de **preto + vermelho + fotografia de resultado**. O site deve refinar a estética já usada no Instagram, mantendo reconhecimento imediato da marca, mas organizando os elementos com mais espaço, consistência tipográfica, hierarquia e foco em conversão.

A experiência ideal é simples: o visitante entende em poucos segundos **o que a empresa faz**, **vê exemplos reais do resultado** e consegue **pedir uma avaliação pelo WhatsApp sem procurar pelo contato**.
