//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos 

import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const segundos = Number(input('Quantos segundos:'))
    
    //processamento
    const horas = Math.floor(segundos/3600)
    const resto_horas = segundos - (3600 * horas)
    const minutos = Math.floor(resto_horas/60)
    const resto_minutos = resto_horas - (60 * minutos)
        // resto_horas = o que sobrou das horas
        // resto_minutos = O que sobrou dos segundos na divisão pra encontrar os minutos
    
    //saída
    print(`São ${horas} horas e ${minutos} minutos e ${resto_minutos} segundos.`)
}
main()