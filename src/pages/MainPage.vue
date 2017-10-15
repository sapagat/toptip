<template>
  <page-layout>
    <template slot="header">
      <h1 class="title">Tips</h1>
    </template>

    <template slot="content">
      <tip-list></tip-list>
      <add-button></add-button>
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
  }
}
</script>
