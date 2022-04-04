import{print, input} from './io_utils.js' 

function main(){
 
    const latao = Number(input('Digite a quantidade de latao:'))

    const cobre = 0.70 * latao
    const zinco = 0.30 * latao

    print(`São necessários ${cobre} de cobre e ${zinco} de zinco`)


    
}
main()