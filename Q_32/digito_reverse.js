import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const numero = Number(input('Numero 3 dígitos:'))
    
    const numero2 = Number(numero.toString().split('').reverse().join(''))
    
    

    //processamento
    const diferença = numero - numero2
    //processamento
    print(`O resultado é ${diferença}`)
}
main()
