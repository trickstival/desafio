import { Dialog } from 'quasar'

export default {
    validate(bundle){
        if(empty(bundle)){
            createErrorDialog('Preencha todos os campos')
            return false
        }
        if(isNaN(bundle.participacao)){
            createErrorDialog('Preencha a participação apenas com números')
            return false
        }
        let partFloat = parseFloat(bundle.participacao)
        if(partFloat > 100){
            createErrorDialog('A participação não pode ser maior que 100%')
            return false
        }

        return true
    }
}

function empty(bundle){
    if(!bundle) return true
    for(let key of Object.keys(bundle)){
        if(!bundle[key]) return true
    }
    return false
}

function createErrorDialog(msg){
    Dialog.create({
        title: 'Erro!',
        message: msg,
        buttons: [
            'Confirmar'
        ]
    })
}