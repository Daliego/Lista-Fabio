//Pedir um número de 3 dígitos e pedir a soma dos 3 dígitos
import{print, input} from './io_utils.js'

function main(){
    //entrada
        print('Coloque um número de 3 dígitos')
        const CDU = Number(input('Número:'))
        const Centena = Number(input('Cetenas:'))
        const Dezena = Number(input('Dezenas:'))
        const Unidade = Number(input('Unidades:'))
        //processamento
        const soma_dos_digitos = (Centena)/100 + (Dezena)/10 + Unidade 
        
        //saída'
        print(`A soma é ${soma_dos_digitos}`)
}
main()