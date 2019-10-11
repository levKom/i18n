<template>
  <div id="app">
    <HelloI18n />
    <router-view />
  </div>
</template>

<script>
import HelloI18n from '@components/HelloI18n'

export default {
  components: {
    HelloI18n
  }
}
</script>

<style lang="scss"></style>
