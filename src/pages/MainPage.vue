<template>
  <page-layout>
    <template slot="header">
      <div class="Title">
        <h1 class="title">Tips</h1>
      </div>
    </template>

    <template slot="content">
      <tip-list :tips="tips"></tip-list>
      <add-button :onClick="goToRegistry"></add-button>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/PageLayout'
import TipList from '../components/TipList'
import AddButton from '../components/AddButton'
import Bus from '../infrastructure/Bus'

export default {
  name: 'app',

  components: {
    PageLayout,
    TipList,
    AddButton
  },

  data () {
    return {
      tips: []
    }
  },

  mounted () {
    this.subscribe()
    this.start()
  },

  methods: {
    subscribe () {
      Bus.subscribe('tips', 'list.ready', (tips) => {
        this.tips = tips
      })
    },

    start () {
      Bus.publish('tips', 'fetch.list')
    },

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
