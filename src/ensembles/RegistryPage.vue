<template>
  <registry-page
    :tip = "tip"
    :storable = "storable"
    @storeTip = "storeTip"
    @goBack = "goToMain"
  >
  </registry-page>
</template>

<script>
import RegistryPage from '../components/RegistryPage'

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

  computed: {
    storable () {
      if (this.isEmpty(this.tip.name)) return false
      if (this.isEmpty(this.tip.address)) return false

      return true
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
    },

    isEmpty (field) {
      return field === undefined || field === ''
    }
  }
}
</script>
