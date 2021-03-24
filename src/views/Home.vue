<template>
  <div class="home">
  <!--  Il y a {{ getNumberOfTodoLists }} todolist -->
  <table>
    <tr>
      <th scope="col" class="col1">
        Liste des Todolists
      </th>
      <th scope="col" class="col2">
        Todos
      </th>
    </tr>
    <tr>
      <td class="td1">
        <TodolistSideBar></TodolistSideBar>
      </td>
      <td>
        <ul>
          <li class="li1" v-for="todolist in todolists" v-bind:key="todolist.id">
            <todolist :id="todolist.id" :filter="filter"></todolist>
          </li>
        </ul>
        <button v-on:click="changeFilter('all')">Tout afficher</button>
        <button v-on:click="changeFilter('done')">Taches complétés</button>
        <button v-on:click="changeFilter('notDone')">Taches non complétés</button>
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
.home{
  display: grid;
  background-color:rgba(0,255,0,0.2);
  
}

.col1{
  grid-column:1;
  grid-row:1;
  background-color:rgba(0,255,0,0.35);
  padding:1em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 140%;
}

.col2{
  grid-column:2/4;
  grid-row:1;
  background-color:rgba(0,255,0,0.35);
  padding:1em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 140%;
  
}
.td1{
  grid-column:1;
  grid-row:2;
  
  
}
ul{
  list-style: none;
}
.li1{
  list-style:none;
  grid-column:3/4;
  grid-row:2;
  
  padding:1em;
}

</style>
