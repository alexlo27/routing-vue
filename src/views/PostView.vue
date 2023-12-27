<template>
    <h1>Post view del elemento : {{ postId }}</h1>
    <h1>{{post.body}}</h1>
</template>

<script lang="ts" setup>
import {onMounted, ref, Ref} from 'vue'
import {useRoute} from 'vue-router'
import PostService from '@/services/PostService'
import IPost from '@/interfaces/IPost'


    const service = new PostService()
    const post:Ref<IPost> = service.getPost();
        console.log('xxx'+post);
        
    let postId: Ref<any> = ref('')
    onMounted(async ()=>{
        const route = useRoute()
        postId.value = route.params.id
        await service.fetchById(postId.value)
    })
</script>