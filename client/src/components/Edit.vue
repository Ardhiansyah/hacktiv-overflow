<template>
  <div class="modal fade" tabindex="-1" role="dialog" :id="'editModal' + id">
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
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="save()">Post</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            id="dismissPostModal">Close</button>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['id', 'title', 'description'],
  name: 'edit',
  methods: {
    save() {
      this.$store.dispatch('editQuestion', {
        id: this.id,
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
      });
      document.querySelector('#dismissEditModal').click();
    },
  },
};
</script>

<style>

</style>
