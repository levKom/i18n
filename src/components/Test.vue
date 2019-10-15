<template>
  <div class="main">
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
  name: 'Test'
}
</script>

<style lang="scss">
.main {

  p {
    text-align: center;
  }
}
</style>