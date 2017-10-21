<template>
  <main-page
    :tips="tips"
    @goToRegistry="goToRegistry"
  >
  </main-page>
</template>

<script>
import MainPage from '../pages/MainPage'
import Bus from '../infrastructure/Bus'

export default {
  name: 'main',

  components: {
    MainPage
  },

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
      Bus.subscribe('tips', 'list.ready', (tips) => {
        this.tips = tips
      })
    },

    start () {
      Bus.publish('tips', 'fetch.list')
    },

    goToRegistry () {
      this.$router.push('/registry')
    }
  }
}
</script>
