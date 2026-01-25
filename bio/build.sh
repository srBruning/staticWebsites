#!/bin/bash

# Build Script - Gera versão minimizada para produção
# Uso: ./build.sh ou bash build.sh

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Diretório do script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
INPUT_FILE="$SCRIPT_DIR/index-formatted.html"
OUTPUT_DIR="$SCRIPT_DIR/output"
OUTPUT_FILE="$OUTPUT_DIR/index.html"
BACKUP_FILE="$OUTPUT_DIR/index.backup.html"
STATS_FILE="$OUTPUT_DIR/build-stats.json"

echo -e "${BLUE}🔨 Iniciando build de produção...${NC}\n"

# Verifica se arquivo de entrada existe
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "${RED}✗ Arquivo não encontrado: $INPUT_FILE${NC}"
    exit 1
fi

echo -e "${YELLOW}📖 Lendo $INPUT_FILE...${NC}"
original_size=$(wc -c < "$INPUT_FILE")

# Limpa pasta de saída (remove arquivos antigos) e cria diretório
if [ -d "$OUTPUT_DIR" ]; then
    echo -e "${YELLOW}🧹 Limpando pasta de saída $OUTPUT_DIR...${NC}"
    rm -rf "$OUTPUT_DIR"
fi
mkdir -p "$OUTPUT_DIR/files"

# Hash baseado em data (UTC) para renomear js/css
DATE_HASH=$(date -u +'%Y%m%d%H%M%S')

# Cria backup se arquivo de saída existe
if [ -f "$OUTPUT_FILE" ]; then
    echo -e "${YELLOW}💾 Criando backup do arquivo anterior...${NC}"
    cp "$OUTPUT_FILE" "$BACKUP_FILE"
fi

echo -e "${YELLOW}⚡ Minificando HTML...${NC}"

TMP_MIN="$OUTPUT_DIR/.tmp_min.html"

# Usa sed/perl para minificação do HTML (para arquivo temporário)
cat "$INPUT_FILE" | \
    sed '<!--/,/-->/{ /<!--/!{ /-->/!d }; }' | \
    sed 's/[[:space:]]\+/ /g' | \
    sed 's/> </></g' | \
    tr '\n' ' ' > "$TMP_MIN"

# Processar assets (js/css) em ./files
declare -A MANIFEST
for f in "$SCRIPT_DIR"/files/*.{js,css}; do
    [ -e "$f" ] || continue
    base=$(basename "$f")
    hash="$DATE_HASH"
    name="${base%.*}.$hash.${base##*.}"
    cp "$f" "$OUTPUT_DIR/files/$name"
    MANIFEST["./files/$base"]="./files/$name"
    # Substitui referências no HTML minificado temporário
    sed -i "s|./files/$base|./files/$name|g" "$TMP_MIN"
    echo -e "   Copiado ./files/$base -> output/files/$name"
done

# Copiar imagens (preserva nomes)
for i in "$SCRIPT_DIR"/files/*.{png,jpg,jpeg,gif,webp,svg,ico}; do
    [ -e "$i" ] || continue
    base=$(basename "$i")
    cp "$i" "$OUTPUT_DIR/files/$base"
    MANIFEST["./files/$base"]="./files/$base"
    echo -e "   Copiado ./files/$base -> output/files/$base"
done

# Move o temporário para arquivo final
mv "$TMP_MIN" "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

minified_size=$(wc -c < "$OUTPUT_FILE")
reduction=$(( (original_size - minified_size) * 100 / original_size ))

echo -e "${GREEN}✅ Build concluído com sucesso!${NC}\n"
echo -e "${BLUE}📊 Estatísticas:${NC}"
echo "   Arquivo original:    $(( original_size / 1024 )) KB"
echo "   Arquivo minificado:  $(( minified_size / 1024 )) KB"
echo "   Redução:             $reduction%"
echo ""
echo -e "${GREEN}✔ Arquivo de produção gerado: $OUTPUT_FILE${NC}"

if [ -f "$BACKUP_FILE" ]; then
    echo -e "${GREEN}✔ Backup anterior salvo em: $BACKUP_FILE${NC}"
fi

# Gera relatório JSON (opcional)
# Gera manifest JSON
MANIFEST_JSON="$OUTPUT_DIR/asset-manifest.json"
printf '{\n' > "$MANIFEST_JSON"
first=true
for key in "${!MANIFEST[@]}"; do
    if [ "$first" = true ]; then
        first=false
    else
        printf ',\n' >> "$MANIFEST_JSON"
    fi
    printf '  "%s": "%s"' "$key" "${MANIFEST[$key]}" >> "$MANIFEST_JSON"
done
printf '\n}\n' >> "$MANIFEST_JSON"

cat > "$STATS_FILE" << EOF
{
  "timestamp": "$(date -u +'%Y-%m-%dT%H:%M:%SZ')",
  "original_size_bytes": $original_size,
  "minified_size_bytes": $minified_size,
  "reduction_percent": $reduction,
  "original_size_kb": $(( original_size / 1024 )),
  "minified_size_kb": $(( minified_size / 1024 ))
}
EOF

echo -e "${BLUE}📈 Relatório salvo em: $STATS_FILE${NC}\n"
echo -e "${BLUE}📈 Manifest salvo em: $MANIFEST_JSON${NC}\n"
