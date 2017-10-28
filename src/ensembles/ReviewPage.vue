<template>
  <review-page
    @goBack = "goToMain"
  >
  </review-page>
</template>

<script>
import ReviewPage from '../components/ReviewPage'

export default {
  name: 'review',
  components: { ReviewPage },

  data () {
    return {
      tip: {}
    }
  },

  mounted () {
    this.subscribe()
    this.start()
  },

  methods: {
    subscribe () {
      this.$bus.subscribe('tips', 'tip.ready', (data) => {
        this.tip = data.tip
      })
    },

    start () {
      let tipId = this.$route.params.id
      this.$bus.publish('tips', 'retrieve.tip', { id: tipId })
    },

    goToMain () {
      this.$router.push('/')
    }
  }
}
</script>