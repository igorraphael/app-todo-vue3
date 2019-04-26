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
          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Id" md-sort-by="">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Tarefa" md-sort-by="">{{ item.nome_tarefa }}</md-table-cell>
        <md-table-cell md-label="Importancia" md-sort-by="">{{ item.importancia }}</md-table-cell>
        <md-table-cell md-label="Data" md-sort-by="">{{ item.data_hora }}</md-table-cell>
        <!-- <md-table-cell md-label="Situaçao" md-sort-by="">{{ item.status }}</md-table-cell> -->
      </md-table-row>
    </md-table>

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
      barLoading: false,
      selected: [],
      tarefas:[],
      select: {
        id: '',
        nome_tarefa: '',
        status: '',
        importancia: '',
        obs: ''
      }
    }
  },
  methods: {
      getTask(){
        var vm = this;
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
      clickDelete(item){
             
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