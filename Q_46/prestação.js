import{print, input} from './io_utils.js' 

function main(){
 
    const valor_total = Number(input('Digite o valor total pago:'))
    
    const prestaçao = Math.floor(valor_total/3)
    const resto_prestaçao = valor_total - (prestaçao * 3)   
    const entrada = prestaçao + resto_prestaçao

    

    
    print(`O valor de entrada é ${entrada} e o das duas prestaçoes é ${prestaçao}`)


    
}
main()