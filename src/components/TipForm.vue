<template>
  <div class="Form">
    <input id="name" type="text" class="input Field" placeholder="What is the place?"></input>
    <input id="address" type="text" class="input Field" placeholder="Where is it?"></input>
    <input id="message" type="text" class="input Field" placeholder="What's the advice?"></input>
    <input id="advisor" type="text" class="input Field" placeholder="Who told you?"></input>
  </div>
</template>

<style>
.Form {
  padding: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Field {
  margin: 1em 0;
}
</style>
