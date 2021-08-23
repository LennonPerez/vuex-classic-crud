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

<script>
import { mapState } from 'vuex'
const doc = document.querySelector("body")
export default {
  computed : {
    ...mapState(["form"])
  },
  data(){
    return{
      theme : "Light"
    }
  },
  methods : {
    changeTheme(){
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
    getTheme(){
        if(localStorage.getItem("theme")){
          doc.classList.add(localStorage.getItem("theme"), "light")
        }
    }
  },
  created(){
    this.getTheme()
  }
}
</script>

