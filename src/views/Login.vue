<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h1>Login</h1>
      </div>
      <div class="col-md-2"></div>
    </div>
    <br />

    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form class="form-signin">
         
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            v-model="email"
            placeholder="Email address"
            required
            autofocus
          />
          <br>
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="password"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" @click="login"  type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            email: "",
            password: ""
        }
        
    },

    methods : {
        login: function(){
            console.log(this.email);
            console.log(this.password);
        }
    }
};
</script>