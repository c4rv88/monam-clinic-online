
# Site Monamê Clinic — Plano de Implementação

## Visão Geral
Site institucional multi-páginas para a Monamê Clinic com estilo **suave e feminino** (tons rosé/nude, formas arredondadas, visual acolhedor). A clínica tem 25 anos de experiência em estética e cuidado personalizado.

---

## Páginas e Seções

### 1. Página Inicial (Home)
- **Hero** com título impactante, frase sobre os 25 anos de experiência e botão de agendamento
- **Destaques dos serviços** — cards visuais das 5 categorias principais (Facial, Corporal, Íntima, SPA, Intensive Op Viê)
- **Seção "Sobre Nós"** — breve história e proposta da clínica
- **Depoimentos de clientes** — carrossel com avaliações e fotos de antes/depois
- **CTA final** para agendamento

### 2. Página de Serviços
- Organizada por categorias com abas ou acordeões:
  - Estética Facial (10 tratamentos)
  - Estética Corporal (Flacidez, Gordura, Celulite, Estrias, Harmonização)
  - Estética Íntima (Gino Skin)
  - SPA Terapy (massagens, banhos, detox)
  - Intensive Op Viê (jornada cirurgia plástica)
- Cada tratamento com descrição breve

### 3. Página da Equipe
- Cards com foto, nome, especialidade de cada profissional:
  - Alexandra Azevedo (Esteticista)
  - Gilson Farias (Nutricionista)
  - Dra. Bianca Bezerra (Nutróloga)
  - Barbara Joyce (Biomédica)

### 4. Página de Agendamento
- Formulário de solicitação de agendamento com campos: nome, telefone, email, serviço desejado, data/horário preferido e observações
- A clínica confirma por WhatsApp/telefone (sem sistema automático de calendário)
- Salvamento dos pedidos em banco de dados (Lovable Cloud)

### 5. Página de Blog
- Listagem de artigos com título, resumo e imagem
- Página individual de cada artigo
- Gerenciamento de conteúdo via banco de dados (Lovable Cloud)

### 6. Página de Contato
- Informações de contato: telefone (85) 98862-8871, email, Instagram @monameclinic
- Mapa ou endereço da clínica
- Formulário de contato simples

---

## Componentes Globais
- **Header** com navegação entre páginas e logo
- **Footer** com contato, links rápidos e redes sociais
- **Botão flutuante de WhatsApp** em todas as páginas (link direto para (85) 98862-8871)
- **Design responsivo** — mobile-first

## Design
- Paleta: tons rosé, nude, branco e detalhes dourados suaves
- Tipografia delicada com títulos elegantes
- Bordas arredondadas e espaçamento generoso
- Imagens com tratamento suave (bordas arredondadas, sombras leves)

## Backend (Lovable Cloud)
- Tabela de **solicitações de agendamento** (formulário)
- Tabela de **posts do blog** (título, conteúdo, imagem, data)
- Tabela de **depoimentos** (nome, texto, foto antes/depois)
