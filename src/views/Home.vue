<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Il y a {{ myGetter }} todos
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
    <li v-for="todo in todos" v-bind:key="todo.id">
        <todo :id="todo.id" @remove="remove"></todo>
    </li>
  </ul>
  <input type="text" id="name" name="name" v-model="newTodo">
  <button v-on:click="add()">ajouter</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from "vuex";
import ItemTodo from '@/components/ItemTodo.vue';

export default {
  name: 'Home',
  data(){
      return {
        newTodo : '',
        
      }
  },
  components: {
    todo : ItemTodo
  },

  methods:{
      ...mapActions("todolist",{addTodo : 'addTodo'}),
      ...mapActions("todolist",{removeTodo : 'removeTodo'}),
      add(){
        this.addTodo(this.newTodo)
        this.newTodo = ''
      },
      remove(todo){
        this.removeTodo(todo)
      },
  },

  computed: {
      ...mapGetters("todolist", ['myGetter']),
      ...mapGetters("todolist", ['todos'])
    }
}
</script>
