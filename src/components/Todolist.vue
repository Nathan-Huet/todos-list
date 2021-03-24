<template>

    <ul>
        
        <li v-for="todo in this.todos" v-bind:key="todo.id">
            <todo :id="todo.id" :todolistid="this.todolist_id" :checked_prop="todo.completed"></todo>
        </li>
        <input type="text" id="name" name="name" v-model="newTodo">
        <button v-on:click="add()">ajouter</button>   
        <button v-on:click="remove()">supprimer</button>   

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
            todolist_id: {type: Number},
            filter: {type: String, default: "all"}
        },
        components:{
            todo : ItemTodo,
        },
        methods:{
            ...mapActions("todolist",['removeTodolist','addTodo']),

            add(){
                var payload = {'todolist_id': this.todolist_id, 'name': this.newTodo, 'completed':'0'}
                this.addTodo(payload)
                this.newTodo = ''
            },
            remove(){
                this.removeTodolist( this.todolist_id)
            },

        },
        computed:{
            ...mapGetters('todos', ['getTodos']),



            filterToDo() {
                if (this.filter === "all") {
                    return this.todos;
                } else if (this.filter === "done") {
                    return this.todos.filter((todo) => todo.completed);
                } else if (this.filter === "notDone") {
                    return this.todos.filter((todo) => !todo.completed);
                }
                return [];
            },
        }


    }

</script>