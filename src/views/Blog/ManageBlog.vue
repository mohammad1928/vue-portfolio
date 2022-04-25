<template>
  <v-app class="">
    <v-btn text @click="toggleSideBar" class="toggleSidebar">
      <v-icon :color="iconColor">{{ toggleIcon }}</v-icon>
    </v-btn>
    <v-row>
      <transition>
        <v-col v-if="sideBar" cols="8" sm="3" class="pa-6 pa-sm-3 pt-10 text-center pa-" style="background: #7E57C2" >
          <v-img  src="../../assets/user-picture.jpg" class="ma-auto mt-10" style="border-radius: 10%" max-width="200" max-height="200" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"></v-img>
          <p class="text-center text-sm-h6 white--text mt-7">Mohammad Al-Mahmoud</p>
          <v-list-item-group v-model="model">
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="white--text ma-10"
                @click="setPage(i+1)"
            >
              <v-list-item-icon>
                <v-icon class="white--text" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-col>
      </transition>
      <v-col>
          <posts-component v-if="page==1"></posts-component>
          <email-component v-else-if="page==2"></email-component>
          <cv-component v-else-if="page==3"></cv-component>
          <reports-component v-else></reports-component>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import PostsComponent from "@/views/Blog/Posts";
import EmailComponent from "@/views/Blog/Email";
import CvComponent from "@/views/Blog/CV";
import ReportsComponent from "@/views/Blog/Reports";
export  default {
  components:{
    ReportsComponent,
    CvComponent,
    EmailComponent,
    PostsComponent,
  },
  name:'blog-component',
  data: () => ({
    items: [
      {
        icon: 'mdi-book',
        text: 'Posts',
      },
      {
        icon: 'mdi-email',
        text: 'Email',
      },
      {
        icon: 'mdi-file-pdf-box',
        text: 'CV',
      },
      {
        icon: 'mdi-message-alert',
        text: 'Reports',
      },
    ],
    sideBar:false,
    iconColor:'black',
    toggleIcon:'mdi-menu',
    page:1,
    model: 1,
  }),
  methods:{
    toggleSideBar(){
      this.sideBar=! this.sideBar;
      if(this.iconColor=='black') this.iconColor='white'
      else {
        this.iconColor = 'black';
      }
      if(this.toggleIcon=='mdi-menu') this.toggleIcon='mdi-close';
      else this.toggleIcon='mdi-menu';
    },
    setPage(pageNumber){
      this.page=pageNumber;
      this.sideBar=false;
      this.iconColor='black'
      this.toggleIcon='mdi-menu'
    },
  }
}
</script>
<style scoped>
  .toggleSidebar{
    position: fixed;
    z-index: 10000;
    width: 20px;
  }
</style>