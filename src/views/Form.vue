<template>
  <div class="form-container">
      <h2 v-if="!selected">Add new employee</h2>
      <h2 v-else>Edit Employee info</h2>
      <form @submit="sendEmployee">
        <div class="input-box">
          <label for="name">Employee's Name</label>
          <input type="text" id="name" v-model="info.name">
        </div>
        <div class="input-box">
          <label for="email">Employee's Email</label>
          <input type="email" id="email" v-model="info.email">
        </div>
        <div class="input-box">
          <label for="role">Employee's Role</label>
          <input type="text" id="role" v-model="info.role">
        </div>
        <div class="input-box">
          <label for="salary">Employee's Salary</label>
          <input type="number" id="salary" v-model="info.salary">
        </div>
        <div class="input-box">
          <label for="since">Employee Since</label>
          <input type="date" id="since" v-model="info.esince">
        </div>
        <div class="input-box">
          <label for="address">Employee's Address</label>
          <input type="text" id="address" v-model="info.address">
        </div>
        <div class="input-box">
          <label for="phone">Employee's Phone</label>
          <input type="text" id="phone" v-model="info.phone">
        </div>
        <div class="buttons">
          <button type="button" @click="goBack">Cancel</button>
          <button type="submit" >Save</button>
        </div>
      </form>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
  data(){
    return{
      employee : {
        name : null,
        email : null,
        role : null,
        salary : null,
        esince : null,
        address : null,
        phone : null
      }
    }
  },
  methods : {
    ...mapActions([ "getEmployees","setNewEmployee", "updateEmployee"]),
    ...mapMutations(["openForm"]),
    formError(){
      const inputs = document.querySelectorAll("input")
        inputs.forEach(input => {
          if(!input.value){
            input.classList.add("formerror")
            input.previousElementSibling.classList.add("labelerror")
          }else{
            input.classList.remove("formerror")
            input.previousElementSibling.classList.remove("labelerror")
          }
        }) 
    },
    async sendEmployee(e){
      e.preventDefault()
      if(this.info.name && this.info.email && this.info.role && this.info.salary 
      && this.info.esince && this.info.address && this.info.phone){
       await this.selected ? this.updateEmployee(this.info) : this.setNewEmployee(this.info)
        await this.getEmployees()
        await this.$router.push('/')
      }else{
        this.formError()
      }
    },
    goBack(){
      this.$router.push('/')
    }
  },
  computed : {
    ...mapState(["selected"]),
    info(){
      return this.selected ? this.selected : this.employee
    }
  },
  created(){
    this.openForm(true)
  }
}
</script>
