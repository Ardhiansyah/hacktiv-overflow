<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="postModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Post Form</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="register-form">
            <div class="form-group">
              <label for="title">Title</label>
              <input class="form-control" type="text" name="title" id="title" v-model="title">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" name="description" id="description" cols="30"
                rows="10"
                v-model="description"></textarea>
              <!-- <input class="form-control" type="text" name="description" id="description"> -->
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="post()">Post</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            id="dismissPostModal">Close</button>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    post() {
      this.$store.dispatch('postQuestion', {
        title: this.title,
        description: this.description,
      });
      this.title = '';
      this.description = '';
      document.querySelector('#dismissPostModal').click();
    },
  },
};
</script>

<style>

</style>
