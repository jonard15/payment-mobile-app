<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>My Transaction</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider class="mb-5"></v-divider>

  <v-card elevation="10" class="mx-auto" max-width="1200">
      <v-card-title class="justify-center">
        <v-icon class="mr-5">fa fa-history</v-icon> Transaction History
      </v-card-title>
      <v-divider></v-divider>
    <v-simple-table>
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
  </v-card>

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
