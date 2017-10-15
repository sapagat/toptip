<template>
  <page-layout>
    <template slot="header">
      <button id="cancel_button" class="button is-primary is-inverted Cancel-button" @click="goBack">X</button>
    </template>

    <template slot="content">
      <tip-form></tip-form>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/PageLayout'
import TipForm from '../components/TipForm'

export default {
  name: 'app',

  components: {
    PageLayout,
    TipForm
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.Cancel-button {
  font-size: 2em;
}
</style>
