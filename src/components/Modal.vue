<template>
  <div class="modal-container">
      <div class="message">
        <h1>Are you sure?</h1>
        <p>This action cannot be undone!</p>
      </div>
      <div class="modal-buttons">
        <button type="button" @click="$emit('closeModal', false)">Cancel</button>
        <button type="text" @click="$emit('closeModal', true)">Accept</button>
      </div>
  </div>
  <div class="bg-modal"/>
</template>

<script lang="ts" >
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    emits : ["closeModal"]
})
</script>
