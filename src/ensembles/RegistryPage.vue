<template>
  <registry-page
    :tip = "tip"
    :storable = "core.storable()"
  >
  </registry-page>
</template>

<script>
import RegistryPage from '../components/RegistryPage'
import RegistryCore from '../core/RegistryCore'

export default {
  name: 'registry',

  components: { RegistryPage },

  beforeCreate () {
    this.core = new RegistryCore()
    this.events = {
      storeTip: 'storeTip',
      goBack: 'goToMain'
    }
  },

  created () {
    this.core.subscribe()
  },

  data () {
    return this.core.goods()
  },

  mounted () {
    Object.entries(this.events).forEach(([event, handler]) => {
      this.$children[0].$on(event, this.core[handler])
    })
  }
}
</script>
