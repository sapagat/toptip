<template>
  <div class="TipCard">
    <div @click="review" class="TipCard-reviewButton">
      <i class="fa fa-pencil-square-o"></i>
    </div>
    <span class="TipCard-header">{{tip.name }}</span>
    <span class="TipCard-address">{{tip.address}}</span>
    <div class="TipCard-advise">
      <p>{{quotedMessage}}</p>
    </div>
    <span class="TipCard-advisor">{{tip.advisor}}</span>
  </div>
</template>

<script>
export default {
  name: 'tip-card',
  props: ['tip'],

  computed: {
    quotedMessage () {
      if (!this.tip.message) return

      return `"${this.tip.message}"`
    }
  },

  methods: {
    review () {
      this.$emit('review')
    }
  }
}
</script>

<style>
.TipCard {
  margin: .875em .5em;
  padding: 1em;

  box-shadow: 0 1px 3px 0 #d4d4d5;
  border-top: 1px solid rgba(34,36,38,.1);
}

.TipCard-reviewButton {
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