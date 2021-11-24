<template>
  <div class="header">
    <div class="dropdown">
      <button class="dropdownButton" onclick="showInfo()">
        <img
          id="user-image"
          src="images/me.png"
          alt="user"
          height="40"
          display="block"
        />
      </button>
      <div class="dropdown-content" id="dropdownInfo">
        <b>John Doe</b>
        <b>john.doe@example.com</b>
      </div>
    </div>
    <div class="navbar">
      <router-link class="nav-item nav-link" active-class="active" to="/"
        >Home</router-link
      >
      <router-link class="nav-item nav-link" active-class="active" to="/contact"
        >Contact</router-link
      >
      <router-link class="nav-item nav-link" active-class="active" to="/login"
        >Login</router-link
      >
    </div>
  </div>
</template>
<style>
.header {
  display: flex;
  flex-direction: row;
  background: whitesmoke;
  width: 99%;
}

.header > div {
  margin-left: 1%;
  margin-right: 1%;
}

div + form {
  margin-left: auto;
  margin-right: auto;
}
.dropdown {
  display: inline-block;
}
.dropdown .dropdownButton {
  background: whitesmoke;
  cursor: pointer;
  position: relative;
  height: 50px;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: auto;
  right: 0%;
  border-radius: 7px;
  border: 5px;
  background-color: whitesmoke;
}
.dropdown-content b {
  color: lightslategray;
  font-family: Arial;
  float: none;
  display: block;
  text-align: left;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
  border: 5px;
}
.dropdown-content b:hover {
  background-color: lightgray;
  color: dimgray;
}

.navbar {
  overflow: hidden;
}
.nav-item {
  float: left;
  color: black;
  font-family: arial;
  text-align: center;
  text-decoration: none;
  padding: 15px 15px;
  font-size: 18px;
  padding-bottom: 11%;
}
.nav-item:hover {
  background-color: lightblue;
  color: darkslategrey;
  text-decoration: none;
}
.nav-item {
}
</style>
