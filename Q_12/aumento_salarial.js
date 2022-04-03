import { print, input } from "./io_utils.js";
function main(){
    
    const salario = Number(input('Digite o seu salário:'))

    const aumento_salarial = salario * 1.25

    print(`O salário com aumento é ${aumento_salarial}`)
    
}
main()