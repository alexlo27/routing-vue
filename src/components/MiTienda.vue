<template>
    <h1>Bienvenidos a mi Tienda</h1>
    <p>Mi nombre es: {{ data.nombre }}</p>
    <p>Mi apellido es: {{ data.apellido }}</p>
    <p>Mi apellido tiene: {{ data.cantidad }} caracteres</p>
    <div>
        <button @click="decrement">Disminuir</button>
        {{ data.count }}
        <button @click="increment">Aumentar</button>
    </div>
    <form @submit.prevent="changeNameDispatch()">
        <input type="text" v-model="nombreForm" />
        <button>Actualizar</button>
    </form>
    
</template>
<script lang="ts" setup>
import { computed, ref  } from 'vue'
//import store from '@/store'
import { mapState, mapMutations, useStore } from 'vuex'

    const store = useStore(); 
    let nombreForm = ref('')
    //const { nombre, apellido } = mapState(['nombre', 'apellido'])
    const data = computed(()=>{
        return {
            nombre: store.state.user.nombre,
            apellido: store.state.user.apellido,
            count: store.state.counter.count,
            cantidad: store.getters.sizeApellido
      /*nombre: store.state.nombre,
      apellido: store.state.apellido,
      count: store.state.count,
      cantidad: store.getters.sizeApellido*/
    }
    })
    const decrement = ()=> store.commit('decrement')
    const increment = ()=> store.commit('increment')
    const changeName =  ()=> {
        store.commit('changeName',nombreForm.value)
        nombreForm.value = ''
    }
    const changeNameDispatch = async() => {
        await store.dispatch('changeName', nombreForm.value)
        nombreForm.value = ''
    }

</script>