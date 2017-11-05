<template>
  <page-layout>
    <template slot="header">
      <div class="Title">
        <h1 class="title">Tips</h1>
      </div>
    </template>

    <template slot="content">
      <tip-list :tips="tips" @openMenu="openMenu"></tip-list>
      <add-button :onClick="goToRegistry"></add-button>
      <tip-menu
        v-if="menuOpen"
        :tipId="menuTipId"
        @deleteTip="deleteTip"
        @goToReview="goToReview"
        @close="closeMenu"
      >
      </tip-menu>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/Page'
import TipList from './TipList'
import AddButton from './AddButton'
import TipMenu from './TipMenu'

export default {
  name: 'main-page',
  props: ['tips'],

  components: {
    PageLayout,
    TipList,
    AddButton,
    TipMenu
  },

  data () {
    return {
      menuTipId: undefined,
      menuOpen: false
    }
  },

  methods: {
    goToRegistry () {
      this.$emit('goToRegistry')
    },

    openMenu (event) {
      this.menuTipId = event.id
      this.menuOpen = true
    },

    closeMenu () {
      this.menuOpen = false
    },

    goToReview (event) {
      this.$emit('goToReview', event)
    },

    deleteTip (event) {
      this.closeMenu()
      this.$emit('deleteTip', event)
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
