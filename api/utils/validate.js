module.exports = {
    validate(json, controller) {
        if(!json){
            this.onResult(false)
            return false
        }
        let isParticipacaoNumerica = !isNaN(json.participacao)
        
        controller.db.collection('participantes').find({}).toArray((err, participantes) => {
            if(err) throw err

            if(isParticipacaoNumerica && excedeOs100PorCento(json.participacao, participantes)){
                this.onResult(false, 'Erro! Participação total excede 100%')
                return
            }

            let camposPreenchidos = json.nome && json.sobrenome && json.participacao && isParticipacaoNumerica

            if(camposPreenchidos){
                json.participacao = parseFloat(json.participacao).toFixed(2)
                this.onResult(json, 'Tudo ok!')
            } else this.onResult(false)
        })
    },
    onResult(bool, msg = 'Erro! Preencha todos os campos!'){

    }
}

function excedeOs100PorCento(participacao, participantes){
    if(participacao){
        let somaDeParticipacao = 0
        for(participante of participantes){
            somaDeParticipacao += parseFloat(participante.participacao)
        }

        console.log('soma', somaDeParticipacao, participacao)
        if((somaDeParticipacao + parseFloat(participacao)) > 100)
            return true

        return false
        
    } else return false
}