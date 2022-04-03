import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const  base = Number(input('digite a base:'))
    const  altura = Number(input('digite a altura:'))
    //processamento
    const area_retangulo = (base * altura)
    //saída
    print(`A área do retângulo é ${area_retangulo}`)
}
main()