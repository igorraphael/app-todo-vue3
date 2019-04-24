<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">AppMenu</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <h3>Navegação</h3>
        </md-toolbar>

        <md-list>
          <div class="s-menu">
            <router-link to="/">
              <md-list-item class="s-menu">
                <md-icon>home</md-icon>
                <span class="md-list-item-text s-menu">Página inicial</span>
              </md-list-item>
            </router-link>
          </div>

          <div class="s-menu">
            <router-link to="/nova-tarefa">
              <md-list-item class="s-menu">
                <md-icon>add_box</md-icon>
                <span class="md-list-item-text s-menu">Nova tarefa</span>
              </md-list-item>
            </router-link>
          </div>

          <div class="s-menu">
            <router-link to="/listar-tarefa">
              <md-list-item class="s-menu">
                <md-icon>list</md-icon>
                <span class="md-list-item-text s-menu">Listar Tarefa</span>
              </md-list-item>
            </router-link>
          </div>

        </md-list>

      </md-app-drawer>

      <md-app-content class="content">
        <router-view></router-view>

        <!-- AQUI VAI MEUS COMPONENTES -->
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
.md-app {
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.content {
  height: 100vh;
}

.s-menu *:hover {
  background-color: #448aff;
  color: white;
}
</style>

<script>
export default {
  data: () => ({
    menuVisible: false
  })
};
</script>