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

  methods: {
    goToMain () {
      this.$router.push('/')
    }
  }
}
</script>