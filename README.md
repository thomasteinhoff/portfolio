# Portfólio — protótipo 0.1

Protótipo visual de portfólio pessoal para design gráfico, ilustração, interfaces, desenvolvimento e fabricação digital.

A página inicial funciona como uma **prancha editorial modular**: uma grade assimétrica de cards com proporções variadas, tipografia expressiva, placas vetoriais provisórias e micro-informações técnicas. O projeto é intencionalmente estático, sem frameworks, bibliotecas de componentes, bundlers ou backend.

> **Estado do conteúdo:** nomes, textos, imagens, anos, e-mail e links são provisórios. Nenhum cliente, resultado ou experiência profissional foi inventado. Os pontos que precisam de substituição estão indicados no site e neste README.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, custom properties, `clamp()`, `aspect-ratio`)
- JavaScript puro, apenas para melhorias progressivas
- SVG inline para todas as composições visuais
- Fontes auto-hospedadas **Bricolage Grotesque** e **JetBrains Mono**, embutidas em CSS para funcionar também via `file://`

Não há dependências externas obrigatórias, ferramentas de build, requisições a CDNs ou carregamento dinâmico de conteúdo.

## Estrutura

```text
portfolio/
├── index.html
├── pages/
│   ├── about.html
│   ├── curriculum.html
│   ├── contact.html
│   └── projects/
│       └── project-template.html
├── assets/
│   ├── css/
│   │   ├── fonts.css        # fontes WOFF2 embutidas em base64 (funciona via file://)
│   │   ├── style.css        # tokens, base, header, hero, seções, rodapé
│   │   ├── components.css   # mosaic de projetos, cards, páginas internas
│   │   └── responsive.css   # recomposição para tablet e mobile
│   ├── js/
│   │   └── main.js          # menu mobile, foco e ano do rodapé
│   ├── fonts/
│   │   ├── bricolage-grotesque-latin.woff2
│   │   ├── jetbrains-mono-latin.woff2
│   │   ├── OFL-BricolageGrotesque.txt
│   │   └── OFL-JetBrainsMono.txt
│   ├── icons/
│   │   └── favicon.svg
│   └── images/              # reservada para imagens reais futuras
├── .gitignore
└── README.md
```

## Executar localmente

O site funciona abrindo os arquivos HTML diretamente, pois usa apenas caminhos relativos e nenhuma requisição dinâmica. As fontes também são preservadas nesse modo: os arquivos WOFF2 estão embutidos em `assets/css/fonts.css`, evitando o bloqueio de fontes locais por CORS no navegador.

**Opção 1 — abrir o arquivo**

Abra `index.html` no navegador.

**Opção 2 — Live Server (VS Code)**

Clique com o botão direito em `index.html` e escolha *Open with Live Server*.

**Opção 3 — servidor local simples**

Na raiz do projeto:

```bash
python -m http.server 8000
```

No Windows, se necessário:

```powershell
py -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## O que revisar antes de publicar

Substitua os placeholders em todas as páginas:

1. **Nome:** busque por `Nome Sobrenome` e `NS` (marca, títulos, rodapé e README).
2. **E-mail:** busque por `contato@exemplo.com` (header mobile, rodapé e página de contato).
3. **Anos:** busque por `20—` nos cards, currículo e ficha técnica.
4. **Links externos:** a página de contato aponta para o GitHub informado no briefing e marca os demais canais como “em preparação”.
5. **Textos provisórios:** revise as notas com `Provisório`, `Em preparação` e `a confirmar`.
6. **Imagens:** as composições atuais são SVG/CSS. Fotos e mockups reais devem ser otimizados antes de entrar em `assets/images/`.

## Adicionar um novo projeto

1. Duplique `pages/projects/project-template.html` com um nome descritivo, por exemplo `pages/projects/nome-do-projeto.html`.
2. Atualize título, ficha técnica, textos e placas vetoriais. Ajuste os caminhos relativos (`../../assets/...`).
3. No `index.html`, adicione um card dentro de `.project-grid`. Reutilize as classes existentes:
   - `card--tally` para um card grande com imagem e informações;
   - `card--argos` para um card tipográfico;
   - `card--library` / `card--chapas` para imagem + informações;
   - `card--identity` / `card--illustration` para card somente de imagem.
4. Ajuste as posições `grid-column` / `grid-row` no `assets/css/components.css` e as recomposições em `responsive.css`. O mosaico foi desenhado manualmente; inserir um card exige revisar a ocupação da grade.
5. Adicione o projeto à lista do currículo (`pages/curriculum.html`) e ao índice do card `card--index`.
6. Para imagens reais, use caminhos relativos e formatos otimizados (AVIF/WebP, com fallback quando necessário). Arquivos-fonte pesados de design são ignorados pelo `.gitignore`.

## Acessibilidade e JavaScript

- O menu mobile usa o elemento nativo `<details>`; a navegação continua acessível mesmo sem JavaScript.
- Todo o conteúdo é renderizado em HTML estático. Se o JavaScript não executar, nada é ocultado.
- O `main.js` apenas fecha o menu com `Esc` ou clique em link, gerencia o bloqueio de rolagem e atualiza o ano do rodapé.
- Há link para pular ao conteúdo, foco visível, marcos semânticos e respeito a `prefers-reduced-motion`.
- As composições SVG são decorativas (`aria-hidden`); cards somente de imagem recebem descrição por `role="img"` e `aria-label`.

## Fontes e licenças

As fontes são distribuídas sob a **SIL Open Font License 1.1** e estão auto-hospedadas em `assets/fonts/`:

- **Bricolage Grotesque** — licença em `assets/fonts/OFL-BricolageGrotesque.txt`
- **JetBrains Mono** — licença em `assets/fonts/OFL-JetBrainsMono.txt`

Os arquivos `.woff2` são subsets latinos obtidos do Google Fonts. As licenças acompanham os arquivos no repositório.

`assets/css/fonts.css` contém as mesmas fontes em base64 para que a tipografia funcione ao abrir o site diretamente do disco. Se os arquivos `.woff2` forem substituídos, atualize também esse CSS com a nova codificação; para publicação via GitHub Pages, o resultado visual é o mesmo.

## GitHub Pages (futuro)

O projeto é compatível com hospedagem estática e não exige build. Quando o conteúdo estiver revisado:

1. Verifique se o repositório pode publicar Pages (repositórios privados podem exigir plano compatível).
2. Em **Settings → Pages**, selecione a branch principal e a pasta raiz (`/`).
3. Como os caminhos são relativos e o site parte da raiz, não é necessário configurar `base` ou variáveis.
4. Não há GitHub Actions configurada; a publicação pode ser feita diretamente pela interface do GitHub.

A publicação e o push não são automáticos nesta versão: o envio ao GitHub e a ativação do Pages são passos manuais do autor.

## Limitações desta versão

- Conteúdo, imagem de retrato, e-mail e links são provisórios.
- Não há formulário de contato funcional, CMS, banco de dados ou integração externa.
- Apenas Tally possui página interna demonstrativa; os demais cards indicam “em preparação”.
- O mosaico de projetos usa posições explícitas de grade. Novos cards exigem ajuste manual da composição em desktop e tablet.
- O PDF do currículo ainda não existe; o botão está visualmente desativado.
