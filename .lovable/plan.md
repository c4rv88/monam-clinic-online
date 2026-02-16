

# Corrigir diferenca de cor entre logo e header

## Problema
A imagem da logo tem um fundo marrom ligeiramente diferente do fundo do header (`bg-taupe`), criando uma transicao visivel e pouco profissional.

## Solucao
Aplicar um **degradê suave** no header que combine com o tom da logo, eliminando a diferenca visual. O degradê ira do tom mais escuro da logo (esquerda/centro) para o tom do taupe (direita), criando uma transicao natural.

Alternativa mais simples: ajustar a cor `--taupe` no CSS para corresponder exatamente ao fundo da logo.

## Abordagem escolhida
Combinar as duas estrategias:
1. Ajustar a variavel `--taupe` para corresponder melhor ao tom da logo (um marrom mais quente, menos acinzentado)
2. Usar um degradê sutil no header para suavizar qualquer diferenca residual entre a imagem e o fundo

## Alteracoes

### `src/index.css`
- Ajustar `--taupe` de `25 25% 45%` para algo mais proximo do tom da logo (~`28 30% 42%`), um marrom mais quente e levemente mais escuro

### `src/components/Header.tsx`
- Trocar `bg-taupe` por um gradiente inline que vai de um marrom um pouco mais escuro (tom da logo) para o taupe, tipo:
  `bg-gradient-to-r from-[hsl(28,28%,38%)] via-taupe to-taupe`
- Aplicar o mesmo degradê ao menu mobile

Isso fara o header parecer um fundo unico e continuo junto com a logo.
