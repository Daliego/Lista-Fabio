import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const dias = Number(input('Quantas dias:'))
    
    //processamento
    const semanas = Math.floor(dias/7)
    const resto_semanas = dias - (7 * semanas)
    
    //saída
    print(`São ${semanas} semanas e ${resto_semanas} dias.`)
}
main()