<template>
  <main-page
    :tips="tips"
    @goToRegistry="goToRegistry"
  >
  </main-page>
</template>

<script>
import MainPage from '../components/MainPage'

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
      this.$bus.subscribe('tips', 'list.ready', (tips) => {
        this.tips = tips
      })
    },

    start () {
      this.$bus.publish('tips', 'fetch.list')
    },

    goToRegistry () {
      this.$router.push('/registry')
    }
  }
}
</script>
