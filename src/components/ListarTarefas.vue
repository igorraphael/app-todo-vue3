<template>
  <div>
    <div v-if="barLoading">
      <span class="md-display-1 md-layout md-alignment-center">Carregando tarefas..</span>
      <md-progress-bar md-mode="indeterminate"></md-progress-bar>
    </div>
    
    <md-table class="md-layout md-small-size-100" v-model="tarefas" md-card @md-selected="onSelect">
      <md-table-toolbar>
        <h1 class="md-title">Lista de tarefas</h1>
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" @click="confDelete = true">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" :key="item.id" md-selectable="multiple" >
        <md-table-cell md-label="Id" md-sort-by="">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Tarefa" md-sort-by="">{{ item.nome_tarefa }}</md-table-cell>
        <md-table-cell md-label="Importancia" md-sort-by="">{{ item.importancia }}</md-table-cell>
        <md-table-cell md-label="Data" md-sort-by="">{{ item.data_hora }}</md-table-cell>
        <!-- <md-table-cell md-label="Situaçao" md-sort-by="">{{ item.status }}</md-table-cell> -->
      </md-table-row>
    </md-table>


    <md-dialog-confirm
      :md-active.sync="confDelete"
      md-title="Deseja deletar essa(s) tarefa(s)?"
      md-confirm-text="Sim"
      md-cancel-text="Não"
      @md-confirm="clickDelete" />

      <md-dialog-alert
            :md-active.sync="alertDelete"
            md-content="Tarefa deleta."
            md-confirm-text="Ok!" />

    <p>Selected:</p>
    {{ selected }}
    
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ListarTarefa',

  data: function() {
    return {
      alertDelete:false,
      confDelete: false,
      barLoading: false,
      selected: [],
      tarefas:[]
    }
  },
  methods: {
    
      getTask(){
        let vm = this;
        vm.barLoading = true;
        axios.get('http://192.168.100.147/webservice/todo/listar')
        .then(function(response){
          vm.tarefas = response.data;
          vm.barLoading = false;
        })
      },
      onSelect(items) {//seleciona os itens
        this.selected = items;
      },
      getAlternateLabel(count) {//altera nome da label
        let plural = '';
        if (count > 1) {
          plural = 's';
        }
        return `${count} Tarefa${plural} selecionada${plural}`;
      },
      clickDelete(){
        let vm = this;
        for (let i = 0; i <  this.selected.length; ++i) {
          const id = this.selected[i].id;
          const index = this.selected[i];
          this.onDeleteTask(id);
          this.selected.splice( index, 1);
          vm.$forceUpdate();
        }
        
      },
      onDeleteTask(id){
        let vm = this;
        axios.delete('http://192.168.100.147/webservice/todo/delete', {params : {id_tarefa: id} } )
          .then(function (response){
            console.log(response.data);
            let res = response.data;
            if( res.indexOf("deletada") ){
              vm.alertDelete = true;
            }
          });
        
      }
    },
  
    mounted(){//quando montado o componente chama esse method.
    this.getTask()
  }

  }
</script>
<style scoped>
  .md-table + .md-table {
    margin-top: 16px
  }

    .md-progress-bar {
    margin: 24px;
  }
</style>