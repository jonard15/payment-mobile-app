<template>
  <div class="home">
    <v-toolbar class="mt-5" flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>My Account</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-container class="mt-5">
      <v-row>
        <v-col cols="6" sm="3" v-for="type in types" :key="type.title">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              color="#B4F8C8"
              :elevation="hover ? 16 : 2"
              @click="openDialog(type)"
            >
              <v-row class="mb-2">
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="#FBE7C6" elevation="0">
                          <v-icon color="#10A41A">{{type.icon}}</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="h1 mb-1 black--text">
                        {{type.amount}}
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="red--text"
                        >{{type.title}}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4" class="hidden-md-and-down">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img
                      src="https://cdn-icons-png.flaticon.com/512/3359/3359235.png"
                    ></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
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
          <v-tab
            v-for="(item,index) in items"
            :key="index+'_title'"
            class="pa-5"
          >
            <v-icon class="mr-5">{{item.icon}}</v-icon> {{ item.title }}
          </v-tab>
        </v-tabs>

        <v-card-text>
          <v-tabs-items v-model="tab">
            <v-tab-item>
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
                              >June 24, 2022</v-list-item-subtitle
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
                      <v-btn small fab color="blue-grey" elevation="0">
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
              <h1 class="text-center">
                <v-icon>fa fa-calendar</v-icon> Payment Schedule
              </h1>
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
                      <td>{{ loan.month_num }}</td>
                      <td>{{ loan.pay_date }}</td>
                      <td>{{ loan.amount_due }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
data () {
      return {
        types:[
          {
            title: 'Account Balance',
            amount:'₱180,000',
            icon: 'fas fa-balance-scale'
          },
          {
            title: 'Regular Saving Balance',
            amount:'₱100,000',
            icon: 'fa-solid fa-piggy-bank'
          },
          {
            title: 'Capital Share Balance',
            amount:'₱20,000',
            icon: 'fa-solid fa-handshake'
          },
          {
            title: 'Time Deposit Balance',
            amount:'₱10,000',
            icon: 'fa-solid fa-hourglass-start'
          },
          {
            title: 'ATM Balance',
            amount:'₱50,000',
            icon: 'fa-solid fa-money-bills'
          },
          {
            title: 'Borrower Slip No.',
            amount:'L300603MF260422TD003',
            icon: 'fa-solid fa-arrow-right-to-city'
          },
        ],
        dialog:false,
        loans: [
          {
            month_num: '1',
            pay_date: 'June',
            amount_due: '₱1,671.53'
          },
          {
            month_num: '2',
            pay_date: 'July',
            amount_due: '₱1,671.53'
          },
          {
            month_num: '3',
            pay_date: 'August',
            amount_due: '₱1,671.53'
          },
          {
            month_num: '4',
            pay_date: 'September',
            amount_due: '₱1,671.53'
          },
          {
            month_num: '5',
            pay_date: 'October',
            amount_due: '₱1,671.53'
          },
          {
            month_num: '6',
            pay_date: 'December',
            amount_due: '₱1,671.53'
          },
        ],
        tab: null,
				items:
        [
          {
					title: 'Active Loans',
					icon: 'fas fa-money-bill'
				  },
          {
            title: 'Finished Loan',
            icon: 'fa-check'
          }
        ],
      }
    },

    methods: {
      openDialog(item) {
        console.log(item);
        if(item.title === 'Borrower Slip No.'){
          this.dialog = true
        }
      },
      close(){
        this.dialog = false
      }
    }
  }
</script>
