<template>
  <v-app>
      <v-toolbar dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>ShoppingCart</v-toolbar-title>
    
      <v-spacer></v-spacer>

      <v-toolbar-item>
        <v-btn flat>
          Products
        </v-btn>
        <v-btn flat>
          Basket
        </v-btn>
      </v-toolbar-item>
    </v-toolbar>



    <v-content>
      <HelloWorld/>
    </v-content>

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
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  }),
};
</script>
