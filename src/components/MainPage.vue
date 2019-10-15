<template>
  <div class="main-content">
    <div class="nav-content">
      <a href="#" @click="setLocale('en')">
        <flag iso="us"></flag>
      </a> | 
      <a href="#" @click="setLocale('ru')">
        <flag iso="ru"></flag>
      </a>
      <nav>
        <router-link to="test">Test</router-link> | 
        <router-link to="json_data">Json Data</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainPage',

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
  },
}
</script>

<style lang="scss">
.nav-content {
  max-width: 960px;
  margin: 20px auto;
  text-align: center;
}
</style>
