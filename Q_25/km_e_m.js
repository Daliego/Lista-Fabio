import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const metros = Number(input('Quantas metros:'))
    
    //processamento
    const quilometros = Math.floor(metros/1000)
    const resto_metros = metros - (1000 * quilometros)
    
    //saída
    print(`São ${quilometros} quilometros e ${resto_metros} metros.`)
}
main()