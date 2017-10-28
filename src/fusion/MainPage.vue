<template>
  <main-page
    :tips="tips"
  >
  </main-page>
</template>

<script>
import MainPage from '../components/MainPage'
import MainCore from '../core/MainCore'

export default {
  name: 'main',

  components: { MainPage },

  beforeCreate () {
    this.core = new MainCore()
    this.events = {
      goToRegistry: 'goToRegistry',
      goToReview: 'goToReview'
    }
  },

  created () {
    this.core.subscribe()
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
