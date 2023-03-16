import { defineStore } from "pinia";
import { ref } from "vue";
export const useStore = defineStore("store" , {
    state:()=>{
        return{
            count:ref<number>(0)
        }
    },
    actions :{
        plus(){
            this.count++
        }
    }
})