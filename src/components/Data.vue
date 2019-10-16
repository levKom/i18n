<template>
  <div class="main">
    <q-markup-table class="main__table">
      <thead>
        <tr>
          <th v-for="(ticket, index) in Object.keys(tickets[0])" :key="index">
            {{ticket}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataRow, index) in fiftyTickets" :key="index">
          <td v-for="(dataCell, cellIndex) in dataRow" :key="cellIndex">
            {{ dataCell }}
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import jsonData from '../assets/data.json';

export default {
  name: 'Data',

  computed: {
    tickets() {
      const { SyncTickets: array } = jsonData;

      return array;
    },

    fiftyTickets() {
      const arr50 = [];
      this.tickets.forEach((item, index) => {
        if (index < 50) {
          arr50.push(item);
        }
      });

      return arr50;
    },

    ticketKeys() {
      const keys = Object.keys(this.tickets[0]);
      console.log(this.ticketKeys);
      return keys;
    },
  },

  methods: {
    run() {
      console.log(this.fiftyTickets);
    },

    changes(id) {
      console.log(id);
    },
  },
};

</script>

<style lang="scss">
@import '@styles/quasar.variables';

.main {
  padding: 0;

  &__table {
    // height: calc(100vh - #{$headerHeigth});
    height: calc(100vh - 88px);
    background: red;
  }
}
</style>
