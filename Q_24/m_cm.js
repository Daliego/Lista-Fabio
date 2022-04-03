import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const metros = Number(input('Quantas metros:'))
    
    //processamento
    const centimetros = metros * 100
    
    //saída
    print(`São ${centimetros} centimetros.`)
}
main()