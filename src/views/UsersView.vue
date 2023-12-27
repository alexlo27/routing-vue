<template>
    <h1>Lista de usuarios</h1>
    <h2>Aqui podras ver el detalle del usuario con id {{props.userId}}</h2>
    <nav>
        <router-link :to="`/users/${$route.params.userId}/profile`">Perfil</router-link> |
        <router-link :to="{name : 'courses', params : {userId: $route.params.userId}}">Cursos</router-link>
    </nav>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    'userId' : Number,
})
</script>