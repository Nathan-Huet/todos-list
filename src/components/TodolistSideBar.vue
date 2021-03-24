<template>
    <button v-on:click="addTodolist()">Ajouter une Todolist</button> 
    <ul>
        <li id="liste" v-for="todolist in todolists" v-bind:key="todolist.id">
           ID : {{ todolist.id.toString() }}
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
#liste
{
    list-style-type: square;
    border:double;
    margin: 5px 0;
    background-color:rgba(33, 97, 33, 0.35);
}
</style>