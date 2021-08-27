<template>
    <Header />
    <router-view/>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent} from "vue"
export default defineComponent({
  components : {
    Header : defineAsyncComponent(()=> import("@/components/Header.vue"))
  }  
})
</script>
