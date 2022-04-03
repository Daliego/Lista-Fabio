//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos 

import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const horas = Number(input('Quantas horas:'))
    
    //processamento
    const semanas = Math.floor(horas/168)
    const resto_semanas = horas - (168 * semanas)
    const dias = Math.floor(resto_semanas/24)
    const resto_dias = resto_semanas - (24 * dias)

    //saída
    print(`São ${semanas} semanas e ${dias} dias e ${resto_dias} horas.`)
}
main()