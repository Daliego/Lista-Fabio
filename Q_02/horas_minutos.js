import{ print, input } from './io_utils.js'

function main(){
    //entrada
    const horas = Number(input('Quantas horas:'))
    //processamento
    const minutos = horas * 60 
    //saída
    print(`Equivale a ${minutos} minutos `)

}
main()