<template>
  <div class="home">
    <hello-world msg="Welcome" />
    <a-button>{{ num }}</a-button>
    <div v-for="item in hotList" :key="item.hotValue">
      <a :href="item.link" > {{ item.text }} </a>
    </div>
    <a-input />
  </div>
</template>

<script lang="ts">
import { onMounted, computed, toRefs, reactive } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore()
    const dataMap = reactive({
      num: '按钮',
      list: store.getters.hotList
    })
    // 获取vuex数据
    const hotList = computed(() => store.getters.hotList)
    // 调用vuex内的接口函数
    const getList = () => store.dispatch('user/getHotData')

    onMounted(() => {
      getList()
    })

    return {
      hotList,
      ...toRefs(dataMap)
    }
  }
}
</script>
