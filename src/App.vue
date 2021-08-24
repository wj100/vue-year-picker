<template>
  <div id="app">
    <year-picker v-model="year" @input="handlerInput" :year-disable="'no'" />
    <year-picker dark v-model="year" @input="handlerInput" :year-disable="'no'" />
  </div>
</template>
<script>
export default {
  name: 'demo',
  data() {
    return {
      year: ''
    }
  },
  methods: {
    handlerInput(v) {
      console.log(v)
    }
  }
}
</script>
