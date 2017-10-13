<template>
  <div>
    <div class="Header">
      <h1 class="title">Tips</h1>
    </div>

    <div class="Content">
      <tip-list></tip-list>
    </div>
  </div>
</template>

<script>
import TipList from './components/TipList'

export default {
  name: 'app',

  components: {
    TipList
  }
}
</script>

<style>
.Header {
  height: 60px;
  margin: 10px 0;
  vertical-align: middle;

  text-align: center;
}

.Content {
  padding: 0.3em;
}
</style>
