<template>
  <div class="Container">
    <div id="add_tip" @click="handleClick" class="button is-primary Button">+</div>
  </div>
</template>

<script>
export default {
  props: ['onClick'],

  methods: {
    handleClick () {
      this.onClick()
    }
  }
}
</script>

<style scoped>
.Container {
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 70px;
}

.Button {
  float: right;

  margin-right: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;

  box-shadow: 0px 2px 5px #666;

  font-size: 2em;
}
</style>
