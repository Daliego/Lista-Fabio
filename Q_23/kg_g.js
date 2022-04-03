//km => m
import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const quilogramas = Number(input('Quantas quilogramas:'))
    
    //processamento
    const gramas = quilogramas * 1000
    
    //saída
    print(`São ${gramas} gramas.`)
}
main()