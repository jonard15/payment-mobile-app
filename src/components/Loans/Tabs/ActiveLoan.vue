<template>
  <div>
    <v-card class="mt-5 mb-5">
      <v-list-item-group class="flex justify-center" color="#FBE7C6">
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col cols="12" md="4">
                <v-card outlined class="mx-auto mt-2" color="#FBE7C6">
                  <v-list-item-title
                    align="center"
                    class="h5 font-weight-bold mt-5"
                    >Borrower Slip No.</v-list-item-title
                  >
                  <v-list-item-subtitle
                    align="center"
                    class="h5 font-weight-bold mb-5"
                    >L300603MF260422TD003</v-list-item-subtitle
                  >
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card outlined class="mx-auto mt-2" color="#FBE7C6">
                  <v-list-item-title
                    align="center"
                    class="h5 font-weight-bold mt-5"
                    >Next Payment Due</v-list-item-title
                  >
                  <v-list-item-subtitle
                    align="center"
                    class="h5 font-weight-bold mb-5"
                    >₱1,671.53</v-list-item-subtitle
                  >
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card outlined class="mx-auto mt-2" color="#FBE7C6">
                  <v-list-item-title
                    align="center"
                    class="h5 font-weight-bold mt-5"
                    >Due Date</v-list-item-title
                  >
                  <v-list-item-subtitle
                    align="center"
                    class="h5 font-weight-bold mb-5"
                    >September 24, 2022</v-list-item-subtitle
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-list-item two-line class="text-center">
        <v-list-item-content>
          <div class="mb-2">
            <v-btn
              small
              fab
              color="blue-grey"
              elevation="0"
              @click="viewLoanInfo"
            >
              <v-icon color="white">mdi-eye</v-icon>
            </v-btn>
          </div>
          <v-list-item-title class="h1 mb-1 black--text">
            LOAN INFO
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- <div class="text-center">
                    <v-btn color="blue-grey" class="ma-2 white--text">
                        loan Info
                        <v-icon right dark> mdi-eye </v-icon>
                    </v-btn>
                    </div> -->
    </v-card>
    <paymentsched></paymentsched>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Loan Information
        </v-card-title>

        <v-card-text>
          <v-list class="text-center" two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>APPROVED</v-list-item-title>
                <v-list-item-subtitle>Loan Status</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>L300603MF260422TD003</v-list-item-title>
                <v-list-item-subtitle>Borrower Slip No.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>June 22, 2022</v-list-item-title>
                <v-list-item-subtitle>Starting From</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>December 22, 2022</v-list-item-title>
                <v-list-item-subtitle>Up Until</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>₱1,671.53</v-list-item-title>
                <v-list-item-subtitle
                  >Total Monthly Deduction</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import PaymentSchedule from '../Tables/PaymentSchedule.vue'
export default {
name: 'ActiveLoan',
components: {
    'paymentsched': PaymentSchedule,
},
data(){
    return{
        dialog:false

    }
},
methods:{
    viewLoanInfo () {
        this.dialog = true;
    }
}
}
</script>
