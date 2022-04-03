import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const  raio = Number(input('digite o raio:'))
    const  pi = Number(3.14)
    //processamento
    const comprimento_circunferencia = (2 * raio * pi)
    //saída
    print(`O comprimento da circunferencia é ${comprimento_circunferencia}`)
}
main()