<template>
  <header>
    <h1 @click="$router.push('/')">Manage <span>Employees</span></h1>
    <button type="button" class="add-btn" @click="$router.push('/form')" v-if="!form">
    <i class="fas fa-plus"></i><span>Add New Employee</span></button>
    <div class="theme-container" @click="changeTheme">  
      <span />
      <p>{{theme}} theme</p>
    </div>
  </header>
</template>

<script lang="ts" >
import { mapState } from 'vuex'
import { defineComponent } from 'vue';
const doc = document.querySelector("body") as HTMLBodyElement
export default defineComponent({
  computed : {
    ...mapState(["form"])
  },
  data(){
    return{
      theme : "Light" as string
    }
  },
  methods : {
    changeTheme() : void{
      if(doc.classList.contains("dark")){
        doc.classList.replace("dark", "light")
        localStorage.setItem("theme", "light")
        this.theme = "Light"
      }else{
        doc.classList.replace("light", "dark")
        localStorage.setItem("theme", "dark")
        this.theme = "Dark"
      }
    },
    getTheme() : void{
      const localtheme : string | null = localStorage.getItem("theme")
        if(localtheme){
          doc.classList.add(localtheme)
        }
    }
  },
  created(){
    this.getTheme()
  }
})
</script>

