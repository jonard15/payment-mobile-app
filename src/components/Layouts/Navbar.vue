<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-down"
      v-model="isMobile"
      app
      mini-variant
      mini-variant-width="128"
      color="#B6DCEA"
    >
      <v-list>
        <v-list-item-group color="#10A41A">
          <v-list-item class="mb-4">
            <v-list-item-content>
              <v-img
                class="mx-2"
                src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.6435-9/156017517_108489284637020_3888468376845700199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zL3L0RB_ijcAX-GYyIx&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT9GHcWNlmnslcfVqctcVB4tsCh0wlTpJyRgC6fF0o5acQ&oe=62B43527"
                max-height="100"
                max-width="100"
                contain
              ></v-img>
              <v-list-item-subtitle align="center" class="caption"
                >Welcome<br />Payment <br /> Apps!</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group v-for="(item, i) in items" :key="i" color="#10A41A">
          <v-list-item link exact :to="item.path" v-if="item.title != 'QR'">
            <v-list-item-content align="center">
              <v-icon v-text="item.icon" class="mb-3" align="center"></v-icon>
              <v-list-item-subtitle
                v-text="item.title"
                align="center"
                class="caption"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation
      class="d-md-none"
      app
      :value="selectedItem"
      color="#10A41A"
    >
      <v-btn v-for="(item, i) in items" :key="i" :to="item.path">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      selectedItem: 0,
        items: [
          { title: 'Home', icon: 'mdi-home', path:'home' },
          { title: 'QR', icon: 'mdi-qrcode', path:'qr' },
          { title: 'Profile', icon: ' mdi-clipboard-account', path:'profile' },
          // { title: 'Patronage', icon: 'fas fa-hand-holding-usd', path:'patronage' },
          { title: 'Transaction', icon: 'mdi-view-list', path:'transaction' },
        ],
      value: 2
    }
  },
  computed:{
    isMobile:{
      get()
      {
        if(window.innerWidth < 600)
        {
          this.drawer = false;
        }
        // else if(window.innerWidth < 960){
        //   this.drawer = true;
        // }
      },
      set()
      {
       this.drawer = true;
      }

    }
  },
}
</script>
