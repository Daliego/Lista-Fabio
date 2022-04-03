//(t°C = (5 * t°F - 160) / 9)
import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const farenheint = Number(input('Quantos graus farenheint:'))
    
    //processamento
    const celsius = ((5 * farenheint) - 160 )/9
    
    //saída
    print(`São ${celsius.toFixed(2)} graus celsius.`)
}
main()