import IPost from '@/interfaces/IPost'
import {ref, Ref} from 'vue'
class PostService {

    private post:Ref<IPost>

    constructor() {
        this.post = ref<IPost>({})
    }
    getPost(): Ref<IPost>{
        return this.post
    }

    async fetchById(id: any):Promise<void>{

        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        try {
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json            
        } catch (error) {
            console.log(error)
            
        }
    }
}
export default PostService