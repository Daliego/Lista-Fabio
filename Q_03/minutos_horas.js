import{print, input} from './io_utils.js'
function main(){
//entrada
    const minutos = Number(input('Quantos minutos:'))
//processamento
    const horas = (minutos)/60
//saída
    print(`Equivale a ${horas} hora`)
}
main()