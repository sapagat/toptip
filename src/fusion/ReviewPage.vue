<template>
  <review-page></review-page>
</template>

<script>
import ReviewPage from '../components/ReviewPage'
import ReviewCore from '../cores/ReviewCore'
import fusion from './fusion'

export default {
  name: 'review',
  mixins: [fusion],
  components: { ReviewPage },

  beforeCreate () {
    this.core = new ReviewCore()
    this.events = {
      goBack: 'goToMain'
    }
  }
}
</script>