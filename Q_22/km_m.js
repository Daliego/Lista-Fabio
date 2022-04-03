//km => m
import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const quilometros = Number(input('Quantos quilometros:'))
    
    //processamento
    const metros = quilometros * 1000
    
    //saída
    print(`São ${metros} metros.`)
}
main()