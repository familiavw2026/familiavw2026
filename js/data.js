/**
 * Dados do site Família VW Brinquedos
 * Você pode editar este arquivo para atualizar textos, contatos e cidades
 * sem precisar mexer no layout HTML.
 */

const SITE_DATA = {
  CATALOGO_URL: "https://familia-vw-brinquedos.estoquenow.site/",
  WHATSAPP_NUMERO_EXIBICAO: "(16) 99270-4170",
  WHATSAPP_LINK: "https://wa.me/5516992704170",
  INSTAGRAM_URL: "https://www.instagram.com/familiavwbrinquedos/",

  EMPRESA: {
    nome: "Família VW Brinquedos",
    descricaoCurta: "Brinquedos para festas e eventos em São Carlos e região.",
    cidadeBase: "São Carlos (SP)",
    anosExperiencia: 14,
  },

  NAV: [
    { label: "Início", href: "index.html#inicio" },
    { label: "Brinquedos", href: "index.html#brinquedos" },
    { label: "Quem somos", href: "index.html#quem-somos" },
    { label: "Como funciona", href: "index.html#como-funciona" },
    { label: "Onde atendemos", href: "index.html#onde-atendemos" },
    { label: "Contato", href: "index.html#contato" },
  ],

  NUMEROS: [
    { numero: "+14", label: "anos de experiência" },
    { numero: "+5 mil", label: "eventos atendidos" },
    { numero: "30", label: "brinquedos no catálogo" },
    { numero: "21", label: "cidades atendidas" },
  ],

  DIFERENCIAIS: [
    {
      id: "higienizados",
      icone: "spray",
      titulo: "Brinquedos higienizados",
      descricao: "Higienização realizada antes e depois de cada evento.",
    },
    {
      id: "art",
      icone: "documento",
      titulo: "Laudo técnico e ART",
      descricao: "Todos os brinquedos possuem laudo técnico e ART.",
      versoTitulo: "ART",
      versoDescricao:
        "A Anotação de Responsabilidade Técnica (ART) identifica o profissional habilitado responsável tecnicamente pelo serviço ou equipamento, garantindo que os aspectos técnicos sejam acompanhados por um profissional registrado.",
    },
    {
      id: "montagem",
      icone: "ferramenta",
      titulo: "Montagem profissional",
      descricao:
        "Nossa equipe avalia o espaço e realiza a montagem adequada para cada evento.",
    },
    {
      id: "monitores",
      icone: "equipe",
      titulo: "Monitores capacitados",
      descricao:
        "Equipe treinada para acompanhar as crianças de acordo com o tipo de evento.",
    },
  ],

  DIFERENCIAIS_COMPLEMENTO:
    "Materiais de alta qualidade · montagem e desmontagem inclusas · atendimento pontual · inspeção e manutenção periódicas.",

  AJUDA_ESCOLHA: [
    {
      icone: "baby",
      titulo: "Qual a idade das crianças?",
      descricao: "Encontre opções adequadas para diferentes faixas etárias.",
    },
    {
      icone: "ruler",
      titulo: "Quanto espaço você tem?",
      descricao:
        "Antes da montagem, nossa equipe avalia o local para garantir que o brinquedo seja adequado.",
    },
    {
      icone: "calendar",
      titulo: "Que tipo de evento você está organizando?",
      descricao:
        "As condições podem variar para festas particulares, escolas, empresas e eventos abertos.",
    },
  ],

  TIPOS_EVENTO: [
    {
      titulo: "Festas particulares",
      descricao: "Brinquedos para aniversários e comemorações.",
      imagem: "assets/evento-festas-particulares.jpg",
      icone: "cake",
    },
    {
      titulo: "Eventos escolares",
      descricao: "Opções recreativas para escolas e atividades especiais.",
      imagem: "assets/evento-escolar.jpg",
      icone: "school",
    },
    {
      titulo: "Eventos corporativos",
      descricao: "Estrutura de diversão para eventos que também recebem crianças.",
      imagem: "assets/evento-corporativo.jpg",
      icone: "building",
    },
    {
      titulo: "Eventos abertos",
      descricao: "Brinquedos para eventos com público maior e circulação de pessoas.",
      imagem: "assets/evento-aberto.jpg",
      icone: "party",
    },
  ],

  TIPOS_EVENTO_OBS:
    "Eventos abertos ao público e festas com mais de 4 horas possuem condições diferenciadas.",

  PASSOS: [
    {
      titulo: "Escolha seus brinquedos",
      descricao: "Conheça as opções no site e acesse nosso catálogo oficial.",
    },
    {
      titulo: "Informe os dados da festa",
      descricao: "Data, horário, endereço, tipo de evento e brinquedos escolhidos.",
    },
    {
      titulo: "Verificamos a disponibilidade",
      descricao:
        "Nossa equipe analisa a data, horário e as condições necessárias para o evento.",
      obs: "Eventos abertos ao público e festas com mais de 4 horas possuem condições diferenciadas.",
    },
    {
      titulo: "Receba o contrato",
      descricao:
        "Após a confirmação, enviamos o contrato e as informações para pagamento.",
    },
    {
      titulo: "Nós cuidamos da montagem",
      descricao:
        "A equipe chega com antecedência adequada para preparar os brinquedos e realizar a montagem.",
    },
  ],

  PASSOS_COMPLEMENTO:
    "O horário de montagem varia conforme a quantidade de brinquedos, a programação e as características de cada evento.",

  FOTOS_GALERIA: [
    { src: "assets/galeria-01.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 1" },
    { src: "assets/galeria-02.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 2" },
    { src: "assets/galeria-03.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 3" },
    { src: "assets/galeria-04.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 4" },
    { src: "assets/galeria-05.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 5" },
    { src: "assets/galeria-06.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 6" },
    { src: "assets/galeria-07.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 7" },
    { src: "assets/galeria-08.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 8" },
    { src: "assets/galeria-09.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 9" },
    { src: "assets/galeria-10.jpg", alt: "Brinquedo recreativo da Família VW Brinquedos — foto 10" },
  ],

  CIDADES: [
    { nome: "São Carlos", slug: "sao-carlos", destaque: true, latitude: -22.0174, longitude: -47.886 },
    { nome: "Ibaté", slug: "ibate", latitude: -21.9584, longitude: -47.9882 },
    { nome: "Jaú", slug: "jau", latitude: -22.2964, longitude: -48.5578 },
    { nome: "Boa Esperança do Sul", slug: "boa-esperanca-do-sul", latitude: -21.9928, longitude: -48.3906 },
    { nome: "Itirapina", slug: "itirapina", latitude: -22.2527, longitude: -47.8228 },
    { nome: "Corumbataí", slug: "corumbatai", latitude: -22.2208, longitude: -47.6215 },
    { nome: "Cravinhos", slug: "cravinhos", latitude: -21.3403, longitude: -47.7296 },
    { nome: "Porto Ferreira", slug: "porto-ferreira", latitude: -21.8539, longitude: -47.4792 },
    { nome: "Descalvado", slug: "descalvado", latitude: -21.9007, longitude: -47.6181 },
    { nome: "Dourado", slug: "dourado", latitude: -22.1165, longitude: -48.3172 },
    { nome: "Ribeirão Bonito", slug: "ribeirao-bonito", latitude: -22.0685, longitude: -48.178 },
    { nome: "Analândia", slug: "analandia", latitude: -22.1289, longitude: -47.6619 },
    { nome: "Rio Claro", slug: "rio-claro", latitude: -22.4114, longitude: -47.5614 },
    { nome: "Ibitinga", slug: "ibitinga", latitude: -21.7576, longitude: -48.8295 },
    { nome: "Uberaba", slug: "uberaba", latitude: -19.7472, longitude: -47.9381 },
    { nome: "Uberlândia", slug: "uberlandia", latitude: -18.9186, longitude: -48.2772 },
    { nome: "Américo Brasiliense", slug: "americo-brasiliense", latitude: -21.7288, longitude: -48.1147 },
    { nome: "Pirassununga", slug: "pirassununga", latitude: -21.996, longitude: -47.4257 },
    { nome: "Leme", slug: "leme", latitude: -22.1856, longitude: -47.3906 },
    { nome: "Araraquara", slug: "araraquara", latitude: -21.7845, longitude: -48.178 },
    { nome: "Matão", slug: "matao", latitude: -21.6033, longitude: -48.3658 },
  ],

  BRINQUEDOS: [
    {
      nome: "Corrida de Obstáculos 1",
      slug: "corrida-de-obstaculos-1",
      fotos: ["assets/corrida-obstaculos.jpg"],
      faixaEtaria: "Kids",
      descricaoCurta: "Percurso inflável com obstáculos para brincar em disputa.",
      descricaoLonga:
        "Percurso inflável com obstáculos, túneis e escalada, pensado para brincadeiras em duplas e disputas entre as crianças. Pode ser combinada com a segunda unidade de Corrida de Obstáculos ou com um tobogã, formando um circuito maior.",
      observacoes:
        "Pode ser combinada com a Corrida de Obstáculos 2 e com tobogã. Medidas e espaço necessário informados no orçamento.",
    },
    {
      nome: "Corrida de Obstáculos 2",
      slug: "corrida-de-obstaculos-2",
      fotos: ["assets/corrida-obstaculos.jpg"],
      faixaEtaria: "Kids",
      descricaoCurta: "Segunda unidade do percurso, ideal para circuitos maiores.",
      descricaoLonga:
        "Segunda unidade da Corrida de Obstáculos. Pode ser locada isoladamente ou combinada com a primeira unidade e com tobogã, ampliando o percurso para eventos com mais crianças.",
      observacoes:
        "Pode ser combinada com a Corrida de Obstáculos 1 e com tobogã. Medidas e espaço necessário informados no orçamento.",
    },
    {
      nome: "Multiplay Circuito",
      slug: "multiplay-circuito",
      fotos: ["assets/multiplay.jpg"],
      faixaEtaria: "Todas as idades",
      descricaoCurta: "Estrutura com várias atividades em um só brinquedo.",
      descricaoLonga:
        "Estrutura inflável que reúne diferentes atividades em um só brinquedo, com área de pula-pula, escorregador e obstáculos. Boa opção para eventos que recebem crianças de idades variadas.",
      observacoes: "Medidas, capacidade e espaço necessário informados no orçamento.",
    },
    {
      nome: "Piscina de Bolinhas Urso",
      slug: "piscina-de-bolinhas-urso",
      fotos: ["assets/piscina-urso.jpg"],
      faixaEtaria: "Baby",
      descricaoCurta: "Piscina de bolinhas para os menores brincarem com segurança.",
      descricaoLonga:
        "Piscina de bolinhas com estrutura em formato de urso, indicada para os menores. Ocupa pouco espaço e funciona bem em ambientes internos, em festas com bebês e crianças pequenas.",
      observacoes: "Medidas e espaço necessário informados no orçamento.",
    },
    {
      nome: "Splash 3x1",
      slug: "splash-3x1",
      fotos: ["assets/splash.jpg"],
      faixaEtaria: "Kids",
      descricaoCurta: "Combinação com água e tobogã para dias de calor.",
      descricaoLonga:
        "Combinação 3x1 com tobogã e área de água, indicada para festas ao ar livre em dias quentes. A montagem depende de ponto de água no local e de avaliação do espaço.",
      observacoes:
        "Combinação 3x1 com tobogã. Depende de ponto de água no local. Medidas e espaço necessário informados no orçamento.",
    },
  ],

  PROMOCAO: {
    ativo: false,
    titulo: "",
    descricao: "",
    periodoValidade: "",
    imagem: "",
    textoCTA: "",
    linkCTA: "https://familia-vw-brinquedos.estoquenow.site/",
  },

  DEPOIMENTOS: [],
};
