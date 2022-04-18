<template>
  <div>
        <hello-world />
  <v-btn  class="primary">Hello</v-btn>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'home-view',

    components: {
      HelloWorld,
    },
  }
</script>
