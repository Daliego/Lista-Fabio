import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const nota1 = Number(input('nota 1:'))
    const nota2 = Number(input('nota 2:'))
    const nota3 = Number(input('nota 3:'))
    
    //processamento
    const media = (nota1 + nota2 + nota3)/3
        
    //saída
    print(`A media é: ${media}.`)
}
main()