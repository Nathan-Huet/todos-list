<template>
    ID de la Liste: {{ todolist.id }}
    <ul>
        <li v-for="todo in filterToDo" v-bind:key="todo.id">
            <todo :id="todo.id" :todolistid="todolist.id" :checked_prop="todo.completed"></todo>
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
            id: {type: Number},
            filter: {type: String, default: "all"}
        },
        components:{
            todo : ItemTodo,
        },
        methods:{
            ...mapActions("todolist",['removeTodolist','addTodo']),

            add(){
                var payload = {'todolist_id': this.id, 'name': this.newTodo, 'completed':'0'}
                this.addTodo(payload)
                this.newTodo = ''
            },
            remove(){
                this.removeTodolist( this.id)
            },

        },
        computed:{
            ...mapGetters('todolist', ['getTodolist']),

            todolist(){
                return this.getTodolist(this.id)
            },

            filterToDo() {
                console.log(this.todolist.todos);
                if (this.filter === "all") {
                    return this.todolist.todos;
                } else if (this.filter === "done") {
                    return this.todolist.todos.filter((todo) => todo.completed);
                } else if (this.filter === "notDone") {
                    return this.todolist.todos.filter((todo) => !todo.completed);
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
