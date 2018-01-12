<script>
import StTabelaParticipantes from '@/MainChildren/TabelaParticipantes.vue'
import StGraficoParticipantes from '@/MainChildren/GraficoParticipantes.vue'
import { EventBus } from '../EventBus'
import colorArrayGenerator from './utils/colorArrayGenerator'

export default {
    components: {
        StTabelaParticipantes,
        StGraficoParticipantes
    },
    data(){
        return {
            data: [],
            chartOptions: {
                responsive: false
            }
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
    computed: {
        chartData(){


            return {
                labels: this.data.map(item => item.nome),
                datasets: [
                    {
                        backgroundColor: colorArrayGenerator(this.data.length),
                        data: this.data.map(item => item.participacao)
                    }
                ]
            }
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
            <div class="col-lg-5 offset-lg-2">
                <st-tabela-participantes :data="data" slot="left" />
            </div>
            <div class="col-lg-4 offset-lg-1 offset-sm-3">
                <div class="chart-wrapper">
                    <st-grafico-participantes :chartData="chartData" :options="chartOptions" slot="right" />
                </div>
            </div>
        </div>
  </div>
</template>

<style scoped>
div.chart-wrapper{
    width: 360px;
}
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
