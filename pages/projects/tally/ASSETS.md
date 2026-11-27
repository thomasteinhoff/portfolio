# Tally — assets do estudo de caso

Documento de referência para as mídias da página `pages/projects/tally/`.

- **Pasta:** `pages/projects/tally/images/`
- **Convenção:** nomes em inglês, minúsculos, sem acentos e sem espaços.
- **Idioma:** a interface do Tally é em português brasileiro. As capturas são compartilhadas entre PT e EN; legendas e textos alternativos são traduzidos.
- **Privacidade:** as capturas atuais são provisórias e foram integradas com os valores visíveis, por decisão do autor. As versões finais devem usar dados fictícios e ocultar valores.
- **Estado atual:** sete imagens disponíveis: o símbolo oficial, a versão para fundo claro e cinco capturas de tela em tema escuro. Os dois GIFs de interação continuam como placeholders.

## Arquivos disponíveis

| Arquivo | Status | Finalidade | Localização | Dimensões | Alt PT | Alt EN | Notas |
|---|---|---|---|---|---|---|---|
| `tally-symbol.png` | Disponível | Símbolo oficial do Tally | `images/tally-symbol.png` | 1024 × 1024 PNG | Símbolo oficial do Tally: marcas verticais em tons de pedra sobre fundo oliva, com uma marca terracota e uma linha horizontal. | Official Tally symbol: vertical stone-toned marks on an olive background, with one terracotta mark and a horizontal line. | Fonte preservada. Copiado de `tally.png` no repositório do Tally. Não redesenhar nem sobrescrever. Não é usado na página. |
| `tally-symbol-mark.png` | Disponível | Símbolo em versão para fundo claro | `images/tally-symbol-mark.png` | 896 × 896 PNG | Símbolo do Tally para fundo claro: três barras verticais em oliva escuro, uma barra terracota e uma linha horizontal terracota. | Tally mark for light backgrounds: three vertical dark-olive bars, one terracotta bar and a horizontal terracotta line. | Derivado de `tally-symbol.png`: tile escuro removido, área recortada e barras em tom de pedra remapeadas para o oliva escuro oficial. Terracota preservada. Usado na seção 03. |
| `overview.png` | Disponível, provisório | Visão geral: patrimônio, contas, resumo do mês e últimos lançamentos | `images/overview.png` | 1280 × 820 PNG | Captura da tela Visão geral do Tally, com patrimônio, contas e resumo do mês. | Tally Overview screen with net worth, accounts and monthly summary. | Tema escuro. Usado dentro da moldura 420 × 240 da capa (Fig. 01), não como capa inteira. |
| `analysis.png` | Disponível, provisório | Quadro de Análises: gráficos e comparativos do mês | `images/analysis.png` | 1280 × 820 PNG | Captura do Quadro de Análises do Tally em tema escuro: gastos por categoria, receitas, fluxo de caixa e tabela por categoria e tipo. | Screenshot of Tally’s Analysis board in the dark theme: spending by category, income, cash flow and a table by category and type. | Tema escuro. Fig. 03, placa larga. |
| `movements.png` | Disponível, provisório | Livro de movimentações com filtros e categorias | `images/movements.png` | 1280 × 820 PNG | Captura de Movimentações do Tally em tema escuro: filtros e dois lançamentos com data, conta, categoria e valor. | Screenshot of Tally’s Transactions screen in the dark theme: filters and two entries with date, account, category and amount. | Tema escuro. Fig. 04, placa meia. |
| `accounts.png` | Disponível, provisório | Contas e cartões: ativos, passivos, limites e saldos | `images/accounts.png` | 1280 × 820 PNG | Captura de Contas e cartões do Tally em tema escuro: patrimônio, cofrinhos, cartão de crédito e contas cadastradas. | Screenshot of Tally’s Accounts & cards screen in the dark theme: net worth, savings pockets, credit card and registered accounts. | Tema escuro. Fig. 05, placa meia. |
| `installments.png` | Disponível, provisório | Parcelamentos: estado vazio, sem compras parceladas | `images/installments.png` | 1280 × 820 PNG | Captura de Parcelamentos do Tally em tema escuro, em estado vazio: nenhuma compra parcelada registrada e totais zerados. | Screenshot of Tally’s Installments screen in the dark theme, in an empty state: no installment purchases recorded and totals at zero. | Tema escuro. Fig. 06, placa larga. A captura mostra o estado vazio, não parcelamentos preenchidos. |

## Capturas previstas

As capturas listadas acima já estão na página. As substituições futuras devem manter o mesmo nome de arquivo e o mesmo slot.

## Interações previstas

| Arquivo | Status | Finalidade | Seção prevista | Notas |
|---|---|---|---|---|
| `interaction-movement-form.gif` | Futuro | Formulário único adaptativo | A interface | GIF curto, sem áudio, com dados fictícios. |
| `interaction-installment-payment.gif` | Futuro | Pagamento de cartão e alocação FIFO | A interface | GIF curto, sem áudio, com valores fictícios. |

A página não implementa fallback de movimento reduzido. Se for necessário respeitar `prefers-reduced-motion`, produzir um poster estático e usar `<picture>` com `media="(prefers-reduced-motion: reduce)"` antes de publicar o GIF.

## Slots na página

| Slot | Estado | Arquivo |
|---|---|---|
| Capa, moldura 420 × 240 | Captura integrada | `overview.png` |
| Placa meia (seção 03) | Imagem integrada | `tally-symbol-mark.png` |
| Placa larga (seção 04) | Captura integrada | `analysis.png` |
| Placa meia (seção 04) | Captura integrada | `movements.png` |
| Placa meia (seção 04) | Captura integrada | `accounts.png` |
| Placa larga (seção 04) | Captura integrada | `installments.png` |
| Placa meia (seção 04) | Placeholder SVG | `interaction-movement-form.gif` |
| Placa meia (seção 04) | Placeholder SVG | `interaction-installment-payment.gif` |

## Como substituir

1. Salvar o arquivo em `images/` com o nome final da tabela, sobrescrevendo a versão provisória.
2. Nas placas da galeria, substituir o conteúdo de `.plate__canvas` por `<img src="images/arquivo.ext" width="…" height="…" alt="…" loading="lazy" decoding="async">` e marcar a figura com a classe `plate--capture`.
3. Na capa, atualizar o atributo `href` do elemento `<image>` dentro do SVG. A moldura de 420 × 240 é preservada.
4. Atualizar a legenda da figura e o `alt` neste documento, nos dois idiomas.
5. Se a proporção mudar, ajustar `aspect-ratio` em `project.css` para evitar recorte.

A troca é sempre explícita no HTML. Não há JavaScript, carregamento dinâmico ou `background-image` em CSS.

## Diretrizes para capturas finais

- Usar dados fictícios; ocultar ou substituir qualquer valor financeiro real.
- Manter uma janela consistente entre as capturas.
- Preferir tema claro para a sequência principal.
- Exportar em PNG ou WebP com boa legibilidade; GIFs curtos e leves para interações.
- Informar `width` e `height` reais no HTML.
- Usar `loading="lazy"` e `decoding="async"` abaixo da dobra.
- Escrever `alt` e legenda nos dois idiomas, mesmo quando a captura for compartilhada.
- Se a proporção da captura não coincidir com o canvas, usar `object-fit: contain` para não cortar a interface.
- Não criar capturas simuladas, telas falsas ou dados inventados para preencher placeholders.
