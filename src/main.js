import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
//import Vuelidate from 'vuelidate'





import NovaTarefa from './components/NovaTarefa.vue';
import ListarTarefas from './components/ListarTarefas.vue';
import WelcomeApp from './components/WelcomeApp.vue';


Vue.use(VueMaterial);
Vue.use(VueRouter);
//Vue.use(Vuelidate);



const routes = [
  { path: '/', component: WelcomeApp },
  { path: '/nova-tarefa', component: NovaTarefa },
  { path: '/listar-tarefa', component: ListarTarefas }

]
const router = new VueRouter({
  routes
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


