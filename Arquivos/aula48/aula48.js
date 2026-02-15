const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array=[21,25,19,20,19,18,22]
p_array.innerHTML = "["+elementos_array+"]"


btnVerificar.addEventListener("click", (evt)=>{
    const retorno = elementos_array.every((e, i, a)=>{
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " +i
        }
        return e >= 18
    })
    if(retorno){
        resultado.innerHTML = "Ok"
    }
    console.log(retorno)
})

// Metodo every: verifica se todos os elementos corresponde a regra se um não
//  corresponder o metodo retorna false se corresponder retorna true