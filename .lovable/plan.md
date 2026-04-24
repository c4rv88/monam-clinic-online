## Plano: Carrossel de Instagram na Home

### 1. Script oficial do Instagram (`index.html`)
Adicionar antes de `</body>`:
```html
<script async src="//www.instagram.com/embed.js"></script>
```

### 2. Novo componente `src/components/InstagramFeed.tsx`
- Section com título "Siga @monameclinic no Instagram" e subtítulo curto.
- Fundo cream/claro alinhado à identidade visual (taupe/dourado).
- Usa o `Carousel` (Embla) já existente em `src/components/ui/carousel.tsx`.
- Responsivo: 1 slide (mobile), 2 (tablet `md`), 3 (desktop `lg`) via `basis-full md:basis-1/2 lg:basis-1/3`.
- Cada slide renderiza um `<blockquote class="instagram-media" data-instgrm-permalink="..." data-instgrm-version="14">` com um dos 5 links:
  1. https://www.instagram.com/p/DW1zrVPFCWY/
  2. https://www.instagram.com/reel/DNGPTJWRHoS/
  3. https://www.instagram.com/reel/DAiutM4R-JF/
  4. https://www.instagram.com/reel/DRwxKnDgM8s/
  5. https://www.instagram.com/reel/DOEeig4D3Ej/
- `useEffect` chama `window.instgrm?.Embeds?.process()` no mount para renderizar os embeds (essencial em SPA).
- Tipagem: declarar `window.instgrm` via `declare global` no próprio arquivo.
- CTA final: botão "Ver mais no Instagram" linkando para `https://instagram.com/monameclinic`.

### 3. Integração na Home (`src/pages/Index.tsx`)
- Importar `InstagramFeed` e inserir entre a seção de depoimentos e o CTA final.
- Manter animações `fadeUp` consistentes com as demais seções.

### 4. Observações
- Embeds do Instagram têm altura variável; o carrossel usará `items-start` para acomodar.
- Sem necessidade de API/token — embed público oficial.
- Caso o usuário bloqueie scripts de terceiros, aparecerá o fallback nativo do blockquote (link para o post).

Posso prosseguir?
