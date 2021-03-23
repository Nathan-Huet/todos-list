<template>
    <button v-on:click="addTodolist()">ajouter une Todolist</button> 
    <ul>
        <li v-for="todolist in todolists" v-bind:key="todolist.id">
            {{ todolist.id }}
        </li>
    </ul>
    
</template>

<script>
import { mapGetters } from "vuex";

    export default {
        name: 'TodolistSideBar',
        methods:{
            addTodolist(){
                this.$emit("addTodolist");
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