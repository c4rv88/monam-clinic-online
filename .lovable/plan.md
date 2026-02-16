

# Adicionar imagem ao Hero com transparencia

## O que sera feito

Usar a imagem enviada (mulher com pele bonita) como imagem de fundo/destaque na secao Hero da pagina inicial, com efeito de transparencia para que o texto continue legivel sobre ela.

## Alteracoes

### 1. Copiar imagem
- Salvar `envato-labs-image-edit_1.png` em `src/assets/hero-bg.png`

### 2. Atualizar Hero (`src/pages/Index.tsx`)
- Adicionar a imagem como background da secao hero usando uma tag `<img>` com `opacity` reduzida (aprox. 30-40%) ou como `background-image` com overlay
- Posicionar a imagem no lado esquerdo (onde a mulher aparece) com o texto no lado direito, ou como fundo completo com overlay semi-transparente
- Manter o gradiente atual como overlay por cima da imagem para garantir legibilidade do texto
- Layout sugerido: imagem posicionada com `absolute`, `object-cover`, e opacidade controlada via classe Tailwind (`opacity-30` ou similar)

### Estrutura do Hero atualizada
```
<section> (relative, min-h-[90vh])
  <img src={heroBg} /> (absolute, inset-0, object-cover, opacity-30~40)
  <div overlay gradiente /> (absolute, para escurecer/suavizar)
  <div conteudo texto /> (relative z-10, texto e botoes)
</section>
```

### Arquivos alterados
- `src/assets/hero-bg.png` — imagem copiada
- `src/pages/Index.tsx` — hero section com imagem de fundo transparente

