let botao = document.querySelector("button")
let cores= document.querySelector(".cores")

function gerar(){
    cores.innerHTML= ""
    for (let i = 0 ; i < 5 ; i++){
        let cor = corAleatoria()
        let mostrar = document.createElement("div")
        mostrar.style.backgroundColor = cor
        let nomeCor = document.createElement("p")
        nomeCor.innerText= cor
        nomeCor.style.color = cor
        mostrar.appendChild(nomeCor)
        cores.appendChild(mostrar)
    }
}

function corAleatoria(){
    let letras = "0123456789ABCDEF"
    let cor = "#"
    for(let i = 0 ; i < 6; i++) {
        cor += letras[Math.floor(Math.random()*16)]
    }
    return cor
}

botao.addEventListener("click", gerar)