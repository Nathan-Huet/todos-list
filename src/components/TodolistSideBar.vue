<template>
    <button v-on:click="addTodolist()">ajouter une Todolist</button> 
    <ul>
        <li v-for="todolist in todolists" v-bind:key="todolist.id">
            {{ todolist.id.toString() }}
        </li>
    </ul>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'TodolistSideBar',
        methods:{
            ...mapActions("todolist",["createTodolist"]),
            addTodolist(){
            this.createTodolist({name:"test"});
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