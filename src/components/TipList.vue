<template>
  <div class="TipList">
    <tip-card v-for="tip in tips" :key="tip.id" :tip="tip"></tip-card>
  </div>
</template>

<script>
import TipCard from './TipCard'

export default {
  name: 'tip-list',

  components: { TipCard },

  data () {
    return {
      tips: [
        { id: 1, name: 'Bar Aragon', address: 'Barón de San Petrillo (Beni)', advisor: 'Manel', message: 'You must try the handed ice' },
        { id: 2, name: 'Plaerdemavida', address: 'Compte d\'Altea', advisor: 'Eduardo Sebastian', message: 'Sassera, vino blanco' }
      ]
    }
  }
}
</script>

<style>
.TipList {
  max-width: 400px;
  overflow: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>