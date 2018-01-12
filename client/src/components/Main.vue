<script>
import StTabelaParticipantes from '@/MainChildren/TabelaParticipantes.vue'
import { EventBus } from '../EventBus'

export default {
    components: {
        StTabelaParticipantes
    },
    data(){
        return {
            data: []
        }
    },
    methods: {
    recarregar(){
        let self = this
        this.axios.get('http://localhost:8080/employees').then(response => {
            for(let i=0;i<response.data.length;i++){
                response.data[i].enumeration = i
            }
            self.data = response.data
            console.log('resposta', response.data)
        })
    }
    },
    created(){
        this.recarregar()
        EventBus.$on('novoRegistro', () => this.recarregar())
    }
}
</script>

<template>
  <div class="container container-main">
        <h4 class="text-center lblDados">
            DADOS
        </h4>
        <h6 class="text-center lblDescricaoDados">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h6>
        <div class="row main-content">
            <div class="col-lg-5 offset-lg-1">
                <st-tabela-participantes :data="data" slot="left" />
            </div>
        </div>
  </div>
</template>

<style scoped>
div.main-content{
    margin-top: 5vh;
}
div.container-main {
    min-height: 72vh;
    padding-top: 7vh;
}
h6.lblDescricaoDados {
    opacity: .7;
}
h4.lblDados {
    font-weight: bold;
    opacity: .7;
}
</style>
