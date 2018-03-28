<template>
  <div>
    <div>
      <h1 class="title">{{ question.title }}</h1>
      <!-- <hr> -->
      <detail section="question"></detail>
      <hr>
      <div v-for="(answer, i) in question.answer" :key="i">
        <detail :section="answer"></detail>
        <hr>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="inputAnswer"></textarea>
        
        <button type="button" class="btn btn-primary" @click="answer">Answer</button>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from '@/components/Detail';

export default {
  props: ['id'],
  name: 'detailQuestion',
  data() {
    return {
      inputAnswer: '',
    };
  },
  components: {
    Detail,
  },
  computed: {
    question() {
      return this.$store.getters.questions;
    },
  },
  methods: {
    answer() {
      this.$store.dispatch('submitAnswer', {
        id: this.id,
        description: this.inputAnswer,
      });
      this.inputAnswer = '';
    },
  },
  created() {
    this.$store.dispatch('findQuestionById', this.id);
  },
};
</script>

<style>
  .form-group {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
