<template>
  <div class="TipCard">
    <span class="TipCard-header">{{tip.name }}</span>
    <span class="TipCard-address">{{tip.address}}</span>
    <div class="TipCard-advise">
      <p class="Advise-message">{{tip.message}}</p>
    </div>
    <span class="TipCard-advisor">{{tip.advisor}}</span>
  </div>
</template>

<script>
export default {
  name: 'tip-card',
  props: ['tip']

}
</script>

<style>
.TipCard {
  margin: .875em .5em;
  padding: 1em;

  box-shadow: 0 1px 3px 0 #d4d4d5;
  border-top: 1px solid rgba(34,36,38,.1);
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

.Advise-message:before {
    content: open-quote;
}
.Advise-message:after {
    content: close-quote;
}

.TipCard-advisor {
  float: right;

  font-weight: bold;
}
</style>