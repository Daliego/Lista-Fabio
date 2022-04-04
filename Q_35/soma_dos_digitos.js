import{print, input} from './io_utils.js' 

function main(){
    print('digite um numero de 4 dígitos:')
    //entrada
    const milhar = Number(input('milhar:'))
    const cetenas = Number(input('cetenas:'))
    const dezenas = Number(input('dezenas:'))
    const unidades = Number(input('unidades:'))

    
    //processamento
    const soma_4digitos = (milhar/1000) + (cetenas/100) + (dezenas/10) + unidades
        
    //saída
    print(`A soma é ${soma_4digitos}.`)
}
main()