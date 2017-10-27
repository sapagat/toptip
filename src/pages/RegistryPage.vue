<template>
  <page-layout>
    <template slot="header">
      <div class="Actions">
        <button id="cancel_button" class="button is-primary is-inverted Cancel-button" @click="goBack">X</button>
        <button id="save_button" class="button is-primary" @click="saveTip" :disabled="!submitable">Save</button>
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
import Bus from '../infrastructure/Bus'

export default {
  name: 'registry-page',

  props: ['tip'],

  components: {
    PageLayout,
    TipForm
  },

  computed: {
    submitable () {
      if (this.isEmpty(this.tip.name)) return false
      if (this.isEmpty(this.tip.address)) return false

      return true
    }
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    },

    goToMain () {
      this.$router.push('/')
    },

    saveTip () {
      Bus.publish('tips', 'store.tip', { tip: this.tip })
    },

    isEmpty (field) {
      return field === undefined || field === ''
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
