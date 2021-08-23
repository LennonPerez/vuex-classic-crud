<template>
    <div class="list-item item" >
        <div class="item-info" @click="goToDetails">
            <h3>{{employee.name}}</h3>
            <h3>{{employee.email}}</h3>
            <h3>{{employee.role}}</h3>
            <h3>{{employee.phone}}</h3>
        </div>
        <div class="actions">
            <button type="button" @click="selectEdit">
                <i class="fas fa-pencil-alt btn"></i>
            </button>
            <button type="button" @click="selectDelete">
            <i class="fas fa-trash btn"></i>
            </button>
        </div>
    </div>
    <Modal v-if="selectdelete" @closeModal="deleteE" />
</template>

<script>
import {mapActions} from "vuex"
import { defineAsyncComponent } from 'vue';
export default {
    props : {
        employee : {
            type : Object,
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
        Modal : defineAsyncComponent(()=> import("@/components/Modal"))
    },
    methods : {
        ...mapActions(["deleteEmployee", "getEmployees", "selectEmployee"]),
        goToDetails(){
            this.$router.push(`/details/${this.employee.id}`)
        },
        selectEdit(){
            this.selectEmployee(this.employee.id)
            this.$router.push("/form")
        },
        selectDelete(){
            this.selectdelete = this.employee.id
        },
        async deleteE(res){
            if(res){
                await this.deleteEmployee(this.selectdelete)
                await this.getEmployees()
            }
            this.selectdelete = null    
        }
    },
}
</script>
