<template>
  <div id="app">
    <div class="container">
      {{msg}}
    </div>
  </div>
</template>
<style lang="scss">
.container {
  color: red
}
</style>

<script>
export default {
  data: function () {
    return {
      msg: 'hello vue11'
    }
  }
}
console.log('hellovue')
</script>
