<template>
  <div>
    <v-app-bar
        color="#7e57c2"
        dense
        height="65px"
        app
    >
      <v-app-bar-nav-icon @click="drawer=!drawer" class="white--text d-sm-none"></v-app-bar-nav-icon>
      <v-spacer class="d-sm-none d-md-none"></v-spacer>
      <v-toolbar-title class="white--text text-h4 d-sm-inline float-md-none">Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="white--text font-weight-bold d-none d-sm-flex pa-5 mx-3" text v-for="link in links" :key="link.name" :to="link.to">
        {{link.name}}
      </v-btn>
      <v-btn class="white--text font-weight-bold d-none d-sm-flex pa-5 mx-3" text>
        <a href="../assets/CV/cv.pdf" download  class="white--text text-decoration-none">
          Download CV
        </a>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        class="d-sm-flex d-sm-none d-md-none d-lg-none"
        v-model="drawer"
        fixed
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.name">
            <v-list-item-title>
              <v-list-item-title>
                <router-link class="text-decoration-none" :to="link.to">{{link.name}}</router-link>
              </v-list-item-title>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>
<script>
//import navigationDrawer from "@/components/NavigationDrawer";
export default {
  name:'navbar-component',
  components:{
    //navigationDrawer
  },
  data(){
    return {
      links: [
        {name: "Portfolio", to: "/"},
        {name: "Blog", to: "/blog"},

      ],
      drawer:false,
    };
  },
}
</script>
<style scoped>

</style>
