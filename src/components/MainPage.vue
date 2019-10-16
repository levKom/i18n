<template>
  <div class="main-content">
    <div class="nav-content">
      <q-btn
        v-if="currentLocale === 'ru'"
        label="Eng"
        @click="updateLocale('en')"
      >
        <flag iso="us" />
      </q-btn>

      <q-btn
        v-if="currentLocale === 'en'"
        label="Rus"
        @click="updateLocale('ru')"
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
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MainPage',

  computed: mapState([
    'currentLocale',
  ]),

  created () {
    if (localStorage.getItem('locale') !== null) {
      this.updateLocale(localStorage.getItem('locale'));
    } else {
      this.updateLocale(this.$i18n.fallbackLocale);
    }
  },

  methods: {
    ...mapMutations([
      'updateLocale',
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
