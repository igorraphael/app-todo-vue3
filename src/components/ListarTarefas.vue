<template>
  <div>
    <md-table class="md-layout md-small-size-100" v-model="tasks" md-card @md-selected="onSelect">
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
        <md-table-cell md-label="Tarefa" md-sort-by="">{{ item.nameTarefa }}</md-table-cell>
        <md-table-cell md-label="Importancia" md-sort-by="">{{ item.importancia }}</md-table-cell>
        <md-table-cell md-label="Data" md-sort-by="">{{ item.data_hora }}</md-table-cell>
        <md-table-cell md-label="Situaçao" md-sort-by="">{{ item.status }}</md-table-cell>
      </md-table-row>
    </md-table>

    <p>Selected:</p>
    {{ selected }}
    
  </div>
</template>

<script>
  export default {

  data: function() {
    return {
      selected: [],
      tasks: [
        { nameTarefa: 'Criar APP em Vue', status: 0, data_hora: '2019-04-24', importancia: 'baixa'},
        { nameTarefa: 'Criar APP em React', status: 0, data_hora: '2019-04-24', importancia: 'baixa'},
        { nameTarefa: 'Criar APP em Angular', status: 0, data_hora: '2019-04-24', importancia: 'baixa'},
      ]
    }
  },
    methods: {
      onSelect (items) {
        this.selected = items;
      },
      getAlternateLabel (count) {
        let plural = '';

        if (count > 1) {
          plural = 's';
        }
        return `${count} Tarefa${plural} selecionada${plural}`;
      }
    }
  }
</script>
<style scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
</style>