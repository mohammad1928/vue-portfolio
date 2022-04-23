<template>
      <v-app>
        <v-row class="mb-4 font">
          <v-col cols="12" md="4" class="deep-purple lighten-1 pa-7">
                <p class="text-h5 text-lg-h4  white--text text-center mt-6 mt-sm-10">Portfolio</p>
                <v-row class="mt-sm-16">
                  <v-col class="text-center mt-sm-16">
                        <v-img
                            src="../assets/user-picture.jpg"
                            class="rounded-circle img ma-auto"
                            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                            max-height="300"
                            max-width="300"
                        ></v-img>
                    <p class="text-h5 text-sm-5 text-md-h5 text-lg-h4 mt-7 white--text">Mohammad Al-Mahmoud</p>
                  </v-col>
                 </v-row>
              </v-col>
          <v-col cols="12" md="8">
            <div>
              <v-row>
                <v-col  cols="12" class="text-center" >
                  <div style="margin:auto;margin-top:300px;margin-bottom: 200px;">
                    <p class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 text-center" style="font-family: 'Times New Roman'!important;">MY <span style="color:#7E57C2">WORK</span></p>
                    <p class="text-center text-lg-h6">Web & Visual Designer</p>
                    <div class="text-center mt-10">
                      <p class="text-uppercase" style="cursor: pointer">
                        <v-icon class="material-icons-outlined text-h3 text-sm-h2">
                          mdi-arrow-right-drop-circle
                        </v-icon>
                        my intro
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="1" class="text-uppercase d-none d-sm-flex rotated-text" style="color:#7E57C2 ">
                  follow me
                </v-col>
              </v-row>
            </div>
          </v-col>
          <hr style="width: 100%;background: #7E57C2 ;height: 15px">
        </v-row>
        <v-container class="font ">
          <v-row>
            <v-col cols="12" md="6" lg="4" v-for="service in services" :key="service.title">
              <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>
                <v-img height="250" :src="service.image" aspect-ratio="1"></v-img>
                <v-card-title class="justify-center">{{ service.title }}</v-card-title>
                <v-card-text class="text-center">
                  <div class="pa-8">{{service.description}}</div>
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn color="#7E57C2" class="white--text" @click="reserve">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="pa-4 font">
            <div class="text-center mb-4" style="width: 100%;">
              <p class="text-h3">My Portfolio</p>
              <p class="text-h6 text--secondary">Web & App</p>
            </div>
            <v-container class="">
              <v-row >
                <v-col v-for="project in myProjects" :key="project">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card
                          class="mx-auto"
                          max-width="344"
                      >
                        <v-img :src="project.image" height="300px"></v-img>

                        <!--                      <v-card-text>-->
                        <!--                        <h2 class="text-h6 primary&#45;&#45;text">-->
                        <!--                          {{project.title}}-->
                        <!--                        </h2>-->
                        <!--                        {{project.description}}-->
                        <!--                      </v-card-text>-->
                        <v-fade-transition>
                          <v-overlay
                              v-if="hover"
                              absolute
                              color="#036358"
                          >
                            <v-btn>See more info</v-btn>
                          </v-overlay>
                        </v-fade-transition>
                      </v-card>
                    </template>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
            <v-container class="mt-2">
              <p class="text-h5 text-sm-3 text-md-h3 text-lg-h3  text-center">Valuable Testimonial</p>
              <p class="text-caption text-h6 text--secondary text-center">See People Say About Me</p>
              <v-carousel show-arrows-on-hover hide-delimiter-background>
                <v-carousel-item v-for="i in aboutMe" :key="i">
                  <div class="d-flex justify-center ma-sm-10">
                    <div class="about-me text-center">
                      <v-avatar size="150">
                        <v-img :src="i.image" height="100%" style="border: 8px solid #7E57C2;"></v-img>
                      </v-avatar>
                      <p class="text-h5 mt-4">{{ i.title }}</p>
                      <p class="text--secondary px-5">
                        {{i.description}}
                      </p>
                    </div>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-container>
            <v-container>
              <p class="text-h4 text-sm-h3 text-center">Want To Hire Me ?</p>
              <p class="text-h5 text-center text--secondary mb-16">If You Like My Work</p>
              <div class="hire-me d-flex ma-auto" >
                <v-text-field  placeholder="Enter Your Email" :loading="loading"  solo class="hire-me-tf"></v-text-field>
                <v-btn @click="hireMe" color="#7E57C2" class="hire-me-btn" >
                  <span style="color: white">HIRE ME</span>
                </v-btn>
              </div>
            </v-container>
          </v-row>
        </v-container>

        <v-footer id="footer" color="#7E57C2" padless>
          <v-row justify="center" class="flex-column"  no-gutters>
            <div class="text-center">
              <v-btn v-for="link in footerLinks" :key="link" color="white" text rounded class="my-2">
                {{ link }}
              </v-btn>
            </div>
            <div class="text-center">
              <router-link v-for="soc in social" :to="soc.to" :key="soc" class="px-5">
                <v-icon style="color: white;font-size: 30px" class="soc-icons">{{soc.icon}}</v-icon>
              </router-link>
            </div>
            <v-col class="py-4 text-center white--text" cols="12">
              {{ new Date().getFullYear() }} — <strong>Mohammad AL-Mahmoud</strong>
            </v-col>
          </v-row>
        </v-footer>
      </v-app>

</template>

<script>
export default {
  name: "portfolio-component",
  data(){
    return{
        links:[
          {name:"Portfolio",to:"portfolio"},
          {name:"Download CV",to:"/projects"},
          {name:"About Me",to:"#footer"},
        ],
      services:[
        {image:require("../assets/imgs/WhyUs/my-pic1.png"),title:'On Time',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/WhyUs/my-pic2.png"),title:'Clean Work',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/WhyUs/my-pic3.png"),title:'Client setisfaction',description:'All i want to have client setisfaction & this is my aim'},
      ],
      myProjects:[
        {image:require("../assets/imgs/Projects/pexels-christina-morillo-1181325.jpg"),title:'On Time',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/Projects/pexels-christina-morillo-1181677.jpg"),title:'Clean Work',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/Projects/pexels-cottonbro-4827576.jpg"),title:'Client setisfaction',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/Projects/pexels-darlene-alderson-4385547.jpg"),title:'Client setisfaction',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/Projects/pexels-luis-gomes-546819.jpg"),title:'Client setisfaction',description:'All i want to have client setisfaction & this is my aim'},
        {image:require("../assets/imgs/Projects/pexels-djordje-petrovic-2102415.jpg"),title:'Client setisfaction',description:'All i want to have client setisfaction & this is my aim'},
      ],
      aboutMe:[
        {image:require("../assets/imgs/Projects/pexels-luis-gomes-546819.jpg"),title:'John Smith',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur dignissimos error explicabo harum impedit inventore iure maxime minima, nisi odit perspiciatis porro praesentium quaerat, quibusdam ratione rerum ullam vel.'},
        {image:require("../assets/imgs/Projects/pexels-christina-morillo-1181677.jpg"),title:'Alexandra Dost',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur dignissimos error explicabo harum impedit inventore iure maxime minima, nisi odit perspiciatis porro praesentium quaerat, quibusdam ratione rerum ullam vel.'},
        {image:require("../assets/imgs/Projects/pexels-cottonbro-4827576.jpg"),title:'Fedrek Konta',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur dignissimos error explicabo harum impedit inventore iure maxime minima, nisi odit perspiciatis porro praesentium quaerat, quibusdam ratione rerum ullam vel.'},
      ],
      social:[
        {icon:'mdi-facebook',to:'#'},
        {icon:'mdi-linkedin',to:'#'},
        {icon:'mdi-instagram',to:'#'}
      ],
      footerLinks: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      overlay: false,
      loading:false,
    }
  },
  methods:{
    hireMe(){
      this.loading=true;
      setTimeout(()=>{
        this.loading=false;
        alert("Thanks, I will reply you soon. ");
      },2000);

    },
  },
}
</script>

<style scoped>
  .font{
    font-family: "Times New Roman"!important;
  }
  .flat{
    background: white!important;
    padding: 25px;
    font-family: "Times New Roman";
    font-size: 24px;
    border-radius:100px ;
  }
  .flat:hover{
    color: white !important;
    background: #7E57C2 !important;
  }
  .rotated-text{
    transform: perspective(100px);
    transform: rotate(90deg);
    position: absolute;
    right: 0;
    top: 480px;
  }
  .about-me{
    border-left: 20px solid #7E57C2 ;
    border-right: 20px solid #7E57C2 ;
  }
  .hire-me{
    
    margin-bottom: 100px !important;
  }
  .hire-me-btn{
    padding:25px 10px !important;
    border-bottom-left-radius: 0px !important;
    border-top-left-radius: 0px !important;
  }
  .hire-me-tf{
    border-bottom-right-radius: 0px !important;
    border-top-right-radius: 0px !important;
  }
.v-input{
  border: 1px solid #7E57C2 !important;
  height: 50px;
}
.soc-icons{
  transition: all .3s ease;
}
.soc-icons:hover{
  color: #372358 !important;
  transform: scale(1.5);
}
.img-container{
  border:15px solid #372358;
}
.img-cont{
  border:10px solid #372358;
}
.img{
  border: 10px solid white;
}

@media screen and (min-width:600px ) {
  .hire-me{
    width: 60%;
  }
}


</style>
