import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const  lado_quadrado = Number(input('digite o comprimento do lado:'))
    
    //processamento
    const area_quadrado = (lado_quadrado * lado_quadrado)
    //saída
    print(`A área do triângulo é ${area_quadrado}`)
}
main()