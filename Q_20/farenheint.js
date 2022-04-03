//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const celsius = Number(input('Quantos graus celsius:'))
    
    //processamento
    const farenheint = ((9 * celsius) + 160 )/5   
    
    //saída
    print(`São ${farenheint.toFixed(2)} graus farenheint`)
}
main()