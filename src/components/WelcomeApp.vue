<template>
  <md-app-content>
        <md-empty-state 
          md-icon="child_care"
          md-label="Bem vindo!"
          md-description="Registre suas tarefas, defina á importancia, edite ou exclua. Gerencie todas suas tarefas com esse App.">
          <router-link to="/nova-tarefa">
            <md-button class="md-primary md-raised" >COMECE JÁ!</md-button>
          </router-link>
    </md-empty-state>

  </md-app-content>
</template>
<script>
export default {
  
};
</script>
<style>
</style>
