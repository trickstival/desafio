<script>
import Components from './TabelaParticipantes/componentImports'
import Colunas from './TabelaParticipantes/colunas'

export default {
  props: {
    data: {
      type: Array
    }
  },
  components: {
      ...Components
  },
  data(){
      return {
          colunas: Colunas
      }
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
