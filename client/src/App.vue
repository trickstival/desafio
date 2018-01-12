<script>
import { QLayout } from 'quasar'
import StHeader from '@/Header.vue'

export default {
  components: {
    QLayout,
    StHeader
  }

}
</script>

<template>
  <div id="q-app">
    <q-layout>
      <st-header slot="header" />
      <router-view slot="navigation" />
    </q-layout>

  </div>
</template>
