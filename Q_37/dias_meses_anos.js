//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos 

import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const dias = Number(input('Quantos dias:'))
    
    //processamento
    const anos = Math.floor(dias/365)
    const resto_anos = dias - (365 * anos)
    const meses = Math.floor(resto_anos/30)
    const resto_meses = resto_anos - (30 * meses)
        
    //saída
    print(`São ${anos} anos e ${meses} meses e ${resto_meses} dias.`)
}
main()