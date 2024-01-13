<template lang="">
  <div>
    <h1 class="text-3xl font-medium text-rose-700 mb-10 mt-10 text-center">
      Notes App
    </h1>

    <div class="container mx-auto mb-4 mt-4 ml-20">
      <router-link to="/add" class="bg-green-400 px-4 py-2 shadow-md rounded-md hover:opacity-90 text-white">Add New</router-link>
    </div>

    <div class="container mx-auto flex gap-8 flex-wrap justify-around mt-10 pb-10">
      <div v-for="note in notes" :key="note.id">
        <CardNotes :id=note.id :title=note.title :description="note.desc" @deletenotes="handleDelete"/>
      </div>
    </div>
  </div>
</template>
<script>
import CardNotes from '../components/CardNotes.vue'
import {note, deleteNote} from '../utils';
export default {
  components:{
    CardNotes,
  },
  data() {
    return {
      notes: note
    }
  },
  methods:{
    handleDelete(data){
      deleteNote(data)
      this.getNewData()
    },

    getNewData(){
      this.notes = note
    }
  },
};
</script>

<style lang=""></style>
