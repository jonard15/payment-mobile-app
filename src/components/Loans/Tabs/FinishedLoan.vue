<template>
<v-container class="ma-5">
  <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Borrower Slip:L200606MF260422TD003</v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Month
                    </th>
                    <th class="text-left">
                        Pay Date
                    </th>
                    <th class="text-left">
                        Amount Due
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in finishedLoans"
                    :key="item.name"
                    >
                    <td><v-icon class="mr-2" color="success" x-small>fa fa-check</v-icon>{{ item.month_num }}</td>
                    <td>{{ item.pay_date }}</td>
                    <td>{{ item.amount_due }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        finishedLoans: [
        {
            month_num: '1',
            pay_date: 'June',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '2',
            pay_date: 'July',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '3',
            pay_date: 'August',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '4',
            pay_date: 'September',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '5',
            pay_date: 'October',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '6',
            pay_date: 'December',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '7',
            pay_date: 'January',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '8',
            pay_date: 'February',
            amount_due: '₱3,347.24'
        },
        {
            month_num: '9',
            pay_date: 'March',
            amount_due: '₱3,347.24'
        },
        ],
      }
    },
  }
</script>