//transformar de kmh para ms
import { print, input } from "./io_utils.js";
function main(){
    //entrada
        const kmh = Number(input('Velocidade em km/h:'))
    //processamento
        const ms = kmh/3.6
    //saída
        print(`A velocidade é ${ms.toFixed(3)} m/s`)
}
main()
