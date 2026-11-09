# Diretrizes do Agente de IA (AGENT.md)

Este documento foi criado para orientar qualquer inteligência artificial (IA) ou assistente de código que for analisar, modificar ou evoluir este projeto. Leia com atenção antes de realizar qualquer alteração.

---

## 1. Visão Geral do Projeto

* **Nome:** Família VW Brinquedos
* **Propósito:** Site institucional e catálogo para empresa de locação de brinquedos (infláveis, camas elásticas, jogos) para festas e eventos em São Carlos (SP) e região.
* **Domínio Oficial:** `https://familiavwbrinquedos.com.br` (registrado no Registro.br e hospedado via GitHub Pages).
* **Repositório:** `https://github.com/familiavw2026/familiavw2026.git` (branch `main`).

---

## 2. Princípios Arquiteturais e Regras Estritas

> [!IMPORTANT]
> **REGRA DE OURO: ZERO BUILD / VANILLA PURO**
> Este projeto é estritamente estático. **NÃO adicione Node.js, npm, Bun, Webpack, Vite, Tailwind CLI, React, Vue ou qualquer framework que exija etapa de compilação/build.**
> O site deve continuar funcionando imediatamente com duplo clique no `index.html` em qualquer navegador.

1. **HTML5 Semântico:** Tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
2. **CSS3 Puro e Moderno:**
   - Centralizado em `css/styles.css`.
   - Todas as variáveis globais de design estão em `:root` (paleta, fontes, sombras, espaçamentos).
   - Design totalmente responsivo (Mobile-first e breakpoints em `@media`).
   - Efeitos 3D (FlipCards) dependem de `perspective`, `transform-style: preserve-3d` e `backface-visibility: hidden`.
3. **Vanilla JavaScript Modular:**
   - `js/data.js`: Armazena a constante global `SITE_DATA` (dados de contato, redes sociais, cidades, diferenciais e catálogo).
   - `js/main.js`: Lida com comportamentos de interface (abertura de menu mobile, carrossel automático com timer, controle de flipcards no touch e mapa Leaflet).
4. **Ativos Locais Autônomos:**
   - Todas as imagens, ícones e fotos estão salvas na pasta `assets/`.
   - Não aponte imagens para servidores externos ou temporários (como CDNs privadas da Lovable ou semelhantes).
5. **Bibliotecas Externas Permitidas:**
   - Fontes: Google Fonts (`Baloo 2` para títulos e `DM Sans` para corpo).
   - Mapas: **Leaflet.js 1.9.4** com tiles do **OpenStreetMap** (100% gratuito, sem chaves de API pagas).

---

## 3. Mapeamento de Arquivos e Responsabilidades

```text
giovana-html-css-js/
├── index.html            # Landing page principal completa
├── brinquedos.html       # Catálogo detalhado com filtros por categoria e modal
├── onde-atendemos.html   # Página com mapa interativo e geolocalização
├── CNAME                 # Configuração de domínio (NUNCA DELETAR OU RENOMEAR)
├── css/
│   └── styles.css        # Folha de estilo única com Design System completo
├── js/
│   ├── data.js           # Dados centrais (WhatsApp, telefones, cidades, brinquedos)
│   └── main.js           # Lógica do carrossel, menu mobile, mapa e flipcards
├── assets/               # 25 fotos reais, logos em PNG/SVG e favicon.png
├── README.md             # Guia de manutenção e publicação para humanos
└── AGENT.md              # Este manual de diretrizes para IAs
```

---

## 4. Instruções para Tarefas Comuns

### Alteração de Telefones, WhatsApp ou Redes Sociais
- Priorize a edição no objeto `SITE_DATA` em `js/data.js`.
- Verifique se o cabeçalho ou rodapé em `index.html`, `brinquedos.html` e `onde-atendemos.html` possuem referências diretas que também precisem ser atualizadas para manter paridade.

### Inserção ou Remoção de Brinquedos do Catálogo
- Cadastre o novo item na lista de brinquedos em `js/data.js` e em `brinquedos.html`.
- Coloque a imagem do brinquedo em `assets/` (otimizada, formato JPG ou WebP, proporção consistente).

### Ajustes Visuais e de Cores
- Nunca altere cores inline nos arquivos HTML.
- Modifique sempre as variáveis do `:root` em `css/styles.css`:
  - `--color-primary-blue: #004aad;`
  - `--color-yellow: #ffde59;`
  - `--color-red: #e43232;`
  - `--color-cyan: #5ce1e6;`
  - `--color-whatsapp: #25d366;`

---

## 5. Fluxo de Publicação e Deploy (GitHub Pages + Registro.br)

1. **A publicação é 100% contínua e automatizada:**
   - O domínio `familiavwbrinquedos.com.br` aponta via DNS no Registro.br para os servidores do GitHub Pages.
   - O arquivo `CNAME` na raiz é quem conecta o GitHub Pages ao domínio.
2. **Ao concluir alterações via Git:**
   - Sempre certifique-se de commitar e enviar para a branch `main`:
     ```bash
     git add .
     git commit -m "feat/fix: descrição clara da mudança"
     git push origin main
     ```
   - O GitHub Pages disparará automaticamente o deploy. O site em produção refletirá as alterações em 1 a 2 minutos.
3. **Preservação de Integridade:**
   - **NUNCA** remova o arquivo `CNAME`.
   - Se for realizar um `git pull`, use `git pull --rebase origin main` para manter o histórico linear e limpo.

