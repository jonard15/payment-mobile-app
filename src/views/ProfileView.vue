<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>My Profile</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
  <v-container>
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img max-height="450" max-width="1000" src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.6435-9/156017517_108489284637020_3888468376845700199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RnZfTWyRF3gAX_wshXI&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT90pBzqHsWtOpVQCC7lmC-GgYIXmMWRNs28K1uUjXIX2A&oe=62B43527"></v-img>
      <v-row style="margin:2.5%;position:absolute; top: 360px">
        <v-list-item>
        <v-list-item-avatar size="100">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="John"
            >
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title" style="margin-left:-2px;margin-top:70px;">John Smith</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-row>
      <v-row class="pa-14" dense>
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
                    Name
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    John Smith
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
                    Username
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">
                    johnsmith12
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
