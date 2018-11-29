<template>
  <p>
    hello{{msg}}
  </p>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: brown
}
</style>
