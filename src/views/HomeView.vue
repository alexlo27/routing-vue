<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MiTienda />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MiTienda from '@/components/MiTienda.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    MiTienda,
  },
});
</script>
