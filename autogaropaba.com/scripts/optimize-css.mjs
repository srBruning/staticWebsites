import fs from 'fs/promises';
import path from 'path';

const buildDir = 'build';
const indexPath = path.join(buildDir, 'index.html');

async function optimizeCssLoading() {
  try {
    let html = await fs.readFile(indexPath, 'utf-8');

    // Regex para encontrar a tag do stylesheet principal gerado pelo Vite
    const cssLinkRegex = /<link rel="stylesheet" [^>]*href="(\/assets\/index-[a-zA-Z0-9_]+\.css)"[^>]*>/;
    const match = html.match(cssLinkRegex);

    if (!match) {
      console.log('Nenhum link de CSS para otimizar foi encontrado. O build está otimizado?');
      return;
    }

    const originalLink = match[0];
    const cssUrl = match[1];

    // 1. Adiciona uma tag de preload para o CSS.
    // Opcional, mas bom para performance: o navegador começa a baixar antes.
    const preloadLink = `<link rel="preload" href="${cssUrl}" as="style">`;

    // 2. Modifica o link original para carregar de forma assíncrona
    const asyncLink = originalLink.replace('rel="stylesheet"', 'rel="stylesheet" media="print" onload="this.media=\'all\'"');

    // Adiciona um fallback para navegadores sem JavaScript
    const noScriptFallback = `<noscript>${originalLink}</noscript>`;

    // Substitui o link original pela nova estrutura
    const newHtml = html.replace(originalLink, `${preloadLink}\n    ${asyncLink}\n    ${noScriptFallback}`);
    
    await fs.writeFile(indexPath, newHtml, 'utf-8');

    console.log('O carregamento de CSS foi otimizado com sucesso!');

  } catch (error) {
    console.error('Ocorreu um erro ao otimizar o CSS:', error);
    process.exit(1);
  }
}

optimizeCssLoading();
