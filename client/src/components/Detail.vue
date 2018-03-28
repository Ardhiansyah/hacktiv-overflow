<template>
  <div>
    <div class="main-content">
      <div class="vote">
        <a @click="up()"><i class="fa fa-thumbs-o-up"></i><span> 0</span></a>
        <a @click="down()"><i class="fa fa-thumbs-o-down"></i><span> 0</span></a>
      </div>
      <div v-if="section == 'question'"><h4>{{item.description}}</h4></div>
      <div v-else class="description">{{item.description}}</div>
      <div>{{item.user.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section'],
  name: 'detail',
  computed: {
    item() {
      if (this.section === 'question') {
        return this.$store.getters.questions;
      }
      return this.section;
    },
  },
  methods: {
    up() {
      // console.log('up');
    },
    down() {
      // console.log('down');
    },
  },
};
</script>

<style scoped>
  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .vote {
    text-decoration: none;
    cursor: pointer;
  }
</style>
