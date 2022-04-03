//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde

import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const meses = Number(input('Quantos meses:'))
    
    //processamento
    const anos = Math.floor(meses/12)
    const resto_meses = meses - (12 * anos)
   
    //saída
    print(`São ${anos} anos e ${resto_meses} meses.`)
}
main()