<template>
  <nav>
    <v-system-bar app color="#FBE7C6" class="d-md-none" height="60">
      <v-list-item-group class="flex justify-center mt-2" color="#FBE7C6">
        <v-list-item class="mb-4">
          <v-list-item-content>
            <v-icon align="center" class="mt-4" medium>
              fa-solid fa-building-columns</v-icon
            >
            <v-list-item-subtitle
              align="center"
              class="caption font-weight-bold"
              >TAMPCO<br />APPS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-system-bar>
    <v-app-bar app class="line" height="90px">
      <v-select
        class="mt-6 mr-2"
        sm="2"
        label="PATRONAGE"
        dense
        solo
      ></v-select>
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
      <v-icon @click.stop="drawer = !drawer">fas fa-bell</v-icon>
    </v-app-bar>

    <v-navigation-drawer
      absolute
      left
      temporary
      class="blue lighten-5"
      v-model="drawer"
      width="500"
    >
      <v-toolbar color="cyan" dark>
        <v-btn icon @click="close">
          <v-icon>fa-solid fa-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Notification</v-toolbar-title>
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
