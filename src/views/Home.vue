<template>
  <div class="home">
  <!--  Il y a {{ getNumberOfTodoLists }} todolist -->
  <table>
    <tr>
      <th scope="col">
        Liste des Todolists 
      </th>
      <th scope="col">
        Todolist id = {{selectedTodolist}}
      </th>
    </tr>
    <tr>
      <td>
        <TodolistSideBar @selectTodolist="selectTodolist($event)"></TodolistSideBar>
      </td>
      <td>
        <ul>
            <todolist :todolist_id="selectedTodolist" :filter="filter"></todolist>
          
        </ul>
        <button v-on:click="changeFilter('all')">all</button>
        <button v-on:click="changeFilter('done')">done</button>
        <button v-on:click="changeFilter('notDone')">notDone</button>
        </td> 
    </tr>
  </table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from "vuex";
import Todolist from '@/components/Todolist.vue';
import TodolistSideBar from '@/components/TodolistSideBar.vue';

export default {
  name: 'Home',
  data(){
      return {
        newTodo : '',
        filter: "all",
        selectedTodolist: 0
      }
  },
  components: {
    todolist : Todolist,
    TodolistSideBar

  },

  beforeMount(){
        this.fetchAllTodos();
        this.fetchTodos(2450);

    },
  methods:{
    ...mapActions("todolist",["fetchAllTodos","fetchTodos"]),

    changeFilter(newfilter){
      this.filter = newfilter
    },
    selectTodolist(id){
      this.selectedTodolist = id;
      this.fetchTodos(id);
    }
  },

  computed: {
      ...mapGetters("todolist", ['todolists'])
    }
}
</script>

<style scoped>
ul
{
    list-style-type: none;
}

</style>
