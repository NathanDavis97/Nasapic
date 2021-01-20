<template>
  <div class="result">
    <img
      :src="photo"
      :alt="help"
    >
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import appState from '../AppState'
export default {
  name: 'Result',
  setup () {
    const state = reactive({
      photo: computed(() => appState.photo
      )
    })
    return { state }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

</style>
