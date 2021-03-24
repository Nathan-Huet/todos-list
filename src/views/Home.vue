<template>
  <div class="home">
  <!--  Il y a {{ getNumberOfTodoLists }} todolist -->
  <table>
    <tr>
      <th scope="col">
        Liste des Todolists
      </th>
      <th scope="col">
        Todos
      </th>
    </tr>
    <tr>
      <td>
        <TodolistSideBar></TodolistSideBar>
      </td>
      <td>
        <ul>
          <li v-for="todolist in todolists" v-bind:key="todolist.id">
            <todolist :id="todolist.id" :filter="filter"></todolist>
          </li>
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
      }
  },
  components: {
    todolist : Todolist,
    TodolistSideBar

  },

  beforeMount(){
        this.fetchAllTodos();
    },
  methods:{
    ...mapActions("todolist",["fetchAllTodos"]),

    changeFilter(newfilter){
      this.filter = newfilter
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
