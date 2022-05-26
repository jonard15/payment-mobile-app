<template>
    <v-app id="main">
    <v-main v-if="isLogin">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card shaped color="#B6DCEA" class="elevation-12">
                  <v-img class="ml-3" contain height="200px" position="center" src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.6435-9/156017517_108489284637020_3888468376845700199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zL3L0RB_ijcAX-GYyIx&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT9GHcWNlmnslcfVqctcVB4tsCh0wlTpJyRgC6fF0o5acQ&oe=62B43527"></v-img>
                  <v-row justify="center">
                    <v-col cols="9" md="9">
                      <v-card-text>
                        <v-form>
                          <v-text-field
                            value="johnsmith12@email.com"
                            label="UserName"
                            name="UserName"
                            prepend-icon="mdi-email"
                            type="text"
                            color="green"
                          />

                          <v-text-field
                            value="Password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="green"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center ma-5">
                       <v-btn block color="green" @click.prevent="login" dark> <v-icon left>mdi-lock</v-icon>LOG IN</v-btn>
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
