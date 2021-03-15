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
  <ul>
    <li v-for="todolist in todolists" v-bind:key="todolist.id">
      <todolist :id="todolist.id"></todolist>
    </li>
  </ul>
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
import { mapGetters } from "vuex";
import Todolist from '@/components/Todolist.vue';

export default {
  name: 'Home',
  data(){
      return {
        newTodo : '',
        
      }
  },
  components: {
    todolist : Todolist
  },


  methods:{
      
  },

  computed: {
      ...mapGetters("todolist", ['todolists'])
    }
}
</script>
