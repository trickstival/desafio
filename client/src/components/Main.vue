<script>
import StTabelaParticipantes from '@/MainChildren/TabelaParticipantes.vue'

export default {
  components: {
      StTabelaParticipantes
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
        <div class="row">
            <div class="col-lg-5 offset-lg-1">
                <st-tabela-participantes slot="left" />
            </div>
        </div>
  </div>
</template>

<style scoped>
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
