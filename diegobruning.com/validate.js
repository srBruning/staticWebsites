#!/usr/bin/env node

/**
 * Validation Script - Valida a versão de produção
 * Uso: node validate.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function validate() {
  log('\n✓ Iniciando validação...', 'blue');
  
  const INPUT_FILE = path.join(__dirname, 'index-formatted.html');
  const OUTPUT_FILE = path.join(__dirname, 'index.html');
  
  if (!fs.existsSync(OUTPUT_FILE)) {
    log('✗ Arquivo de produção não encontrado. Execute: npm run build', 'red');
    return false;
  }
  
  let html = fs.readFileSync(OUTPUT_FILE, 'utf-8');
  let issues = [];
  
  log('\n📋 Validações:', 'yellow');
  
  // Verifica doctype
  if (!html.includes('<!DOCTYPE html>')) {
    issues.push('DOCTYPE HTML5 não encontrado');
  } else {
    log('  ✓ DOCTYPE correto', 'green');
  }
  
  // Verifica meta charset
  if (!html.includes('charset=UTF-8')) {
    issues.push('Meta charset UTF-8 não encontrado');
  } else {
    log('  ✓ Meta charset presente', 'green');
  }
  
  // Verifica viewport
  if (!html.includes('viewport')) {
    issues.push('Meta viewport não encontrado');
  } else {
    log('  ✓ Meta viewport presente', 'green');
  }
  
  // Verifica links âncora
  const anchors = html.match(/id="[^"]+"/g) || [];
  const links = html.match(/href="#[^"]+"/g) || [];
  
  if (anchors.length > 0) {
    log(`  ✓ ${anchors.length} âncoras encontradas`, 'green');
  }
  
  if (links.length > 0) {
    log(`  ✓ ${links.length} links internos encontrados`, 'green');
  }
  
  // Verifica título
  if (html.includes('<title>')) {
    log('  ✓ Tag title presente', 'green');
  } else {
    issues.push('Tag title não encontrada');
  }
  
  // Verifica estrutura básica
  if (html.includes('<html') && html.includes('</html>')) {
    log('  ✓ Estrutura HTML válida', 'green');
  } else {
    issues.push('Estrutura HTML inválida');
  }
  
  // Verifica espaçamento excessivo (indicador de falha na minificação)
  const excessiveSpaces = (html.match(/\s{3,}/g) || []).length;
  if (excessiveSpaces > 10) {
    issues.push(`Possível falha na minificação: ${excessiveSpaces} sequências de espaços');`);
  } else {
    log('  ✓ Minificação OK', 'green');
  }
  
  // Verifica comentários HTML (não devem estar em produção)
  const comments = (html.match(/<!--/g) || []).length;
  if (comments > 0) {
    issues.push(`${comments} comentários HTML encontrados (devem ser removidos)`);
  } else {
    log('  ✓ Sem comentários HTML', 'green');
  }
  
  // Verifica scripts
  const scripts = (html.match(/<script/g) || []).length;
  log(`  ✓ ${scripts} tags script encontradas`, 'green');
  
  // Verifica imagens com alt
  const images = (html.match(/<img[^>]*>/g) || []);
  const imagesWithAlt = (html.match(/<img[^>]*alt=[^>]*>/g) || []).length;
  log(`  ✓ ${imagesWithAlt}/${images.length} imagens com alt text`, imagesWithAlt === images.length ? 'green' : 'yellow');
  
  // Tamanho do arquivo
  const size = Buffer.byteLength(html, 'utf8');
  log(`\n📊 Tamanho do arquivo: ${(size / 1024).toFixed(2)} KB`, 'blue');
  
  if (issues.length > 0) {
    log(`\n⚠️  ${issues.length} problemas encontrados:`, 'yellow');
    issues.forEach((issue, i) => {
      log(`  ${i + 1}. ${issue}`, 'red');
    });
    return false;
  }
  
  log('\n✅ Validação concluída com sucesso!', 'green');
  return true;
}

if (validate()) {
  process.exit(0);
} else {
  process.exit(1);
}
