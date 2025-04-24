//Quando o HTML todo carregar insira as informaçoes da pagina
document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    {
      name: "Henrique & Juliano",
      image: "./img/artista-henrique-juliano.jpg",
    },
    { name: "Jorge & Mateus", image: "./img/artista-jorge-mateus.jpg" },
    { name: "Zé Neto & Cristiano", image: "./img/artista-ze-neto.jpg" },
    { name: "Gusttavo Lima", image: "./img/artista-gustavo-limma.jpg" },
    { name: "Luan Santana", image: "./img/artista-luan-santana.jpg" },
    { name: "Matheus & Kauan", image: "./img/artista-mateus-kauan.jpg" },
    { name: "Linkin Park", image: "./img/Chester Bennington.jpg" },
  ];

  const albumsData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      artist: "Sleepy John",
      image: "./img/album-white-noise.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./img/album-ceu-explica.jpg",
    },
    {
      name: "Nada como um dia após o outro",
      artist: "Racionais",
      image: "./img/album-vida-loka.jpg",
    },
    {
      name: "HIT ME HARD AND SOFT",
      artist: "Billie Eilish",
      image: "./img/album-hit-me.jpg",
    },
    { name: "CAJU", artist: "Liniker", image: "./img/album-caju.jpg" },
    {
      name: "Escândalo Íntimo",
      artist: "Luísa Sonza",
      image: "./img/album-escandalo.jpg",
    },
    {
      name: "Hybrid Theory",
      artist: "Linkin Park",
      image: "./img/hybrid theory.jpg",
    },
  ];

  const artistGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");

  //ForEach pega cada artista
  artistsData.forEach((artist) => {
    //Criamos uma div para cada artista e damos uma classe para ela
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    //InnerHTML adiciona itens a div
    artistCard.innerHTML = `
    <img src="${artist.image}" alt="Imagem do ${artist.name}">
    <h3>${artist.name}</h3>
   `;

    //AppendChild faz com que todas as informaçoes criadas no artistGrid sejam jogadadas dentro dos Cards
    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    //Criamos uma div para cada artista e damos uma classe para ela
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");

    //InnerHTML adiciona itens a div
    albumCard.innerHTML = `
    <img src="${album.image}" alt="Imagem do ${album.name}">
    <div>
    <h3>${album.name}</h3>
    <p>${album.artist}</p>
    </div>
   `;

    //AppendChild faz com que todas as informaçoes criadas no artistGrid sejam jogadadas dentro dos Cards
    albumsGrid.appendChild(albumCard);
  });
});
