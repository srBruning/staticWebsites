import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const postsDir = path.join(process.cwd(), 'src/data/posts');
const templateDir = path.join(process.cwd(), 'scripts/templates');
const outputDir = path.join(process.cwd(), 'public/blog');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const postTemplate = fs.readFileSync(path.join(templateDir, 'post.html'), 'utf-8');
const indexTemplate = fs.readFileSync(path.join(templateDir, 'index.html'), 'utf-8');

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T12:00:00');
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Extrai YYYY-MM-DD do nome da pasta yyyymmdd_seq_desc (fallback quando meta.date não existe). */
function dateFromFolder(folderName) {
  const m = folderName.match(/^(\d{4})(\d{2})(\d{2})_/);
  if (!m) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

// Cada post é uma pasta yyyymmdd_seq_desc com post.md (ou *.md) e meta.json
const postFolders = fs.readdirSync(postsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const postsData = [];

postFolders.forEach(slug => {
  const folder = path.join(postsDir, slug);

  const mdFile = fs.existsSync(path.join(folder, 'post.md'))
    ? 'post.md'
    : fs.readdirSync(folder).find(f => f.endsWith('.md'));

  if (!mdFile) return;

  const metaPath = path.join(folder, 'meta.json');
  let meta = { title: null, date: null, cover: null, tags: [], metaTitle: null, metaDescription: null, keyword: null, keywordsSecondary: [] };
  if (fs.existsSync(metaPath)) {
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    } catch (e) {
      console.warn(`meta.json inválido em ${slug}, ignorando.`);
    }
  }

  const dateIso = meta.date || dateFromFolder(slug);
  const dateFormatted = formatDate(dateIso);

  const mdPath = path.join(folder, mdFile);
  const body = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = marked(body);

  const m = body.match(/^#\s+(.+)$/m);
  const title = meta.title || (m && m[1]) || 'Sem título';
  const metaTitle = meta.metaTitle || title;
  const metaDescription = meta.metaDescription || '';
  const sec = Array.isArray(meta.keywordsSecondary) ? meta.keywordsSecondary : [];
  const metaKeywords = [meta.keyword, ...sec].filter(Boolean).join(', ');
  const cover = meta.cover || null;
  const tags = Array.isArray(meta.tags) ? meta.tags : [];

  const tagsHtml = tags.length
    ? tags.map(t => `<span class="blog-tag">${escapeHtml(t)}</span>`).join('')
    : '';

  const coverHtml = cover
    ? `<img class="blog-cover" src="${escapeHtml(cover)}" alt="" loading="lazy">`
    : '';

  const dateBlock = dateFormatted
    ? `<time class="blog-article-date" datetime="${escapeHtml(dateIso || '')}">Publicado em ${escapeHtml(dateFormatted)}</time>`
    : '';

  const postHtml = postTemplate
    .replace(/{{META_TITLE}}/g, escapeHtml(metaTitle))
    .replace(/{{META_DESCRIPTION}}/g, escapeHtml(metaDescription))
    .replace(/{{META_KEYWORDS}}/g, escapeHtml(metaKeywords))
    .replace(/{{POST_DATE_BLOCK}}/g, dateBlock)
    .replace(/{{POST_COVER}}/g, coverHtml)
    .replace(/{{POST_TAGS}}/g, tagsHtml)
    .replace(/{{POST_CONTENT}}/g, htmlContent);

  const outputFilePath = path.join(outputDir, `${slug}.html`);
  fs.writeFileSync(outputFilePath, postHtml);

  postsData.push({
    slug,
    title,
    dateIso: dateIso || '9999-99-99',
    dateFormatted,
    cover,
    tags,
    tagsHtml,
    url: `/blog/${slug}.html`
  });
});

// Ordenar pelo nome da pasta (decrescente: yyyymmdd_seq_desc, ex. 20260125_02_... antes de 20260125_01_...)
postsData.sort((a, b) => (b.slug || '').localeCompare(a.slug || ''));

const postLinks = postsData
  .map(post => {
    const coverBlock = post.cover
      ? `<img class="blog-card-cover" src="${escapeHtml(post.cover)}" alt="" loading="lazy">`
      : '';
    const dateBlock = post.dateFormatted
      ? `<time class="blog-card-date" datetime="${escapeHtml(post.dateIso)}">${escapeHtml(post.dateFormatted)}</time>`
      : '';
    return `
    <div class="blog-card">
        <a href="${escapeHtml(post.url)}" class="blog-card-link">
            ${coverBlock}
            ${dateBlock}
            <span class="blog-card-title">${escapeHtml(post.title)}</span>
        </a>
        ${post.tagsHtml ? `<div class="blog-card-tags">${post.tagsHtml}</div>` : ''}
    </div>
  `;
  })
  .join('');

const indexHtml = indexTemplate
  .replace(/{{META_TITLE}}/g, 'Blog')
  .replace(/{{META_DESCRIPTION}}/g, 'Artigos e dicas da Recuperadora Bruning em Garopaba.')
  .replace(/{{META_KEYWORDS}}/g, 'blog, Garopaba, Recuperadora Bruning')
  .replace(/{{POST_LINKS}}/g, postLinks);

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

console.log('Blog pages generated successfully!');
