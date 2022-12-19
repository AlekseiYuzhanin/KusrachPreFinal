<template>
    <header class="brew__header" href="#home">
    <div class="brew__header_logo">
      <div class="brew_header_logo_image">
        <img class="brew_header_logo_image_1" src="@/assets/modern-logo-design-min.jpg">
      </div>
      <div class="brew_header_logo_info">
        <h1><router-link style="text-decoration: none; color: inherit;" to="/">Brewery DB</router-link></h1>
        <p>The best brewery db in the world</p>
      </div>
    </div>
    <nav class="brew__header_navbar">
      <a href="#alcaholicProducts">Alcoholic cocktails</a>
      <a href="#nonAlcaholicProducts">Non Alcoholic cocktails</a>
    </nav>
    <div class="brew__header_authentication">
      <div class="brew__header_authentication_auth" v-if="token" @click="toggleToken">
        <router-link style="text-decoration: none; color: inherit;" to="/login">Login</router-link>
      </div>
      <div class="brew__header_authentication_auth_else" v-else>
        <router-link to="/login"><img src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" style="width: 40px"/></router-link>
      </div>
      <div class="brew__header_registration">
        <router-link style="text-decoration: none; color: inherit;" to="registration">Registration</router-link>
      </div>
    </div>
  </header>
  
    <slot></slot>

  <footer class="footer">
    <div class="footer_data">
      <p><router-link style="text-decoration: none; color: inherit;" to="/aboutUs">About us</router-link></p>
      <p><router-link style="text-decoration: none; color: inherit;" to="/contacts">Contacts</router-link></p>
      <p><router-link style="text-decoration: none; color: inherit;" to="/informationList">What do we use?</router-link></p>
    </div>
  </footer>
</template>

  
  <script>
  import filterButton from "@/components/UI/FilterButton";
  export default {
    components : filterButton,
    data(){
      return{
        token : true
      }
    },
    methods:{
      toggleToken(){
        if(this.token== true){
          this.token = false
        }

      }
    }
  }
  </script>
  
  <style scoped>

  .breweryImage{
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
  .brew__header{
    font-family: 'Snell Roundhand', cursive	;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    scroll-behavior: smooth;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    background-color: #f2f2f2;
    opacity: 0.8;
  }
  .brew_header_logo_image_1{
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .brew__header_logo{
    display: flex;
    flex-direction: row;
  }
  .brew_header_logo_info{
    padding-top: 10px;
  }
  .brew__header_navbar{
    display: flex;
    gap: 50px;
  }
  .brew__header_navbar a {
    color: #000;
    text-decoration: none;
  }
  .brew__header_authentication{
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .footer{
    margin-top: 100px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }

  .footer_data{
    display: flex;
    flex-direction: row;
    gap: 150px;
  }
  </style>