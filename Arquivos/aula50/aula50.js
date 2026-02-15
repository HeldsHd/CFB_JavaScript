const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "["+elementos_array+"]"


btnReduzir.addEventListener("click", (evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+="<br/>V.Anterior: "+ant+"<br/>V.atual: "+atu+"<br/>V.Dobrado: "+dobro

})

//Metodo reduce: você recebe 3 parametros para manipula (anterio[acumulador], atual, posterior)
// quando voce não passa um valor para o atual ele começa em no indice 1 (nesse caso é 2)
// então voce pode somar o atual com o anterior 
