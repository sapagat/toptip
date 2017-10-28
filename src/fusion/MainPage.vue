<template>
  <main-page
    :tips="tips"
  >
  </main-page>
</template>

<script>
import MainPage from '../components/MainPage'
import MainNucleus from '../nucleus/MainNucleus'
import Bus from '../infrastructure/Bus'
import fusion from './fusion'

export default {
  name: 'main',
  mixins: [ fusion ],
  components: { MainPage },

  beforeCreate () {
    this.nucleus = new MainNucleus(Bus)
    this.events = {
      goToRegistry: 'goToRegistry',
      goToReview: 'goToReview'
    }
  }
}
</script>
