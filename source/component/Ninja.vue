<template>
  <div>
      <ul class="ninja-list">
          <li v-for="ninja of ninjas" v-bind:key="ninja.id"  v-on:click="ninja.show = !ninja.show">
              <h3>{{ninja.name }}</h3>
              <div v-show="ninja.show">
                <h5>Level {{ ninja.level }}</h5>
                <h6>{{ ninja.clan }}</h6>
              </div>

          </li>
      </ul>
      <button v-on:click="deleteNinja">Delete  ninja from the list</button>
  </div>
</template>

<script>
export default{
  props: {
   ninjas: {
     type: Array,
     required: true
   } 
  },
  data(){
    return {
    }
  },
  methods: {
    deleteNinja: function(){
      this.ninjas.pop();
    }
  }
}

</script>

<style>
.ninja-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
    list-style: none;
}

.ninja-list  li {
    border: 1px solid black;
    text-align: center;
    padding: 30px;
    margin-bottom: 20px;
    flex-grow: 1;
    cursor: pointer;
}

</style>




