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

  mounted (){
    _api.getIndexData2()
  }
}
</script>

<style lang="scss">
@import '@/styles/main';
</style>
