<template>
  <registry-page
    :tip = "tip"
    :storable = "core.storable()"
  >
  </registry-page>
</template>

<script>
import RegistryPage from '../components/RegistryPage'
import RegistryCore from '../cores/RegistryCore'
import fusion from './fusion'

export default {
  name: 'registry',
  mixins: [fusion],
  components: { RegistryPage },

  beforeCreate () {
    this.core = new RegistryCore()
    this.events = {
      storeTip: 'storeTip',
      goBack: 'goToMain'
    }
  }
}
</script>
