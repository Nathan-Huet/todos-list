<template>

    <ul>
        
        <li v-for="todo in getTodos" v-bind:key="todo.id">
            <ItemTodo :id="todo.id" :todolistid="this.todolist_id" :checked_prop="!!parseInt(todo.completed)" :name="todo.name"></ItemTodo>
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
            ItemTodo : ItemTodo,
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
            ...mapGetters('todolist', ['getTodos']),



            filterToDo() {
                console.log(this.filter);
                console.log("tttt");

                if (this.filter === "all") {
                    return this.getTodos;
                } else if (this.filter === "done") {
                    return this.getTodos.filter((todo) => todo.completed === "1");
                } else if (this.filter === "notDone") {
                    return this.getTodos.filter((todo) => !todo.completed ==="0");
                }
                return [];
            },
            
        }


    }

</script>