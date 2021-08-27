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

<script lang="ts" >
import {mapActions, mapMutations} from "vuex"
import { defineAsyncComponent, defineComponent, PropType } from 'vue';
import {employeeInterface} from "@/types"

export default defineComponent({
    props : {
        employee : {
            type : Object as PropType<employeeInterface>,
            required : true
        } 
    },
    data(){
        return{
            selectdelete : null as null | string,
            confirmation : null
        }
    },
    components : {
        Modal : defineAsyncComponent(()=> import("@/components/Modal.vue"))
    },
    methods : {
        ...mapMutations(["selectEmployee"]),
        ...mapActions(["deleteEmployee", "getEmployees"]),
        goToDetails() : void {
            this.$router.push(`/details/${this.employee.id}`)
        },
        selectEdit() : void {
            this.selectEmployee(this.employee)
            this.$router.push("/form")
        },
        selectDelete() : void {
            this.selectdelete = this.employee.id
        },
        async deleteE(res : boolean) : Promise<void> {
            if(res){
                await this.deleteEmployee(this.selectdelete)
                await this.getEmployees()
            }
            this.selectdelete = null    
        }
    },
})
</script>
