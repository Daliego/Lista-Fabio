import { print, input } from "./io_utils.js";

function main() {
    //entrada
    const numero_binario = Number(input('Digite um número binário de 4 dígitos:'))
        //processamento
    var numero_decimal = 0
    numero_decimal += parseInt((numero_binario / 1000) * 2 ** 3)
    var resto = numero_binario % 1000
    numero_decimal += parseInt((resto / 100) * 2 ** 2)
    resto = resto % 100
    numero_decimal += parseInt((resto / 10) * 2 ** 1)
    resto = resto % 10
    numero_decimal += resto * 2 ** 0



    print(`O equivalente em número decimal é ${numero_decimal}`)





}
main()