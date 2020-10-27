<template>
  <div>
  <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-title-title>
            Menu
          </v-list-title-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <template v-for="(item, index) in items">
        <v-list-tile :key="index" :href="item.href">
          <v-list-title-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-title-action>
          <v-list-title-action>
            <v-list-title-title v-html="item.title"></v-list-title-title>
          </v-list-title-action>
        </v-list-tile>
      </template>  
    </v-list>   



    </v-navigation-drawer>
      
      <v-toolbar dark>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title><a href="/">ShoppingCart</a></v-toolbar-title>
          <v-spacer></v-spacer>  
      <v-toolbar-item>
        <v-btn flat>
          Products
        </v-btn>
        <v-btn flat>
          <v-badge left color="green">
            <span slot="badge">5</span>
            <v-icon class="fas fa-shopping-cart"></v-icon> Basket
          </v-badge>
        </v-btn>
      </v-toolbar-item>
    </v-toolbar>
    </div>
</template>

<script>
export default {
 data: () => ({

 })
}
</script>

<style>

</style>