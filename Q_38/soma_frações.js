
import{print, input} from './io_utils.js' 

function main(){
    print('Digite duas frações.')
    //entrada
    const numerador1 = Number(input('numerador 1:'))
    const denominador1 = Number(input('denominador 1:'))
    const numerador2 = Number(input('numerador 2:'))
    const denominador2 = Number(input('denominador 2:'))

    
    //processamento
    const soma_fraçoes_numeradores = ((denominador2 * numerador1)+(denominador1 * numerador2)) 
    const soma_fraçoes_denominadores = (denominador1 * denominador2)      
    //saída
    print(`A soma da frações é ${soma_fraçoes_numeradores}/${soma_fraçoes_denominadores}.`)
}
main()