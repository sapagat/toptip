<template>
  <page-layout>
    <template slot="header">
      <div class="Title">
        <h1 class="title">Tips</h1>
      </div>
    </template>

    <template slot="content">
      <tip-list></tip-list>
      <add-button :onClick="goToRegistry"></add-button>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/PageLayout'
import TipList from '../components/TipList'
import AddButton from '../components/AddButton'

export default {
  name: 'app',

  components: {
    PageLayout,
    TipList,
    AddButton
  },

  methods: {
    goToRegistry () {
      this.$router.push('/registry')
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
