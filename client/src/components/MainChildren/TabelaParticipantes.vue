<script>
import Components from './TabelaParticipantes/componentImports'
import Colunas from './TabelaParticipantes/colunas'

export default {
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
  >

  </q-data-table>
</template>
