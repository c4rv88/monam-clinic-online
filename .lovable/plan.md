

# Adicionar video no Hero com transparencia

## O que sera feito

Substituir a imagem de fundo do Hero por o video enviado (procedimento estetico facial), com uma leve transparencia para manter a legibilidade do texto.

## Alteracoes

### 1. Copiar video
- Salvar `Vídeo_de_Procedimento_Estético_Facial_1.mp4` em `public/videos/hero-video.mp4` (pasta public pois videos grandes nao devem passar pelo bundler do Vite)

### 2. Atualizar Hero (`src/pages/Index.tsx`)
- Remover o import da imagem `hero-bg.png`
- Substituir a tag `<img>` por um elemento `<video>` com as seguintes propriedades:
  - `autoPlay`, `muted`, `loop`, `playsInline` para reproducao automatica e silenciosa
  - Classes: `absolute inset-0 w-full h-full object-cover opacity-80` (transparencia leve de 20%)
  - `src="/videos/hero-video.mp4"`
- Manter o overlay gradiente existente por cima do video para garantir contraste do texto

### Codigo resultante (trecho do Hero)
```tsx
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-80"
    src="/videos/hero-video.mp4"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-taupe-light/80 via-background/70 to-accent/60" />
  <!-- resto do conteudo igual -->
</section>
```

### Arquivos alterados
- `public/videos/hero-video.mp4` -- video copiado
- `src/pages/Index.tsx` -- video no lugar da imagem, com opacity-80

