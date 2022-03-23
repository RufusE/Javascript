function soBoanoticia(nota){
    if (nota >= 7){
        console.log('Aprovado ' + nota)
    }
}


soBoanoticia(8.1)
soBoanoticia(6.1)

function seForVerdadeEufalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}


seForVerdadeEufalo()
seForVerdadeEufalo(null)
seForVerdadeEufalo(undefined)
seForVerdadeEufalo(NaN)
seForVerdadeEufalo('')
seForVerdadeEufalo(0)
seForVerdadeEufalo(-1)
seForVerdadeEufalo(' ')
seForVerdadeEufalo('?')
seForVerdadeEufalo([])
seForVerdadeEufalo([1,2])
seForVerdadeEufalo({})






