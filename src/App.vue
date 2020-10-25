<template>
  <v-app>
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
          <v-toolbar-title>ShoppingCart</v-toolbar-title>
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

    <v-parallax height="300" dark src="http://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-container fluid grid-list-xl>
        <v-layout justify-center row wrap>
            <v-flex x12 style="text-align: center;">
              <h1 class="display-3" font-weight-thin mb-3>Product search</h1>
              <h4 class="subheading">Find what you are missing</h4>
            </v-flex>

            <v-flex xs12>
              <v-layout align-center justify-center row wrap>
                <v-flex xs6>
                  <v-form>
                    <v-text-field outline label="Search for products" append-icon="fas fa-search"></v-text-field>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>



    <v-main>
      <HelloWorld/>
    </v-main>

    <v-footer dark padless height="auto">
      <v-card flat tile class="indigo lighten-1 white--text text-xs-center flex">
        <v-card-text class="text-center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px"> {{icon}} </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text text-center">footer text here.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text text-center">
          &copy;2020 - <strong>ShoppingCart</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: false,
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    items: [{
      icon: 'mdi-account',
      href: '#',
      title: 'Account'
    }]
  }),
};
</script>
