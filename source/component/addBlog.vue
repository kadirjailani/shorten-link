<template>
  <div id="add-blog" class="">
      <h2>Add a new blog post.</h2>
      <form v-if="!submitted">
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required />
          <label>Blog Content</label>
          <textarea v-model.lazy="blog.content"></textarea>
          <div id="checkboxes">
              <label>Ninja</label>
              <input type="checkbox" value="ninja" v-model="blog.categories" />
              <label>Wizard</label>
              <input type="checkbox" value="wizard" v-model="blog.categories" />
              <label>Warrior</label>
              <input type="checkbox" value="warrior" v-model="blog.categories" />
              <label>Peasant</label>
              <input type="checkbox" value="peasant" v-model="blog.categories" />
          </div>
          <select v-model="blog.author">
              <option disabled value="">Please choose author</option>
              <option v-for="author of authors" v-bind:key="author.id">{{ author.name }}</option>
          </select>
          <button v-on:click.prevent="postBlog">Add Blog</button>
      </form>
      <div v-if="submitted">
          <h3>Thanks for adding your post</h3>
      </div>
      <div id="preview">
          <h3>Preview blog</h3>
          <p> blog title: {{ blog.title }}</p>
          <p>Blog content: {{ blog.content }}</p>
          <p>Blog categories</p>
          <ul>
              <li v-for="category of blog.categories" v-bind:key="category.id">{{ category }}</li>
          </ul>
          <p>Author: {{ blog.author }}</p>
      </div>
  </div>
</template>

<script>
export default{
  props: {
  },
  data(){
    return {
        blog: {
            title: "",
            content: "",
            categories: [],
            author: ""
        },
        authors: [
            { name: "The Net Ninja", value: "0" },
            { name: "The Angular Avenger", value: "1" },
            { name: "The Vue Vindicator", value: "2" }
        ],
        submitted: false
    }
  },
  methods: {
      postBlog: function(){
          this.$http.post("http://jsonplaceholder.typicode.com/posts", {
              title: this.blog.title,
              body: this.blog.content,
              userId: this.blog.author.value
          }).then(function(data){
              console.log(data);
              this.submitted = true;
          })
      }
  }
}

</script>

<style lang="scss">
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 2px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label {
    display: inline-block;
}
</style>




