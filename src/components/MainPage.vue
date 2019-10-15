<template>
<div>
  <p>{{ $t('hello') }}</p>
  <q-btn color="white" text-color="black" label="Standard" />
  <button>LOA</button>
</div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
