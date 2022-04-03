import{print, input} from './io_utils.js' 

function main(){
    //entrada
    const minutos = Number(input('Quantos minutos:'))
    
    //processamento
    const dias = Math.floor(minutos/(24 * 60))
    const resto_dias = minutos - (24 * 60 * dias)
    const horas = Math.floor(resto_dias/60)
    const resto_horas = resto_dias - (60 * horas)
        
    //saída
    print(`São ${dias} dias e ${horas} horas e ${resto_horas} minutos.`)
}
main()