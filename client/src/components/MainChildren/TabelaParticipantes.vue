<script>
import Components from './TabelaParticipantes/componentImports'
import Colunas from './TabelaParticipantes/colunas'
import { EventBus } from '../../EventBus'

export default {
  components: {
      ...Components
  },
  data(){
      return {
          colunas: Colunas,
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
  <q-data-table
    :columns="colunas"
    :data="data"
  >

  </q-data-table>
</template>
