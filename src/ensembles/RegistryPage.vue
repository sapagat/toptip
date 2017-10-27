<template>
  <registry-page
    :tip = "tip"
    @storeTip = "storeTip"
  >
  </registry-page>
</template>

<script>
import RegistryPage from '../pages/RegistryPage'
import Bus from '../infrastructure/Bus'

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
      Bus.subscribe('tips', 'tip.stored', () => {
        this.goToMain()
      })
    },

    storeTip () {
      Bus.publish('tips', 'store.tip', { tip: this.tip })
    },

    goToMain () {
      this.$router.push('/')
    }
  }
}
</script>
