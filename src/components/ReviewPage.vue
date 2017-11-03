<template>
  <page-layout>
    <template slot="header">
      <div class="Actions">
        <button id="cancel_button" class="button is-primary is-inverted Cancel-button" @click="goBack">X</button>
        <button id="save_button" class="button is-primary" @click="saveReaction" :disabled="!saveable">Save</button>
      </div>
    </template>

    <template slot="content">
      <div class="Section">
        <h2 class="Section-title">Add your review</h2>
        <div class="Form">
          <input v-model="tip.reaction" type="text" class="input Field" placeholder="What's your reaction?">
        </div>
      </div>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../layout/Page'

export default {
  name: 'review-page',

  props: ['tip', 'saveable'],

  components: {
    PageLayout
  },

  methods: {
    goBack () {
      this.$emit('goBack')
    },

    saveReaction () {
      this.$emit('saveReaction')
    }
  }
}
</script>

<style scoped>
.Actions {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 1.4em;
}

.Cancel-button {
  padding: 0;

  font-size: 1.5em;
}

.Section {
  padding: 25px 5px;

  text-align: center;
}

.Section-title {
  color: #363636;

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.125;
}

.Form {
  padding: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Field {
  position: static;

  margin: 1em 0;
}
</style>
