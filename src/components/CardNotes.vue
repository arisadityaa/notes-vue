<template lang="">
  <div class="w-64 bg-rose-600 rounded-md shadow-lg h-64 hover:scale-110 duration-500">
    <div class="text-3xl font-medium text-center pt-3">{{ title }}</div>
    <div class="text-justify px-4 pt-3 pb-3 indent-4 h-36 overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div v-if="isClick===false">
        {{ shortDesc }} <span v-if="description.length>100" @click="showMore" class="cursor-pointer text-xs text-slate-600">(Show More)</span>
      </div>
      <div v-else>
        {{description}}
      </div>
    </div>
    <div class="mx-auto flex justify-around pb-3 pt-3">
      <router-link
        :to="'/edit/' + id"
        class="bg-green-400 rounded-md px-4 py-2 shadow-md hover:opacity-90 text-white"
        >Edit</router-link
      >
      <button
        class="bg-rose-400 rounded-md px-4 py-2 shadow-md hover:opacity-90 text-white"
        @click="notesDelete"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardNotes",
  props: {
    id: Number,
    title: String,
    description: String,
  },
  data(){
    return{
      isClick: false,
      shortDesc: ""
    }
  },
  methods: {
    notesDelete(){
      this.$emit('deletenotes', this.id)
    },
    showMore(){
      this.isClick = !this.isClick
      console.log(this.isClick);
    }
  },
  mounted(){
    this.shortDesc = this.description.length>100 ? `${this.description.slice(0, 100)}...` : this.description
  }
};
</script>
<style lang=""></style>
