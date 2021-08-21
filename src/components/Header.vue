<template>
  <header>
    <h1 @click="$router.push('/')">Manage <span>Employees</span></h1>
    <button type="button" @click="$router.push('/form')" v-if="!form">
    <i class="fas fa-plus"></i><span>Add New Employee</span></button>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed : {
    ...mapState(["form"])
  }
}
</script>

