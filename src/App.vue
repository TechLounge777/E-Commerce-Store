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
    //
  }),
};
</script>
