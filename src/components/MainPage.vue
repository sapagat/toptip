<template>
  <page-layout>
    <template slot="header">
      <div class="Title">
        <h1 class="title">Tips</h1>
      </div>
    </template>

    <template slot="content">
      <tip-list :tips="tips" @review="goToReview"></tip-list>
      <add-button :onClick="goToRegistry"></add-button>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/PageLayout'
import TipList from './TipList'
import AddButton from './AddButton'

export default {
  name: 'main-page',
  props: ['tips'],

  components: {
    PageLayout,
    TipList,
    AddButton
  },

  methods: {
    goToRegistry () {
      this.$emit('goToRegistry')
    },

    goToReview (event) {
      this.$emit('goToReview', event)
    }
  }
}
</script>

<style>
.Title {
  width: 100%;
  text-align: center;
}
</style>
