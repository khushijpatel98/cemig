<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HomeContainer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    console.log("data ==== ",process.env.VUE_APP_ROOT_API)
  },

}
</script>
