<template>
    <template v-if="selected">
      <div class="button-back-box">
        <button @click="$router.push('/')"><i class="fas fa-angle-left"></i> Back</button>
    </div>
    <div class="details-container">
      <h2>{{selected.name}}'s info</h2>
      <div class="info-box">
        <h3>Email</h3>
        <p>{{selected.email}}</p>
      </div>
      <div class="info-box">
        <h3>Current role</h3>
        <p>{{selected.role}}</p>
      </div>
      <div class="info-box">
        <h3>Current salary</h3>
        <p>{{selected.salary}} USD</p>
      </div>
      <div class="info-box">
        <h3>Employee since</h3>
        <p>{{selected.esince}}</p>
      </div>
      <div class="info-box">
        <h3>Street address</h3>
        <p>{{selected.address}}</p>
      </div>
      <div class="info-box">
        <h3>Phone number</h3>
        <p>{{selected.phone}}</p>
      </div>
    </div>
    <div class="details-buttons">
          <button type="button" @click="selectEdit">Edit</button>
          <button type="button" @click="selectDelete">Delete</button>
    </div>
    </template>
    <Loading v-else/>
    <Modal v-if="selectdelete" @closeModal="deleteE" />
</template>

<script>
import {mapState, mapActions} from "vuex"
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    props : {
        id : {
            type : String,
            required : true
        }
    },
    data(){
      return{
        selectdelete : null,
        confirmation : null
      }
    },
    components : {
        Modal : defineAsyncComponent(()=> import("@/components/Modal")),
        Loading : defineAsyncComponent(()=>import("@/components/Loading"))
    },
    computed : {
        ...mapState(["selected"]),
    },
    methods : {
        ...mapActions(["deleteEmployee", "getEmployees", "selectEmployee"]),
        selectEdit(){
            this.$router.push("/form")
        },
        selectDelete(){
            this.selectdelete = this.selected.id
        },
        async deleteE(res){
            if(res){
                await this.deleteEmployee(this.selectdelete)
                await this.$router.push("/")
                await this.getEmployees()
            }
            this.selectdelete = null    
        }
    },
    created(){
        this.selectEmployee(this.id)
    }
}
</script>
