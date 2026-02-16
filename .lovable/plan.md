

# Atualização de Cores e Logomarca - Moname Clinic

## O que muda

O site atual usa tons rosé/rosa como cor principal. A identidade visual real da marca usa **marrom quente (taupe)** e **dourado/champagne**, conforme o PDF da logomarca. Vamos atualizar todo o site para refletir a identidade visual correta.

## Paleta de cores extraida da logomarca

- **Marrom principal (taupe):** fundo da logomarca - aprox. HSL(25, 25%, 45%)
- **Dourado/champagne:** cor do texto e simbolo do logo - aprox. HSL(38, 45%, 70%)
- **Creme claro:** para fundos de pagina e cards
- **Marrom escuro:** para textos

## Alteracoes planejadas

### 1. Logomarca
- Copiar a imagem do PDF para `src/assets/logo.png`
- Usar a imagem da logomarca no Header em vez do texto "MONAME Clinic"
- Usar versao da logo tambem no Footer

### 2. Paleta de cores (src/index.css)
Atualizar as variaveis CSS para refletir a identidade visual real:
- **--primary:** mudar de rose (340) para dourado/champagne (38, 45%, 65%)
- **--background:** manter creme claro
- **--foreground:** marrom escuro em vez de rose escuro
- **--secondary:** tons de taupe/marrom claro
- **--accent:** dourado claro
- **--rose e --rose-light:** substituir por tons de taupe/marrom
- **--gold:** ajustar para o dourado da logo
- Atualizar tambem o tema dark para manter coerencia

### 3. Componentes afetados
- **Header:** trocar texto por imagem da logo, ajustar cores dos links
- **Footer:** adicionar logo, ajustar cores
- **Todas as paginas:** as cores mudam automaticamente via variaveis CSS (cards, botoes, gradientes, icones)
- **WhatsApp button:** manter verde padrao do WhatsApp

### 4. Ajustes visuais nos gradientes
- Hero e CTAs: trocar gradientes de rose-light para tons de taupe/dourado
- Cards de servicos e depoimentos: hover em dourado em vez de rose
- Avatares da equipe: fundo taupe com inicial dourada

## Detalhes tecnicos

Os arquivos que serao editados:
- `src/index.css` - variaveis de cor
- `src/components/Header.tsx` - imagem da logo
- `src/components/Footer.tsx` - imagem da logo
- `src/pages/Index.tsx` - ajustes em gradientes e classes de cor especificas
- `src/pages/Services.tsx` - ajustes de cor
- `src/pages/Team.tsx` - ajustes de cor
- `src/pages/Appointment.tsx` - ajustes de cor
- `src/pages/Blog.tsx` - ajustes de cor
- `src/pages/Contact.tsx` - ajustes de cor
- `tailwind.config.ts` - renomear tokens "rose" para "taupe"

A maior parte das mudancas de cor sera automatica pois o site ja usa variaveis CSS (--primary, --accent, etc). Apenas gradientes e classes com cores hardcoded precisarao de ajuste manual.
