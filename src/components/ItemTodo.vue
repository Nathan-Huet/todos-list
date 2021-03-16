<template>
    Name: {{ todo.name }}
    <input type="checkbox" id="checkbox" v-model="todo.completed" v-on:change="complete(todo)">
    <button v-on:click="remove()">Delete</button>
    <input type="text" id="name" name="name" v-model="editingTodo">
    <button v-on:click="edit(todo)">Update</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'Todo',

        data() {
            return {
                editingTodo: ''
            }
        },
        props: {
            id: {type: String, default: "1"},
            todolistid: {type: String, default: "1"},
        },
        methods:{
            ...mapActions("todolist",{editTodo : 'editTodo'}),
            ...mapActions("todolist",{completeTodo : 'completeTodo'}),
            remove(){
                this.$emit('remove',this.id)
            },
            complete(todo){
                var payload = {'todo': todo, 'todolist_id' : this.todolistid}
                this.completeTodo(payload)
            },            
            edit(todo){
                var payload = {'todo': todo, 'editingTodo': this.editingTodo,'todolist_id' : this.todolistid}
                this.editTodo(payload)
            }
        },
        computed:{
            ...mapGetters('todolist', ['getTodo']),

            todo(){
                return this.getTodo(this.todolistid,this.id)
            }
        }


    }

</script>