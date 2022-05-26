<template>
    <v-app id="main">
    <v-main v-if="isLogin">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <h1 class="text-center display-2 blue-grey--text text--accent-3 mb-8">Tampco App</h1>
            <v-card class="elevation-12">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-5">
                        <v-form>
                          <v-text-field
                            value="johnsmith12@email.com"
                            label="UserName"
                            name="UserName"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal darken-2 accent-3"
                          />

                          <v-text-field
                            value="Password"
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
                       <v-btn rounded color="blue-grey accent-3" @click.prevent="login" dark>LOG IN</v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
        <div v-if="notLogin">
        <!-- <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header> -->
        <app-header></app-header>
        <navbar></navbar>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
        </div>

        <!-- <app-footer></app-footer> -->
    </v-app>

</template>

<script>
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

export default {
    name: 'App',
    components: {
        'navbar': Navbar,
        'app-header': Header,
        'app-footer': Footer,
    },
  data() {
    return {
      notLogin:false,
      isLogin:true
    };
  },
    methods: {
      login() {
        this.notLogin =true;
        this.isLogin =false;
        this.$router.push("/home").catch(()=>{});
      },
    },
}
</script>
