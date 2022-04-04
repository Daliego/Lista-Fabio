
import{print, input} from './io_utils.js' 

function main(){
    print('Digite as posições.')
    //entrada
    const x1 = Number(input('X1:'))
    const y1 = Number(input('Y1:'))
    const x2 = Number(input('X2:'))
    const y2 = Number(input('Y2:'))

    
    //processamento
    const distância_no_plano = (((x2 - x1)**2) + ((y2-y1)**2))**(1/2)
    //saída
    print(`A distância no plano é ${distância_no_plano.toFixed(2)}.`)
}
main()