<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Il y a {{ myGetter }} todolist
   <!-- <ul class="todo-list">
            <li v-for="todo in todos" :key="todo.id"  >
              {{ todo.name }}
              <input type="checkbox" id="checkbox" v-model="todo.completed">
              <button v-on:click="removeTodo(todo)">Delete</button>
              <input type="text" id="name" name="name" v-model="editingTodo">
              <button v-on:click="edit(todo)">Update</button>
            </li>
          </ul>
  </div>-->
  <button v-on:click="addTodolist()">ajouter une Todolist</button>   
  <ul>
    <li v-for="todolist in todolists" v-bind:key="todolist.id">
      <todolist :id="todolist.id" :filter="filter"></todolist>
    </li>
  </ul>
  <button v-on:click="this.filter = 'all'">all</button>
  <button v-on:click="this.filter = 'done'">done</button>
  <button v-on:click="this.filter = 'notDone'">notDone</button>
  <!--<ul>
    <li v-for="(todolist,index) in todolists" v-bind:key="index">
      <ul>
        <li v-for="todo in todolist" v-bind:key="todo.id">
          
          <todo :id="todo.id" @remove="remove"></todo>
        </li>
      </ul>
        <input type="text" id="name" name="name" v-model="newTodo">
        <button v-on:click="add()">ajouter</button>   
    </li>
  </ul>
  -->
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
    ...mapActions("todolist",[{add_Todolist : 'addTodolist'},"fetchAllTodos"]),
    addTodolist(){
      this.add_Todolist();
    }

  },

  computed: {
      ...mapGetters("todolist", ['todolists'])
    }
}
</script>
