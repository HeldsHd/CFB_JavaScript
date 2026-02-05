const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "mySQL", "ReactNative"]

cursos.map((el, cheve)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c" + (cheve+1))
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML = el

    const btn_liexeira = document.createElement("img")
    btn_liexeira.setAttribute("src","imgs/trash.png")
    btn_liexeira.setAttribute("class","btn_lixeira")
    btn_liexeira.addEventListener("click", (evt)=>{
        console.log(evt.target.parentNode)
        caixa1.removeChild(evt.target.parentNode)
    })

    novoElemento.appendChild(btn_liexeira)
    caixa1.appendChild(novoElemento)
} )


