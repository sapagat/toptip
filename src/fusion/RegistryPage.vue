<template>
  <registry-page
    :tip = "tip"
    :storable = "nucleus.storable()"
  >
  </registry-page>
</template>

<script>
import RegistryPage from '../components/RegistryPage'
import RegistryNucleus from '../nucleus/RegistryNucleus'
import Bus from '../infrastructure/Bus'
import fusion from './fusion'

export default {
  name: 'registry',
  mixins: [fusion],
  components: { RegistryPage },

  beforeCreate () {
    this.nucleus = new RegistryNucleus(Bus)
    this.events = {
      storeTip: 'storeTip',
      goBack: 'goToMain'
    }
  }
}
</script>
