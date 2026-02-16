

# Remover transparencia da imagem do Hero

## O que sera feito

Remover a opacidade da imagem de fundo do Hero para que ela apareca com cor e nitidez total (100% visivel), sem transparencia.

## Alteracoes

### `src/pages/Index.tsx`
- Na tag `<img>` do hero, trocar `opacity-35` para remover a classe de opacidade (sem classe opacity = 100% visivel)
- Manter o overlay gradiente por cima para garantir que o texto continue legivel

### Linha afetada
```
// De:
<img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />

// Para:
<img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
```

