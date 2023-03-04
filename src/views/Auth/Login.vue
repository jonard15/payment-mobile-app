<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <h1 class="text-center display-2 blue-grey--text text--accent-3 mb-8">Payment App</h1>
            <v-card class="elevation-12">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-5">
                        <v-form>
                          <v-text-field
                            v-model="formLogin.email"
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal darken-2 accent-3"
                          />

                          <v-text-field
                            v-model="formLogin.password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal darken-2 accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center ma-3">
                        <v-btn rounded color="teal darken-2 accent-3" dark>LOG IN</v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data() {
      return {
        formLogin: ({
          email: '',
          password: '',
        }),
      }
    },
};
</script>