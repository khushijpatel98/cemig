<template>
  <footer>
    <p>Copyright &copy; {{ year }}</p>
  </footer>
</template>

<script>
// import { computed } from 'vue'

export default {
  name: 'Fooder',
  data () {
    return {
      year: ''
    }
  },
  mounted () {
    this.year = new Date().getFullYear()
  }
}
</script>
