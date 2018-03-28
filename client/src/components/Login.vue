<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="loginModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login Form</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="login-form">
            <div class="form-group">
              <label for="email-login">Email</label>
              <input class="form-control" type="email" name="email-login" id="email-login" v-model="email">
            </div>
            <div class="form-group">
              <label for="password-login">Password</label>
              <input class="form-control" type="password" name="password-login" id="password-login" v-model="password">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="login">Login</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" id="dismissLoginModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
      document.querySelector('#dismissLoginModal').click();
    },
  },
};
</script>

<style>

</style>
