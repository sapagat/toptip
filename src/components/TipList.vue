<template>
  <div class="TipList">
    <tip-card v-for="tip in tips" :key="tip.name" :tip="tip"></tip-card>
  </div>
</template>

<script>
import TipCard from './TipCard'

export default {
  name: 'tip-list',

  props: ['tips'],

  components: { TipCard }
}
</script>

<style>
.TipList {
  display: flex;
  flex-direction: column;
}
</style>