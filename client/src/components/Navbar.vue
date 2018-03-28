<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container">
      <ul class="navbar-nav">
        <div class="logo" @click="home()">Hacktiv-Overflow</div>
        <li class="nav-item" v-if="isLogin">
          <router-link class="nav-link" :to="{ name: 'MyQuestion' }">My Question</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <div class="btn btn-dark" data-toggle="modal" data-target="#postModal">Post</div>
          <post></post>
        </li>
      </ul>
      <ul class="navbar-nav" v-if="isLogin">
        <li class="nav-item">
          <a class="nav-link" href="#">{{ user.name }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="logout()">Logout</a>
        </li>
      </ul>
      <ul class="navbar-nav" v-else>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="modal" data-target="#registerModal">Register</a>
          <register></register>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
          <login></login>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Register from '@/components/Register';
import Login from '@/components/Login';
import Post from '@/components/Post';

export default {
  name: 'navbar',
  components: {
    Register,
    Login,
    Post,
  },
  methods: {
    logout() {
      delete localStorage.token;
      this.$store.commit('setUser', null);
    },
    home() {
      this.$router.push('/');
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
  .logo {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
</style>
