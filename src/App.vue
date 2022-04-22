<template>
  <v-app>
    <v-main>
      <navbar-component></navbar-component>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/Navbar";
export default {
  name: 'App',
components:{
  NavbarComponent,
},
  data: () => ({
    //
  }),
};
</script>
