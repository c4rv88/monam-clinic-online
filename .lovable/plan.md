# Alterar cores do texto do Hero

## O que sera feito

Mudar as cores dos textos do Hero (titulo, subtitulo, paragrafo e botoes) de preto/escuro para tons claros que combinem com a identidade visual e tenham bom contraste sobre o video de fundo.

## Identidade visual atual
- Taupe (marrom elegante)
- Dourado/ouro
- Creme/bege claro
- Estetica suave e feminina

## Alteracoes

### `src/pages/Index.tsx` - Secao Hero

**Mudancas de cor no conteudo do Hero:**

1. **Subtitulo** ("Ha 25 anos cuidando de voce"):
   - De: `text-primary` 
   - Para: `text-white/90` ou `text-cream` (tom claro)

2. **Titulo principal** ("Sua beleza merece cuidado especial"):
   - De: `text-foreground` (preto/escuro)
   - Para: `text-white` (branco puro para maximo contraste)

3. **Span em italico** ("cuidado especial"):
   - De: `text-primary` (marrom)
   - Para: `text-gold` ou `text-amber-300` (dourado brilhante)

4. **Paragrafo descritivo**:
   - De: `text-muted-foreground` (cinza escuro)
   - Para: `text-white/80` (branco com transparencia)

5. **Botoes**:
   - Botao primario "Agendar Consulta": manter como esta (ja tem bom contraste)
   - Botao secundario "Nossos Servicos": ajustar para `border-white text-white hover:bg-white hover:text-taupe` para combinar com o tema claro

### Resultado visual
- Textos todos em tons claros (branco, creme, dourado)
- Alto contraste sobre o video de fundo
- Mantem a identidade visual elegante e feminina
- Botoes com hover states apropriados para fundo escuro/video

## Arquivos alterados
- `src/pages/Index.tsx` — cores dos textos do Hero atualizadas