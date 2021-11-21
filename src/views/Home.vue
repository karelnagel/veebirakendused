<template>
  <p>Home</p>
</template>

<script>
export default {
  name: "Home",

};
</script>

<style>
body {
  background: cornflowerblue;
  height: 100%;
  width: 100%;
}

.login-box {
  position: relative;
  margin: 200px auto;
  width: 350px;
  background: white;
  padding: 30px 20px;
  display: block;
}

.login-contents {
  text-align: center;
}

.head {
  display: flex;
  flex-direction: row;
  background: whitesmoke;
  height: 50px;
  width: 100%;
}

.head > div {
  margin-left: 1%;
  margin-right: 1%;
  padding-top: 4px;
}

div + form {
  margin-left: auto;
  margin-right: auto;
}

.search {
  font-size: 115%;
}

#search {
  background-color: darkblue;
  color: whitesmoke;
  margin-top: 4%;
}

head ~ .flex-container {
  display: flex;
  flex-direction: column;
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
