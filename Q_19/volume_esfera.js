// Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
import{print, input} from './io_utils.js' 
function main(){
    //entrada
    const raio = Number(input('digite o raio:'))
    const pi = Number(3.14)
    
    //processamento
    const volume_esfera = (4 * pi * raio * raio * raio)/3
    //saída
    print(`O volume da esfera é ${volume_esfera.toFixed(2)}`)
}
main()