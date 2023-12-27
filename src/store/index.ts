import { createStore, /*useStore*/ } from 'vuex'
//var state = useStore();
const modeuleUser = {
  namespace: true,
  state: {
    nombre: 'Alexander',
    apellido: 'Lopez Leyva',
  },
  getters: {
    sizeApellido(state: any){
      return state.nombre.length
    }
  },
  mutations: {
    changeName(state: any, nombre: string){
      state.nombre = nombre
    }
  },
  actions: {
    changeName(context: any, dato: string): Promise<void>{
      return new Promise((resolve)=>{
        setTimeout(() => {
          console.log('Actualizado en la BD');
          context.commit('changeName',dato);
          resolve();
        }, 2000);
        
      })
      
    }
  },
}

const moduleCounter = {
  namespace: true, //alcance local
  state: {
    count: 1
  },
  mutations: {
    decrement(state:any){
      state.count--
    },
    increment(state: any){
      state.count++
    },
  }
}
export default createStore({
  state: {
    /*nombre: 'Alexander',
    apellido: 'Lopez Leyva',*/
    //count: 1
  },
  getters: {
    /*sizeApellido(state){
      return state.nombre.length
    }*/
  },
  mutations: {
    /*decrement(state){
      state.count--
    },
    increment(state){
      state.count++
    },*/
    /*changeName(state, nombre){
      state.nombre = nombre
    }*/
  },
  actions: {
    /*changeName(context, dato): Promise<void>{
      return new Promise((resolve)=>{
        setTimeout(() => {
          console.log('Actualizado en la BD');
          context.commit('changeName',dato);
          resolve();
        }, 2000);
        
      })
      
    }*/
  },
  modules: {
    user: modeuleUser,
    counter: moduleCounter
  }
})
