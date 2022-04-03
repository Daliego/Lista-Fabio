import { print,input } from "./io_utils.js";

function main(){
    //ENTRADA
    const numero1 = Number(input('Primeiro número:'))
    const numero2 = Number(input('Segundo número:'))
    //PROCESSAMENTO
    const soma_divisao_diferença = ((numero1 + numero2)/(numero1 - numero2))
    
    
    //saída
    print(`${soma_divisao_diferença}`)

   
}
main()