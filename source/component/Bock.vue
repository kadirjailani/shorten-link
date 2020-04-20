<template>
   <div class="container">
		<h2>BOCK!</h2>
		<button id="show-modal" v-on:click="showModal = true">New Post</button>
      <modal v-bind:show="showModal" v-on:close="showModal = false"></modal>
  </div>
</template>

<script>

export default{
	props: {
	},
	data(){
		return {
			showModal: false
		}
	},
	methods: {
	}
}
</script>

<style>
</style>




