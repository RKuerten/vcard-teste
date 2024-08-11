export function renderBookList() {
  const list = document.getElementsByClassName("project-list");
  const data = [
    {
      name: "A Cama",
      author: "Mariana Ornelas",
      image: "./assets/images/book-template.png",
      category: "romance",
    },
    {
      name: "A Invenção",
      author: "Graziela Camargo",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "A neta da minha mãe",
      author: "Letícia Marta",
      image: "./assets/images/book-template.png",
      category: "ficção",
    },
    {
      name: "Aguadura",
      author: "Ana Paula Silva",
      image: "./assets/images/book-4.png",
      category: "romance",
    },
    {
      name: "Aprendi com meu tio: os pés não esmagam as sementes das uvas",
      author: "Rodolfo Carvalho Neves dos Santos",
      image: "./assets/images/book-template.png",
      category: "contos",
    },
    {
      name: "Às vezes sou quem quero ser",
      author: "Syang Flowers",
      image: "./assets/images/book-9.png",
      category: "poesia",
    },
    {
      name: "Bomba relógio e seus fragmentos",
      author: "Nicole Simão",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "De A Azedos",
      author: "Artemísia Ventura",
      image: "./assets/images/book-2.png",
      category: "contos",
    },
    {
      name: "Deram-me olhos, sou redemoinho",
      author: "Bárbara Corrêa Ondei",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "Devaneios",
      author: "Marcelo Klug",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "É preciso dizer as palavras mágicas",
      author: "Amanda Damasio",
      image: "./assets/images/book-5.png",
      category: "ficção",
    },
    {
      name: "Lembranças de esquecer",
      author: "Camila Mossi",
      image: "./assets/images/book-template.png",
      category: "ficção",
    },
    {
      name: "Matéria de Afeto",
      author: "Isadora Berbel",
      image: "./assets/images/book-6.png",
      category: "poesia",
    },
    {
      name: "Metaformulando",
      author: "Athalya Gabriela",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "Momentos de uma só palavra",
      author: "Edson Laureto",
      image: "./assets/images/book-8.png",
      category: "poesia",
    },
    {
      name: "O barulho das cartas",
      author: "Thales Souza Reis",
      image: "./assets/images/book-template.png",
      category: "ficção",
    },
    {
      name: "O Homem no Espelho",
      author: "Virgínia Brann",
      image: "./assets/images/book-1.png",
      category: "horror",
    },
    {
      name: "O Jardim das Palavras",
      author: "Ana Clara Borges",
      image: "./assets/images/book-template.png",
      category: "contos",
    },
    {
      name: "O Monstro e a Poça",
      author: "Guilherme Souza",
      image: "./assets/images/book-template.png",
      category: "ensaio",
    },
    {
      name: "O outono definitivo",
      author: "Thell Augusto",
      image: "./assets/images/book-template.png",
      category: "biografia",
    },
    {
      name: "O que não tem espaço está em todo lugar",
      author: "Nicole Alves",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "O que quero dizer quando digo que amei",
      author: "Raissa Caramanico",
      image: "./assets/images/book-7.png",
      category: "poesia",
    },
    {
      name: "Permanecer",
      author: "Carla Siaht",
      image: "./assets/images/book-template.png",
      category: "romance",
    },
    {
      name: "Poemas Reunidos Para Ler Na Cama",
      author: "Mara Damas",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "Psychoda",
      author: "Julio Andrews",
      image: "./assets/images/book-template.png",
      category: "ficção",
    },
    {
      name: "Sem Disfarces",
      author: "Ana Cristina Pereira",
      image: "./assets/images/book-template.png",
      category: "poesia",
    },
    {
      name: "Um rosto em busca de um autor",
      author: "Fernanda Buratto",
      image: "./assets/images/book-3.png",
      category: "contos",
    },
    {
      name: "Vara de marmelo",
      author: "Victor Traldi",
      image: "./assets/images/book-template.png",
      category: "contos",
    },
  ];

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  list[0].innerHTML = data
    .map(
      (b) =>
        `<li
					class="project-item active"
					data-filter-item
					data-category="${b.category}"
		   >
					<a href="#">
							<figure class="project-img">
							<div class="project-item-icon-box">
									<ion-icon name="eye-outline"></ion-icon>
							</div>
							<img
									src="${b.image}"
									alt="${b.name}"
									loading="lazy"
							/>
							</figure>
							<h3 class="project-title">${b.name}</h3>
							<p class="project-author">${b.author}</p>
							<p class="project-category">${capitalize(b.category)}</p>
					</a>
				</li>`
    )
    .join("");

	/* list[0].after('
		<div class="modal-book-container" data-modal-books>
              <div class="overlay" data-book-overlay></div>
              <section class="books-modal">
                <button class="modal-close-btn" data-modal-book-close-btn>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
                <div class="modal-img-wrapper">
                  <figure class="modal-avatar-box">
                    <img
                      src="./assets/images/avatar.png"
                      alt="Amanda Damasio"
                      width="80"
                      data-modal-img
                    />
                  </figure>
                </div>
                <div class="modal-content">
                  <h4 class="h3 modal-title" data-modal-book-title>Amanda Damasio</h4>
                  <p class="subtitle">Idealizadora da Outra</p>
                  <div data-modal-book-text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec non tortor eu ipsum volutpat tempus. Aliquam non
                      tristique turpis, quis interdum tortor. Phasellus aliquam
                      felis a posuere laoreet. Morbi convallis metus ex, et
                      dapibus nibh ullamcorper vitae. In gravida odio arcu, eget
                      finibus augue auctor quis.
                    </p>
                  </div>
            </div>'); 
		*/
}
