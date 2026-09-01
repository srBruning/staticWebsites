#!/usr/bin/env node

/**
 * Build Script - Gera versão minimizada para produção
 * Uso: node build.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
const INPUT_FILE = path.join(__dirname, 'index-formatted.html');
const OUTPUT_DIR = path.join(__dirname, 'build');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'index.html');
const BACKUP_FILE = path.join(OUTPUT_DIR, 'index.backup.html');

// Cores para terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Minifica HTML removendo espaços desnecessários
 */
function minifyHTML(html) {
  // Remove comentários HTML
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove espaços em branco múltiplos
  html = html.replace(/\s+/g, ' ');
  
  // Remove espaços antes de tags
  html = html.replace(/>\s+</g, '><');
  
  // Remove espaços antes e depois de atributos
  html = html.replace(/\s+=/g, '=');
  html = html.replace(/=\s+/g, '=');
  
  // Remove espaços ao redor de conteúdo em scripts
  html = html.replace(/(<script[^>]*>)\s+/g, '$1');
  html = html.replace(/\s+(<\/script>)/g, '$1');
  
  // Remove espaços ao redor de conteúdo em styles
  html = html.replace(/(<style[^>]*>)\s+/g, '$1');
  html = html.replace(/\s+(<\/style>)/g, '$1');
  
  return html.trim();
}

/**
 * Otimiza CSS inline
 */
function optimizeInlineCSS(html) {
  // Substitui cores nomeadas por hex (quando possível)
  html = html.replace(/rgb\(10,\s*10,\s*10\)/g, '#0a0a0a');
  html = html.replace(/rgb\(26,\s*26,\s*26\)/g, '#1a1a1a');
  html = html.replace(/rgb\(45,\s*45,\s*45\)/g, '#2d2d2d');
  
  return html;
}

/**
 * Calcula estatísticas de tamanho
 */
function getStats(original, minified) {
  const origSize = Buffer.byteLength(original, 'utf8');
  const minSize = Buffer.byteLength(minified, 'utf8');
  const reduction = ((1 - minSize / origSize) * 100).toFixed(2);
  
  return {
    original: (origSize / 1024).toFixed(2),
    minified: (minSize / 1024).toFixed(2),
    reduction: reduction,
  };
}

async function hashContent(content) {
  const crypto = await import('crypto');
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 10);
}

/**
 * Função principal
 */
async function build() {
  log('\n🔨 Iniciando build de produção...', 'blue');
  
  try {
    // Lê arquivo original (usa index-formatted.html se existir, senão tenta index.html)
    let inputPath = INPUT_FILE;
    if (!fs.existsSync(inputPath)) {
      const fallback = path.join(__dirname, 'index.html');
      if (fs.existsSync(fallback)) {
        log(`⚠️  ${INPUT_FILE} não encontrado — usando fallback ${fallback}`, 'yellow');
        inputPath = fallback;
      } else {
        log(`✗ Arquivo não encontrado: ${INPUT_FILE}`, 'red');
        process.exit(1);
      }
    }
    
    log(`📖 Lendo ${inputPath}...`, 'yellow');
    let html = fs.readFileSync(inputPath, 'utf-8');
    
    const originalHTML = html;
    
    // Aplica otimizações
    log('⚡ Minificando HTML...', 'yellow');
    html = minifyHTML(html);
    
    log('🎨 Otimizando CSS inline...', 'yellow');
    html = optimizeInlineCSS(html);

    // Limpar pasta de saída para evitar arquivos obsoletos
    if (fs.existsSync(OUTPUT_DIR)) {
      log(`🧹 Limpando pasta de saída ${OUTPUT_DIR}...`, 'yellow');
      // Usar fs.readdirSync + unlink para compatibilidade com Node antigas
      const files = fs.readdirSync(OUTPUT_DIR, { withFileTypes: true });
      for (const file of files) {
        const fullPath = path.join(OUTPUT_DIR, file.name);
        if (file.isDirectory()) {
          const subFiles = fs.readdirSync(fullPath);
          for (const subFile of subFiles) {
            fs.unlinkSync(path.join(fullPath, subFile));
          }
          fs.rmdirSync(fullPath);
        } else {
          fs.unlinkSync(fullPath);
        }
      }
    }
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const outputFilesDir = path.join(OUTPUT_DIR, 'files');
    fs.mkdirSync(outputFilesDir, { recursive: true });

    // Encontrar referências a arquivos em ./files/*.js e ./files/*.css
    const fileRefs = [];
    const jsRegex = /<script[^>]+src=["'](\.\/files\/[^"']+\.js)["'][^>]*><\/script>/g;
    const cssRegex = /<link[^>]+href=["'](\.\/files\/[^"']+\.css)["'][^>]*>/g;

    let m;
    while ((m = jsRegex.exec(html)) !== null) fileRefs.push(m[1]);
    while ((m = cssRegex.exec(html)) !== null) fileRefs.push(m[1]);

    const manifest = {};
    // Usar hash baseado em data (YYYYMMDDHHMMSS) para renomear js/css
    const dateHash = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
    for (const relPath of Array.from(new Set(fileRefs))) {
      const absPath = path.join(__dirname, relPath.replace('./', ''));
      if (!fs.existsSync(absPath)) {
        log(`⚠️ Arquivo referenciado não encontrado: ${absPath}`, 'yellow');
        continue;
      }
      const parsed = path.parse(absPath);
      // Para JS e CSS usamos o dateHash; caso queira outro comportamento, ajuste aqui
      const hash = dateHash;
      const newName = `${parsed.name}.${hash}${parsed.ext}`;
      const newRel = `./files/${newName}`;
      const newAbs = path.join(outputFilesDir, newName);
      fs.copyFileSync(absPath, newAbs);
      manifest[relPath] = newRel;
      log(`   Copiado ${relPath} -> output/files/${newName}`, 'yellow');
    }

    // Encontrar referências a imagens em ./files/* (png, jpg, svg, etc.) e copiá-las
    // Procurar em index.html e também em livros.html se existir
    let allHtmlContent = html;
    const livrosInputPath = path.join(__dirname, 'livros.html');
    if (fs.existsSync(livrosInputPath)) {
      allHtmlContent += ' ' + fs.readFileSync(livrosInputPath, 'utf-8');
    }
    
    const imgRegex = /(\.\/files\/[^"'\s>]+\.(?:png|jpe?g|gif|webp|svg|ico))/gi;
    const imgRefs = [];
    let im;
    while ((im = imgRegex.exec(allHtmlContent)) !== null) imgRefs.push(im[1]);

    for (const relPathImg of Array.from(new Set(imgRefs))) {
      const absPathImg = path.join(__dirname, relPathImg.replace('./', ''));
      if (!fs.existsSync(absPathImg)) {
        log(`⚠️ Imagem referenciada não encontrada: ${absPathImg}`, 'yellow');
        continue;
      }
      const parsedImg = path.parse(absPathImg);
      const newNameImg = `${parsedImg.base}`;
      const newAbsImg = path.join(outputFilesDir, newNameImg);
      fs.copyFileSync(absPathImg, newAbsImg);
      // Mantemos o mesmo nome para imagens (caso queira hashing, ajustar aqui)
      manifest[relPathImg] = `./files/${newNameImg}`;
      log(`   Copiado imagem ${relPathImg} -> output/files/${newNameImg}`, 'yellow');
    }

    // Atualiza referências no HTML
    for (const [oldRel, newRel] of Object.entries(manifest)) {
      const escaped = oldRel.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const re = new RegExp(escaped, 'g');
      html = html.replace(re, newRel);
    }

    // Se já existir index.html dentro de output, cria backup
    if (fs.existsSync(OUTPUT_FILE)) {
      log('💾 Criando backup do arquivo anterior...', 'yellow');
      fs.copyFileSync(OUTPUT_FILE, BACKUP_FILE);
    }

    // Escreve arquivo minificado em output/index.html
    log(`📝 Escrevendo ${OUTPUT_FILE}...`, 'yellow');
    fs.writeFileSync(OUTPUT_FILE, html, 'utf-8');
    
    // Copiar livros.html se existir
    const LIVROS_INPUT = path.join(__dirname, 'livros.html');
    const LIVROS_OUTPUT = path.join(OUTPUT_DIR, 'livros.html');
    if (fs.existsSync(LIVROS_INPUT)) {
      let livrosHtml = fs.readFileSync(LIVROS_INPUT, 'utf-8');
      // Aplicar minificação e otimizações ao livros.html também
      livrosHtml = minifyHTML(livrosHtml);
      livrosHtml = optimizeInlineCSS(livrosHtml);
      // Atualizar referências de assets no livros.html
      for (const [oldRel, newRel] of Object.entries(manifest)) {
        const escaped = oldRel.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const re = new RegExp(escaped, 'g');
        livrosHtml = livrosHtml.replace(re, newRel);
      }
      fs.writeFileSync(LIVROS_OUTPUT, livrosHtml, 'utf-8');
      log(`📝 Escrevendo ${LIVROS_OUTPUT}...`, 'yellow');
    }
    
    // Copiar sitemape.xml se existir
    const SITEMAPE_INPUT = path.join(__dirname, 'sitemap.xml');
    const SITEMAPE_OUTPUT = path.join(OUTPUT_DIR, 'sitemap.xml');
    if (fs.existsSync(SITEMAPE_INPUT)) {
      let sitemapHtml = fs.readFileSync(SITEMAPE_INPUT, 'utf-8');
    
      fs.writeFileSync(SITEMAPE_OUTPUT, sitemapHtml, 'utf-8');
      log(`📝 Escrevendo ${SITEMAPE_OUTPUT}...`, 'yellow');
    }

    // Copiar googlee5aa1f2f611bba92.html se existir
    const GOOGLE_VERIF_INPUT = path.join(__dirname, 'googlee5aa1f2f611bba92.html');
    const GOOGLE_VERIF_OUTPUT = path.join(OUTPUT_DIR, 'googlee5aa1f2f611bba92.html');
    if (fs.existsSync(GOOGLE_VERIF_INPUT)) {
      fs.copyFileSync(GOOGLE_VERIF_INPUT, GOOGLE_VERIF_OUTPUT);
      log(`📝 Copiando ${GOOGLE_VERIF_OUTPUT}...`, 'yellow');
    }
    
    // Calcula estatísticas
    const stats = getStats(originalHTML, html);
    
    log('\n✅ Build concluído com sucesso!', 'green');
    log('\n📊 Estatísticas:', 'blue');
    log(`   Arquivo original:    ${stats.original} KB`);
    log(`   Arquivo minificado:  ${stats.minified} KB`);
    log(`   Redução:             ${stats.reduction}%\n`);

    // Gera manifest JSON
    const manifestPath = path.join(OUTPUT_DIR, 'asset-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    log(`✔ Arquivo de produção gerado: ${OUTPUT_FILE}`, 'green');
    log(`✔ Manifest de assets: ${manifestPath}`, 'green');
    if (fs.existsSync(BACKUP_FILE)) {
      log(`✔ Backup anterior salvo em: ${BACKUP_FILE}`, 'green');
    }
    
  } catch (error) {
    log(`\n✗ Erro durante o build: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Executa build
build();
