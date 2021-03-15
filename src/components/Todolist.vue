<template>
    ID: {{ todolist.id }}
    <ul>
        <li v-for="todo in todolist.todos" v-bind:key="todo.id">
            <todo :id="todo.id" :todolistid="todolist.id" @remove="remove"></todo>
        </li>
        <input type="text" id="name" name="name" v-model="newTodo">
        <button v-on:click="add()">ajouter</button>   
    </ul>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemTodo from './ItemTodo.vue';

    export default {
        name: 'Todolist',

        data() {
            return {
                newTodo : '',
            }
        },
        props: {
            id: {type: String, default: "1"}
        },
        components:{
            todo : ItemTodo,
        },
        methods:{
            ...mapActions("todolist",{addTodo : 'addTodo'}),
            ...mapActions("todolist",{removeTodo : 'removeTodo'}),

            add(){
                var payload = {'todolist_id': this.id, 'name': this.newTodo}
                this.addTodo(payload)
                this.newTodo = ''
            },
            remove(todo){
                var payload = {'todolist_id': this.id, 'id': todo}
                this.removeTodo(payload)
            },

        },
        computed:{
            ...mapGetters('todolist', ['getTodolist']),

            todolist(){
                return this.getTodolist(this.id)
            }
        }


    }

</script>