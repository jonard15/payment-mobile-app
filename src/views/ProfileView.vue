<template>
<div>
    <v-toolbar class="mt-5" flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>Profile</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="pa-2">
        <v-card align="center" class="pa-3">
            <v-avatar size="80">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
            <v-row dense>
              <v-col cols="12" sm="4">
                <v-card color="cyan" dark width="600" class="mt-5">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                              Name
                            </v-list-item-title>
                            <v-list-item-subtitle class="white--text">
                              John Smith
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>             
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card color="cyan" dark width="600" class="mt-5">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                              Username
                            </v-list-item-title>
                            <v-list-item-subtitle class="white--text">
                              johnsmith12
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>            
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card color="cyan" dark width="600" class="mt-5">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                              Birth Date
                            </v-list-item-title>
                            <v-list-item-subtitle class="white--text">
                              11/20/1997
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>            
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card color="cyan" dark width="600" class="mt-5">
                  <v-list-item two-line>
                      <v-list-item-content>
                          <v-list-item-title class="white--text">
                            Nationality
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">
                            Filipino
                          </v-list-item-subtitle>
                      </v-list-item-content>
                  </v-list-item>            
                </v-card>
              </v-col>
                <v-col cols="12" sm="4">
                  <v-card color="cyan" dark width="600" class="mt-5">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                              Email Address
                            </v-list-item-title>
                            <v-list-item-subtitle class="white--text">
                              johnsmith@email.com
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>            
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card color="cyan" dark width="600" class="mt-5">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                              Current Address
                            </v-list-item-title>
                            <v-list-item-subtitle class="white--text">
                              Magsaysay,Tabuk City
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>           
                </v-card>
              </v-col>
            </v-row>
        </v-card>
    </div>
</div>

</template>
<script>
  export default {
    data: () => ({
      profile: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }),
  }
</script>