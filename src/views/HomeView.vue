<template>
  <div class="home">
    <v-toolbar flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>My Account</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-container class="mt-5">
      <v-row>
        <v-col cols="6" sm="3" v-for="type in types" :key="type.title">
          <v-hover>
            <template v-slot:default="{ hover }">
            <v-card
              color="#B4F8C8"
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

        <v-fade-transition>
          <v-overlay
            v-if="hover && type.title === 'Borrower Slip No.'"
            @click="openDialog(type)"
            absolute
            color="#036358"
          >
            <!-- <v-btn @click="openDialog(type)" small>See more Details</v-btn> -->
          </v-overlay>
        </v-fade-transition>
            </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <loan-info :dialog="dialog" :close="close"></loan-info>
  </div>
</template>

<script>
import LoanInfo from '../components/Loans/Dialogs/LoanInfo.vue'
export default {
name: 'HomeView',
components: {
    'loan-info': LoanInfo,
},
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
            title: 'Patronage',
            amount:'',
            icon: 'fas fa-hand-holding-usd'
          },
          {
            title: 'Borrower Slip No.',
            amount:'L300603MF260422TD003',
            icon: 'fa-solid fa-arrow-right-to-city'
          },
        ],
        dialog:false,
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
