import { print, input } from "./io_utils.js";
function main(){
    //entrada
    const dolar = Number(input('Valor em dólar:'))
    //processamento
    const real = dolar * 4.70
    //saída
    print(`Equivale a ${real} reais`)
}
main()