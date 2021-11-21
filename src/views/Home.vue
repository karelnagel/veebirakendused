<template>
  <div class="flex-container" v-for="(post, index) in posts" :key="index">
    <div class="flex-item">
      <div class="post-heading">
        <p id="" date>{{ post.time }}</p>
        <iframe class="user"></iframe>
      </div>
      <div class="post">
        <img v-if="post.image" v-bind:src="post.image" alt="image" class="post-image">
        <p>{{ post.content }}</p>
      </div>
      <div class="like-div">
        <p class="like-count">{{ likes[index] ?? '0' }}</p>
        <button id="like" v-on:click="increment(index)"></button>
      </div>
    </div>
  </div>
  <button class="initialize-likes" v-on:click="initializeLikes()">Set likes to 0</button>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
      likes: this.$store.state.likes
    }
  },
  mounted() {
    axios.get("https://api.jsonbin.io/b/617589c89548541c29c7e082")
        .then((response) => {
          this.posts = response.data.posts
        })
  },
  methods: {
    increment(id) {
      console.log("asdasdasd", id, this.$store.state.likes)
      if (!this.likes[id]) this.likes[id] = 0
      this.likes[id]++
      this.$store.state.likes[id] = this.likes[id]
    },
    initializeLikes() {
      this.likes = []
      this.$store.state.likes = []
    }
  }
};
</script>

<style>
.post-heading {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

.initialize-likes {
  display: flex;
  margin: 10px auto;
}

.like-div {
  display: inline-flex;
}

.post-image {
  width: 100%;
}

body {
  background: cornflowerblue;
  height: 100%;
  width: 100%;
}

.flex-container > div {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.flex-item {
  background: whitesmoke;
  padding: 5px;
  margin-top: 10px;
  color: black;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}

.post_heading {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: normal;
  color: gray;
  align-items: center;
  padding-bottom: 2%;
}

.user {
  background: url(https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png) no-repeat;
  background-size: contain;
  border: none;
  width: 80px;
  height: 50px;
  alt: "user";
}

#date {
  margin-right: 1%;
  margin-left: auto;
}

#post {
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  color: black;
}

#like {
  background: url(https://e7.pngegg.com/pngimages/886/3/png-clipart-white-and-blue-like-icon-facebook-like-button-computer-icons-thumb-signal-thumbs-up-blue-text.png) no-repeat;
  background-size: contain;
  width: 60px;
  height: 50px;
  cursor: pointer;
  align-items: center;
  border: none;
}

input, button, p {
  margin: 5px 0;
}

a {
  position: relative;
  display: inline-block;
  color: deepskyblue;
  overflow: hidden;
}

a:hover {
  position: relative;
  display: inline-block;
  color: royalblue;
  text-decoration: underline;
  overflow: hidden;
}

#note-image {
  position: absolute;
  width: 70px;
  top: 0;
}

#smaller-note-image {
  position: absolute;
  width: 50px;
  top: 8px;
}

button {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
}

button:hover {
  background-color: #e7e7e7;
}


::selection {
  color: rgb(255, 255, 255);
  background: rgb(6, 18, 126);
}
</style>
