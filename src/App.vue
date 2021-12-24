<template>
  <div id="app">
    年份
    <year-picker dark v-model="year" @input="handlerInput" :year-disable="'no'" />
  </div>
</template>
<script>
export default {
  name: 'demo',
  data() {
    return {
      year: '',
    };
  },
  methods: {
    handlerInput(v) {
      console.log(v);
    },
  },
  mounted() {

  },
};
</script>
