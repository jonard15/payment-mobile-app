<template>
    <v-app id="main">


        <!-- <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header> -->
        <app-header></app-header>
        <navbar></navbar>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

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
        'app-footer': Footer
    },
  data() {
    var userData = JSON.parse(localStorage.getItem("authUserData"))
    return {
      token: userData ? userData.token : null,
    };
  },
  created() {
    window.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
  },
}
</script>
