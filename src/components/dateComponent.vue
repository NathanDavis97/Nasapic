<template>
  <div class="dateComponent">
    <form
      class="form-group row"
      @submit.prevent="searchApod()"
    >
      <input
        type="date"
        name="date"
        id="query"
        class="form-control col-3 offset-1"
        v-model="state.query"
      >
      <button
        type="submit"
        class="btn btn-primary col-1"
      >
        submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { apodservice } from '../services/apodService'
export default {
  name: 'DateComponent',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      searchApod () {
        console.log(state.query)
        apodservice.searchApod(state.query
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
