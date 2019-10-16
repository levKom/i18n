<template>
  <div class="main-content">
    <div class="nav-content">
      <button @click="setLocale('en')">
        <flag iso="us"></flag>
      </button>
      <button @click="setLocale('ru')">
        <flag iso="ru"></flag>
        </button>
      <nav>
        <router-link to="/">Test</router-link> | 
        <router-link to="json_data">Json Data</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainPage',

  created () {
    this.setLocale(localStorage.getItem('locale'));
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('locale', String(locale));
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
