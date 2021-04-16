<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <a-button @click="handerClick">{{ msg }}</a-button>
    <a href="http://" target="_blank" rel="noopener noreferrer">a</a>
    <a-input/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import { getData } from '@/api/user'

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public msg = 'xxx'

  // private arr

  created() {
    this.getData()
  }

  private getData() {
    getData().then((res) => {
      this.msg = '222'
      console.log(res)
      // this.arr = res.data
    })
  }

  public handerClick() {
    this.msg = 'fff'
  }
}
</script>
