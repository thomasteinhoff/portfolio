# Portfólio — Roadmap de arquitetura e conteúdo

> **Status:** Fase 0 concluída; Fase 1 concluída com pendência editorial no currículo; Fases 2 e 3 concluídas; Fase 4 concluída; Fase 5 em andamento (Motoclube PT concluída; Motoclube EN implementada como prévia, validação técnica concluída, aguardando revisão/push); Fase 7 em andamento (estudo do Tally publicado com mídias provisórias).
>
> **Baseline do protótipo:** `5b39f07 — Initial portfolio prototype — v0.1`
>
> **Branch:** `main`
>
> **Fases em andamento:** F5 — piloto de Branding; F7 — capturas sanitizadas do Tally pendentes.
>
> **Escopo deste documento:** decisões de arquitetura, internacionalização, conteúdo, estrutura de arquivos, ambientes de trabalho e entregas futuras. A implementação da F5 em diante não faz parte desta etapa.

> **Decisão de i18n consolidada:** português é o idioma principal, na estrutura atual; inglês usa o sufixo `.en.html`. A alternância é feita por links HTML convencionais, sem JavaScript, e deve levar à página equivalente no outro idioma.

> **Decisão de execução:** o desenvolvimento ocorre em dois ambientes — PC do trabalho e PC de casa — com o GitHub como ponto central de sincronização. As etiquetas `[REMOTO]`, `[CASA]` e `[QUALQUER]` estão definidas na seção 10.

---

## 1. Objetivo

Preparar o portfólio para receber os trabalhos reais do proprietário em três famílias editoriais:

- Branding.
- Ilustração e vetor.
- Software e produtos digitais.

Produção gráfica não é categoria principal nesta etapa: fica no currículo. Adesivos e materiais gráficos podem aparecer como galeria ou coletânea dentro de ilustração.

O site deve continuar:

- estático;
- sem dependências externas obrigatórias;
- compatível com `file://`;
- compatível com um servidor HTTP local simples;
- compatível com GitHub Pages;
- editável diretamente pelo proprietário;
- visualmente fiel à identidade já aprovada.

O objetivo deste roadmap é definir como o conteúdo, as páginas, os modelos, os idiomas e os assets se organizam — sem transformar o projeto em uma aplicação ou em um sistema de build.

O documento também organiza a execução entre dois computadores e registra as dependências que podem bloquear atividades quando materiais, softwares ou repositórios não estão disponíveis no ambiente atual.

---

## 2. Decisões arquiteturais aprovadas

| Área | Decisão |
|---|---|
| Arquitetura | HTML independente para cada página. |
| Compartilhamento | CSS e JavaScript compartilhados quando fizer sentido. |
| Modelos | Pares de modelos PT/EN copiáveis em `pages/projects/_templates/`, mantidos como internos. |
| Publicação de modelos | Não são páginas públicas; usam `noindex, nofollow` e não entram na navegação nem no arquivo. `canonical`/`hreflang` são adicionados somente ao copiar para um projeto real. |
| Duplicação | Duplicação pontual de HTML é aceitável. |
| Renderização | Sem geradores, includes, partials em JavaScript ou mecanismos complexos para evitar repetição. |
| Stack | HTML5, CSS3 e JavaScript puro. |
| Dependências | Sem frameworks, bibliotecas de componentes, backend, banco de dados, CMS, bundlers ou build. |
| Idiomas | Português brasileiro como idioma principal; inglês em arquivos com sufixo `.en.html`. |
| Alternância de idioma | Links HTML convencionais, sem JavaScript, mantendo o usuário na página equivalente. |
| Par publicado | Uma página só é considerada publicada quando PT e EN estiverem prontos. |
| Nomenclatura técnica | Arquivos, pastas, classes, funções, variáveis, identificadores e comentários técnicos em inglês. |
| Conteúdo | A página do projeto é a fonte de verdade; o arquivo é o índice completo; a home é uma seleção curada. |
| Currículo | Baseado fielmente no conteúdo do arquivo `.tex` existente, sem inventar informações ou experiências. |
| Placeholders | Estrutura e placeholders dos projetos podem ser preparados antes dos materiais reais. |
| Publicação | GitHub Pages, sem processo de build. |
| Execução local | Abertura direta dos arquivos e servidor HTTP local simples. |
| Identidade visual | Paleta, tipografia, grid editorial e componentes aprovados devem ser preservados. |
| Conteúdo factual | Nenhum cliente, resultado, data, localização ou experiência deve ser inventado. |

### Consequência aceita

Cabeçalho, menu móvel, rodapé e metadados serão repetidos entre páginas. Isso é intencional: é o custo de manter o site simples, funcional sem JavaScript e compatível com `file://`.

Não serão introduzidos:

- `fetch()` para carregar partials;
- iframes de navegação;
- includes via JavaScript;
- templates renderizados no navegador;
- JSON obrigatório para montar páginas;
- geradores de site.

---

## 3. Estado atual do protótipo

O protótipo v0.1 contém:

- Home editorial com hero, ticker, mosaico assimétrico e rodapé.
- Páginas Sobre, Currículo e Contato, com versões PT/EN.
- Troca de idioma por links HTML, no header e no menu móvel.
- Uma página de projeto real: Tally, com par PT/EN e estudo de caso documentado.
- CSS dividido em `fonts.css`, `style.css`, `components.css` e `responsive.css`.
- `main.js` pequeno, com menu nativo `<details>`, foco, bloqueio de rolagem e ano do rodapé.
- Fontes WOFF2 embutidas para funcionamento via `file://`.
- Favicon, licenças, `.gitignore` e README.

### Estado do planejamento

A Fase 0 está concluída: as decisões de arquitetura, internacionalização, conteúdo, ambientes de trabalho e fluxo de execução foram consolidadas neste documento e no README. A Fase 1 foi implementada para as páginas institucionais: home, Sobre, Currículo e Contato têm versões PT/EN, troca de idioma por links HTML, metadados e âncoras normalizadas. O currículo continua em rascunho editorial até a fonte `.tex` ser localizada e conferida.

O protótipo institucional é bilíngue. Na F2, a página demonstrativa do Tally migrou para `pages/projects/tally/`, recebeu o par PT/EN e passou a abrigar os componentes com suporte a imagens. Na F3, o arquivo de projetos foi publicado em `pages/projects/index.html` e `index.en.html`, com entradas reais mesmo sem página individual. A F4 criou os pares PT/EN dos modelos internos de Branding, Ilustração e Software. A F7 teve início com o estudo de caso real do Tally: narrativa de produto, arquitetura da informação, interface, decisões e evolução, em par PT/EN, com `project.css` escopado, símbolo oficial, capturas provisórias e inventário em `ASSETS.md`. A fase só será concluída quando as capturas sanitizadas substituírem as provisórias.

### Pontos fortes a preservar

- Sistema visual coerente e autoral.
- Componentes de estudo de caso já reutilizáveis: `.case`, `.case-section`, `.case-gallery`, `.plate`, `.process`, `.specs`, `.case-nav`.
- Caminhos relativos funcionando.
- Conteúdo visível sem JavaScript.
- Nenhuma dependência externa em tempo de execução.

### Pontos que precisam evoluir

1. A home acumula o papel de vitrine e de arquivo completo.
2. O mosaico usa classes e posições ligadas a projetos específicos.
3. Há três modelos editoriais internos, em seis arquivos PT/EN; nenhum é página pública.
4. Imagens reais ainda não foram produzidas; o caso do Tally usa o símbolo oficial e capturas provisórias.
5. Cabeçalho, menu e rodapé são duplicados.
6. Metadados são repetidos entre home, currículo, índice e página do projeto.
7. A versão em inglês cobre as páginas publicadas, o arquivo e os modelos internos.
8. Alguns identificadores técnicos e âncoras ainda estão em português, contrariando a nova regra de nomenclatura.
9. O estudo do Tally ainda depende de capturas sanitizadas para ser considerado concluído.

---

## 4. Arquitetura de conteúdo

### 4.1 Fonte de verdade

- **Página do projeto:** fonte de verdade do conteúdo do projeto.
- **`pages/projects/index.html`:** fonte de verdade da lista completa de projetos publicados.
- **Home:** seleção curada de projetos em destaque.
- **Currículo:** seleção de projetos ou link para o arquivo; não deve manter uma lista completa paralela.
- **Modelos em `pages/projects/_templates/`:** pares PT/EN internos de desenvolvimento; não são fonte de conteúdo publicado e não aparecem na navegação.

Essa separação evita que a home e o currículo precisem ser atualizados a cada novo projeto.

### 4.2 Home versus arquivo

- A home mostra de **5 a 6 projetos em destaque**.
- O arquivo completo lista o inventário aprovado, incluindo entradas reais sem página individual, agrupado por categoria.
- A home deve ter um link claro para o arquivo.
- O arquivo lista projetos publicados e entradas reais do inventário ainda sem página individual, identificadas por status; não criar projetos fictícios apenas para preencher categorias.
- Contagens fixas como “06 projetos” devem ser evitadas; envelhecem rapidamente.
- A seção da home passa a se chamar “Seleção de projetos” ou equivalente em inglês, deixando “Arquivo de projetos” para a página completa.

### 4.3 Tipos de página

| Tipo | Papel |
|---|---|
| Home | Apresentação pessoal, seleção de projetos, áreas de atuação e contato. |
| Sobre | Perfil, prática e formação. |
| Currículo | Ficha profissional resumida e link para PDF quando existir. |
| Contato | E-mail, GitHub e canais disponíveis. |
| Arquivo de projetos | Lista completa, agrupada por categoria. |
| Página de projeto | Estudo de caso com composição específica. |
| Modelos de projeto | Pares PT/EN internos em `pages/projects/_templates/`; referências copiáveis, não páginas publicadas. |

### 4.4 Conteúdo de um projeto

Campos mínimos de referência:

- Título.
- Categoria.
- Resumo curto.
- Ano ou status (`20—`, “Em preparação” etc.).
- Escopo, papel ou tipo de participação.
- Capa.
- Seções editoriais aplicáveis.
- Ficha técnica.
- Links externos, quando existirem.
- Navegação anterior/próximo, opcional.

Os campos variam por categoria; não são um formulário obrigatório. Um projeto de ilustração pode ter menos texto e mais imagens; um projeto de software pode ter problema, funcionalidades, tecnologias e demonstração.

### 4.4.1 Estrutura preparada antes dos materiais

A estrutura e os placeholders dos projetos devem ser preparados antecipadamente, mesmo quando os materiais reais ainda não estiverem disponíveis. Isso permite avançar a arquitetura, o HTML e o CSS em qualquer ambiente, enquanto a seleção e a produção visual aguardam o PC de casa.

Placeholders devem ser explícitos e visualmente identificáveis. Não preencher lacunas com clientes, resultados, datas ou experiências inventados. Um projeto com placeholders pode existir como rascunho interno, mas não conta como publicado.

### 4.5 Assets

- Imagens institucionais e compartilhadas: `assets/images/`.
- Ícones: `assets/icons/`.
- Fontes e licenças: `assets/fonts/`.
- Imagens de projeto: dentro da pasta do projeto, em `images/`.
- Imagens com texto traduzido: subpastas `images/pt/` e `images/en/`, ou versões neutras.
- Não duplicar imagens entre idiomas quando elas não contêm texto.
- Não criar um pipeline de otimização; documentar formatos e cuidados e otimizar manualmente.

Formatos recomendados:

- WebP ou AVIF para fotos e mockups.
- SVG para vetores.
- JPEG apenas quando necessário para compatibilidade.
- `width` e `height` explícitos.
- `loading="lazy"` para imagens abaixo da dobra.
- `decoding="async"` quando aplicável.
- `alt` descritivo e traduzido.
- Nomes semânticos em inglês: `cover.webp`, `application-01.webp`, `detail-02.webp`.

### 4.6 Caminhos e `file://`

Regras obrigatórias:

- Sempre caminhos relativos.
- Nunca iniciar assets com `/`.
- Links para pastas devem apontar para `index.html` ou `index.en.html` explicitamente.
- Não usar `fetch()`, XHR ou ES modules para conteúdo local.
- Não depender de JavaScript para exibir conteúdo.
- Nomes de arquivos e pastas em minúsculas, sem acentos e sem espaços.
- Testar cada página aberta diretamente e por servidor HTTP local.
- Manter as fontes embutidas em `assets/css/fonts.css`.

---

## 5. Internacionalização

### 5.1 Decisão aprovada

O site terá **HTML completo em português e em inglês**, sem troca de idioma via JavaScript.

Cada página terá uma página irmã no outro idioma:

- Português: `index.html`, `pages/about.html`, `pages/projects/tally/index.html`.
- Inglês: `index.en.html`, `pages/about.en.html`, `pages/projects/tally/index.en.html`.

O português é o idioma principal e permanece na estrutura atual. O inglês é paralelo, com o sufixo `.en.html`. A alternância é feita por links HTML convencionais e deve manter o usuário na página equivalente.

Essa escolha:

- preserva as URLs atuais do protótipo;
- mantém o projeto e a pasta de templates na mesma profundidade;
- permite compartilhar imagens do projeto entre os dois idiomas;
- dispensa JavaScript, cookies ou `localStorage`;
- funciona via `file://`;
- mantém cada página indexável e legível sem scripts.

### 5.2 Mapa de URLs

| Conteúdo | Português | Inglês |
|---|---|---|
| Home | `index.html` | `index.en.html` |
| Sobre | `pages/about.html` | `pages/about.en.html` |
| Currículo | `pages/curriculum.html` | `pages/curriculum.en.html` |
| Contato | `pages/contact.html` | `pages/contact.en.html` |
| Arquivo | `pages/projects/index.html` | `pages/projects/index.en.html` |
| Projeto | `pages/projects/<slug>/index.html` | `pages/projects/<slug>/index.en.html` |

### 5.3 Troca de idioma

A troca será feita por links HTML, não por JavaScript.

- Em páginas portuguesas: `PT` é o idioma atual e `EN` aponta para a página irmã.
- Em páginas inglesas: `EN` é o idioma atual e `PT` aponta para a página irmã.
- O link deve apontar para a **mesma página**, não para a home do outro idioma.
- O seletor deve ser visível no desktop e no menu móvel.
- Não usar bandeiras para representar idiomas.
- Usar `lang` e `hreflang` nos links.
- Usar rótulos acessíveis: “Ver esta página em inglês” / “View this page in Portuguese”.
- A página atual pode ser um `<span>` com `aria-current="true"`; a outra, um link.
- Se uma tradução ainda não existir durante o desenvolvimento, a página não deve ser publicada; não criar links quebrados.
- O idioma deve permanecer ao navegar: links internos de uma página em inglês permanecem em inglês.

### 5.4 Metadados e SEO

Cada página deve ter:

```html
<html lang="pt-BR">
```

ou:

```html
<html lang="en">
```

E, no `<head>`:

```html
<link rel="alternate" hreflang="pt-BR" href="...">
<link rel="alternate" hreflang="en" href="...">
<link rel="alternate" hreflang="x-default" href="...">
```

- `x-default` aponta para a versão portuguesa.
- `canonical` aponta para a própria página.
- `title`, `meta description` e `og:locale` devem ser traduzidos.
- No desenvolvimento local, os links de navegação continuam relativos.
- Na publicação, `canonical` e `hreflang` devem usar URLs absolutas do GitHub Pages ou do domínio final.
- Se o nome do repositório ou o domínio mudar, revisar essas URLs.

### 5.5 Conteúdo e paridade

A regra de publicação é: **uma página só está pronta quando existir o par PT/EN**.

- O português é a versão de autoria principal.
- O inglês é traduzido e revisado.
- Nenhuma versão inglesa deve acrescentar clientes, resultados ou informações ausentes na versão portuguesa.
- Navegação, botões, etiquetas, status, avisos, legendas, `alt`, `aria-label`, rodapé e mensagens de erro devem ser traduzidos.
- Títulos de projetos, nomes próprios, marcas e nomes de tecnologias não são traduzidos.
- Identificadores técnicos permanecem em inglês nos dois idiomas.
- Âncoras e IDs de seção devem ser os mesmos nas duas versões, para que a troca de idioma preserve a seção quando possível.
- Datas, medidas e formatos devem ser consistentes entre as versões.
- Se o PDF do currículo existir, planejar versões PT e EN ou um PDF bilíngue.

### 5.6 Imagens e textos embutidos

- Preferir imagens sem texto para reutilização entre idiomas.
- Se a imagem contiver texto relevante, criar variantes `pt` e `en`.
- Texto dentro de imagem não é traduzível por CSS; não tratar como conteúdo dinâmico.
- `alt` deve ser traduzido mesmo quando a imagem é compartilhada.
- Legendas e notas técnicas devem existir nos dois idiomas.

### 5.7 O que não será usado

- Tradução via JSON e JavaScript.
- Troca de idioma com `localStorage` ou cookies.
- Tradução automática no navegador.
- URLs com parâmetros de idioma.
- Bibliotecas de i18n.
- Conteúdo oculto por idioma na mesma página.

### 5.8 Alternativa descartada: `/pt/` e `/en/`

A estrutura com duas árvores completas foi considerada, mas **não foi adotada**:

```text
/pt/index.html
/pt/pages/about.html
/en/index.html
/en/pages/about.html
```

**Vantagens:** URLs mais limpas, simetria total e facilidade para adicionar novos idiomas.

**Motivos para descartar nesta fase:** exigiria mover todas as páginas atuais, criar uma página inicial seletora ou redirecionamento, aumentar a profundidade dos caminhos e separar os templates das pastas de projeto.

A decisão consolidada é português na raiz + `.en.html`, porque preserva o protótipo e mantém a estrutura de projetos simples.

---

## 6. Estrutura de diretórios proposta

```text
portfolio/
├── index.html                         # home PT
├── index.en.html                      # home EN
├── pages/
│   ├── about.html
│   ├── about.en.html
│   ├── curriculum.html
│   ├── curriculum.en.html
│   ├── contact.html
│   ├── contact.en.html
│   └── projects/
│       ├── index.html                 # arquivo PT
│       ├── index.en.html              # arquivo EN
│       ├── _templates/
│       │   ├── branding.html
│       │   ├── branding.en.html
│       │   ├── illustration.html
│       │   ├── illustration.en.html
│       │   ├── software.html
│       │   └── software.en.html
│       ├── tally/
│       │   ├── index.html             # projeto PT
│       │   ├── index.en.html          # projeto EN
│       │   ├── project.css            # opcional
│       │   └── images/                # compartilhadas
│       └── <slug>/
│           ├── index.html
│           ├── index.en.html
│           ├── project.css            # opcional
│           └── images/
├── assets/
│   ├── css/
│   │   ├── fonts.css
│   │   ├── style.css
│   │   ├── components.css
│   │   ├── responsive.css
│   │   └── projects/                  # opcional; nenhum arquivo criado na F4
│   ├── js/
│   │   └── main.js
│   ├── fonts/
│   ├── icons/
│   └── images/                        # imagens institucionais/compartilhadas
├── ROADMAP.md
├── README.md
└── .gitignore
```

### Observações

- `_templates` fica no mesmo nível de profundidade das pastas de projeto (`pages/projects/<slug>/`). Ao copiar um modelo para a pasta do projeto, os caminhos para CSS, home e arquivo continuam corretos.
- Cada modelo existe em par PT/EN (`<base>.html` e `<base>.en.html`); manter os mesmos IDs e a mesma sequência de tags nas duas versões.
- `_templates` contém modelos internos de desenvolvimento. Os arquivos não são páginas públicas, não entram na navegação, não aparecem no arquivo e usam `noindex, nofollow`. Enquanto forem internos, não têm `canonical`/`hreflang` reais; o `<head>` traz comentário com os links a substituir ao copiar.
- `project.css` só é criado quando a composição do projeto não puder ser resolvida pelos componentes compartilhados.
- CSS de categoria só é criado quando o primeiro projeto daquela categoria precisar dele.
- As imagens do projeto são compartilhadas entre `index.html` e `index.en.html`.
- A pasta `_templates` é ignorada pelo Jekyll no GitHub Pages. Isso é compatível com o caráter interno dos modelos; não é necessário `.nojekyll` só para ocultá-los. Se for necessário visualizá-los online durante o desenvolvimento, usar um servidor local ou avaliar `.nojekyll`/renomeação.
- `ROADMAP.md` é um documento de planejamento; não é uma página do site.

---

## 7. Modelos editoriais

### 7.1 Categorias

| Categoria | Seções de referência |
|---|---|
| Branding | Contexto · conceito · sistema visual (logotipo, elementos, paleta, tipografia) · aplicações · resultados (opcional) · ficha técnica |
| Ilustração e vetor | Apresentação · galeria · detalhes (opcionais) · contexto/processo (opcionais) · ficha mínima. Coletâneas mantêm apenas galeria e ficha. |
| Software e produtos digitais | Contexto/problema · objetivos/funcionalidades · interface e UX · decisões técnicas · contribuição · tecnologias · status · demonstração (opcional) |

As seções são referências, não um schema obrigatório. Cada projeto pode omitir, reordenar ou substituir blocos. Não há modelo próprio para Produção Gráfica; quando houver material gráfico, ele entra como galeria/coletânea de ilustração ou no currículo.

### 7.2 Componentes compartilhados

| Componente | Uso |
|---|---|
| `.case__head`, `.case__meta`, `.case__cover` | Abertura e ficha do projeto |
| `.case-section` | Seção editorial numerada |
| `.case-overview` + `.prose` + `.pullquote` | Texto, contexto e conceito |
| `.case-gallery` + `.plate--wide/narrow/half` | Galerias e imagens técnicas |
| `.case-gallery__note` | Nota lateral |
| `.process` | Etapas de processo |
| `.specs` | Ficha técnica |
| `.case-nav` | Navegação entre projetos |
| `.notice` | Conteúdo provisório ou aviso |

### 7.3 Regras para os modelos

- Cada modelo é uma página HTML completa e copiável.
- O modelo inclui o shell do site, a navegação e o rodapé.
- Seções opcionais devem ter comentários HTML claros.
- O modelo não deve inventar conteúdo de projeto; usar placeholders explícitos.
- A categoria pode ser indicada no `<main>`:
  ```html
  <main id="content" class="case case--branding">
  ```
- A ordem das seções é livre.
- O modelo não deve ser editado como se fosse uma página publicada; copiar primeiro.
- Modelos são internos, não páginas públicas do portfólio.
- Modelos não devem aparecer na navegação nem no arquivo.
- Modelos devem ter `noindex, nofollow`, não devem ser listados no sitemap, se houver, e não têm `canonical`/`hreflang` reais enquanto forem internos; comentários no `<head>` indicam o que substituir ao criar uma página real.
- Cada categoria tem par PT/EN, com IDs equivalentes e sequência de tags preservada.
- Ao copiar, os caminhos relativos não mudam: `_templates/` e `pages/projects/<slug>/` têm a mesma profundidade.

### 7.4 CSS de categoria e de projeto

Ordem de carregamento sugerida:

```html
<link rel="stylesheet" href="../../../assets/css/fonts.css">
<link rel="stylesheet" href="../../../assets/css/style.css">
<link rel="stylesheet" href="../../../assets/css/components.css">
<link rel="stylesheet" href="../../../assets/css/responsive.css">
<!-- Opcional, quando existir:
<link rel="stylesheet" href="../../../assets/css/projects/branding.css">
<link rel="stylesheet" href="project.css">
-->
```

- CSS de categoria: composições compartilhadas por projetos da mesma categoria.
- CSS de projeto: exceções de layout, proporção de capa, galerias específicas.
- Não alterar a paleta global nem a tipografia para simular a identidade de um projeto; a identidade do projeto deve aparecer no conteúdo, não no chrome do site.
- Evitar criar CSS vazio ou preventivo. Nenhum CSS de categoria ou de projeto foi criado na F4; os modelos usam somente os componentes existentes.
- CSS adicional só entra quando a validação de um projeto real exigir.
- CSS de `print` não faz parte do escopo; o conteúdo gráfico fica no currículo ou em coletâneas.

---

## 8. Fluxo para adicionar um projeto

Neste fluxo, `[CASA]` indica produção de material visual, `[REMOTO]` edição no repositório e `[QUALQUER]` redação, tradução ou revisão.

1. Escolher o par de modelos da categoria em `pages/projects/_templates/` (`<base>.html` e `<base>.en.html`).
2. Copiar o modelo para `pages/projects/<slug>/index.html` (`[REMOTO]`).
3. Copiar e traduzir para `pages/projects/<slug>/index.en.html` (`[REMOTO]` para os arquivos; `[QUALQUER]` para a tradução).
4. Criar `images/` e adicionar as imagens otimizadas (`[CASA]` para produzir/selecionar; `[REMOTO]` para inserir no projeto).
5. Preencher a versão portuguesa:
   - título, resumo e ficha;
   - capa;
   - seções aplicáveis;
   - ficha técnica;
   - links externos.
6. Traduzir a versão inglesa com paridade de conteúdo.
7. Atualizar `lang`, `title`, `meta description`, `hreflang`, `canonical` e o seletor de idioma.
8. Atualizar IDs/âncoras e `aria-labelledby`; remover IDs duplicados.
9. Remover seções opcionais que não se aplicam, substituir os links de exemplo por `canonical`/`hreflang` reais e remover `noindex` e o aviso interno.
10. Adicionar o projeto ao arquivo:
    - `pages/projects/index.html`;
    - `pages/projects/index.en.html`.
11. Se for destaque, adicionar o card na home:
    - `index.html`;
    - `index.en.html`.
12. Se aparecer no currículo, atualizar as duas versões.
13. Validar links, imagens, responsividade, `file://` e navegação por teclado.
14. Considerar o projeto publicado somente quando as duas versões estiverem completas.

### Regras de links dentro do projeto

- CSS e assets compartilhados: `../../../assets/...`.
- Home do mesmo idioma: `../../../index.html` ou `../../../index.en.html`.
- Arquivo do mesmo idioma: `../index.html` ou `../index.en.html`.
- Sobre/Currículo/Contato do mesmo idioma: `../../about.html`, etc.
- Imagens locais: `images/...`.
- Links para outro projeto: `../<slug>/index.html` ou `../<slug>/index.en.html`.

Como o modelo e a pasta do projeto têm a mesma profundidade, os caminhos não mudam; apenas os nomes dos arquivos, os metadados e o conteúdo são adaptados.

---

## 9. Fluxo de tradução e manutenção

### 9.1 Processo

1. Escrever ou revisar o conteúdo em português.
2. Traduzir para inglês.
3. Revisar a tradução com foco em consistência, naturalidade e paridade de informação.
4. Atualizar metadados, `alt`, legendas e textos de interface.
5. Verificar links e âncoras entre os pares.
6. Validar as duas versões em desktop e mobile.
7. Publicar somente o par completo.

### 9.2 Glossário de interface

| Português | Inglês |
|---|---|
| Início | Home |
| Projetos | Projects |
| Arquivo de projetos | Project archive |
| Sobre | About |
| Currículo | CV |
| Contato | Contact |
| Em preparação | In progress |
| Provisório | Provisional |
| Ficha técnica | Project details |
| Atuação | Practice |
| Formação | Education |
| Identidade visual | Visual identity |
| Produção gráfica | Print production |
| Ilustração e vetor | Illustration & vector |
| Software e produtos digitais | Software & digital products |
| Fabricação digital | Digital fabrication |
| Aplicações | Applications |
| Processo | Process |
| Resultados | Outcomes |
| Próximo projeto | Next project |
| Voltar ao arquivo | Back to archive |
| Ver estudo | View case study |

O glossário deve ser mantido no README ou em um documento de conteúdo futuro; este roadmap define a intenção, não um arquivo adicional nesta etapa.

### 9.3 Paridade e status

- Nenhuma página é considerada pronta com apenas um idioma.
- Páginas em tradução não devem ser publicadas.
- O arquivo e a home devem listar apenas pares completos.
- O currículo deve apontar para o arquivo, não duplicar a lista inteira.
- Se o PDF do currículo existir, planejar PT e EN ou uma versão bilíngue.

### 9.4 Imagens e textos embutidos

- Imagens sem texto: compartilhadas entre idiomas.
- Imagens com texto: versões separadas ou artwork neutro.
- `alt` e legendas sempre traduzidos.
- Evitar texto essencial somente dentro de imagens; quando inevitável, prever versão por idioma.

### 9.5 Currículo e fonte `.tex`

- O currículo deve ser baseado fielmente no conteúdo do arquivo `.tex` existente.
- Não inventar experiências, formação, datas, cargos, clientes ou resultados.
- O `.tex` é a fonte de conteúdo; a página HTML é a apresentação.
- Antes de editar o currículo, localizar a versão mais recente do `.tex` no ambiente correto e conferir se ela está atualizada.
- O arquivo `.tex` não está versionado neste repositório no momento. Se estiver em outro repositório GitHub, a tarefa é `[REMOTO]`; se existir apenas localmente em um computador, depende desse computador.
- A versão portuguesa pode ser consolidada primeiro; a tradução inglesa pode ser feita depois.
- A página do currículo só conta como publicada quando o par PT/EN estiver pronto.
- O formato do PDF do currículo (PT, EN ou bilíngue) permanece uma decisão de conteúdo posterior.

---

## 10. Ambientes de trabalho e execução

### 10.1 Dois ambientes

| Ambiente | Recursos disponíveis | Uso principal |
|---|---|---|
| **PC do trabalho** | Acesso aos repositórios GitHub dos projetos de programação. | Estrutura, código, documentação, conteúdo textual, traduções e páginas de software. |
| **PC de casa** | Materiais e ferramentas de design. | Seleção de trabalhos, capturas de tela, exportação de SVGs, preparação de imagens, mockups e outros materiais visuais. |
| **GitHub** | Repositório remoto e histórico. | Ponto central de sincronização; não é necessário criar outro sistema. |

### 10.2 Etiquetas de ambiente

| Etiqueta | Significado | Exemplos |
|---|---|---|
| `[REMOTO]` | Pode ser executada em qualquer computador com acesso ao repositório. Não depende de materiais originais ou softwares de design. | HTML, CSS, JavaScript, documentação, estrutura, páginas de software e revisão de links. |
| `[CASA]` | Depende de arquivos originais, softwares ou materiais disponíveis em casa. | Selecionar trabalhos, capturar telas, exportar SVGs, preparar imagens, mockups e conferir cores/impressão. |
| `[QUALQUER]` | Pode ser realizada independentemente do ambiente, sem depender de materiais locais. | Planejamento, redação, tradução, revisão textual e decisões de conteúdo. |

As etiquetas não substituem as dependências entre fases. Elas apenas indicam onde a atividade pode ser executada e o que pode estar bloqueado.

### 10.3 Classificação das fases

| Fase | Status | Etiquetas | Observação |
|---|---|---|---|
| **F0** | Concluída | `[QUALQUER]` | Consolidação documental, sem implementação. |
| **F1** | Concluída com pendência editorial | `[REMOTO]` + `[QUALQUER]` | Páginas institucionais PT/EN e troca de idioma implementadas; currículo final depende da conferência com o `.tex`. |
| **F2** | Concluída | `[REMOTO]` + `[CASA]` condicional | Estrutura e código remotos concluídos; capturas ou assets visuais do Tally seguem pendentes em casa. |
| **F3** | Concluída | `[REMOTO]` | Arquivo, navegação e links concluídos no repositório. |
| **F4** | Concluída | `[REMOTO]` | Seis modelos PT/EN internos concluídos; sem CSS novo e sem páginas públicas. |
| **F5** | Em andamento | `[CASA]` + `[REMOTO]` | Seleção e produção visual em casa; implementação da página no repo. Etapa 1 concluída; Etapa 2 (Motoclube PT) concluída; Etapa 3 (Motoclube EN) implementada como prévia, com validação técnica concluída; Etapa 4 (Rotten Carmilla PT) implementada como prévia, com marcos 1–5 validados; Etapa 5 (EN), integração geral e push pendentes. |
| **F6** | Não iniciada | `[CASA]` + `[REMOTO]` | Ilustração depende de materiais originais; HTML/CSS no repo. |
| **F7** | Em andamento | `[REMOTO]` + `[CASA]` | Estudo do Tally em PT/EN publicado; capturas sanitizadas e revisão final pendentes. |
| **F8** | Não iniciada | `[QUALQUER]` + `[REMOTO]` + `[CASA]` | Curadoria e textos em qualquer lugar; implementação remota; imagens finais em casa. |
| **F9** | Não iniciada | `[REMOTO]` + `[CASA]` | QA técnico remoto; validação visual final pode exigir casa. |
| **F10** | Opcional | `[REMOTO]` | Filtros/busca só se houver necessidade real. |

### 10.4 Atividades bloqueadas por ambiente

| Atividade | Etiqueta | Pode bloquear |
|---|---|---|
| Produzir, capturar ou exportar imagens, SVGs, mockups e materiais de design | `[CASA]` | Conclusão visual de F5, F6, F7, F8 e F9. |
| Acessar repositórios GitHub dos projetos de software | `[REMOTO]` | F7 quando executada fora do PC do trabalho. |
| Editar HTML, CSS, JavaScript, documentação e links | `[REMOTO]` | Nenhum bloqueio se houver repo e ferramentas básicas. |
| Redigir, traduzir e revisar textos | `[QUALQUER]` | Nenhum bloqueio de ambiente; pode avançar enquanto materiais visuais não chegam. |
| Localizar e conferir o `.tex` do currículo | `[REMOTO]` ou dependente do computador | Edição do currículo até a fonte estar acessível. |
| Validar o resultado visual final em diferentes telas e com materiais reais | `[CASA]` | Fechamento de F8/F9. |

### 10.5 Execução flexível

1. As fases continuam tendo dependências e critérios de conclusão próprios.
2. Não é obrigatório executar todas as fases estritamente em ordem numérica.
3. Atividades independentes podem ser antecipadas quando houver oportunidade e não comprometerem a arquitetura ou as decisões aprovadas.
4. Se uma atividade estiver bloqueada por falta de materiais disponíveis em determinado computador, outras atividades independentes poderão avançar.
5. Uma fase só será considerada concluída quando seus critérios de conclusão forem atendidos, mesmo que parte de seu trabalho tenha sido executada fora da sequência original.
6. O roadmap deve permitir identificar atividades bloqueadas por materiais ou ações que dependem do PC de casa.

### 10.6 Sincronização entre computadores

O GitHub é o ponto central de sincronização. Não serão criados scripts ou sistemas adicionais; o Git é suficiente.

Práticas obrigatórias:

- Antes de começar a trabalhar em um computador, verificar o estado local e sincronizar com o remoto (`git pull`, quando apropriado).
- Evitar editar simultaneamente a mesma versão do projeto nos dois computadores.
- Ao encerrar uma sessão ou trocar de computador, garantir que o trabalho importante esteja commitado e enviado ao GitHub.
- Não deixar alterações importantes existindo apenas localmente no computador atual.
- Resolver eventuais conflitos de sincronização antes de continuar o desenvolvimento.
- Se for necessário trocar de computador no meio de uma fase, criar um commit de checkpoint claramente identificado e enviá-lo. Isso não conclui a fase; o commit final da fase consolida a entrega.

### 10.7 Bloqueios e mudanças de escopo

- Se uma atividade estiver bloqueada por falta de material de casa, avançar em tarefas `[REMOTO]` ou `[QUALQUER]` independentes.
- Se surgir um problema que afete decisões arquiteturais ou o escopo de outras fases, interromper essa parte e apresentar a questão para discussão.
- Não improvisar mudanças de escopo para contornar um bloqueio.
- Registrar no relatório da fase o que ficou bloqueado e por quê.

---

## 11. Impacto nos arquivos existentes

| Arquivo | Impacto previsto |
|---|---|
| `index.html` | Adicionar `index.en.html`, seletor de idioma, links para o arquivo, slots genéricos de cards e curadoria de destaques. |
| `pages/about.html` | Criar `about.en.html`, seletor de idioma, links de navegação e rodapé. |
| `pages/curriculum.html` | Criar `curriculum.en.html`, seletor de idioma, link do Tally, seleção de projetos e link para o arquivo; conteúdo fiel ao `.tex` existente. |
| `pages/contact.html` | Criar `contact.en.html`, seletor de idioma e textos traduzidos. |
| `pages/projects/project-template.html` | Migrar para `pages/projects/tally/index.html` e criar `index.en.html`; atualizar caminhos e links. |
| `assets/css/style.css` | Provavelmente nenhuma alteração estrutural; possivelmente estilos do seletor de idioma. |
| `assets/css/components.css` | Suporte a `<img>` em cards/placas, estilos de arquivo, seletor de idioma e ganchos de categoria. |
| `assets/css/responsive.css` | Ajustes dos novos componentes e dos textos mais longos em inglês. |
| `assets/js/main.js` | Sem alteração prevista; a troca de idioma será feita por links. |
| IDs e âncoras | Normalizar identificadores técnicos para inglês (`#content`, `#projects`, `#overview`, `#process`, `#specs`, etc.). |
| `README.md` | Atualizado na F0 para refletir o planejamento; manter alinhado ao estado real nas fases seguintes. |
| `.gitignore` | Sem alteração necessária. |
| Fontes e favicon | Sem alteração. |
| Imagens | Novas pastas de projeto e assets compartilhados. |

### Sobre a normalização de identificadores

A nova regra exige identificadores técnicos em inglês. Hoje existem IDs e âncoras em português, como `#conteudo`, `#projetos`, `#visao-geral`, `#sistema-visual`, `#processo` e `#ficha`.

Antes da publicação, normalizar para, por exemplo:

- `#content`
- `#projects`
- `#overview`
- `#visual-system`
- `#process`
- `#specs`

Os rótulos visíveis continuam em português ou inglês, conforme a página. Como o site ainda não foi publicado, não é necessário manter âncoras antigas; se alguma URL já tiver sido compartilhada, criar âncoras de compatibilidade.

---

## 12. Roadmap de implementação

Cada fase representa uma entrega verificável. A Fase 0 está concluída; a Fase 1 foi concluída com pendência editorial no currículo; as Fases 2, 3 e 4 estão concluídas; as Fases 5 e 7 estão em andamento. Nenhuma fase deve introduzir build, backend ou dependências.

| Fase | Status | Etiquetas | Objetivo | Entregáveis | Critério de conclusão |
|---|---|---|---|---|---|
| **F0** | Concluída | `[QUALQUER]` | Consolidar o planejamento | `ROADMAP.md` e `README.md` revisados | Decisões, i18n, ambientes, estrutura e fases registradas. |
| **F1** | Concluída com pendência editorial | `[REMOTO]` + `[QUALQUER]` | Fundação bilíngue do shell | Seletor de idioma no header e menu móvel; `lang`, `hreflang`, `canonical`; páginas institucionais PT/EN; normalização de IDs e âncoras. O currículo pode ficar em rascunho até a fonte `.tex` estar disponível. | Troca de idioma funciona nas páginas institucionais, via `file://`, sem JavaScript. O currículo está em rascunho PT/EN e só será considerado final quando o par estiver conferido com o `.tex`. |
| **F2** | Concluída | `[REMOTO]` + `[CASA]` condicional | Estrutura de projetos | Tally migrado para `pages/projects/tally/`; `index.html` e `index.en.html`; suporte a imagens nos cards/placas; links da home e do currículo atualizados; proteção contra tradução automática. | Tally abre nos dois idiomas, com o mesmo visual e sem overflow. |
| **F3** | Concluída | `[REMOTO]` | Arquivo de projetos | `pages/projects/index.html` e `index.en.html`; nav, rodapé, breadcrumbs e home atualizados; entradas reais sem página com status explícito; CSS escopado de arquivo. | Arquivo lista o inventário aprovado, agrupado por categoria; links funcionam e não apontam para páginas inexistentes. |
| **F4** | Concluída | `[REMOTO]` | Modelos editoriais internos | Criar seis arquivos em `pages/projects/_templates/`: `branding`, `illustration` e `software`, cada um em `.html` e `.en.html`; documentar caminhos relativos e adaptações na cópia; sem CSS novo, sem páginas públicas e sem alterações em Tally, home, arquivo, páginas institucionais ou `main.js`. | Modelos abrem via `file://` e HTTP local, usam `noindex, nofollow`, têm pares PT/EN equivalentes, não recebem links públicos e servem de base para cópia. |
| **F5** | Em andamento | `[CASA]` + `[REMOTO]` | Piloto de Branding | Primeiro projeto real de branding PT/EN; CSS de categoria/projeto apenas se necessário. | Projeto completo, responsivo, com ficha e aplicações. |
| **F6** | Não iniciada | `[CASA]` + `[REMOTO]` | Piloto de Ilustração | Primeiros projetos reais da categoria; ajustes de galeria e mídia. | Os modelos visuais de Branding e Ilustração mantêm base comum sem parecer o mesmo template. |
| **F7** | Em andamento | `[REMOTO]` + `[CASA]` | Software e conteúdo real | Estudo do Tally em PT/EN: contexto, arquitetura da informação, identidade, interface, decisões, evolução e dimensão técnica; `project.css` escopado; `ASSETS.md`. | Página com capturas sanitizadas no lugar das provisórias e conteúdo revisado nos dois idiomas. |
| **F8** | Não iniciada | `[QUALQUER]` + `[REMOTO]` + `[CASA]` | Curadoria e conteúdo completo | Home com seleção final; arquivo completo; currículo fiel ao `.tex` e com seleção; traduções pareadas. | Nenhum projeto publicado sem par PT/EN; nenhuma contagem obsoleta. |
| **F9** | Não iniciada | `[REMOTO]` + `[CASA]` | QA e publicação | Revisão de links, acessibilidade, performance, imagens, responsividade, `file://`, HTTP e GitHub Pages; atualização do README. | Checklist da seção 13 completo. |
| **F10** | Opcional, não iniciada | `[REMOTO]` | Filtros/busca no arquivo | Filtros progressivos por categoria, se o arquivo crescer. | Só implementar se houver necessidade real; não faz parte do escopo inicial. |

### Ciclo de execução por fase

1. Cada fase é uma entrega verificável e tem escopo e critérios de conclusão próprios.
2. Durante uma fase, o agente pode implementar, testar e corrigir tudo o que estiver dentro do escopo aprovado.
3. Ao concluir, apresentar um relatório com alterações, testes realizados e eventuais limitações.
4. O commit e o push ocorrem ao final da fase, agrupando as alterações em uma entrega coerente.
5. Evitar commits excessivamente pequenos ou commits intermediários desnecessários. Um checkpoint só se justifica quando for necessário trocar de computador no meio da fase.
6. Uma fase só é concluída quando todos os critérios forem atendidos, mesmo que parte do trabalho tenha sido feita fora da ordem original.
7. Se surgir um problema que afete decisões arquiteturais ou o escopo de outras fases, interromper essa parte e apresentar a questão para discussão, em vez de improvisar uma mudança de escopo.
8. Depois da conclusão das fases planejadas, haverá uma etapa final de auditoria geral.

### Dependências

- F1 antes de traduzir páginas de projeto.
- F2 antes de F3 e F4.
- F4 antes dos pilotos de categoria.
- F5–F7 dependem dos materiais ou acessos do ambiente correspondente.
- F8 depende de todos os projetos estarem em seus pares.
- F9 é a última etapa de QA antes da publicação.

### Publicação

- Commits por fase, com revisão local.
- Push ao final de cada fase concluída.
- A ativação do GitHub Pages continua manual.
- Nenhuma automação de deploy é necessária.

### Auditoria final

Depois da conclusão das fases F0–F9 e, se executada, F10, haverá uma etapa final de auditoria geral para identificar e corrigir inconsistências, pendências, problemas visuais, links quebrados e detalhes remanescentes. Essa auditoria não substitui os critérios de conclusão de cada fase; ela verifica o conjunto.

---

## 13. Definition of Done

Uma página ou projeto só é considerado concluído quando:

- [ ] Existe versão PT e EN.
- [ ] `lang` e `hreflang` estão corretos.
- [ ] O seletor de idioma leva à página correspondente.
- [ ] Navegação, botões, etiquetas, status, avisos, legendas e rodapé estão traduzidos.
- [ ] `title`, `meta description`, `alt` e legendas estão traduzidos.
- [ ] IDs e âncoras técnicos estão em inglês e não há duplicatas.
- [ ] Links relativos funcionam via `file://` e via servidor HTTP.
- [ ] Não há links quebrados para páginas sem par.
- [ ] Imagens têm dimensões, `alt` e carregamento adequado.
- [ ] Layout funciona em 360, 390, 768, 1024 e 1440 px sem overflow horizontal.
- [ ] Teclado, foco visível, menu móvel e `prefers-reduced-motion` funcionam.
- [ ] Não há erros de console.
- [ ] A página está listada no arquivo do idioma correspondente.
- [ ] Se for destaque, está na home dos dois idiomas.
- [ ] Se aparece no currículo, as duas versões estão atualizadas.
- [ ] O currículo é fiel ao conteúdo do `.tex` existente, sem informações inventadas.
- [ ] Templates internos não aparecem na navegação, no arquivo ou em páginas publicadas.
- [ ] Nenhum placeholder permanece em uma página considerada publicada.
- [ ] Nenhum cliente, resultado, data ou experiência foi inventado.
- [ ] Nenhuma dependência, build ou script de terceiros foi adicionado.

### Conclusão de uma fase

Uma fase só é considerada concluída quando:

- [ ] Os critérios de conclusão da fase foram atendidos.
- [ ] O relatório de alterações, testes e limitações foi apresentado.
- [ ] As alterações foram commitadas.
- [ ] O push foi realizado.
- [ ] A working tree ficou limpa.

---

## 14. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Traduções divergentes | Pares com os mesmos nomes de arquivo, checklist de paridade e revisão final. |
| Duplicação de shell gerar inconsistência | Navegação estável, modelos atualizados, busca e substituição cuidadosas, QA em todas as páginas. |
| Home e arquivo desatualizados | Arquivo é a lista canônica; home é curada; sem contagens fixas. |
| Textos em inglês mais longos quebrarem layout | Testes com conteúdo real em 390/768/1024/1440; larguras flexíveis. |
| Imagens com texto em português aparecerem na versão EN | Versões localizadas ou artwork neutro. |
| HTML muito longo por SVG inline | Usar imagens reais em arquivos para conteúdo; SVGs inline apenas para detalhes decorativos. |
| IDs duplicados em SVGs copiados | Prefixar IDs por projeto/seção ou usar imagens externas. |
| Pasta `_templates` ignorada no GitHub Pages | É um comportamento compatível com modelos internos; usar servidor local para preview e não publicar links para os modelos. |
| Caminhos quebrarem ao mover projetos | Manter a profundidade de pastas e testar `file://` após cada migração. |
| Currículo e home virarem listas paralelas | Currículo com seleção e link para o arquivo; home curada. |
| Currículo divergir do `.tex` | Localizar a fonte mais recente, conferir dados e não preencher lacunas por memória. |
| PDF do currículo em um único idioma | Planejar PT e EN ou versão bilíngue. |
| URLs absolutas de `hreflang` desatualizadas | Revisar base URL no fechamento para GitHub Pages/domínio final. |
| Trabalho dividido entre dois computadores | Sincronizar via GitHub antes e depois de cada sessão; evitar edição simultânea. |
| Materiais visuais disponíveis apenas em casa | Adiantar tarefas `[REMOTO]`/`[QUALQUER]`; registrar o bloqueio para F5/F6/F8/F9. |
| Alterações importantes ficarem apenas locais | Commit e push ao final da fase; checkpoint ao trocar de computador. |
| Conflitos de sincronização | Resolver antes de continuar; não começar nova edição sobre estado divergente. |

---

## 15. Fora de escopo

Não fazem parte do projeto:

- Criar CMS, backend, banco de dados ou formulário funcional.
- Adicionar frameworks, bibliotecas, bundlers ou build.
- Criar gerador de páginas, includes ou partials via JavaScript.
- Criar manifesto JSON de projetos.
- Tradução automática ou biblioteca de i18n.
- Filtros, busca, dark mode, analytics ou comentários.
- Automação de deploy ou GitHub Actions.
- Criar scripts ou sistemas adicionais de sincronização.
- Criar documentos adicionais sem necessidade concreta.

---

## 16. Decisões consolidadas e pendências

### 16.1 Decisões consolidadas

| Decisão | Status | Consequência |
|---|---|---|
| Estrutura bilíngue | Aprovada | Português na estrutura atual; inglês com sufixo `.en.html`. |
| Alternância de idioma | Aprovada | Links HTML convencionais, sem JavaScript; permanece na página equivalente. |
| Par publicado | Aprovada | PT e EN precisam estar prontos para a página contar como publicada. |
| Templates internos | Aprovada | Ficam em `pages/projects/_templates/`, não são páginas públicas e não entram na navegação. |
| Três famílias editoriais | Aprovada | Branding, Ilustração e Software; Produção Gráfica não tem modelo próprio nesta etapa. |
| Modelos PT/EN | Aprovada | Cada categoria tem par `.html`/`.en.html`, com `noindex, nofollow` e sem `canonical`/`hreflang` até virar página real. |
| Fonte de verdade | Aprovada | Página do projeto define o conteúdo; arquivo é o índice completo; home é curada. |
| Placeholders antecipados | Aprovada | Estrutura pode ser preparada antes dos materiais reais, sem inventar conteúdo. |
| Currículo | Aprovada | Baseado fielmente no `.tex` existente; tradução pode ser posterior. |
| Ambientes de trabalho | Aprovada | PC do trabalho para repo/código/texto; PC de casa para materiais visuais; GitHub sincroniza. |
| Diretrizes para agentes | Aprovada | `AGENTS.md` rastreado no repositório; o roadmap continua sendo a fonte de verdade para escopo e fases. |
| Alternativa `/pt/` + `/en/` | Descartada | Não será adotada nesta fase. |
| PDF do currículo | Pendente de conteúdo | Definir PT, EN ou bilíngue quando o currículo for consolidado. |
| Quantidade de destaques | Recomendação | 5–6 projetos, definidos por curadoria; não é bloqueio. |
| Pastas de categoria | Recomendação | `branding`, `illustration` e `software`, criadas conforme necessidade. |

### 16.2 Pendências operacionais

- O arquivo `.tex` do currículo não está versionado neste repositório no momento. Localizar a fonte mais recente antes de editar o currículo; se estiver em outro repositório GitHub, a atividade é `[REMOTO]`. O par PT/EN atual é um rascunho de F1 e não substitui a conferência da fonte.
- Materiais visuais originais, capturas, SVGs, imagens e mockups dependem do PC de casa e bloqueiam a conclusão visual de F5, F6, F7, F8 e F9.
- Nome, e-mail, links e conteúdo real dos projetos continuam provisórios; não inventar informações.
- O Tally já tem par PT/EN, estudo de caso documentado, `ASSETS.md` e capturas provisórias; as versões sanitizadas ainda dependem do PC de casa.
- O arquivo da F3 usa entradas tipográficas para projetos sem material visual; a seleção de imagens e a eventual conversão em páginas dependem de F5–F7.
- O formato e o idioma do PDF do currículo serão definidos quando houver conteúdo consolidado.

## 17. Próximo passo

1. As Fases 0, 1, 2, 3 e 4 estão concluídas; o encerramento formal inclui o commit e o push da F4.
2. A Fase 1 tem uma pendência editorial: o currículo PT/EN é rascunho e precisa ser conferido com o `.tex` antes de ser considerado final.
3. A Fase 3 entregou o arquivo bilíngue, atualizou a navegação global e manteve projetos sem página como entradas não linkáveis; não criou templates nem páginas individuais.
4. A Fase 4 entregou seis modelos internos PT/EN para Branding, Ilustração e Software, documentou caminhos e adaptações e não alterou páginas públicas, CSS ou `main.js`.
5. A Fase 7 está em andamento: o estudo do Tally foi reescrito em PT/EN, com `project.css`, símbolo oficial, capturas provisórias e inventário em `ASSETS.md`. Falta substituir as capturas provisórias por versões sanitizadas e concluir a revisão editorial.
6. Próximo passo: F5 — piloto de Branding, somente após autorização explícita; não começar automaticamente.
7. Ao iniciar uma fase, seguir o ciclo de execução da seção 12 e sincronizar pelo GitHub.

A F3 alterou o protótipo: criou o arquivo em `pages/projects/`, renomeou a seção da home para “Seleção de projetos”, removeu a contagem fixa, apontou a navegação global para o arquivo e adicionou CSS escopado para os cards de catálogo. A F4 acrescentou os modelos editoriais internos em `pages/projects/_templates/`, atualizou `README.md` e este roadmap e manteve Tally, home, arquivo, páginas institucionais, CSS e `main.js` intactos. A F7 substituiu a demonstração do Tally por um estudo de caso real, atualizou os rótulos da home, do arquivo e do currículo e documentou as mídias em `ASSETS.md`.
