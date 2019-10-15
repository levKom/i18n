<template>
  <div>
    <!-- <p>{{ $t('hello') }}</p> -->
    <a href="#" @click="setLocale('en')">
      <flag iso="us"></flag>
    </a>
    <a href="#" @click="setLocale('ru')">
      <flag iso="ru"></flag>
    </a>
    <br />
    <br />
    <p>{{ $t('message') }}</p>
    <p>
      <i18n path="compText">
        <br place="break" />
        <a href="#" target="_blank" rel="noopener" place="action">{{ $t('compTextUrlName') }}</a>
      </i18n>
    </p>
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
</style>
