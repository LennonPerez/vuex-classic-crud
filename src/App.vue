<template>
  <Header />
  <router-view/>
</template>

<script>
import {defineAsyncComponent} from "vue"
export default {
  components : {
    Header : defineAsyncComponent(()=> import("@/components/Header"))
  }  
}
</script>
