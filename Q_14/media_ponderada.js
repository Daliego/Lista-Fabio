import { print, input } from "./io_utils.js";
function main(){
    
    const Nota1 = Number(input('Nota1:'))
    const Nota2 = Number(input('Nota2:'))
    const Nota3 = Number(input('Nota3:'))
    const peso1 = Number(input('Peso1:'))
    const peso2 = Number(input('Peso2:'))
    const peso3 = Number(input('Peso3:'))

    const media_ponderada = ((Nota1 * peso1)+(Nota2 * peso2)+(Nota3 * peso3))/(peso1 + peso2 + peso3)

    print(`A média é ${media_ponderada.toFixed(2)}`)
    
}
main()