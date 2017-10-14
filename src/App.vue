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
  position: fixed;
  top: 0;

  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
}

.Content {
  margin: 50px 0;
  padding: 0.3em;
}
</style>
