//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos
import{print, input} from './io_utils.js'

function main(){
    //entrada
    const number1 = Number(input('Digite o número 1:'))
    const number2 = Number(input('Digite o número 2:'))
    const number3 = Number(input('Digite o número 3:'))
    //processamento
    const Soma1_2 = number1 + number2
    const Diferença2_3 = number3 - number2
    //saída
    print(`${Soma1_2}`)
    
    print(`${Diferença2_3}`)
}
main()