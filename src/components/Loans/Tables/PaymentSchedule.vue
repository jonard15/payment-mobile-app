<template>
  <div>
    <v-card class="mt-5 mb-5">
        <v-card-title class="justify-center">
            <v-icon class="mr-5">fa fa-calendar</v-icon> Payment Schedule
      </v-card-title>
      <v-divider></v-divider>
        <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">Month</th>
                <th class="text-left">Pay Date</th>
                <th class="text-left">Amount Due</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="loan in loans" :key="loan.month_num">
                <td ><v-icon v-show="loan.paid === true" class="mr-2" color="success" x-small>fa fa-check</v-icon>{{ loan.month_num }}</td>
                <td>{{ loan.pay_date }}</td>
                <td>{{ loan.amount_due }}</td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
    </v-card>
  </div>
</template>
<script>
export default {
data() {
    return {
        loans: [
        {
            month_num: '1',
            pay_date: 'June 24, 2022',
            amount_due: '₱1,671.53',
            paid: true
        },
        {
            month_num: '2',
            pay_date: 'July 24, 2022',
            amount_due: '₱1,671.53',
            paid: true
        },
        {
            month_num: '3',
            pay_date: 'August 24, 2022',
            amount_due: '₱1,671.53',
            paid: true
        },
        {
            month_num: '4',
            pay_date: 'September 24, 2022',
            amount_due: '₱1,671.53',
            paid: false
        },
        {
            month_num: '5',
            pay_date: 'October 24, 2022',
            amount_due: '₱1,671.53',
            paid: false
        },
        {
            month_num: '6',
            pay_date: 'December 24, 2022',
            amount_due: '₱1,671.53',
            paid: false
        },
        ],
        }
    }
}
</script>
