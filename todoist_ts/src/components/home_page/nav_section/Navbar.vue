<script setup lang="ts">
import { ref } from 'vue';
import buttons from '../../necesarry_com/buttons.vue';
import Resources from './Resources.vue'
let show = ref<boolean>(false)

</script>
<template>
    <div>
        <div class="relative w-full flex justify-between px-[100px] py-[20px]">
            <div class="nav logo">
                <img src="../../../../public/logo.svg" alt="">
            </div>
            <div>
                <ul class="flex">
                    <li class="ml-2 px-3 py-2 rounded-md hover:bg-gray-100">Features</li>
                    <li class="ml-2 px-3 py-2 rounded-md hover:bg-gray-100">Templates</li>
                    <li class="ml-2 px-3 py-2 rounded-md hover:bg-gray-100">For Teams</li>
                    <li @mouseenter="$event => show = true" @mouseleave="$event => show = false" class=" ml-2  ">
                        <div class="flex px-3 py-2 rounded-md hover:bg-gray-100 mr-2">
                            <div>
                                <p class="mr-2">Resources </p>
                            </div>
                            <div>
                                <img src="../../../../public/down.svg" alt="">
                            </div>
                        </div>
                        <Transition name="fade">
                            <div v-show="show" class="absolute">
                                <Resources />
                            </div>
                        </Transition>
                    </li>
                    <li class="ml-2 px-3 py-2 rounded-md hover:bg-gray-100">Pricing</li>
                    <li class="ml-2 px-3 py-2 rounded-md hover:bg-gray-100">Log In</li>
                    <li class="ml-2">
                        <buttons />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>