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
├── CNAME                 # Domínio personalizado (familiavwbrinquedos.com.br) - NUNCA APAGAR
├── css/
│   └── styles.css        # Folha de estilo completa e responsiva (Design System)
├── js/
│   ├── data.js           # Dados do site (telefones, links, cidades, brinquedos)
│   └── main.js           # Lógica do carrossel, flipcards, menu mobile e mapa
├── assets/               # Imagens, logotipos, fotos dos brinquedos e favicon
├── AGENT.md              # Instruções e diretrizes técnicas para IAs assistentes
└── README.md             # Documentação e guia de manutenção do projeto
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

## 🛠️ Guia de Manutenção (Para Terceiros e Novos Desenvolvedores)

Se você assumiu a manutenção deste site, fique tranquilo: **o projeto é extremamente simples e não exige conhecimentos de Node.js, compilação ou frameworks complexos**. Qualquer pessoa com um editor de texto (VS Code, Sublime Text, Notepad++, etc.) pode fazer alterações.

### 1. Como Alterar Textos e Estrutura nas Páginas HTML
* **Página Inicial (`index.html`)**: Contém todas as seções principais (banners, depoimentos, fotos, perguntas frequentes e rodapé). Para alterar um texto, abra o arquivo no editor, use `Ctrl + F` para localizar a frase desejada e edite diretamente entre as tags HTML.
* **Catálogo de Brinquedos (`brinquedos.html`)**: Contém a grade de brinquedos com fotos, nomes e categorias.
* **Onde Atendemos (`onde-atendemos.html`)**: Contém a lista de municípios atendidos e o contêiner do mapa interativo.
* **Imagens e Fotos**: Ficam guardadas na pasta `assets/`. Para trocar uma foto existente, adicione a nova imagem em `assets/` e atualize o atributo `src="assets/nome-da-foto.jpg"` no arquivo HTML correspondente.

### 2. Dica Importante: Central de Dados (`js/data.js`)
Muitas informações cruciais estão centralizadas no arquivo `js/data.js`. É muito mais rápido e seguro alterar lá:
* **Número do WhatsApp e Link**: Altere as propriedades `WHATSAPP_NUMERO_EXIBICAO` e `WHATSAPP_LINK`.
* **Instagram e Catálogo Externo**: Altere `INSTAGRAM_URL` e `CATALOGO_URL`.
* **Estatísticas e Números**: Altere o array `NUMEROS` (anos de experiência, eventos atendidos, etc.).
* **Lista de Cidades e Brinquedos**: Também estão listadas de forma organizada nesse arquivo.

### 3. Como Alterar o Visual e Cores no CSS (`css/styles.css`)
O design do site segue um sistema de variáveis centralizadas no topo do arquivo `css/styles.css` (dentro do bloco `:root`):
```css
:root {
  --color-primary-blue: #004aad;  /* Azul principal */
  --color-yellow: #ffde59;        /* Amarelo de destaque */
  --color-red: #e43232;           /* Vermelho promocional */
  --color-cyan: #5ce1e6;          /* Ciano secundário */
  --color-whatsapp: #25d366;      /* Verde do botão de WhatsApp */
  --font-heading: 'Baloo 2', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```
* **Alterar cores do site**: Basta trocar o código hexadecimal da cor desejada no `:root`. Todo o site mudará automaticamente de forma consistente.
* **Espaçamentos e fontes**: Também são controlados por variáveis logo no início de `styles.css`.
* **Ajustes específicos de blocos**: O arquivo está dividido por comentários claros (`/* HEADER */`, `/* HERO */`, `/* CARROSSEL */`, `/* FOOTER */`, etc.).

### 4. Como Testar as Alterações Antes de Publicar
1. **Opção mais simples:** Salve o arquivo editado e abra `index.html` com duplo clique no navegador.
2. **Servidor local (recomendado para testar geolocalização do mapa):**
   ```bash
   python3 -m http.server 8000
   ```
   Acesse no navegador: `http://localhost:8000`.

### 5. Como Publicar as Alterações no Ar (Produção)
O site está hospedado no **GitHub Pages** e conectado ao domínio oficial registrado no Registro.br: **`familiavwbrinquedos.com.br`**.

A publicação é **100% automatizada**. Você só precisa enviar os arquivos para a branch `main` do GitHub via terminal:

```bash
# 1. Verifique quais arquivos você alterou
git status

# 2. Adicione os arquivos alterados
git add .

# 3. Grave uma mensagem explicativa sobre o que mudou
git commit -m "Atualização de contatos e texto do banner"

# 4. Envie para o GitHub
git push origin main
```

> ⏱️ **Pronto!** Em cerca de **1 a 2 minutos**, o GitHub Pages atualizará os servidores e as alterações estarão disponíveis para todos os visitantes que acessarem `https://familiavwbrinquedos.com.br`.

### 6. Cuidados Críticos
* ⚠️ **NUNCA delete ou altere o arquivo `CNAME`**: Ele contém `familiavwbrinquedos.com.br` e é o responsável por manter o GitHub Pages conectado ao Registro.br.
* ⚠️ **Não instale ferramentas de build pesadas**: Mantenha o projeto estático e limpo para facilitar futuras manutenções por qualquer pessoa.

### 7. Vai usar Inteligência Artificial para ajudar na manutenção?
Se você utilizar ferramentas com IA (como Cursor, Claude Code, GitHub Copilot, ChatGPT ou Antigravity), oriente a IA a ler o arquivo [`AGENT.md`](AGENT.md), que contém as regras técnicas, restrições e convenções de código deste projeto.

---

## 🌐 Configuração Original do GitHub Pages

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
