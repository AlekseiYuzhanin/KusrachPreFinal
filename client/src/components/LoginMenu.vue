<template>
    <div class="padder">
    <div class="container py-3">
      <div v-if="isLoaded == false">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Login</h1>
      </div>
      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
          <div class="col">
            <div class="row">
              <form @submit.prevent="auth">
                <div class="form-floating mb-3">
                  <input v-model="userLogin" class="form-control" id="floatingInput" placeholder="Login...">
                  <label for="floatingInput">Login</label>
                </div>
                <div class="form-floating mb-3">
                  <input v-model="userPassword" type="password" class="form-control" id="floatingPassword" placeholder="Password...">
                  <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Login</button>
                <router-link to="/"><button class="w-100 btn btn-lg btn-outline-info" type="submit">Back</button></router-link>
              </form>
            </div>
          </div>
        </div>
        <div>
        </div>
      </main>
      </div>
      <div v-else style="display: flex; flex-direction: column; align-items: center">
        <h1>You have been login</h1>
        <img src="@/assets/4225683.png"/>
        <p style="font-size: 25px">Continue to using our site</p>
        <a><router-link style="font-size: 25px; text-decoration: none;color: #000;text-decoration: underline" to="/mainCabinet">Main cabinet</router-link></a>
        <a><router-link style="font-size: 25px; text-decoration: none;color: #000;text-decoration: underline" to="/">Home page</router-link></a>
        <main-cabinet :user-info="userInfo"></main-cabinet>
      </div>
    </div>
    </div>
  </template>
  
 <script>
  import axios from "axios";
  import mainCabinet from "@/components/MainCabinet";
  export default {
    components:{
      mainCabinet
    },
    data(){
      return{
        userLogin : '',
        userPassword : '',
        userInfo: [],
        isLoaded: false,
        token: ''
      }
    },
    methods:{
      async auth(){
        const response = await axios.post('http://localhost:5000/auth/login/',{
          'userLogin' : this.userLogin, 'userPassword': this.userPassword
        })
        console.log(response.data.token);
        this.token = response.data.token;
        this.userInfo = [this.userLogin,this.userPassword]
        console.log(this.userInfo[0],this.userInfo[1])
        localStorage.setItem('token',this.token);
        if(this.token){
          this.isLoaded = true;
          localStorage.setItem('isLoaded',this.isLoaded)
        }
        console.log(this.isLoaded);
      }
    },
    mounted() {
      this.auth();
    }
  }
  </script>
  
  <style scoped>
  .padder{
    padding-top: 200px;

  }
  @import "@/css/bootstrap.min.css";
  </style>