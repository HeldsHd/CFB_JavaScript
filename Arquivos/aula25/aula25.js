// const soma=function(v1,v2){return v1+v2}

const soma=(v1, v2)=>{
    let res = v1 + v2
    return res
}

const nome=n=>{return n} //Não necessita dos parenteses quando a só um parametro

const add=n=>n+10  // Também não precisa de return quando são operações simples


console.log(soma(10,100+1))

console.log(nome("Bruno"))

console.log(add(10))