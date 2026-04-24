## Ajuste do carrossel do Instagram

**Arquivo:** `src/components/InstagramFeed.tsx`

### Mudanças

1. **Mais cards visíveis (cards menores):**
   - Tablet (`md:`): `basis-1/2` → `basis-1/3`
   - Desktop (`lg:`): `basis-1/3` → `basis-1/4`

2. **Cards mais discretos:**
   - Altura mínima: `min-h-[380px]` → `min-h-[340px]`
   - Borda mais sutil: `border-border/60` → `border-border/40`
   - Remover `shadow-sm` para visual mais clean

3. **Container do carrossel:**
   - Largura máxima: `max-w-6xl` → `max-w-5xl` para agrupar melhor os cards

4. **Mantidos sem alteração:**
   - Texto do cabeçalho ("Siga-nos no Instagram")
   - Botão CTA "Ver mais no Instagram"
   - Embed oficial do Instagram (vídeos dos reels continuam funcionando)
   - Setas de navegação do carrossel

### Resultado esperado
Cards visivelmente menores e mais leves, com 4 visíveis no desktop (em vez de 3) e 3 no tablet (em vez de 2), mantendo o embed oficial funcional.
