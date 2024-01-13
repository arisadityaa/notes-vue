<template lang="">
  <div class="h-screen">
    <h1 class="text-center text-3xl font-medium mt-4 mb-8">Add New Notes</h1>

    <div class="w-3/4 h-80 bg-rose-500 rounded-md shadow-md mx-auto">
      <div class="text-center text-2xl font-medium text-white pt-2">
        New Notes
      </div>
      <form class="mt-4 mx-8">
        <div class="mb-4">
          <label for="title" class="mr-4"> Title: </label>
          <input type="text" name="title" id="title" class="rounded-md py-1" v-model="title"/>
        </div>
        <div class="mb-4">
          <label for="notes"> Notes </label>
          <textarea
            name="notes"
            id="notes"
            class="block w-full h-24 mt-2"
            v-model="desc"
          ></textarea>
        </div>
        <div class="mb-4 flex justify-around">
          <button type="submit" class="rounded-md bg-green-400 px-4 py-2" @click="getNotes">Add</button>
          <router-link to="/" class="rounded-md bg-yellow-400 px-4 py-2">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {note, addNewNote} from '../utils';
export default {
  data(){
    return{
      id: "",
      title: "",
      desc: "",
    }
  },
  methods:{
    getNotes(){
      event.preventDefault();
      this.id = +new Date()
      console.log(this.title, this.desc, this.id);
      const newData = {
        id: this.id,
        title: this.title,
        desc: this.desc
      }
      addNewNote(newData)
      console.log(note);
      this.$router.push('/');
    }
  },
};
</script>
<style lang=""></style>
