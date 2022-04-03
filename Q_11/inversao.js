import { print, input } from "./io_utils.js";
function main(){
    //entrada
    let digitos3 = Number(input('Digite um número de 3 dígitos:'))
    //saída
    print(`O inverso é ${digitos3.toString().split('').reverse().join('')}`)
    
   
    
}
main()