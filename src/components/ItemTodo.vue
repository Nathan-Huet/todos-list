<template>
    Name: {{ todo.name }}
    <input type="checkbox" id="checkbox" v-model="todo.completed">
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
            id: {type: String, default: "1"}
        },
        methods:{
            ...mapActions("todolist",{editTodo : 'editTodo'}),
            remove(){
                this.$emit('remove',this.id)
            },
            edit(todo){
                var payload = {'todo': todo, 'editingTodo': this.editingTodo}
                this.editTodo(payload)
            }
        },
        computed:{
            ...mapGetters('todolist', ['getTodo']),

            todo(){
                return this.getTodo(this.id)
            }
        }


    }

</script>