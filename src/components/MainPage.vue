<template>
  <div class="main-content">
    <div class="nav-content">
      <q-btn
        v-if="currentLocale === 'ru'"
        label="Eng"
        @click="setLocale('en')"
      >
        <flag iso="us" />
      </q-btn>

      <q-btn
        v-if="currentLocale === 'en'"
        label="Rus"
        @click="setLocale('ru')"
      >
        <flag iso="ru" />
      </q-btn>
      <nav>
        <router-link to="/">{{ $t('pageTest') }}</router-link> | 
        <router-link to="json_data">{{ $t('pageData') }}</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainPage',

  computed: mapState([
    'currentLocale',
  ]),

  created () {
    this.setLocale(localStorage.getItem('locale'));
  },

  methods: {
    ...mapActions([
      'setLocale',
    ]),

  },
}
</script>

<style lang="scss">
.nav-content {
  max-width: 960px;
  margin: 20px auto;
  text-align: center;
  height: 70px;

  button {
    margin-bottom: 10px;
    
    .flag-icon {
      margin-left: 5px;
    }
  }
  

}
</style>
