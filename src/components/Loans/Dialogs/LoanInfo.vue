<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-top-transition"
  >
    <v-card>
      <v-toolbar color="#B4F8C8">
        <v-btn icon @click="close">
          <v-icon>fa-solid fa-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Loan Details</v-toolbar-title>
      </v-toolbar>

      <v-tabs centered v-model="tab">
        <v-tab v-for="(item,index) in items" :key="index+'_title'" class="pa-5">
          <v-icon class="mr-5">{{item.icon}}</v-icon> {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-divider></v-divider>

      <v-card-text>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <active-loan></active-loan>
          </v-tab-item>
          <v-tab-item>
            <finished-loan></finished-loan>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ActiveLoan from '../Tabs/ActiveLoan.vue'
import FinishedLoan from '../Tabs/FinishedLoan.vue'
export default {
props:['dialog','close'],
name: 'LoanInfo',
components: {
    'active-loan': ActiveLoan,
    'finished-loan' : FinishedLoan,
},

data () {
    return{
        tab: null,
        items:[
            {
                title: 'Active Loan',
                icon: 'fas fa-money-bill'
            },
            {
                title: 'Finished Loan',
                icon: 'fa-check'
            }
        ],
    }
}
}
</script>
