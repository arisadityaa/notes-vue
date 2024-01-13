<template lang="">
  <div class="h-screen"> 
    <h1 class="text-center text-3xl font-medium mt-4 mb-8">Edit Notes</h1>
    <div v-if="data != null">
      <div class="w-3/4 h-80 bg-rose-500 rounded-md shadow-md mx-auto">
        <div class="text-center text-2xl font-medium text-white pt-2">
          Notes
        </div>
        <form class="mt-4 mx-8">
          <div class="mb-4">
            <label for="title" class="mr-4"> Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              class="rounded-md py-1"
              v-model="data.title"
            />
          </div>
          <div class="mb-4">
            <label for="notes"> Notes </label>
            <textarea
              name="notes"
              id="notes"
              class="block w-full h-24 mt-2"
              v-model="data.desc"
            ></textarea>
          </div>
          <div class="mb-4 flex justify-around">
            <button type="submit" class="rounded-md bg-green-400 px-4 py-2 hover:opacity-90" @click="handleDelete">
              Edit
            </button>
            <router-link to="/" class="rounded-md bg-yellow-400 px-4 py-2 hover:opacity-90" type="button">Cancel</router-link>
          </div>
        </form>
      </div>
    </div>
    <div v-else>
      <div class="text-center font-medium text-3xl">NO Data Found!</div>
    </div>
  </div>
</template>
<script>
import { note, editNote } from '../utils';
export default {
  data() {
    return {
      data: "",
      idNote: this.$route.params.id,
    };
  },
  mounted() {
    const getnoteid = note.filter((item) => item.id == this.idNote);
    this.data = getnoteid.length > 0 ? getnoteid[0] : null;
  },
  methods: {
    handleDelete(){
      event.preventDefault()
      // console.log(this.data);
      editNote(this.data)
      this.$router.push('/');
    }
  },
};
</script>
<style lang=""></style>
