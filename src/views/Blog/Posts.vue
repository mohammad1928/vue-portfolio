<template>
  <v-app>
    <h1 class="text-center">Posts Component</h1>
      <v-card>
        <v-card-title>
          <v-dialog v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{on,attrs}">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">Add new Post</v-btn>
            </template>
            <v-card>
              <v-card-text class="text-h4 pa-5">Add new Post</v-card-text>
              <v-card-text>
                <v-container>
                  <form @submit.prevent="handleAddPost()" action="">
                    <v-text-field v-model="post.title" type="text" label="Post Title" shaped></v-text-field>
                    <v-textarea v-model="post.description" label="Post Description" counter></v-textarea>
                    <v-btn type="submit" color="primary" class="mx-3">Submit</v-btn>
                    <v-btn text @click="dialog=false" color="secondary">Cancel</v-btn>
                  </form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="posts"
            :search="search"
        ></v-data-table>
      </v-card>
  </v-app>
</template>
<script>
export default {
  name:'posts-component',
  data(){
    return {
      search: '',
      dialog:false,
      post:{title:'',description:''},
      posts:[
          { title:'title', description:'desc'},
      ],
      headers: [
        {text: 'Title', value: 'title'},
        {text: 'Description', value: 'description'},
        {text: 'Action', value: 'action'},
      ],
    };
  },
  methods:{
      handleAddPost(){
        this.posts.push({
          title: this.post.title,
          description: this.post.description,
        });
        console.log(this.post.title+'*********'+this.post.description);
      }
  },
}
</script>
<style scoped>

</style>