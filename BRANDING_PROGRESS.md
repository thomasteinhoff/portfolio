# Branding — Relatório de continuidade

> Checkpoint de 27 de novembro de 2026. Este documento registra o estado real do trabalho de Branding na branch `portfolio-branding`. Ele complementa o `ROADMAP.md` e serve para retomada em outra sessão.

## Atualização — Etapa 7 (README) concluída

Registrada em 28 de novembro de 2026 na branch `portfolio-integration`, depois da revisão visual da Etapa 6.

- A revisão visual da integração foi aprovada pelo usuário; nenhuma decisão de design foi reaberta.
- A Etapa 7 atualizou `README.md` para refletir os três estudos, a paridade PT/EN, a organização de assets, as Fases 5 e 6 e as limitações conhecidas. Nenhum código ou outro documento foi alterado.
- Commit `47f4a1e` (`docs(readme): reflect integrated case studies`), exclusivo em `README.md`.
- Validação: checker de links/caminhos do README sem `MISS`, `git diff --check` limpo e QA final aprovado na Etapa 8 sem bloqueantes.
- Estado Git antes deste ajuste documental: `portfolio-integration` com 13 commits locais à frente de `origin/portfolio-integration`; `main` e `origin/main` em `d60f3de`; sem push, merge, rebase, reset, amend, force push, tag ou release.
- Etapa 7 encerrada localmente. Push da integração permanece pendente.

## Atualização — Etapa 6 (integração geral) concluída

Registrada em 28 de novembro de 2026 na branch `portfolio-integration`, depois dos marcos 1 a 4.

- Decisões aprovadas antes da implementação: na home, os estudos entram como links no card Índice e são citados na nota — sem cards novos e sem mudança de composição; no arquivo, os cards passam a usar os nomes reais dos projetos.
- Marco 1 — `cf125c4` (`feat(archive): link Motoclube and Rotten Carmilla case studies`): os dois cards de Branding em `pages/projects/index.html` e `index.en.html` viraram links com `aria-label`, títulos “Rotten Carmilla” e “Motoclube” e status “Estudo de caso (prévia)” / “Case study (preview)”. Sem texto de “sem página individual” nesses cards.
- Marco 2 — `656b9c6` (`feat(case-nav): link Motoclube and Rotten Carmilla studies`): os quatro `case-nav__item--muted` foram substituídos por links reais nos dois idiomas — Motoclube → Rotten Carmilla e Rotten Carmilla → Motoclube. Tally permanece com “Conteúdo a definir” / “Content to be defined”.
- Marco 3 — `ab20eee` (`feat(home): link published studies from index and note`): o card Índice da home PT/EN passou a ter 7 entradas, com as três prévias publicadas linkadas (Tally 2026, Motoclube 2026, Rotten Carmilla 2025); a nota cita as três prévias e o texto antigo “apenas o Tally” foi removido. Uma única regra em `assets/css/components.css` garante que a âncora mantenha `flex: none` e tenha feedback de hover/foco; `responsive.css` não foi alterado.
- Marco 4 — validação sem nova alteração de código: paridade PT/EN dos links e cards, ativação dos quatro links de navegação, 8 páginas e 29 URLs locais únicas com HTTP 200, e auditoria headless em 20 combinações página/largura (home e arquivo em 390/721/1440 px; estudos em 390/1440 px) sem overflow fora dos elementos já recortados, sem imagem quebrada e com foco visível em 100% dos elementos alcançáveis. `git diff --check` limpo.
- Preservado: conteúdo e placeholders dos estudos, `noindex, nofollow`, navegação do Tally, componentes compartilhados além da regra mínima do índice, e nenhuma informação, imagem ou entrega inventada.
- Estado Git antes do commit de fechamento: `portfolio-integration` com 11 commits locais à frente de `origin/portfolio-integration` (`ea6b493`); `main` e `origin/main` em `d60f3de`. Sem push, merge, rebase, reset, amend, force push, tag ou release.
- Etapa 6 encerrada localmente naquele momento; revisão visual aprovada depois, conforme atualização da Etapa 7 acima. Etapa 7 concluída; push permanece pendente.

## Atualização — Etapa 5 (Rotten Carmilla EN) concluída

Registrada em 27 de novembro de 2026 na branch `portfolio-integration`, depois dos marcos A a C.

- Marco A — `a21a281` (`feat(rotten-carmilla): add English case study`): criado `pages/projects/rotten-carmilla/index.en.html` com 466 linhas. Mesma sequência de tags do body, mesmos 7 IDs, mesmas 12 figuras com os mesmos `src`/dimensões, alts EN conferidos com `ASSETS.md`, 4 etapas de processo e 10 linhas de ficha. Metadata EN: `lang="en"`, `noindex, nofollow`, canonical EN, `hreflang` pt-BR/en/x-default e dois links para a PT no header e no menu.
- Marco B — `2ad9ed4` (`feat(rotten-carmilla): link PT and EN case studies`): ativado o seletor EN na versão PT (dois links reais com `hreflang="en"` e `aria-label`) e adicionados os `hreflang` pt-BR/en/x-default à PT, espelhando o padrão Motoclube.
- Marco C — validação sem alteração de código: checker de paridade PT/EN (326 tags idênticas no body, IDs, imagens, alts, legendas, conceito central e ausência de texto PT na EN), 23 URLs locais com HTTP 200 nas duas páginas, paridade de geometria em 390/721/1440 px (capa 1:1, lettering 16:9, rascunhos 4:5 e placas horizontais preservadas, sem overflow ou imagem quebrada) e auditoria de foco/menu nas duas versões (skip-link primeiro, foco visível, menu abre/fecha e 7 links focáveis quando aberto). `git diff --check` limpo.
- Conteúdo preservado: as letras **são** os traços da mosca; título “Evicted in Blood and Smoke”; Pinterest sem licença registrada; story, adesivo, registros de processo e detalhes da capa como pendências; próximo estudo Motoclube silenciado. Nenhuma imagem, aplicação ou informação nova foi inventada.
- Fora de escopo: Etapa 6, home, arquivo de projetos, Motoclube, Tally e componentes compartilhados — nenhum desses arquivos foi alterado.
- Estado Git antes do commit de fechamento: `portfolio-integration` sete commits à frente de `origin/portfolio-integration` (`ea6b493`); `main` e `origin/main` em `d60f3de`; working tree limpa além deste relatório e do `ROADMAP.md`. Sem push.
- Etapa 5 encerrada localmente. Revisão do usuário e autorização de push permanecem pendentes; Etapa 6 não iniciada.

## Atualização — Etapa 4 (Rotten Carmilla PT) concluída

Registrada em 27 de novembro de 2026 na branch `portfolio-integration`, depois dos marcos 1 a 4.

- Marco 1 — `a7a41b7` (`feat(rotten-carmilla): add Portuguese case study structure`): página PT completa em `pages/projects/rotten-carmilla/index.html`, com ordem aprovada Contexto → Lettering e referências → Processo de construção → Capa do single → Ficha técnica. Metadados de prévia (`noindex, nofollow`, canonical PT, sem `hreflang`, seletor EN desativado), 12 figuras com alts conferidos com `ASSETS.md` e next study silenciado.
- Marco 2 — `41e2bcb` (`feat(rotten-carmilla): scope CSS to preserve artwork ratios`): `project.css` escopado, carregado por último, com capa 1:1, lettering 1600 × 900 e rascunhos 1000 × 1250.
- Marco 3 — `6ea2d3f` (`fix(rotten-carmilla): restore landscape plate ratios on small screens`): revisão em 1440/1100/768/720/390 px identificou o achatamento 4:3 das pranchas horizontais abaixo de 720 px; proporções 1520 × 1000 e 1455 × 1000 restauradas apenas nessa largura.
- Marco 4 — validado sem alteração de código: checker de acessibilidade (tags balanceadas, 7 IDs únicos, 12 imagens com `alt`/dimensões, 12 `figcaption`, landmarks, 5 `nav` rotulados, skip-link primeiro, sem `tabindex` positivo, h1 único), checker da Etapa 1, 16 URLs locais com HTTP 200 e auditoria de foco em 390/721/1440 px (skip-link primeiro, foco visível nos elementos alcançáveis, menu native `<details>` abre/fecha e os 6 links do painel são focáveis quando aberto). `git diff --check` sem erros.
- Decisões de conteúdo preservadas: as letras **são** os traços da mosca; título do single “Evicted in Blood and Smoke”; preto, branco e detalhes em vermelho como característica observada; posts de Instagram apenas na ficha técnica; sem manual, paleta oficial ou resultados documentados.
- Pendências: registros de processo, story, adesivo, detalhes de embalagem/tijolo/textura/tipografia da capa e direitos de uso das imagens do Pinterest. Nenhuma imagem final foi adicionada.
- Fora de escopo nesta etapa: versão EN, home, arquivo de projetos, Motoclube, Tally, CSS/JS compartilhados e push.
- Marco 5 — fechamento: `ROADMAP.md` (F5) e `pages/projects/rotten-carmilla/ASSETS.md` atualizados para refletir o título confirmado do single, a origem Pinterest sem licença registrada e a numeração das seções da página. Nenhuma alteração de código após o marco 4.
- Revalidação final: checkers dos marcos 1, 2 e 4, geometria em 1440/1100/768/720/390 px, 16 URLs locais com HTTP 200, auditoria de foco/menu e `git diff --check` — todos sem falhas.
- Estado Git antes do commit de fechamento: `portfolio-integration` quatro commits à frente de `origin/portfolio-integration` (`ea6b493`); `main` e `origin/main` em `d60f3de`; pendentes `ROADMAP.md`, `ASSETS.md` e este relatório. Sem push.
- Etapa 4 encerrada localmente. Revisão do usuário e autorização de push permanecem pendentes; Etapas 5 e 6 não iniciadas.

## Atualização — Etapa 3 (Motoclube EN) em andamento

Registrada em 27 de novembro de 2026 na branch `portfolio-integration`, depois do push do checkpoint `99bd274`.

- Etapa 3 iniciada com autorização do usuário. Marco A commitado em `db97ddc` (`feat(motoclube): add English case study`): `pages/projects/motoclube/index.en.html`, espelhando a versão PT.
- Reaproveitamento: mesmos IDs de seção, 13 figuras e legendas, placeholders compartilhados, `project.css` escopado, componentes `case`/`plate`/`specs`, navegação e rodapé; nenhuma imagem duplicada.
- Conteúdo: textos em inglês derivados da página PT e textos alternativos conferidos com a coluna EN de `ASSETS.md`. O status de prévia foi preservado: `noindex, nofollow`, aviso editorial, dados oficiais pendentes e próximo estudo silenciado. Nenhum nome, data, aplicação, cor, fonte ou resultado foi inventado.
- Alternância de idioma: a página EN tem `canonical` próprio, `hreflang` PT/EN/x-default e links para a PT no header e no menu. O marco B (`0e4a6e3`) ativou o seletor EN e os `hreflang` na página PT.
- Validações executadas depois do marco B: checker PT/EN (13 imagens, alts EN conferidos com `ASSETS.md`, sequências de tags de `main` e `footer` idênticas, 9 IDs iguais, 13 legendas e alvos locais existentes), 24 URLs locais com HTTP 200, paridade de layout em 1440/1024/721/720/390 px sem overflow e 13/13 imagens carregadas nos dois idiomas, auditoria de teclado/menu 17/17 em PT e EN a 390 e 721 px, alternância PT↔EN nos quatro pontos (header e menu) e `git diff --check` sem erros.
- Pendências: revisão do usuário e autorização para push. Não há implementação ou validação técnica pendente na Etapa 3; home, arquivo de projetos, Rotten Carmilla e integração geral continuam fora de escopo.
- Fora de escopo: home, arquivo de projetos, Rotten Carmilla, CSS/JS compartilhados e integração geral, que pertence à Etapa 6.

## 0. Atualização — Etapa 2 (Motoclube PT) concluída

Registrada em 27 de novembro de 2026, depois do checkpoint original. As seções 1 a 7 abaixo descrevem o estado anterior e são mantidas como registro histórico.

- Branch de trabalho: `portfolio-integration` (a `portfolio-branding` foi integrada em `d2b00a6`).
- Etapa 2 encerrada e aprovada: correções de conteúdo e técnica (C1–C10), dimensões das oito figuras alinhadas aos placeholders, proporções das placas, `ASSETS.md` revisado, `hreflang` removido e `noindex, nofollow` aplicado, seletor EN com `lang` e texto `.sr-only`, contraste do próximo projeto corrigido.
- Composição das galerias resolvida em `pages/projects/motoclube/project.css`, com escopo de página: `plate--studies` (Figs. 02/03), `plate--sticker` (Fig. 10), `align-items: start` e restauração das proporções das placas abaixo de 720 px.
- A página PT continua sem versão EN, sem link na home e no arquivo de projetos, e com placeholders no lugar das imagens finais.
- Pendências que seguem abertas para a Etapa 2: revisão em navegador real nas larguras críticas, navegação por teclado, foco visível e `prefers-reduced-motion`. As demais pendências listadas em 5.1 foram cumpridas.
- Etapa 3 (Motoclube EN) não foi iniciada.

## 1. Estado geral

| Item | Estado |
| --- | --- |
| Branch atual | `portfolio-branding` |
| HEAD antes do checkpoint | `e65709a` — `docs: add branding asset plans and placeholders` |
| `origin/portfolio-branding` | `e65709a` (sincronizada antes do checkpoint) |
| `main` / `origin/main` | `d60f3de` — sem alterações |
| Etapa atual | Etapa 2 — página Motoclube em português, em andamento |
| Working tree antes do checkpoint | apenas `pages/projects/motoclube/index.html` não rastreado |
| Arquivos do Tally | nenhum alterado |
| Publicação | nenhuma página nova publicada ou vinculada ao site |

A Etapa 1 foi concluída e aprovada. A Etapa 2 tem a página em português implementada, mas ainda não foi formalmente encerrada. Este checkpoint preserva essa página e o estado real do trabalho; ele não conclui a Etapa 2 nem inicia a Etapa 3.

## 2. Trabalho concluído

### 2.1 Etapa 1 — base de assets

Concluída e commitada em `e65709a`:

- Cinco placeholders SVG compartilhados em `assets/images/placeholders/`.
- `pages/projects/motoclube/ASSETS.md`.
- `pages/projects/rotten-carmilla/ASSETS.md`.
- Arquivos `.gitkeep` nas pastas de imagens dos dois projetos.
- Modificador `.plate--square` em `assets/css/components.css`.
- Verificações de SVG, chaves de CSS, tabelas Markdown, ausência de mudanças no Tally e sincronização da branch.

### 2.2 Etapa 2 — página Motoclube PT

Criado:

- `pages/projects/motoclube/index.html` — página editorial completa em português, com 477 linhas e aproximadamente 24 KB.

A página reutiliza a estrutura e os componentes existentes:

- Shell, header, navegação principal, menu mobile, footer e script compartilhado.
- `case`, `case__head`, `case__meta`, `case__notice`, `case__cover`.
- `case-section`, `case-overview`, `prose`, `pullquote`, `prose__note`.
- `case-gallery`, `plate`, `plate--half`, `plate--wide`, `plate--narrow`, `plate--square`.
- `specs`, `button-row`, `button`, `case-nav`.

Seções implementadas:

1. Contexto.
2. Conceito.
3. Símbolo.
4. Sistema visual.
5. Aplicações.
6. Resultado.
7. Ficha técnica.

Conteúdo e decisões editoriais aplicadas:

- Título de trabalho “Motoclube”; o nome oficial permanece explicitamente pendente.
- Origem do contato por indicação de um participante, sem proximidade anterior com o grupo.
- Início em 2026 e ponto de partida por questionário curto, sem briefing extenso.
- Conceito da estrada vista de dentro do capacete, com as linhas acompanhando as curvas reais do capacete.
- Desenvolvimento digital, sem rascunhos manuais preservados.
- Paleta descrita qualitativamente: cinza asfalto, amarelo das marcações e verdes da paisagem.
- Tipografia descrita qualitativamente: serifada bold, caixa alta, desenho amplo e cantos arredondados.
- Entregas: logo vetorial, paleta, variações, orientações de uso claro/escuro, área de respiro, orientação para foto de perfil e PDF de apresentação.
- Aplicações registradas: adesivos e perfil no Instagram.
- Aprovação imediata e continuidade de uso pelo clube.
- Ausência de métricas, pesquisa de percepção ou resultados comerciais documentados.

Cuidados de conteúdo:

- Nenhum nome oficial, handle de Instagram, código de cor, nome de fonte, medida de espaçamento, aplicação ou resultado foi inventado.
- O PDF é mencionado como entrega, mas não é vinculado porque o arquivo ainda não está disponível.
- O seletor de idioma EN está temporariamente desativado, como `span` com `aria-disabled`, para não criar um link quebrado antes da Etapa 3.
- O próximo projeto aparece como item silenciado, sem link, porque a página Rotten Carmilla ainda não existe.
- O `hreflang="en"` já aponta para o futuro `index.en.html`.
- A página não está vinculada à home nem ao arquivo de projetos; isso pertence à Etapa 6.
- As imagens usam os placeholders compartilhados e têm legendas e textos alternativos provisórios.
- A página tem `canonical`, `hreflang` PT/EN/x-default, metadados, favicon e os CSS/JS compartilhados.

Ajustes de precisão feitos durante a revisão deste checkpoint:

- A frase sobre o questionário foi reduzida ao que está confirmado: respostas diretas do grupo, sem atribuir perguntas específicas.
- O objetivo foi reescrito em termos das aplicações confirmadas, sem inferir “proximidade do grupo”.
- A frase sobre leitura em tamanhos pequenos foi reescrita para se apoiar nas variações e na orientação para foto de perfil, em vez de afirmar uma intenção não documentada.

## 3. Verificações executadas

| Verificação | Resultado |
| --- | --- |
| Estrutura HTML | OK em verificador próprio: 13 imagens, 34 links/âncoras, 9 IDs, sem IDs duplicados, sem `aria-labelledby` órfão, imagens com `alt`, `width` e `height`. |
| Links locais | 16 URLs locais únicas verificadas via HTTP; todas retornaram 200. Inclui CSS, JS, favicon, placeholders, home, arquivo, sobre, currículo e contato. |
| Página desktop | Captura full-page via Chrome headless/CDP em viewport de 1440 px: 1425 × 7327 px. Revisão visual do topo e das seções. |
| Página mobile | Captura full-page via CDP em viewport de 390 px: 390 × 9721 px. Capturas de seção em 390 px para contexto, símbolo, sistema visual, aplicações e ficha técnica. |
| Título em larguras críticas | Medição do texto e do container: 1440 (695/899 px), 1024 (494/637 px), 768 (371/719 px), 720 (433/688 px), 390 (327/358 px), 360 (311/328 px), 320 (281/288 px). Sem overflow horizontal; em 320 px restam 7 px à direita. |
| `git diff --check` | OK após o staging dos dois arquivos; nenhum erro de whitespace ou conflito. |
| Tally | Nenhum arquivo do Tally aparece em `git status`; nenhuma alteração feita. |
| Working tree | Antes do checkpoint, apenas a página Motoclube PT estava não rastreada. |

Observações sobre os testes:

- O primeiro screenshot isolado em 390 px, feito com `--window-size` do Chrome headless, sugeria corte do título. A medição via CDP mostrou que o texto cabe no container; o corte era artefato do viewport efetivo do screenshot, não overflow real. Nenhuma alteração de CSS foi necessária.
- O navegador integrado da sessão estava desconectado. A revisão visual foi feita com Chrome headless e Chrome DevTools Protocol, não com o navegador desktop da sessão.
- Não foi executado validador W3C, Lighthouse ou teste formal de teclado e `prefers-reduced-motion`. A página reutiliza componentes existentes e não adiciona JavaScript ou animações próprias, mas esses testes continuam pendentes para o fechamento da etapa.
- O servidor HTTP usado nos testes era temporário e não faz parte do repositório.

## 4. Trabalho incompleto

- A Etapa 2 não está formalmente concluída; a página PT está implementada, mas precisa de revisão final e aprovação.
- A versão em inglês da página Motoclube não existe.
- O seletor EN está desativado na página PT.
- O link para o próximo projeto está silenciado.
- A página não está na home nem no arquivo de projetos.
- O PDF de apresentação não está disponível nem vinculado.
- As imagens finais, o nome oficial, o Instagram, as cores exatas, a fonte e as medidas de espaçamento continuam pendentes.
- A integração da branch `tally-wip` continua adiada.

## 5. Pendências

### 5.1 Para concluir a Etapa 2

- Revisar o texto integral da página contra o levantamento aprovado.
- Confirmar que as frases interpretativas restantes são aceitáveis ou ajustá-las.
- Revisar legendas, textos alternativos e correspondência com `pages/projects/motoclube/ASSETS.md`.
- Revisar a página em 1440, 1024, 768, 390, 360 e 320 px em navegador real, se possível.
- Verificar navegação por teclado, foco visível e `prefers-reduced-motion`.
- Repetir a verificação de links locais e a estrutura HTML após qualquer ajuste.
- Executar `git diff --check` antes do commit.
- Obter aprovação do usuário antes de iniciar a Etapa 3.

### 5.2 Próximas etapas previstas

- Etapa 3: criar `pages/projects/motoclube/index.en.html`, espelhar o conteúdo em inglês, ativar o seletor EN e ajustar o link na página PT.
- Etapa 4: criar a página Rotten Carmilla em português.
- Etapa 5: criar a página Rotten Carmilla em inglês.
- Etapa 6: integrar home, arquivo de projetos e navegação entre os estudos; ativar o link Motoclube → Rotten Carmilla e o retorno Rotten Carmilla → Motoclube.
- Etapa 7: atualizar `README.md` e `ROADMAP.md`.
- Etapa 8: QA final, correções e commit/push se necessário.
- Etapa 9: revisão do histórico e push final.
- Integração posterior da branch `tally-wip`, com resolução de conflitos e ajuste da navegação do Tally apenas nesse momento.

## 6. Orientações para retomada

Próximo passo concreto:

1. Ler este relatório, o `ROADMAP.md` e `pages/projects/motoclube/index.html`.
2. Revisar a página PT e decidir se a Etapa 2 pode ser encerrada.
3. Só depois da confirmação do usuário, iniciar a Etapa 3.

Arquivos que devem ser consultados:

- `AGENTS.md` — regras permanentes de trabalho.
- `ROADMAP.md` — arquitetura, escopo, prioridades e decisões aprovadas.
- `README.md` — visão geral e uso do projeto.
- `pages/projects/_templates/branding.html` — modelo editorial PT.
- `pages/projects/_templates/branding.en.html` — modelo editorial EN.
- `pages/projects/tally/index.html` e `index.en.html` — referência de estrutura; não editar nesta branch.
- `pages/projects/motoclube/index.html` — página implementada.
- `pages/projects/motoclube/ASSETS.md` — inventário de imagens e regras de substituição.
- `assets/css/components.css` e `assets/css/responsive.css` — componentes e breakpoints.
- `assets/images/placeholders/` — placeholders compartilhados.
- `index.html`, `index.en.html`, `pages/projects/index.html` e `pages/projects/index.en.html` — integração futura.

Decisões aprovadas que precisam ser preservadas:

- Identidade editorial modular, com tipografia forte, regras finas, rótulos e numeração.
- Paleta Paper `#F1EDE4`, Ink `#17160F`, Signal red `#D6452B` e Line `#C9C2B1`.
- Bricolage Grotesque para display e JetBrains Mono para dados técnicos.
- HTML5, CSS3 e JavaScript vanilla; sem frameworks, build, CMS ou backend.
- Páginas HTML independentes, caminhos relativos, funcionamento via `file://` e HTTP.
- Português como versão principal; inglês com sufixo `.en.html`.
- Nenhum conteúdo, cliente, resultado, data, cor, fonte, medida ou aplicação inventados.
- Placeholders explícitos até a incorporação dos arquivos finais.
- Aviso de prévia visível enquanto a página não estiver pronta para publicação.
- Um `ASSETS.md` por projeto.
- Nenhuma alteração em arquivos do Tally nesta branch.
- Commits e pushes por etapa, com `git add` explícito; sem `git add .`, `git add -A`, amend, reset, rebase, force push ou merge na `main`.

Restrições que continuam válidas:

- Não iniciar a Etapa 3 sem confirmação.
- Não publicar a prévia como versão final.
- Não substituir placeholders por imagens fictícias.
- Não alterar o Tally antes da integração da `tally-wip`.
- Não reorganizar outros projetos ou redesenhar componentes aprovados.
- Não criar páginas em inglês sem a versão PT correspondente; a versão PT já existe, mas a EN ainda será criada.

## 7. Estado do repositório neste checkpoint

Antes deste checkpoint:

- `git status` mostrava apenas `?? pages/projects/motoclube/index.html`.
- Nenhum arquivo rastreado estava modificado.
- Nenhum arquivo do Tally estava alterado.
- `main` permanecia em `d60f3de`.

Este checkpoint adiciona:

- `pages/projects/motoclube/index.html`.
- `BRANDING_PROGRESS.md`.

O hash do commit de checkpoint será informado na conversa após o push. O relatório não tenta prever o próprio hash.
