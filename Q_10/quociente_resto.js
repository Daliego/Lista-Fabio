import { print, input } from "./io_utils.js";
function main(){
    //entrada
    const numero1 = Number(input('Primeiro número:'))
    const numero2 = Number(input('Segundo número:'))
    //processamento
    const divisao =  Math.floor(numero1/numero2) 
    const resto = numero1 - (numero2 * divisao)
    
    //saída
    print(`O quonciente é ${divisao} e o resto é ${resto} `)
}
main()