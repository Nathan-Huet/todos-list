<template>
    Name: {{ todo.name }}
    <input type="checkbox" id="checkbox" v-model="checked" v-on:change="complete(todo)">
    <button v-on:click="remove()">Delete</button>
    <input type="text" id="name" name="name" v-model="editingTodoName">
    <button v-on:click="edit(todo)">Update</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'Todo',

        data() {
            return {
                editingTodoName: '',
                checked : false
            }
        },
        props: {
            id : {type: String},
            todolistid: {type: String},
        },
        methods:{
            ...mapActions("todolist",["editTodo","completeTodo","removeTodo"]),
            completed(){
                let completed = '0';
                if(this.checked === true){
                    completed = '1';
                }return completed;
            },
            remove(){
                //this.$emit('remove',this.id) //emit?
                console.log(this.id);
                this.removeTodo(this.id, this.todolistid);

            },
            complete(todo){
                let payload = {'name': todo.name, 'todolist_id' : this.todolistid, 'completed': this.completed()};
                this.completeTodo(payload);
            },            
            edit(todo){
                let payload = {'name': this.editingTodoName, 'completed': this.completed(),'todolist_id' : this.todolistid}
                this.editTodo(payload,todo.id)
            },

        },
        computed:{
            ...mapGetters('todolist', ['getTodo']),

            todo(){
                return this.getTodo(this.todolistid,this.id)
            },

        }


    }

</script>