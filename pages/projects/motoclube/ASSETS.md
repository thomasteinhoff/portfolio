# Motoclube — Assets

**Status:** prévia editorial. Nenhuma imagem final foi adicionada.
**Pasta:** `pages/projects/motoclube/images/`
**Páginas:** `index.html` e `index.en.html`

Este documento descreve o inventário previsto para o estudo de caso. Enquanto os arquivos finais não estiverem disponíveis, as páginas usam os placeholders compartilhados em `assets/images/placeholders/`.

## Como usar este documento

1. Consulte a tabela de inventário antes de adicionar ou substituir uma imagem.
2. Mantenha o nome do arquivo e a proporção indicados, salvo se a composição exigir outro recorte.
3. Atualize o `src`, o `alt` e as dimensões no HTML correspondente.
4. Atualize o status nesta tabela.
5. Só remova o aviso de prévia quando todas as figuras finais estiverem no lugar.

## Convenções

- Nomes em minúsculas, sem acentos e com hífens: `logo-primary.svg`, `sticker-01.webp`.
- Vetores em SVG; imagens raster em WebP; documentos em PDF.
- Não commitar arquivos editáveis (AI, CDR, PSD, AFDESIGN etc.). Apenas exports otimizados.
- Preservar a arte fornecida: evitar cortes, distorções e recortes que alterem o símbolo.
- Imagens com texto precisam de `alt` que cubra a informação essencial.
- Não usar imagens de banco ou mockups fictícios para representar o projeto.

## Placeholders compartilhados

| Placeholder | Dimensão | Uso provisório |
|---|---|---|
| `assets/images/placeholders/placeholder-cover.svg` | 1400 × 620 | Capa |
| `assets/images/placeholders/placeholder-wide.svg` | 1520 × 1000 | Pranchas horizontais e spreads |
| `assets/images/placeholders/placeholder-half.svg` | 1455 × 1000 | Aplicações e detalhes |
| `assets/images/placeholders/placeholder-narrow.svg` | 852 × 1000 | Perfil e peças verticais |
| `assets/images/placeholders/placeholder-square.svg` | 1000 × 1000 | Símbolo, perfil e peças quadradas |

## Inventário

As dimensões-alvo seguem as proporções das placas, para evitar cortes na exibição: `wide` 760/500 (1520 × 1000), `half` 640/440 (1455 × 1000), `narrow` 520/610 (852 × 1000), `square` 1/1 (1000 × 1000) e capa 1400/620.

| Figura / seção | Arquivo | Formato | Dimensão | Uso | Status |
|---|---|---|---|---|---|
| Capa | `cover.webp` | WebP | 1400 × 620 | Imagem de abertura do estudo | Pendente |
| 02 Conceito | `symbol-studies-01.webp` | WebP | 1520 × 1000 | Primeira prancha de estudos do símbolo | Pendente |
| 02 Conceito | `symbol-studies-02.webp` | WebP | 1520 × 1000 | Segunda prancha de estudos do símbolo | Pendente |
| 03 Símbolo | `logo-primary.svg` | SVG | 1200 × 1200 | Símbolo principal | Pendente |
| 03 Símbolo | `logo-variations.svg` | SVG | 1520 × 1000 | Variações e composições | Pendente |
| 04 Sistema visual | `palette.svg` | SVG | 1455 × 1000 | Paleta de cores | Pendente |
| 04 Sistema visual | `typography.svg` | SVG | 1455 × 1000 | Tipografia e hierarquia | Pendente |
| 04 Sistema visual | `profile-photo.webp` | WebP | 1000 × 1000 | Foto de perfil do clube | Pendente |
| 04 Sistema visual | `clear-space.svg` | SVG | 1520 × 1000 | Área de respiro e aplicação | Pendente |
| 05 Aplicações | `sticker-01.webp` | WebP | 1455 × 1000 | Aplicação em adesivo | Pendente |
| 05 Aplicações | `instagram-profile.webp` | WebP | 852 × 1000 | Perfil do clube no Instagram | Pendente |
| 05 Aplicações | `guidelines-spread-01.webp` | WebP | 1455 × 1000 | Página do PDF de identidade | Pendente |
| 05 Aplicações | `guidelines-spread-02.webp` | WebP | 1455 × 1000 | Página do PDF de identidade | Pendente |
| 05 Aplicações | `identity-guidelines.pdf` | PDF | A definir | PDF de apresentação da identidade | Pendente |

## Textos alternativos provisórios

Os textos abaixo descrevem a intenção da figura. Quando a imagem final for adicionada, o `alt` deve ser ajustado ao conteúdo real.

| Arquivo | Alt PT | Alt EN |
|---|---|---|
| `cover.webp` | Capa do estudo de caso Motoclube, com espaço reservado para a imagem final. | Cover of the Motoclube case study, with a reserved space for the final image. |
| `symbol-studies-01.webp` | Prancha provisória com estudos de forma e composição do símbolo do Motoclube. | Provisional plate with studies of the Motoclube symbol's shape and composition. |
| `symbol-studies-02.webp` | Prancha provisória com variações do símbolo do Motoclube. | Provisional plate with variations of the Motoclube symbol. |
| `logo-primary.svg` | Espaço reservado para o símbolo principal do Motoclube. | Reserved space for the Motoclube primary symbol. |
| `logo-variations.svg` | Espaço reservado para as variações e composições da marca. | Reserved space for the brand's variations and lockups. |
| `palette.svg` | Espaço reservado para a paleta de cores do Motoclube. | Reserved space for the Motoclube colour palette. |
| `typography.svg` | Espaço reservado para a tipografia e a hierarquia visual. | Reserved space for the typography and visual hierarchy. |
| `clear-space.svg` | Espaço reservado para a área de respiro e as regras de aplicação. | Reserved space for clear space and application rules. |
| `profile-photo.webp` | Espaço reservado para a foto de perfil do clube. | Reserved space for the club's profile photo. |
| `sticker-01.webp` | Espaço reservado para a aplicação do símbolo em um adesivo. | Reserved space for the symbol applied to a sticker. |
| `instagram-profile.webp` | Espaço reservado para a visualização do perfil do clube no Instagram. | Reserved space for a view of the club's Instagram profile. |
| `guidelines-spread-01.webp` | Espaço reservado para uma página do PDF de identidade do Motoclube. | Reserved space for a page from the Motoclube identity PDF. |
| `guidelines-spread-02.webp` | Espaço reservado para outra página do PDF de identidade. | Reserved space for another page from the identity PDF. |

O PDF não usa `alt`; o link deve ter um rótulo textual claro, por exemplo “Abrir PDF de identidade (em preparação)”.

## Procedimento de substituição

1. Exporte o arquivo final com o nome e a dimensão da tabela.
2. Otimize o SVG ou WebP sem perder legibilidade.
3. Coloque o arquivo em `pages/projects/motoclube/images/`.
4. Atualize o `src`, o `width`, o `height` e o `alt` no HTML PT e EN.
5. Confira a proporção e o recorte nos breakpoints.
6. Atualize o status nesta tabela para `Recebido`.
7. Quando todas as figuras estiverem prontas, remova o aviso de prévia e atualize o status da página.

## Observações

- Nome oficial do clube, Instagram, cores exatas, fontes e medidas ainda precisam ser confirmados. Não inventar esses dados.
- O PDF de identidade só deve ser linkado quando o arquivo real estiver disponível.
- A arte dos cards da home pode usar `cover.webp` ou um recorte dedicado. Se a arte for decorativa dentro de um link já rotulado, usar `alt=""`.
- Preservar o símbolo e as aplicações fornecidas; não redesenhar a marca para preencher uma figura.
- Se uma imagem tiver texto essencial, esse texto deve aparecer também na legenda ou no corpo da página.

## Checklist

- [ ] Todos os arquivos finais adicionados
- [ ] Nomes e dimensões conferidos
- [ ] `alt` PT/EN atualizado
- [ ] PDF disponível ou link removido
- [ ] Nenhum dado inventado
- [ ] Aviso de prévia removido
- [ ] Status atualizado
