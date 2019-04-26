<template>
  <md-app-content>
    <h1>Nova tarefa</h1>

    <form class="md-layout md-alignment-center" @submit.prevent="checkForm">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Inserir nova tarefa</div>
        </md-card-header>

        <!-- CONTENT CARD -->
        <md-card-content>
          <div class="md-layout md-small-size-100">
            <md-field>
              <label>Tarefa:</label>
              <md-input name="name-tarefa" v-model="nameTarefa"></md-input>
            </md-field>
          </div>

          <div class="md-layout md-small-size-100">
            <md-field>
              <label>Importancia:</label>
              <md-select name="importancia" v-model="importancia">
                <md-option value="nenhuma">Nenhuma</md-option>
                <md-option value="baixa">Baixa</md-option>
                <md-option value="media">Media</md-option>
                <md-option value="alta">Alta</md-option>
                <md-option value="ferrou">Ferrou</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout md-small-size-100">
            <label>Data de realização:</label>
            <md-datepicker v-model="dateTarefa"/>
          </div>


          <div class="md-layout md-small-size-100">
            <ul class="errorsForm">
              <li v-for="error in errors" :key="error.id">{{error}}</li>
            </ul>
          </div>

          <md-dialog-alert
            
            :md-active.sync="resMessage"
            md-content="Tarefa adicionada com sucesso!"
            md-confirm-text="Ok!" />

          <md-card-actions>
            <!-- v-on:click IGUAL @click. -->
            <!-- <md-button class="md-primary md-raised" v-on:click.native="toggleNavigation">NOVO</md-button> -->
            <md-button class="md-primary md-raised" type="submit">ADD</md-button>
          </md-card-actions>
        </md-card-content>
      </md-card>
    </form>
  </md-app-content>
</template>
<script>
import axios from 'axios'

export default {
  name: 'NovaTarefa',
  
  data: function() {
    return {
      resMessage: false,
      errors: [],
      nameTarefa: null,
      importancia: null,
      dateTarefa: null
    }
  },
  methods: {
    toggleNavigatizon() {
      alert("Clicou no botao..");
    },
    checkForm() {
      this.errors = [];
      
      if(!this.nameTarefa){//Nome da tarefa 
        this.errors.push('Nome da tarefa deve ser preenchido..');
      }
      if(!this.importancia){//importancia
        this.errors.push('Importancia deve ser selecionado.');
      }
      if(!this.dateTarefa){
        this.errors.push('Data de realização deve ser escolhida.');
      }

      if(this.nameTarefa && this.importancia && this.dateTarefa){//Tudo preenchido...
        this.sendData(this.nameTarefa, this.importancia, this.dateTarefa);
        // let t = this.sendData(this.nameTarefa, this.importancia, this.dateTarefa);
        // console.log(t);
        return true;
      }
      
    },
    sendData(tarefa, importancia, data){
      var vm = this;
      const data_formt = data.getFullYear()+"-"+(data.getMonth() + 1)+"-"+ data.getDate();  
      const params = new URLSearchParams();
      params.append('nome_tarefa', tarefa);
      params.append('importancia', importancia);
      params.append('data_hora', data_formt);

      axios.post('http://192.168.100.147/webservice/todo/add', params, {headers: {'Content-type': 'application/x-www-form-urlencoded'} })
      .then(function (response){
        //console.log(response.data);
        let res = response.data;
        if( res.indexOf("sucesso") ){
          vm.resMessage = true;
        }
      });

     
        
    }
  }
};
</script>
<style>
.errorsForm{
  color:red;
}
</style>
