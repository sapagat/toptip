<template>
  <review-page></review-page>
</template>

<script>
import ReviewPage from '../components/ReviewPage'
import ReviewNucleus from '../nucleus/ReviewNucleus'
import fusion from './fusion'

export default {
  name: 'review',
  mixins: [fusion],
  components: { ReviewPage },

  beforeCreate () {
    this.nucleus = new ReviewNucleus()
    this.events = {
      goBack: 'goToMain'
    }
  }
}
</script>