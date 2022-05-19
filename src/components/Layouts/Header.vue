<template>
  <nav>
       <v-system-bar dark app  color="cyan"  class="d-md-none" height="60">
        <v-list-item-group class="flex justify-center mt-2" color="cyan">
            <v-list-item class="mb-4">
              <v-list-item-content>
                <v-icon align="center" class="mt-4" medium> fa-solid fa-building-columns</v-icon>
                <v-list-item-subtitle align="center" class="caption font-weight-bold">TAMPCO<br>APPS</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
       </v-system-bar>
    <v-app-bar color="#23262D" dark app class="line" height="90px">
        <v-select
          class="mt-6 mr-2" 
          sm="2"
          label="PATRONAGE"
          dense
          solo
        ></v-select>
      <v-spacer></v-spacer>
      <v-text-field filled dense rounded label="Search" prepend-inner-icon="fas fa-search" class="mt-6 mr-2 hidden-md-and-down" sm="2"></v-text-field>
      <v-icon @click.stop="drawer = !drawer">fa-solid fa-envelope</v-icon>
    </v-app-bar>

    <v-navigation-drawer
            absolute
            left
            temporary
            class="blue lighten-5"
            v-model="drawer"
            width="500"
    >
    <v-toolbar
      color="cyan"
      dark
    >
      <v-btn icon @click="close">
        <v-icon>fa-solid fa-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Inbox</v-toolbar-title>
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

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
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
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
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
