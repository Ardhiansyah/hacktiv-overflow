import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);
const baseUrl = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    user: null,
    questions: null,
  },
  getters: {
    isLogin(state) {
      if (state.user) return true;
      return false;
    },
    user(state) {
      return state.user;
    },
    questions(state) {
      return state.questions;
    },
  },
  mutations: {
    setUser(state, value) {
      this.state.user = value;
    },
    setQuestion(state, value) {
      this.state.questions = value;
    },
  },
  actions: {
    register(context, data) {
      Axios.post(`${baseUrl}/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
      }).then((response) => {
        context.commit('setUser', response.data);
        localStorage.token = response.data.token;
      }).catch(err => alert(err.message));
    },
    login(context, data) {
      Axios.post(`${baseUrl}/signin`, {
        email: data.email,
        password: data.password,
      }).then((response) => {
        context.commit('setUser', response.data);
        localStorage.token = response.data.token;
      });
    },
    verify(context) {
      Axios.post(`${baseUrl}/verify`, {}, {
        headers: { token: localStorage.token },
      }).then((response) => {
        context.commit('setUser', response.data.data);
      });
    },
    populateQuestion(context) {
      Axios.get(`${baseUrl}/questions`).then((response) => {
        context.commit('setQuestion', response.data.questions);
      });
    },
    findQuestionById(context, value) {
      Axios.get(`${baseUrl}/questions/${value}`).then((response) => {
        context.commit('setQuestion', response.data.question);
      });
    },
    submitAnswer(context, value) {
      Axios.post(`${baseUrl}/questions/${value.id}/answer`, {
        description: value.description,
      }, {
        headers: { token: localStorage.token },
      }).then(() => {
        context.dispatch('findQuestionById', value.id);
      }).catch(err => alert(err.message));
    },
    postQuestion(context, value) {
      Axios.post(`${baseUrl}/questions`, {
        title: value.title,
        description: value.description,
      }, {
        headers: { token: localStorage.token },
      }).then(() => {
        context.dispatch('populateQuestion');
      }).catch(err => alert(err.message));
    },
    findQuestionByUserId(context) {
      Axios.get(`${baseUrl}/questions/user`, {
        headers: { token: localStorage.token },
      }).then((response) => {
        context.commit('setQuestion', response.data.question);
      }).catch(err => alert(err.message));
    },
    editQuestion(context, value) {
      Axios.put(`${baseUrl}/questions/${value.id}`, {
        title: value.title,
        description: value.description,
      }, {
        headers: { token: localStorage.token },
      }).then(() => {
        context.dispatch('findQuestionByUserId');
      }).catch(err => alert(err.message));
    },
  },
});
