import{print, input} from './io_utils.js' 

function main(){
 
    const valor_dinheiro = Number(input('Digite a quantia de saque:'))

    const $100 = Math.floor(valor_dinheiro/100)
    const resto_$100 = valor_dinheiro - ($100 * 100)

    const $50 = Math.floor(resto_$100/50)
    const resto_$50 = resto_$100 - ($50 * 50)

    const $20 = Math.floor(resto_$50/20)
    const resto_$20 = resto_$50 - ($20 * 20)

    const $10 = Math.floor(resto_$20/10)
    const resto_$10 = resto_$20 - ($10 * 10)

    const $5 = Math.floor(resto_$10/5)
    const resto_$5 = resto_$10 - ($5 * 5)

    const $2 = Math.floor(resto_$5/2)
    const resto_$2 = resto_$5 - ($2 * 2)

    const $1 = resto_$2


    

    print(`A quantidade mínimas de notas sacadas de cada é ${$100} de 100 reais, ${$50} de 50 reais, ${$20} de 20 reais , ${$10} de 10 reais , ${$5} de 5 reais , ${$2} de 2 reais , ${$1} de 1 real. `)


    
}
main()