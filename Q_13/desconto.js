import { print, input } from "./io_utils.js";
function main(){
    
    const salario = Number(input('Digite o seu salário:'))

    const desconto_salarial = salario * 0.70

    print(`O salário com desconto é ${desconto_salarial}`)
    
}
main()