<template>
  <div style="height:100%;">
    <keep-alive>
      <transition name="fadeMove">
        <router-view v-if="$route.meta.keepAlive" />
      </transition>
    </keep-alive>
    <transition name="fadeMove">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>

<script>

export default {
  data (){
    return {
     
    }
  },

}
</script>

<style lang="scss">
@import '@/styles/main';
</style>
