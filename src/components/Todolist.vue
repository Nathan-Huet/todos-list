<template>
    <ul>

        <li v-for="todo in filterToDo" v-bind:key="todo.id">
            <ItemTodo :id="todo.id" :todolistid="this.todolist_id" :checked_prop="!!parseInt(todo.completed)" :name="todo.name"></ItemTodo>
        </li>
        <input class="texti" type="text" id="name" name="name" v-model="newTodo">
        <button class="boutton" v-on:click="add()">Ajouter</button>   
        <button class="boutton" v-on:click="remove()">Supprimer</button>   

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
                if (this.filter === "all") {
                    return this.getTodos;
                } else if (this.filter === "done") {
                    return this.getTodos.filter((todo) => todo.completed);
                } else if (this.filter === "notDone") {
                    return this.getTodos.filter((todo) => !todo.completed );
                }
                return [];
            },
            
        }


    }

</script>

<style>

li{
    list-style:none;
}

.texti{
    border:none;
}

button{
    border:none;
    margin:5px 5px;
    padding:5px;
    background-color:rgba(182, 199, 176, 0.788);
    border-radius:5px;
    font-family: system-ui;
}
</style>
