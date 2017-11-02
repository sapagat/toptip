<template>
  <div class="Form">
    <input id="name" type="text" class="input Field" placeholder="What is the place?" v-model="tip.name">
    <input id="address" type="text" class="input Field" placeholder="Where is it?" v-model="tip.address">
    <input id="message" type="text" class="input Field" placeholder="What's the advice?"  v-model="tip.message">
    <input id="advisor" type="text" class="input Field" placeholder="Who told you?"  v-model="tip.advisor">
  </div>
</template>

<script>
export default {
  props: ['tip']
}
</script>

<style scoped>
.Form {
  padding: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Field {
  position: static;

  margin: 1em 0;
}
</style>
