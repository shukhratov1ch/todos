<script setup lang="ts">
 import headerText from './headerText.vue';
 import ImagesPage from './ImagesPage.vue';
 import LogosPage from './LogosPage.vue'
</script>
<template>
    <div class="relative ">
        <div class="w-full h-[500px] flex justify-center items-center">
            <headerText></headerText>
        </div>
        <div class="w-full flex justify-center">
            <ImagesPage></ImagesPage>
        </div>
        <div class="w-full absolute z-[100]">
            <LogosPage></LogosPage>
        </div>
    </div>
</template>