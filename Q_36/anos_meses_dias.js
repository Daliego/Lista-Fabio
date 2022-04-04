import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const anos = Number(input('anos:'))
    const meses = Number(input('meses:'))
    const dias = Number(input('dias:'))
    
    //processamento
    const total_dias = (anos * 12 * 30)+(meses * 30)+(dias)
        
    //saída
    print(`São ${total_dias} dias.`)
}
main()