<script>
import Components from './TabelaParticipantes/componentImports'
import Colunas from './TabelaParticipantes/colunas'

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
  created(){
    let self = this
    this.axios.get('http://localhost:8080/employees').then(response => {
      self.data = response.data
      console.log('resposta', response.data)
    })
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
