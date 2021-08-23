<template>
  <main>
    <div class="input-button-container">
      <input type="text" placeholder="search by name" v-model="inputname"/>
      <button type="button" class="add-btn" @click="$router.push('/form')">
      <i class="fas fa-plus"></i><span>Add New Employee</span></button>
    </div>
    <div class="list-container">
      <div class="list-item header-list">
        <h3>name</h3>
        <h3>email</h3>
        <h3>Role</h3>
        <h3>phone</h3>
        <h3>actions</h3>
    </div>
      <Loading v-if="loading" />
      <template v-else>
        <Empty v-if="listfiltered.length === 0 && inputname"/>
        <Employee :employee="employee" v-for="employee in listfiltered" :key="employee.id" v-else/>
      </template>
    </div>
  </main>
</template>

<script>
import {defineAsyncComponent} from "vue"
import {mapActions, mapMutations, mapState} from "vuex"
export default {
  components : {
    Employee : defineAsyncComponent(() => import("@/components/Employee")),
    Empty : defineAsyncComponent(()=> import("@/components/Empty")),
    Loading : defineAsyncComponent(()=> import('@/components/Loading'))
  },
  data(){
    return{
      inputname : null
    }
  },
  methods : {
    ...mapActions(['getEmployees']),
    ...mapMutations(["openForm"])
  },
  computed : {
    ...mapState(["employees", "loading"]),
    listfiltered(){
      if(this.inputname){
        return this.employees.filter(employee => employee.name.toLowerCase().includes(this.inputname.toLowerCase()))
      }else{
        return this.employees
      }
    }
  },
   created(){
      this.openForm(false)
      this.getEmployees()
   }
  }
</script>
