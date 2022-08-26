const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//mostra as chaves em CAIXA ALTA
const propriedades = (objeto) =>{
    const arrayPropriedades = []
        
    
    for (let propriedade in objeto){
        
       arrayPropriedades.push(propriedade.toUpperCase())
    }
        return arrayPropriedades
    }
    console.log(propriedades(objeto))

//mostra os valores em maiusculo

const valoresMaiusculo =(objeto)=>{
    let maiusculo = {}

    for (i in objeto){

        maiusculo[i] = objeto[i].toUpperCase()

     }

    return maiusculo
}
console.log(valoresMaiusculo(objeto))

//ou 

function retornarMaiusculas(objeto){
    
      const myObj = {...objeto}

   for(let key in objeto){
    myObj[key]=objeto[key].toUpperCase()
    }
   return myObj 
}
 console.log(retornarMaiusculas(objeto));
// B_____________________________________________________


function retornarTextoCorrido(obj){
    let textoCorrido=''
    for(let key in obj){
        textoCorrido= textoCorrido+ ' '+ obj[key]
    }

    return textoCorrido
}
console.log( retornarTextoCorrido(objeto))

//C------------------------------------------------------
function imprimir(obj, callback){

   const retorno= callback(obj)
   console.log(retorno);

}

imprimir(objeto, retornarMaiusculas)
imprimir(objeto, retornarTextoCorrido)
