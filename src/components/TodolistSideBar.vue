<template>
    <button v-on:click="addTodolist()">ajouter une Todolist</button> 
    <ul>
        <li v-for="todolist in todolists" v-bind:key="todolist.id" v-on:click="selectTodolist(todolist.id)">
            {{ todolist.id.toString() }}
        </li>
    </ul>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'TodolistSideBar',
        selectedTodolist : 0,
        emits: ["selectTodolist"],

        methods:{
            ...mapActions("todolist",["createTodolist"]),
            addTodolist(){
            this.createTodolist({name:"test"});
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
ul
{
    list-style-type: none;
}
</style>