//Dados dos depoimentos 
const conteudo = [
    {
      name: "Aloha",
      image: "./LOGO/aloha.png",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
    },
    {
      name: "Brotitos",
      image: "./LOGO/brotitos.png",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
    },
    {
      name: "Buana",
      image: "./LOGO/buana.pnh.png",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
    },
    {
      name: "Canecão",
      image: "./LOGO/canecao.png",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
    },
    {
        name: "facSete",
        image: "./LOGO/facsete.png",
        conteudo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
      },
      {
        name: "Ferro Velho",
        image: "./LOGO/ferrovelho.png",
        conteudo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
      },
      {
        name: "Observatorio",
        image: "./LOGO/observatorio.png",
        conteudo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
      },
      {
        name: "Lago Vidros",
        image: "./LOGO/lagovidros.png",
        conteudo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
      },
      {
        name: "Odonto Medica",
        image: "./LOGO/odontomedica.png",
        conteudo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
      },
      {
        name: "Sergios",
        image: "./LOGO/sergios.png",
        conteudo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat fuga, facilis magni laborum unde dicta, quis officiis dolore, dolorum veniam aperiam numquam soluta possimus sed vitae cumque omnis ab?",
      }
  ];
  
  //Começo do Slide atual 
  let i = 0;
  //Todos os Slides
  let j = conteudo.length;
  
  let conteudoContainer = document.getElementById("conteudo-container");
  //botão próximo
  let nextBtn = document.getElementById("next");
  //botão voltar
  let prevBtn = document.getElementById("prev");
  

  //função clicar no botão
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayconteudo();
  });
  //função clicar no botão voltar
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayconteudo();
  });
  
  // função para mudar o conteudo do container
  let displayconteudo = () => {
    conteudoContainer.innerHTML = `
      <p>${conteudo[i].conteudo}</p>
      <img src=${conteudo[i].image}>
      <h3>${conteudo[i].name}</h3>
      
    `;
  };
  window.onload = displayconteudo;