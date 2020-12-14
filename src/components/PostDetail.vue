<template>
  <div class="container-fluid pt-5">
    <hr>
      <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
        <div v-for="post in postList" :key="post.title" class="card m-1">
          <h1 class="text-center">{{ post.title }}</h1>
          <img class="card-img-top" :src="post.title" :alt="post.title">
          <div class="card-body">
            <h5 class="card-title"> {{ post.title }}</h5>
            <p class="card-text"> {{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  // import axios from "axios";
  import customAxios from "../../custom_axios"
  export default {
    data(){
      return {
        postList : []
      }
    },
    created(){
      let apiRes = null;
      try {
        apiRes = customAxios.get('/blog/' + this.$route.params.id)
        .then(response => {
          let data = response.data;
          for(let key in data){
            this.postList.push({ ...data[key], id : key })
          }
        })
        .catch(e => console.log(e));
      } catch (err) {
        apiRes = err.response;
      } finally {
        console.log(apiRes); // Could be success or error
      }


    }
  }
</script>
<style>
  .card {
    width: 300px;
  }
</style>