<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Il y a {{ myGetter }} todos
    <ul class="todo-list">
            <li v-for="todo in todos" :key="todo.id"  >
              {{ todo.name }}
              <input type="checkbox" id="checkbox" v-model="todo.completed">
              <button v-on:click="removeTodo(todo)">Delete</button>
              <input type="text" id="name" name="name" v-model="editingTodo">
              <button v-on:click="edit(todo)">Update</button>
            </li>
          </ul>
  </div>
  <input type="text" id="name" name="name" v-model="newTodo">
  <button v-on:click="add()">ajout</button>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from "vuex";


export default {
  name: 'Home',
  data(){
      return {
        newTodo : '',
        editingTodo: ''
      }
  },
  components: {
    //HelloWorld
  },

  methods:{
      ...mapActions("todolist",{addTodo : 'addTodo'}),
      ...mapActions("todolist",{removeTodo : 'removeTodo'}),
      ...mapActions("todolist",{editTodo : 'editTodo'}),
      add(){
        this.addTodo(this.newTodo)
        this.newTodo = ''
      },
      remove(todo){
        this.removeTodo(todo)
      },
      edit(todo){
        console.log(this.editingTodo)
        this.editTodo(todo,this.editingTodo)
      }
  },

  computed: {
      ...mapGetters("todolist", ['myGetter']),
      ...mapGetters("todolist", ['todos'])
    }
}
</script>
