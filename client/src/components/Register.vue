<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="registerModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Register Form</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="register-form">
            <div class="form-group">
              <label for="name-register">Name</label>
              <input class="form-control" type="text" name="name-register" id="name-register" v-model="name">
            </div>
            <div class="form-group">
              <label for="email-register">Email</label>
              <input class="form-control" type="email" name="email-register" id="email-register" v-model="email">
            </div>
            <div class="form-group">
              <label for="password-register">Password</label>
              <input class="form-control" type="password" name="password-register" id="password-register" v-model="password">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="register()">Register</button>
          <button id="dismissRegisterModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.name = '';
      this.email = '';
      this.password = '';
      document.querySelector('#dismissRegisterModal').click();
    },
  },
};
</script>

<style>

</style>
