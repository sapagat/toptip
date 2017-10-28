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
import fusion from './fusion'

export default {
  name: 'registry',
  mixins: [fusion],
  components: { RegistryPage },

  beforeCreate () {
    this.nucleus = new RegistryNucleus()
    this.events = {
      storeTip: 'storeTip',
      goBack: 'goToMain'
    }
  }
}
</script>
