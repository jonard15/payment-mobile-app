<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>Activity</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>

    <v-simple-table fixed-header height="600px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Transaction & Date</th>
            <th class="text-left">Amout</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.transaction">
            <td>{{ item.transaction }}</td>
            <td>{{ item.amount }}</td>
          </tr>
        </tbody>
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque.
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      desserts: [
        {
          transaction: 'ATM WITHRAWAL (May 10, 2022)',
          amount:'₱5,000',
        },
        {
          transaction: 'CAH DEPOSIT (May 18, 2022)',
          amount:'₱10,000',
        },
      ],
    }
  },
}
</script>
