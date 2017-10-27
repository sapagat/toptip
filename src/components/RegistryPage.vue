<template>
  <page-layout>
    <template slot="header">
      <div class="Actions">
        <button id="cancel_button" class="button is-primary is-inverted Cancel-button" @click="goBack">X</button>
        <button id="save_button" class="button is-primary" @click="saveTip" :disabled="!storable">Save</button>
      </div>
    </template>

    <template slot="content">
      <tip-form :tip=tip></tip-form>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/PageLayout'
import TipForm from '../components/TipForm'

export default {
  name: 'registry-page',

  props: ['tip', 'storable'],

  components: {
    PageLayout,
    TipForm
  },

  methods: {
    goBack () {
      this.$emit('goBack')
    },

    saveTip () {
      this.$emit('storeTip', { tip: this.tip })
    }
  }
}
</script>

<style>
.Actions {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 1.4em;
}

.Cancel-button {
  font-size: 1.5em;
  padding: 0;
}
</style>
