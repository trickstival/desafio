<script>
import { QBtn } from 'quasar'

export default {
  components: {
      QBtn
  }
}
</script>

<template>
  <section class="container">
      <div class="row">
          <div class="col-xs-10 offset-1">
              <div class="row justify-center sm-gutter">
                <div class="col-lg-3">
                    <input placeholder="Nome" type="text" class="txtSend">
                </div>
                <div class="col-lg-3">
                    <input placeholder="Sobrenome" type="text" class="txtSend">
                </div>
                <div class="col-lg-3">
                    <input placeholder="Participação" type="text" class="txtSend">
                </div>
                <div class="col-lg-2">
                    <div class="btn-enviar-wrapper">
                        <div class="col-lg-10 lg-offset-1">
                            <q-btn outline class="btn-enviar">
                                Enviar
                            </q-btn>
                        </div>
                    </div>
                </div>
              </div>
          </div>


      </div>
  </section>
</template>

<style scoped>
div.btn-enviar-wrapper, div.btn-enviar-wrapper >  *{
    height: 100%;
}

input.txtSend {
    height: 65px;
    width: 100%;
    border-radius: 5px;
    border-color: lightblue;
    border-style: solid;
    font-size: 22px;
    padding: 5px;
}
.btn-enviar{
    width: 100%;
    height: 65px;
    font-size: 25px;
    font-weight: bolder;
    border-width: 2px;
}
</style>
