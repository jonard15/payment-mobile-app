<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>My Profile</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider class="mb-5"></v-divider>
  <v-container>
    <v-card elevation="10" class="mx-auto" max-width="1200" tile>
      <v-row class="justify-center">
        <v-col cols="12" md="3" class="order-sm-1 order-md-1">
          <div max-width="100%" class="mx-auto d-block">
            <v-img src="https://www.w3schools.com/howto/img_avatar.png"></v-img>
          </div>
          <v-list>
            <v-list-item>
              <v-list-item-content class="pt-0 pb-1 text-center">
                <v-list-item-title style="overflow: visible; white-space: inherit;"><h3>John Smith</h3></v-list-item-title>
                <v-list-item-subtitle>johnsmith12@email.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
            </v-row>
      <v-row class="pa-5" dense>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Account No.
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    TD2204008
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Account Type
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    Individual Account
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Status
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    Active
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Date Membership
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    November 20, 2017
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Branch Registered
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    TB BULANAO (CITY OF TABUK (Capital))
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Birth Date
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    11/20/1997
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Email Address
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    johnsmith@email.com
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#B4F8C8" dark width="600" class="mt-5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="black--text">
                    Address
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    Magsaysay,Tabuk City
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
  </v-container>

  </div>
</template>
<script>
export default {
  data: () => ({
  }),
}
</script>
