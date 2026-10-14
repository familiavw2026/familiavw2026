/**
 * Família VW Brinquedos - Lógica Principal (Vanilla JavaScript)
 * Sem dependências pesadas, 100% compatível com qualquer navegador e GitHub Pages.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initScrollSpy();
  initCarousel();
  initFlipCards();
  initOndeAtendemos();
  initBrinquedosFilter();
});

/* ==========================================================================
   1. Menu Mobile
   ========================================================================== */
function initMobileMenu() {
  const btnToggle = document.getElementById("btn-menu-mobile");
  const navMobile = document.getElementById("nav-mobile");
  if (!btnToggle || !navMobile) return;

  btnToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("open");
    btnToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    btnToggle.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
  });

  // Fecha o menu ao clicar em qualquer link
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
      btnToggle.setAttribute("aria-expanded", "false");
      btnToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    });
  });
}

/* ==========================================================================
   2. Navegação Ativa ao Rolar (ScrollSpy)
   ========================================================================== */
function initScrollSpy() {
  const secoes = [
    { id: "inicio", link: "index.html#inicio" },
    { id: "brinquedos", link: "index.html#brinquedos" },
    { id: "quem-somos", link: "index.html#quem-somos" },
    { id: "como-funciona", link: "index.html#como-funciona" },
    { id: "onde-atendemos", link: "index.html#onde-atendemos" },
    { id: "contato", link: "index.html#contato" },
  ];

  const linksDesktop = document.querySelectorAll(".nav-desktop .nav-link");
  const linksMobile = document.querySelectorAll(".nav-mobile .nav-mobile-link");

  const atualizarItemAtivo = () => {
    const linhaDeLeitura = 160;
    let idAtivo = "inicio";

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
      idAtivo = "contato";
    } else {
      for (const secao of secoes) {
        const elemento = document.getElementById(secao.id);
        if (elemento && elemento.getBoundingClientRect().top <= linhaDeLeitura) {
          idAtivo = secao.id;
        }
      }
    }

    const atualizarLista = (links) => {
      links.forEach((l) => {
        const href = l.getAttribute("href");
        if (href && (href.endsWith("#" + idAtivo) || href === "#" + idAtivo)) {
          l.classList.add("active");
        } else {
          l.classList.remove("active");
        }
      });
    };

    atualizarLista(linksDesktop);
    atualizarLista(linksMobile);
  };

  window.addEventListener("scroll", atualizarItemAtivo, { passive: true });
  atualizarItemAtivo();
}

/* ==========================================================================
   3. Carrossel de Fotos dos Brinquedos (Automático e Controlável)
   ========================================================================== */
function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot-btn");
  const btnPrev = document.getElementById("carousel-prev");
  const btnNext = document.getElementById("carousel-next");
  const btnPlay = document.getElementById("carousel-play");
  const carouselView = document.getElementById("carousel-view");

  if (!slides.length) return;

  let indiceAtual = 0;
  let automatico = true;
  let timerId = null;
  const INTERVALO = 4000;

  function mostrarSlide(indice) {
    slides.forEach((s, i) => s.classList.toggle("active", i === indice));
    dots.forEach((d, i) => d.classList.toggle("active", i === indice));
    indiceAtual = indice;
  }

  function proximo() {
    mostrarSlide((indiceAtual + 1) % slides.length);
  }

  function anterior() {
    mostrarSlide((indiceAtual - 1 + slides.length) % slides.length);
  }

  function iniciarTimer() {
    pararTimer();
    if (automatico) {
      timerId = setInterval(proximo, INTERVALO);
    }
  }

  function pararTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function alternarPlayPause() {
    automatico = !automatico;
    if (automatico) {
      iniciarTimer();
      btnPlay.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
      btnPlay.setAttribute("title", "Pausar troca automática");
      btnPlay.setAttribute("aria-label", "Pausar troca automática");
    } else {
      pararTimer();
      btnPlay.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
      btnPlay.setAttribute("title", "Retomar troca automática");
      btnPlay.setAttribute("aria-label", "Retomar troca automática");
    }
  }

  if (btnNext) {
    btnNext.addEventListener("click", (e) => {
      e.stopPropagation();
      proximo();
      if (automatico) alternarPlayPause();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      anterior();
      if (automatico) alternarPlayPause();
    });
  }

  if (btnPlay) {
    btnPlay.addEventListener("click", alternarPlayPause);
  }

  if (carouselView) {
    carouselView.addEventListener("click", () => {
      if (automatico) alternarPlayPause();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      mostrarSlide(idx);
      if (automatico) alternarPlayPause();
    });
  });

  iniciarTimer();
}

/* ==========================================================================
   4. 3D FlipCards (Interatividade Desktop, Toque e Acessibilidade)
   ========================================================================== */
function initFlipCards() {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach((card) => {
    // Alterna virada ao toque ou clique
    card.addEventListener("click", (e) => {
      card.classList.toggle("is-flipped");
    });

    // Acessibilidade por teclado (Enter ou Barra de Espaço)
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });

    // Desvira ao perder o foco
    card.addEventListener("blur", () => {
      card.classList.remove("is-flipped");
    });
  });
}

/* ==========================================================================
   5. Onde Atendemos: Detecção de Cidade mais Próxima e Mapa Interativo
   ========================================================================== */
function initOndeAtendemos() {
  const mapaEl = document.getElementById("mapa-interativo");
  const listaTags = document.getElementById("city-tags-list");
  if (!mapaEl && !listaTags) return;

  const CIDADES = SITE_DATA.CIDADES;
  let cidadeAtiva = "sao-carlos";
  let mapInstance = null;
  let markers = {};

  // 1. Geolocalização inteligente
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const padrao = CIDADES.find((c) => c.slug === "sao-carlos") || CIDADES[0];
        let maisProxima = padrao;
        let menorDist = Math.hypot(coords.latitude - padrao.latitude, coords.longitude - padrao.longitude);

        CIDADES.forEach((c) => {
          const dist = Math.hypot(coords.latitude - c.latitude, coords.longitude - c.longitude);
          if (dist < menorDist) {
            menorDist = dist;
            maisProxima = c;
          }
        });

        atualizarCidadeAtiva(maisProxima.slug);
      },
      () => {},
      { timeout: 4000, maximumAge: 86400000 }
    );
  }

  function atualizarCidadeAtiva(slug) {
    cidadeAtiva = slug;

    // Atualiza tags visuais
    document.querySelectorAll(".city-tag").forEach((t) => {
      if (t.getAttribute("data-slug") === slug) {
        t.classList.add("active");
        t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } else {
        t.classList.remove("active");
      }
    });

    // Atualiza mapa se Leaflet estiver carregado
    if (mapInstance && markers[slug]) {
      const c = CIDADES.find((item) => item.slug === slug);
      if (c) {
        mapInstance.setView([c.latitude, c.longitude], 10);
        markers[slug].openPopup();
      }
    }
  }

  // Permite clicar nas tags de cidades
  document.querySelectorAll(".city-tag").forEach((t) => {
    t.addEventListener("click", () => {
      const slug = t.getAttribute("data-slug");
      if (slug) atualizarCidadeAtiva(slug);
    });
  });

  // Inicializa mapa Leaflet (OpenStreetMap - Gratuito, Estável, Sem Chave de API)
  if (mapaEl && typeof L !== "undefined") {
    mapInstance = L.map("mapa-interativo", {
      center: [-22.0174, -47.886],
      zoom: 8,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(mapInstance);

    const bounds = [];

    CIDADES.forEach((c) => {
      const isBase = c.destaque;
      const marker = L.circleMarker([c.latitude, c.longitude], {
        radius: isBase ? 9 : 7,
        fillColor: isBase ? "#ffde59" : "#004aad",
        color: "#ffffff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
      }).addTo(mapInstance);

      marker.bindPopup(`<strong>${c.nome}</strong><br><span style="font-size:12px;color:#555;">Atendido pela Família VW</span>`);
      marker.on("click", () => atualizarCidadeAtiva(c.slug));

      markers[c.slug] = marker;
      bounds.push([c.latitude, c.longitude]);
    });

    if (bounds.length) {
      mapInstance.fitBounds(bounds, { padding: [25, 25] });
    }
  }
}

/* ==========================================================================
   6. Filtros e Modal de Brinquedos (Página de Brinquedos)
   ========================================================================== */
function initBrinquedosFilter() {
  const filterBtns = document.querySelectorAll(".btn-filter");
  const toyCards = document.querySelectorAll(".toy-card");
  const modal = document.getElementById("toy-modal");

  if (!toyCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const faixa = btn.getAttribute("data-faixa");
      toyCards.forEach((card) => {
        const cardFaixa = card.getAttribute("data-faixa");
        if (faixa === "Todos" || cardFaixa === faixa) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Modal de Detalhes
  if (modal) {
    const modalClose = modal.querySelector(".modal-close");
    const modalImg = document.getElementById("modal-img");
    const modalBadge = document.getElementById("modal-badge");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalObs = document.getElementById("modal-obs");
    const modalSpecs = document.getElementById("modal-specs");

    document.querySelectorAll(".btn-ver-brinquedo").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const slug = btn.getAttribute("data-slug");
        const b = SITE_DATA.BRINQUEDOS.find((item) => item.slug === slug);
        if (!b) return;

        if (modalImg) modalImg.src = b.fotos[0] || "";
        if (modalBadge) modalBadge.textContent = b.faixaEtaria;
        if (modalTitle) modalTitle.textContent = b.nome;
        if (modalDesc) modalDesc.textContent = b.descricaoLonga || b.descricaoCurta;

        if (modalObs) {
          if (b.observacoes) {
            modalObs.textContent = b.observacoes;
            modalObs.parentElement.style.display = "block";
          } else {
            modalObs.parentElement.style.display = "none";
          }
        }

        modal.classList.add("open");
      });
    });

    if (modalClose) {
      modalClose.addEventListener("click", () => modal.classList.remove("open"));
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        modal.classList.remove("open");
      }
    });
  }
}
