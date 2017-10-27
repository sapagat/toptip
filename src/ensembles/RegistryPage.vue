<template>
  <registry-page
    :tip = "tip"
    @storeTip = "storeTip"
  >
  </registry-page>
</template>

<script>
import RegistryPage from '../pages/RegistryPage'

export default {
  name: 'registry',

  components: { RegistryPage },

  mounted () {
    this.subscribe()
  },

  data () {
    return {
      tip: {}
    }
  },

  methods: {
    subscribe () {
      this.$bus.subscribe('tips', 'tip.stored', () => {
        this.goToMain()
      })
    },

    storeTip () {
      this.$bus.publish('tips', 'store.tip', { tip: this.tip })
    },

    goToMain () {
      this.$router.push('/')
    }
  }
}
</script>
