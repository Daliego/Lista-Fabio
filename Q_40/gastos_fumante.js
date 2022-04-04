import{print, input} from './io_utils.js' 

function main(){
    const anos = Number(input('numero de anos:'))
    const quantidade_de_cigarro = Number(input('numero de carteiras:'))
    const preço_do_cigarro = Number(input('valor do cigarro:'))

    const carteiras_de_cigarros = quantidade_de_cigarro/20
    const gasto_com_cigarro = anos * carteiras_de_cigarros * preço_do_cigarro * 365 
    print(`O gasto com cigarro ${gasto_com_cigarro} reais`)
}
main()


    