<script>
import { QBtn } from 'quasar'
import { TheMask } from 'vue-the-mask'
import { mask } from 'vue-the-mask'
import Validador from './Validador'
import { EventBus } from '../../EventBus'

export default {
  components: {
      QBtn,
      TheMask
  },
  directives: {
      mask
  },
  data(){
      return {
          txtNome: '',
          txtSobrenome: '',
          txtParticipacao: '',
          shouldWatch: true,
          myMask: '###.##'
      }
  },
  methods: {
      cadastrar(){
          let bundle = {
            nome: this.txtNome, sobrenome: this.txtSobrenome, participacao: document.getElementById('txtPart').value
          }

          if(Validador.validate(bundle))
            this.axios.post('http://localhost:8080/employees', bundle).then(
                response => {
                    if(response.status == 200){
                         EventBus.$emit('novoRegistro')
                         this.limpar()
                    }
            })
      },
      limpar(){
          this.txtNome = ''
          this.txtSobrenome = ''
          this.txtParticipacao = ''
      }
  }
}


</script>

<template>
  <section class="container">
      <div class="row">
          <div class="col-xs-10 offset-1">
              <div class="row justify-center sm-gutter">
                <div class="col-lg-3">
                    <input v-model="txtNome" placeholder="Nome" type="text" class="txtSend">
                </div>
                <div class="col-lg-3">
                    <input v-model="txtSobrenome" placeholder="Sobrenome" type="text" class="txtSend">
                </div>
                <div class="col-lg-3">
                    <the-mask id="txtPart" placeholder="Participação (%)" max="100" :mask="myMask" v-model="txtParticipacao" class="txtSend" />
                </div>
                <div class="col-lg-2">
                    <div class="btn-enviar-wrapper">
                        <div class="col-lg-10 lg-offset-1">
                            <q-btn @click="cadastrar()" outline class="btn-enviar">
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
    font-size: 18px;
    font-weight: 200;
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
