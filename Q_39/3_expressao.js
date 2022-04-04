import{print, input} from './io_utils.js' 

function main(){
    print('Digite 3 números.')

    const A = Number(input('numero A:'))
    const B = Number(input('numero B:'))
    const C = Number(input('numero C:'))

    const R = (A + B)**2
    const S = (B + C)**2

    const D = (R + S)/2

    print(`O resultado da expressão é ${D}`)
}
main()


    