<template>
  <review-page></review-page>
</template>

<script>
import ReviewPage from '../components/ReviewPage'
import ReviewCore from '../core/ReviewCore'

export default {
  name: 'review',
  components: { ReviewPage },

  beforeCreate () {
    this.core = new ReviewCore()
    this.events = {
      goBack: 'goToMain'
    }
  },

  data () {
    return this.core.goods()
  },

  mounted () {
    this.core.start()

    Object.entries(this.events).forEach(([event, handler]) => {
      this.$children[0].$on(event, this.core[handler])
    })
  }
}
</script>