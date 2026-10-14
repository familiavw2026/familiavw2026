# Família VW Brinquedos (Versão Estática HTML, CSS e JavaScript)

Esta versão foi completamente convertida e simplificada para utilizar **apenas HTML5, CSS3 moderno e Vanilla JavaScript (sem frameworks, sem React, sem Vite, sem Node/Bun)**.

Todas as funcionalidades e recursos visuais da versão original foram preservados fielmente.

---

## ✨ Recursos Preservados e Funcionalidades

1. **Galeria de Brinquedos Interativa e Automática**:
   - Transição suave entre as 10 fotos reais da empresa.
   - Troca automática a cada 4 segundos.
   - Pausa automática ao clicar ou interagir.
   - Botões anterior/próximo, botão de reproduzir/pausar e indicadores clicáveis.

2. **3D FlipCards (Cards Interativos que Viram)**:
   - Card **"Laudo técnico e ART"**: vira em 3D revelando a definição no verso.
   - 4 Cards de **Tipos de Eventos** (Particulares, Escolares, Corporativos e Abertos): viram em 3D revelando as fotos reais no verso.
   - Suporte a hover em computadores e toque/clique em celulares e tablets.

3. **Mapa Interativo e Geolocalização ("Onde Atendemos")**:
   - Identifica automaticamente a cidade mais próxima do visitante via GPS do navegador (mantendo **São Carlos** como padrão).
   - Destaca a cidade na lista de 21 cidades atendidas.
   - Mapa interativo (via Leaflet/OpenStreetMap — 100% gratuito, sem limite de cotas e sem necessidade de chave de API).
   - Marcador com destaque para a cidade-base (São Carlos) e popups interativos em cada município.

4. **Design e Identidade Visual Fiel**:
   - Paleta de cores oficial (Azul Royal `#004aad`, Amarelo `#ffde59`, Vermelho `#e43232`, Ciano `#5ce1e6` e Verde WhatsApp `#25d366`).
   - Tipografia idêntica com as fontes **Baloo 2** e **DM Sans** do Google Fonts.
   - Faixa promocional (*ticker banner*) em amarelo com animação infinita de rolagem.
   - Botão flutuante do WhatsApp (FAB) no canto inferior direito.
   - Linha do tempo de 5 passos ("Do primeiro clique à festa pronta").
   - Fundo em vermelho com o padrão de raios no CTA final.

5. **Independência Total e Autonomia**:
   - Todas as 25 imagens e ícones estão salvos localmente na pasta `assets/`.
   - Não depende de servidores externos ou CDNs privadas da Lovable.

---

## 📁 Estrutura de Arquivos

```text
giovana-html-css-js/
├── index.html            # Página inicial completa (Landing page principal)
├── brinquedos.html       # Catálogo de brinquedos com filtros e modal de detalhes
├── onde-atendemos.html   # Página dedicada de cobertura e cidades atendidas
├── css/
│   └── styles.css        # Folha de estilo completa e responsiva (Design System)
├── js/
│   ├── data.js           # Dados do site (telefones, links, cidades, brinquedos)
│   └── main.js           # Lógica do carrossel, flipcards, menu mobile e mapa
└── assets/               # Imagens, logotipos, fotos dos brinquedos e favicon
```

---

## 🚀 Como Executar Localmente

### Opção 1: Direto no Navegador (Mais Rápido)
Basta dar dois cliques no arquivo `index.html`. Ele abrirá normalmente em qualquer navegador (Chrome, Edge, Safari, Firefox).

### Opção 2: Servidor Local Simples (Recomendado para testar geolocalização)
No terminal, entre na pasta e execute:
```bash
python3 -m http.server 8000
```
E acesse no navegador: `http://localhost:8000`

---

## 🌐 Como Publicar no GitHub Pages (Passo a Passo)

Como este projeto é 100% estático (HTML, CSS e JS puros), ele é **nativamente compatível com o GitHub Pages** sem precisar de nenhuma configuração de build:

1. Crie um novo repositório no seu GitHub.
2. Suba o conteúdo desta pasta `giovana-html-css-js/` para a branch `main` do repositório:
   ```bash
   git init
   git add .
   git commit -m "Site Familia VW em HTML/CSS/JS"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, abra a aba **Settings** (Configurações) do repositório.
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment > Source**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
6. Clique em **Save**.

Em cerca de 1 a 2 minutos, o GitHub Pages fornecerá o link oficial gratuito (ex: `https://seu-usuario.github.io/nome-do-repositorio/`).

---

## ⚡ Como Publicar no Cloudflare Pages

Se preferir publicar no Cloudflare Pages:
1. No painel do Cloudflare, vá em **Workers & Pages > Create application > Pages > Connect to Git**.
2. Selecione o repositório.
3. Nas opções de build:
   - **Framework preset:** `None`
   - **Build command:** Deixe em branco (não precisa compilar!)
   - **Build output directory:** `.` ou deixe vazio
4. Clique em **Save and Deploy**. O site estará no ar instantaneamente!
