<template>
  <main>
    <div class="list-container">
      <div class="list-item header-list">
        <h3>name</h3>
        <h3>email</h3>
        <h3>Role</h3>
        <h3>phone</h3>
        <h3>actions</h3>
    </div>
    <template v-for="employee in employees" :key="employee.id">
      <Employee :employee="employee" />
    </template>
    </div>
  </main>
</template>

<script>
import {defineAsyncComponent} from "vue"
import {mapActions, mapMutations, mapState} from "vuex"
export default {
  components : {
    Employee : defineAsyncComponent(() => import("@/components/Employee"))
  },
  methods : {
    ...mapActions(['getEmployees']),
    ...mapMutations(["openForm"])
  },
  computed : {
    ...mapState(["employees"])
  },
   created(){
      this.openForm(false)
      this.getEmployees()
   }
  }
</script>
