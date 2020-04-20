<template>
  <div id="show-blogs">
      <h1>All blogs articles</h1>
      <div v-for="blog of blogs" v-bind:key="blog.index" class="single-blog">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.body }}</p>

      </div>

  </div>
</template>

<script>
var root
export default{
  props: {
  },
  data(){
    return {
        blogs: [

        ]
    }
  },
  methods: {
    
  },
  created() {
      this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function(data){
          console.log(data);
          this.blogs = data.body.slice( 0, 10 );
      })
  }
}

</script>

<style lang="scss">
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
    border-radius: 20px; 
}
</style>




