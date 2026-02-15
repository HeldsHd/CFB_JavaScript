const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array=[16,12,20,10,17,15,13,11,18]
p_array.innerHTML = "["+elementos_array+"]"


btnVerificar.addEventListener("click", (evt)=>{
    const retorno = elementos_array.some((e, i)=>{
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " +i
        }
        return e >= 18
    })
    if(retorno){
        resultado.innerHTML = "Ok"
    }
})

// Metodo some(alguns): verifica se um elemento pelo menos atende a regra se atender retorna true
// mas se todos não corresponderem retorna false