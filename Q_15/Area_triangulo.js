import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const  base = Number(input('digite a base:'))
    const  altura = Number(input('digite a altura:'))
    //processamento
    const area_triangulo = (base * altura)/2
    //saída
    print(`A área do triângulo é ${area_triangulo}`)
}
main()