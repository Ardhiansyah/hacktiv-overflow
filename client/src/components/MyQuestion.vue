<template>
  <div class="container">
  <table class="table table-striped table-responsive-md btn-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Votes</th>
        <th>Answer</th>
        <th>Question</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(question, i) in questions" :key="i">
        <th scope="row">{{ i+1 }}</th>
        <td>0</td>
        <td>{{ question.answer.length || 0 }}</td>
        <td>{{ question.title }}</td>
        <td>
          <button type="button" class="btn btn-primary btn-rounded btn-sm my-0" data-toggle="modal" :data-target="'#editModal' + question._id">Edit</button>
          <edit :id="question._id" :title="question.title" :description="question.description"></edit>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import Edit from '@/components/Edit';

export default {
  name: 'myQuestion',
  components: {
    Edit,
  },
  computed: {
    questions() {
      return this.$store.getters.questions;
    },
  },
  methods: {
    detailQuestion(id) {
      this.$router.push(`/${id}`);
    },
  },
  created() {
    this.$store.dispatch('findQuestionByUserId');
  },
};
</script>

<style>

</style>
