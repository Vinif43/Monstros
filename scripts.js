// const teste = document.querySelector("h1")

//var elementos = document.querySelectorAll("#teste").childNodes;




let dados = [
    {
      id: 1,
      name: "Bertie Yates",
      email: "Sincere@april.biz",
      image: "https://robohash.org/1?set=set2",
    },
    {
      id: 2,
      name: "Hester Hogan",
      email: "Shanna@melissa.tv",
      image: "https://robohash.org/2?set=set2",
    },
    {
      id: 3,
      name: "Larry Little",
      email: "Nathan@yesenia.net",
      image: "https://robohash.org/3?set=set2",
    },
    {
      id: 4,
      name: "Sean Walsh",
      email: "Julianne.OConner@kory.org",
      image: "https://robohash.org/4?set=set2",
    },
    {
      id: 5,
      name: "Lola Gardner",
      email: "Lucio_Hettinger@annie.ca",
      image: "https://robohash.org/5?set=set2",
    },
  ];

  const butao = document.querySelector(".btn-azul");



const elementoH1 = document.querySelector("h1");
elementoH1.innerText = `${dados.length} Monstos`


fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
})
  .then((response) => {
    if(response.status === 200) alert('sucesso!')
    else alert('ALGO DEU ERRADO')
    return response.json();
  })
  .then((json) => {
    dados = json
  });

for(let item of dados){
  const elemArticle = document.createElement("article");
  elemArticle.className = "monstros"

  elemArticle.innerHTML = `

  <img src= ${item.image} alt="monstro">

  <div>
    <h2>${item.name}</h2>
    <p>${item.email}</p>
  </div>

  `;
  elementoH1.insertAdjacentElement("afterend", elemArticle);

}



butao.addEventListener("click", () => {
  let articles = document.querySelectorAll('article')
  for(let i = 0; i < articles.length; i++) {
    articles[i].remove()
  }
  dados = []
  elementoH1.innerText = `${dados.length} monstros`
  // document.getElementById("ai").remove()
})

