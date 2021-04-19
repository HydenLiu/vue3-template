<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String
    }
  },
  setup(props, context) {
    console.log(props.msg, context)
  }
}
</script>

<style scoped lang="less"></style>
