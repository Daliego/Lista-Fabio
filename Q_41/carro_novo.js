import{print, input} from './io_utils.js' 

function main(){
    const custo_de_fábrica = Number(input('Custo de fábrica:'))

    const custo_do_consumidor = custo_de_fábrica + (0.28 * custo_de_fábrica) + (0.45 * custo_de_fábrica)
    

    
    print(`O custo com o carro para o consumidor é ${custo_do_consumidor}`)
}
main()


    