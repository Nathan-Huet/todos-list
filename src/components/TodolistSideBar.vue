<template>
    <input  type="text" id="nameTodolist" name="nameTodolist" v-model="newTodolist">
    <br>
    <button v-on:click="addTodolist()">Ajouter une Todolist</button> 
    <ul>
        <li v-for="todolist in todolists" v-bind:key="todolist.id" v-on:click="selectTodolist(todolist.id)">
            {{ todolist.name }}
        </li>
    </ul>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";

    export default {
        data() {
            return {
                newTodolist : "nom",
            }
        },
        name: 'TodolistSideBar',
        selectedTodolist : 0,
        emits: ["selectTodolist"],

        methods:{
            ...mapActions("todolist",["createTodolist"]),
            addTodolist(){
            this.createTodolist({name:this.newTodolist});
            this.newTodolist = "nom";
            },
            selectTodolist(id){
                this.$emit('selectTodolist', id)
            }


        },
        computed:{
            ...mapGetters("todolist", ['todolists']),

        }


    }

</script>

<style scoped>
#liste
{
    list-style-type: square;
    border:double;
    margin: 5px 0;
    background-color:rgba(33, 97, 33, 0.35);
}
</style>