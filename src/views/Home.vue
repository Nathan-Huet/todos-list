<template>
  <div class="home">
  <!--  Il y a {{ getNumberOfTodoLists }} todolist -->

  <button v-on:click="addTodolist()">ajouter une Todolist</button>   
  <ul>
    <li v-for="todolist in todolists" v-bind:key="todolist.id">
      <todolist :id="todolist.id" :filter="filter"></todolist>
    </li>
  </ul>
  <button v-on:click="this.filter = 'all'">all</button>
  <button v-on:click="this.filter = 'done'">done</button>
  <button v-on:click="this.filter = 'notDone'">notDone</button>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from "vuex";
import Todolist from '@/components/Todolist.vue';

export default {
  name: 'Home',
  data(){
      return {
        newTodo : '',
        filter: "all",
      }
  },
  components: {
    todolist : Todolist
  },

  beforeMount(){
        this.fetchAllTodos();
    },
  methods:{
    ...mapActions("todolist",["createTodolist","fetchAllTodos"]),
    addTodolist(){
      this.createTodolist({name:"test"});
    }

  },

  computed: {
      ...mapGetters("todolist", ['todolists'])
    }
}
</script>
