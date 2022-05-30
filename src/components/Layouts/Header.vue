<template>
  <nav>
    <v-app-bar app color="#B6DCEA" class="line" height="90px">
           <v-img
           align="center"
        class="d-md-none"
        src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.6435-9/156017517_108489284637020_3888468376845700199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zL3L0RB_ijcAX-GYyIx&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT9GHcWNlmnslcfVqctcVB4tsCh0wlTpJyRgC6fF0o5acQ&oe=62B43527"
        max-height="90"
        max-width="90"
        contain
      ></v-img>
      <h2 class="d-md-none text-center ml-5 green--text font-weight-black">Welcome <br>Tampco Members!</h2>
      <v-spacer></v-spacer>
      <v-text-field
        color="white"
        filled
        dense
        rounded
        label="Search"
        prepend-inner-icon="fas fa-search"
        class="mt-6 mr-2 hidden-md-and-down"
        sm="2"
      ></v-text-field>
      <!-- <v-icon @click.stop="drawer = !drawer" color="green">fas fa-bell</v-icon> -->
      <v-btn @click.stop="drawer = !drawer" text>
        <v-badge content="2" color="error">
          <v-icon small color="green">fas fa-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      absolute
      left
      temporary
      class="blue lighten-5"
      v-model="drawer"
      width="500"
    >
      <v-toolbar color="#B6DCEA" dark>
        <v-btn icon @click="close">
          <v-icon color="black">fa-solid fa-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title class="black--text">Notification</v-toolbar-title>
      </v-toolbar>

      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
      data: () => ({
        drawer: false,
        items: [
        { header: 'Today' },
        {
          icon: 'fa-solid fa-envelope-open',
          title: 'Welcome Customer',
          subtitle: `April 15 2021`,
        },
        { divider: true, inset: true },
        {
          icon: 'fa-solid fa-envelope',
          title: 'Loan Due Date',
          subtitle: `April 20 2021`,
        },
        { divider: true, inset: true },
        {
          icon: 'fa-solid fa-envelope',
          title: 'New Loan Promo',
          subtitle: `May 10 2021`,
        },
      ],
  }),

    methods: {
        close () {
            this.drawer =false;
        }
    }
}
</script>
