<script>
import { 
    QToolbar,
    QToolbarTitle,
    QInput    
    } from 'quasar'

import StSendForm from '@/HeaderChildren/SendForm.vue'

export default {
  components: {
      QToolbar,
      QToolbarTitle,
      QInput,
      StSendForm
  }
}
</script>

<template>
  <q-toolbar color="light-blue-5">
      <q-toolbar-title class="text-center">
            <h4 class="titulo-cadastro">
            CADASTRE-SE
            </h4>
            <h6 slot="subtitle" class="subtitulo-cadastro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <st-send-form class="subform" />
            </h6>
      </q-toolbar-title>
  </q-toolbar>
</template>

<style scoped>
h4.titulo-cadastro{
    margin-top: 40px;
    font-weight: bolder;
    letter-spacing: 0.1vh;
}

.subform{
    margin-top: 30px;
    margin-bottom: 40px;
}

.q-toolbar-subtitle{
    opacity: .9;
}
</style>
