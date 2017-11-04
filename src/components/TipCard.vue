<template>
  <div class="TipCard">
    <div class="TipCard-content">
      <div @click="openMenu" class="TipCard-menuButton">
        <i class="fa fa-chevron-down"></i>
      </div>
      <span class="TipCard-header">{{tip.name }}</span>
      <span class="TipCard-address">{{tip.address}}</span>
      <div class="TipCard-advise">
        <p>{{advise}}</p>
      </div>
      <span class="TipCard-advisor">{{tip.advisor}}</span>
    </div>

    <div v-if="tip.reaction" class="TipCard-footer">
      <span>{{reaction}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tip-card',
  props: ['tip'],

  computed: {
    advise () {
      return this.quote(this.tip.message)
    },

    reaction () {
      return this.quote(this.tip.reaction)
    }
  },

  methods: {
    openMenu () {
      this.$emit('openMenu', {id: this.tip.id})
    },

    quote (message) {
      if (!message) return

      return `"${message}"`
    }
  }
}
</script>

<style>
.TipCard {
  margin: .875em .5em;

  box-shadow: 0 1px 3px 0 #d4d4d5;
  border-top: 1px solid rgba(34,36,38,.1);
}

.TipCard-content {
  padding: 1em;
  margin-bottom: 30px;
}

.TipCard-footer {
  padding: 1em;

  border-top: 1px solid rgba(34,36,38,.1);
}

.TipCard-menuButton {
  float: right;
}

.TipCard-header {
  display: block;

  color: rgba(0,0,0,.85);
  transition: color .1s ease;

  font-weight: 700;
  font-size: 1.28571429em;
  line-height: 1.28571429em;
}

.TipCard-address {
  margin: .7em 0;

  color: rgba(0,0,0,.4);

  font-size: 1em;
}

.TipCard-advise {
  padding: .5em 0;
}

.TipCard-advisor {
  float: right;

  font-weight: bold;
}
</style>
