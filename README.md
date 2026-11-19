# Portfólio — protótipo 0.1

Protótipo visual de portfólio pessoal para design gráfico, ilustração, interfaces, desenvolvimento e fabricação digital.

A página inicial funciona como uma **prancha editorial modular**: uma grade assimétrica de cards com proporções variadas, tipografia expressiva, placas vetoriais provisórias e micro-informações técnicas. O projeto é intencionalmente estático, sem frameworks, bibliotecas de componentes, bundlers ou backend.

> **Estado do conteúdo:** nomes, textos, imagens, anos, e-mail e links são provisórios. Nenhum cliente, resultado ou experiência profissional foi inventado. Os pontos que precisam de substituição estão indicados no site e neste README.

## Planejamento

A **Fase 0 — consolidação do planejamento** está concluída. A **Fase 1 — fundação bilíngue do shell** foi implementada para as páginas institucionais, com uma pendência editorial: o currículo PT/EN continua em rascunho até a fonte `.tex` ser localizada e conferida. A **Fase 2 — estrutura de projetos** foi implementada: o Tally migrou para `pages/projects/tally/`, tem par PT/EN, e os componentes aceitam imagens nos slots existentes. As decisões de arquitetura, internacionalização, conteúdo, ambientes de trabalho e execução estão registradas em [`ROADMAP.md`](ROADMAP.md).

Este README descreve o estado real do protótipo v0.1. A estrutura-alvo, as fases e o fluxo detalhado de trabalho não são duplicados aqui.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, custom properties, `clamp()`, `aspect-ratio`)
- JavaScript puro, apenas para melhorias progressivas
- SVG inline para todas as composições visuais
- Fontes auto-hospedadas **Bricolage Grotesque** e **JetBrains Mono**, embutidas em CSS para funcionar também via `file://`

Não há dependências externas obrigatórias, ferramentas de build, requisições a CDNs ou carregamento dinâmico de conteúdo.

## Estrutura

Estrutura atual do protótipo. Todas as páginas publicadas têm par PT/EN, incluindo o Tally e o arquivo de projetos. Os templates internos pertencem à F4 e estão descritos no [`ROADMAP.md`](ROADMAP.md).

```text
portfolio/
├── index.html
├── index.en.html
├── pages/
│   ├── about.html
│   ├── about.en.html
│   ├── curriculum.html
│   ├── curriculum.en.html
│   ├── contact.html
│   ├── contact.en.html
│   └── projects/
│       ├── index.html             # arquivo PT
│       ├── index.en.html          # arquivo EN
│       └── tally/
│           ├── index.html             # projeto PT
│           ├── index.en.html          # projeto EN
│           └── images/                # imagens compartilhadas (.gitkeep)
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
├── ROADMAP.md               # planejamento, fases e fluxo de trabalho
└── README.md
```

## Idiomas

Português é o idioma principal e permanece nos caminhos atuais. O inglês usa o sufixo `.en.html` no mesmo diretório, por exemplo `index.en.html` e `pages/about.en.html`.

A troca de idioma é feita por links HTML comuns, sem JavaScript, e aponta para a página equivalente. O idioma atual é marcado com `aria-current="true"`. O Tally e o arquivo de projetos têm par PT/EN completo; o currículo EN continua rascunho até a conferência com o `.tex`.

Todas as páginas públicas usam `translate="no"` no elemento `<html>` e `<meta name="google" content="notranslate">` no `<head>` para impedir a tradução automática do navegador. Os textos já existem nos dois idiomas; essa proteção apenas evita que a interface seja reescrita por ferramentas externas.

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

## Imagens nos componentes

Os slots visuais existentes aceitam `<img>` no lugar do `<svg>` inline, sem alterar a grade, a proporção ou o desenho dos cards e placas:

- `.card__art` (cards da home e de projetos) — `object-fit: cover`.
- `.plate__canvas` (galerias do estudo de caso) — `object-fit: cover`.
- `.case__cover-canvas` (capa do projeto) — `object-fit: contain`.
- `.visual-plate__canvas` (placa do hero) — `object-fit: contain`.

Ao substituir um SVG, mantenha o elemento dentro do mesmo slot e informe `width`, `height`, `alt` traduzido, `loading="lazy"` para imagens abaixo da dobra e `decoding="async"` quando aplicável. Imagens sem texto são compartilhadas entre PT e EN na pasta `images/` do projeto; imagens com texto exigem variantes por idioma. Nenhuma imagem real foi adicionada nesta fase: `assets/images/` e `pages/projects/tally/images/` contêm apenas `.gitkeep`.

## Arquivo de projetos

`pages/projects/index.html` e `pages/projects/index.en.html` formam o catálogo completo, agrupado em Branding, Ilustração e Software. A home mantém a seleção curada e linka para o arquivo.

Projetos reais sem página individual aparecem como cards não linkáveis, com status “Em preparação” / “In preparation”. Nenhum link aponta para página inexistente; quando houver conteúdo suficiente, a entrada passa a ser um link sem mudar a estrutura do arquivo.

## O que revisar antes de publicar

Substitua os placeholders em todas as páginas:

1. **Nome:** busque por `Nome Sobrenome`, `Name Surname` e `NS` (marca, títulos, rodapé e README).
2. **E-mail:** busque por `contato@exemplo.com` (header mobile, rodapé e página de contato).
3. **Anos:** busque por `20—` nos cards, currículo e ficha técnica.
4. **Links externos:** a página de contato aponta para o GitHub informado no briefing e marca os demais canais como “em preparação”.
5. **Textos provisórios:** revise as notas com `Provisório`, `Provisional`, `Em preparação`, `In preparation` e `a confirmar` / `to be confirmed`.
6. **Imagens:** as composições atuais continuam em SVG/CSS. Fotos e mockups reais devem ser otimizados antes de entrar em `assets/images/` ou em `pages/projects/<slug>/images/`; a produção desses materiais depende do PC de casa.
7. **Currículo:** conferir o conteúdo contra o arquivo `.tex` existente antes de publicar. Não inventar experiências, datas ou formação.

## Adicionar um novo projeto

O fluxo completo está descrito na seção 8 do [`ROADMAP.md`](ROADMAP.md): templates internos em `pages/projects/_templates/`, página em português, página irmã em `.en.html`, arquivo canônico e atualização da home/currículo.

A F2 concluiu a migração do Tally para `pages/projects/tally/` e o par PT/EN. A F3 criou o arquivo em `pages/projects/index.html` e `index.en.html`, com entradas reais mesmo sem página individual. O mosaico da home segue manual, em `index.html`/`components.css`. Os templates internos pertencem à F4 e ainda não existem.

## Desenvolvimento em dois computadores

O trabalho é dividido entre o PC do trabalho (repositórios, código, documentação, textos e páginas de software) e o PC de casa (materiais originais, capturas, SVGs, imagens e mockups). O GitHub é o ponto central de sincronização.

As regras de execução, as etiquetas `[REMOTO]`, `[CASA]` e `[QUALQUER]` e as práticas de sincronização estão na seção 10 do [`ROADMAP.md`](ROADMAP.md). Este README não duplica esse detalhamento.

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

O push é feito manualmente ao final de cada fase concluída. A ativação do GitHub Pages continua manual e deve ocorrer depois das etapas de conteúdo e QA.

## Limitações desta versão

- Conteúdo, imagem de retrato, e-mail e links são provisórios.
- Não há formulário de contato funcional, CMS, banco de dados ou integração externa.
- A versão em inglês cobre páginas institucionais, Tally e arquivo de projetos.
- Apenas Tally possui página interna demonstrativa; no arquivo, os demais projetos são entradas reais sem página individual, identificadas como “em preparação”.
- O mosaico de projetos usa posições explícitas de grade. Novos cards exigem ajuste manual da composição em desktop e tablet.
- O PDF do currículo ainda não existe; o botão está visualmente desativado. O par PT/EN atual é um rascunho e deve ser conciliado com o `.tex` existente.
- A Fase 1 foi concluída com pendência editorial no currículo; as Fases 2 e 3 foram concluídas, sem imagens reais e com o arquivo de projetos já publicado.
