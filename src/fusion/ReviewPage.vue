<template>
  <review-page :tip="tip" :saveable="nucleus.saveable()"></review-page>
</template>

<script>
import ReviewPage from '../components/ReviewPage'
import ReviewNucleus from '../nucleus/ReviewNucleus'
import Bus from '../infrastructure/Bus'
import fusion from './fusion'

export default {
  name: 'review',
  mixins: [fusion],
  components: { ReviewPage },

  beforeCreate () {
    this.nucleus = new ReviewNucleus(Bus)
    this.events = {
      goBack: 'goToMain',
      saveReaction: 'saveReaction'
    }
  }
}
</script>