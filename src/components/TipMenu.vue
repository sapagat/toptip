<template>
  <div class="modal is-active">
    <div class="modal-background Modal-background" @click="close"></div>
    <div class="modal-content Menu">
      <div class="Menu-item" @click="goToReview">Review</div>
      <div class="Menu-item" @click="close">Cancel</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tip-menu',

  props: ['tipId'],

  methods: {
    close () {
      this.$emit('close')
    },

    goToReview () {
      this.$emit('goToReview', {id: this.tipId})
    }
  }
}
</script>

<style>
.Menu {
  position: fixed;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  bottom: 0;
  width: 100%;


  background: white;
}

.Modal-background {
  background-color: rgba(10,10,10, 0.44);
}

.Menu-item {
  width: 100%;
  height: 50px;

  align-self: center;

  text-align: center;
  padding: 10px 0;

  box-shadow:
    0 2px 4px 0 rgba(216,221,223,0.59),
    0 2px 4px 0 rgba(235,237,238,0.5);
}
</style>
