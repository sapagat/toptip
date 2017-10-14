<template>
  <div class="TipList">
    <tip-card v-for="tip in tips" :key="tip.id" :tip="tip"></tip-card>
  </div>
</template>

<script>
import TipCard from './TipCard'
import Bus from '../infrastructure/Bus'

export default {
  name: 'tip-list',

  components: { TipCard },

  data () {
    return {
      tips: []
    }
  },

  mounted () {
    this.subscribe()
    this.start()
  },

  methods: {
    subscribe () {
      Bus.subscribe('tips', 'list.ready', (data) => {
        this.saveTips(data)
      })
    },

    start () {
      Bus.publish('tips', 'fetch.list')
    },

    saveTips (tips) {
      this.tips = tips
    }
  }
}
</script>

<style>
.TipList {
  max-width: 400px;
  overflow: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>