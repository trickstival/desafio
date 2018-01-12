<script>
import Components from './TabelaParticipantes/componentImports'
import Colunas from './TabelaParticipantes/colunas'
import mixinData from './mixinData'

export default {
  mixins: [mixinData],
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
