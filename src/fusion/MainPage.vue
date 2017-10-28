<template>
  <main-page
    :tips="tips"
  >
  </main-page>
</template>

<script>
import MainPage from '../components/MainPage'
import MainCore from '../core/MainCore'
import fusion from './fusion'

export default {
  name: 'main',
  mixins: [ fusion ],
  components: { MainPage },

  beforeCreate () {
    this.core = new MainCore()
    this.events = {
      goToRegistry: 'goToRegistry',
      goToReview: 'goToReview'
    }
  }
}
</script>
