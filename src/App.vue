<template>
  <div class="Page">
    <div class="Header">
      <h1 class="title">Tips</h1>
    </div>

    <div class="Content">
      <tip-list></tip-list>
      <div class="Trigger-container">
        <div class="button is-primary Trigger-button">+</div>
      </div>
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
.Page {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

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

.Trigger-container {
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 70px;
}

.Trigger-button {
  float: right;

  margin-right: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;

  box-shadow: 0px 2px 5px #666;

  font-size: 2em;
}
</style>
