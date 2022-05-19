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
        <v-col cols="6" sm="3" v-for="type in types" :key="type">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
              <v-row class="mb-2">
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2" elevation="0">
                          <v-icon color="white">{{type.icon}}</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                       {{type.amount}}
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text">{{type.title}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4" class="hidden-md-and-down">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="https://cdn-icons-png.flaticon.com/512/3359/3359235.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
data () {
      return {
        types:[
          {
            title: 'Regular Saving',
            amount:'₱100,000',
            icon: 'fa-solid fa-piggy-bank'
          },
          {
            title: 'Capital Share',
            amount:'₱20,000',
            icon: 'fa-solid fa-handshake'
          },
          {
            title: 'Time Deposit',
            amount:'₱10,000',
            icon: 'fa-solid fa-hourglass-start'
          },
          {
            title: 'ATM',
            amount:'₱50,000',
            icon: 'fa-solid fa-money-bills'
          },
          {
            title: 'Loan',
            amount:'₱1,000,000',
            icon: 'fa-solid fa-arrow-right-to-city'
          },
        ]
      }
    },
  }
</script>