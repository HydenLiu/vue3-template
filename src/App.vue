<template>
  <router-view v-slot="{Component}">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity 0.5s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
