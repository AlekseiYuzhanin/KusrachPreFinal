<template>
    <div class="padder">
    <div class="container py-3">
      <div v-if="!isRegistration">
      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
          <div class="col">
            <div class="row">
              <form @submit.prevent="Registration">
                <h1 class="h3 mb-3 fw-normal">Registration</h1>
                <div class="form-floating mb-3">
                  <input v-model="name" type="text" class="form-control" id="floatingFio" placeholder="ФИО">
                  <label for="floatingFio">Full name</label>
                </div>
                <div class="form-floating mb-3">
                  <input v-model="login"  class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Login</label>
                </div>
                <div class="form-floating mb-3">
                  <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Registration</button>
                <router-link to="/"><button class="w-100 btn btn-lg btn-outline-info" type="submit">Back</button></router-link>
              </form>
            </div>
          </div>
        </div>
      </main>
      </div>
      <div v-else style="display: flex;justify-content: center;flex-direction: column;align-items: center">
        <h1>You have been registered</h1>
        <img src="@/assets/4225683.png"/>
        <p style="font-size: 25px">Continue to using our site</p>
        <a><router-link style="font-size: 25px; text-decoration: none;color: #000;text-decoration: underline" to="/login">Login</router-link></a>
        <a><router-link style="font-size: 25px; text-decoration: none;color: #000;text-decoration: underline" to="/">Home page</router-link></a>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    data(){
      return{
        name : '',
        login: '',
        password: '',
        isRegistration: false
      }
    },
   methods:{
      async Registration(){
        try{
          const response = await axios.post('http://localhost:5000/auth/registration',{
            'userFullName': this.name, 'userLogin' : this.login, 'userPassword': this.password
          })
          if(response){
            this.isRegistration = true;
          }
        }
        catch(e){
         alert(e);
        }
      }
   }
  }
  </script>
  
  <style scoped>
  .padder{
    padding-top: 200px;
  }
  @import "@/css/bootstrap.min.css";
  </style>