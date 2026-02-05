const caixaCursos = document.querySelector("#caixaCursos")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btn_c = [...document.querySelectorAll(".curso")]
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao =()=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=>{
        const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
  return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Cursos selecionado: "+ cursoSelecionado)
    }catch(ex){
        alert("selecione um curso")
    }
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
        if(rs!==undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
        }else{
            alert("selecione um curso")
        }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value!=""){
             const cursoSelecionado = rs.parentNode.parentNode
             const novoCurso = criarNovoCurso(nomeCurso.value)
             caixaCursos.insertBefore(novoCurso,cursoSelecionado)            
        }else{
            alert("Digite o nome do curso")
        }

    }catch(ex){
        alert("selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value!=""){
             const cursoSelecionado = rs.parentNode.parentNode
             const novoCurso = criarNovoCurso(nomeCurso.value)
             caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else{
            alert("Digite o nome do curso")  
        }
        
    }catch(ex){
        alert("selecione um curso")
    }
})

