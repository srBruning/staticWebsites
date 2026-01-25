# Estrutura dos posts do blog

Cada post fica em **uma pasta** com o nome no padrão `yyyymmdd_seq_desc` (ex: `20260125_01_ferrugem`).  
A URL gerada será `/blog/20260125_01_ferrugem.html`.  
As postagens na página inicial são **ordenadas pelo nome da pasta em ordem decrescente** (ex.: `20260125_02_...` antes de `20260125_01_...`).

## Nome da pasta

Use: **`yyyymmdd_seq_desc`**

- `yyyymmdd` — Data (ano, mês, dia)
- `seq` — Número de sequência do dia (01, 02…)
- `desc` — Descrição em minúsculas, sem espaços (ex: `ferrugem`, `dicas-viagem`)

Exemplo: `20260125_01_ferrugem`, `20260126_01_dicas-viagem`

## Arquivos da pasta

- **`post.md`** — Conteúdo em Markdown (o primeiro `# Título` é usado como fallback se `meta.json` não tiver `title`).
- **`meta.json`** — Metadados:

```json
{
  "title": "Título do post",
  "date": "2026-01-25",
  "cover": "/assets/imagem-capa.jpg",
  "tags": ["tag1", "tag2"],
  "metaTitle": "Título para SEO (tema da página e <title>)",
  "metaDescription": "Descrição para <meta name=\"description\"> (resumo, até ~160 caracteres).",
  "keyword": "Palavra-chave principal",
  "keywordsSecondary": ["secundária 1", "secundária 2"]
}
```

- `title` — Título (usa o primeiro `#` do `.md` se faltar).
- `date` — Data de publicação em `YYYY-MM-DD`. Se faltar, tenta usar `yyyymmdd` do nome da pasta.
- `cover` — Imagem de capa (caminho absoluto, ex: `/assets/...`). Opcional.
- `tags` — Lista de tags. Opcional.
- `metaTitle` — Título para `<title>` e SEO. Se faltar, usa `title`. Opcional.
- `metaDescription` — Texto para `<meta name="description">`. Opcional.
- `keyword` — Palavra-chave principal (vai primeiro em `<meta name="keywords">`). Opcional.
- `keywordsSecondary` — Palavras-chave secundárias (array). Junto com `keyword`, vira `content` de `<meta name="keywords">` (ex.: `"principal, sec1, sec2"`). Opcional.

## Exemplo

```
src/data/posts/
  20260125_01_ferrugem/
    meta.json
    post.md
```

## Nova postagem

1. Crie a pasta: `src/data/posts/YYYYMMDD_01_descricao/`
2. Crie `meta.json` com `title`, `date` (YYYY-MM-DD), `cover`, `tags`, `metaTitle`, `metaDescription`, `keyword` e `keywordsSecondary` (todos opcionais, exceto `title` e `date`).
3. Crie `post.md` com o texto em Markdown.
4. Rode `npm run buildblog` para gerar o HTML.
