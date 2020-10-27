<template>
  <v-app>
    <NavigationTop /> 
    <SearchFront />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import SearchFront from './components/shared/search-front';
import Footer from './components/shared/footer';
import NavigationTop from './components/shared/navigation-top';


export default {
  name: 'App',

  components: {
    NavigationTop,
    SearchFront, 
    Footer
  },

  data: () => ({
    drawer: false,
    items: [{
      icon: 'mdi-account',
      href: '#',
      title: 'Account'
    }]
  }),
};
</script>
