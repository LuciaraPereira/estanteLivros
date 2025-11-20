function dadosGoogleBooks(genero){
   const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genero}&maxResults=40&startIndex=0&langRestrict=pt`
    fetch(url)
    .then(response => { 
        if(!response.ok){
            throw new Error(`Chamada HTTP falhou!`) 
        }
        return response.json()
    })
    .then(data => {
        processarLivros(data, genero)
    })
    .catch(erro => console.error("ERRO na busca da API:", erro))
}


function processarLivros(data){
    let ul = document.createElement("ul")
    let container_principal = document.querySelector(".container-principal")
    container_principal.innerHTML = ''

    data.items.forEach(item => { 
            const titulo = item.volumeInfo.title;
            const autor = item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Autor(a) desconhecido." ;
            const edit = item.volumeInfo.publisher ? item.volumeInfo.publisher : "Editora desconhecida.";
            const editData = item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "Ano não informado.";
            const imgEl = item.volumeInfo.imageLinks?.thumbnail ? item.volumeInfo.imageLinks.thumbnail : 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_1280.png';

            let li = document.createElement("li")
            const img = document.createElement("img");
            const divInfos = document.createElement("div")
            divInfos.classList.add("infosDiv")

            divInfos.innerHTML = `
                <h1> ${titulo}</h1>
                <h3> Autor(a): ${autor}</h3> 
                <p> Editora: ${edit}</p>
                <p> Ano: ${editData}</p>`
            img.src = imgEl 
            img.alt = `Livro ${titulo} de ${autor}`
           
            divInfos.appendChild(img);
            li.appendChild(divInfos)
            ul.appendChild(li)
        });
        container_principal.appendChild(ul)
}


function generos(){
    let containerTitulo = document.querySelector(".titulo")
    let romance = document.querySelector("#btn-romance")
    let ficcao = document.querySelector("#btn-ficcao")
    let suspense = document.querySelector("#btn-suspense")
    let poesia = document.querySelector("#btn-poesia")
    let fantasia = document.querySelector("#btn-fantasia")


    let container_principal = document.querySelector(".container-principal")
    container_principal.innerHTML = '<div id="loader">Buscando livros <span>... </span> </div>';
    containerTitulo.innerHTML = ''
    let h1 = document.createElement("h1")
    h1.textContent = "Escolha sua próxima leitura!"
    containerTitulo.appendChild(h1)
    dadosGoogleBooks("Horror")

    ficcao.addEventListener("click", event =>{
        let container_principal = document.querySelector(".container-principal")
        container_principal.innerHTML = '<div id="loader">Buscando livros <span>... </span> </div>';
        containerTitulo.innerHTML = ''
        let h1 = document.createElement("h1")
        h1.textContent = "Ficção"
        containerTitulo.appendChild(h1)
        dadosGoogleBooks("Fiction")
    });

    romance.addEventListener("click", event =>{
        let container_principal = document.querySelector(".container-principal")
        container_principal.innerHTML = '<div id="loader">Buscando livros <span>... </span> </div>';
        containerTitulo.innerHTML = ''
        let h1 = document.createElement("h1")
        h1.textContent = "Romance"
        containerTitulo.appendChild(h1)
        dadosGoogleBooks("Romance")
    });

    suspense.addEventListener("click", event =>{
        let container_principal = document.querySelector(".container-principal")
        container_principal.innerHTML = '<div id="loader">Buscando livros <span>... </span> </div>';
        containerTitulo.innerHTML = ''
        let h1 = document.createElement("h1")
        h1.textContent = "Suspense"
        containerTitulo.appendChild(h1)
        dadosGoogleBooks("Thriller")
    });

    poesia.addEventListener("click", event =>{
        let container_principal = document.querySelector(".container-principal")
        container_principal.innerHTML = '<div id="loader">Buscando livros <span>... </span> </div>';
        containerTitulo.innerHTML = ''
        let h1 = document.createElement("h1")
        h1.textContent = "Poesia"
        containerTitulo.appendChild(h1)
        dadosGoogleBooks("Poetry")
    });

    fantasia.addEventListener("click", event =>{
        let container_principal = document.querySelector(".container-principal")
        container_principal.innerHTML = '<div id="loader">Buscando livros...</div>';
        containerTitulo.innerHTML = ''
        let h1 = document.createElement("h1")
        h1.textContent = "Fantasia"
        containerTitulo.appendChild(h1)
        dadosGoogleBooks("Fantasy")
    });
}

generos()










