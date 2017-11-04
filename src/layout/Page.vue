<template>
  <div class="Page">
    <div class="Header">
      <slot name="header"></slot>
    </div>

    <div class="Content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

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
  display: flex;
  align-items: center;

  box-shadow:
    0 2px 4px 0 rgba(216,221,223,0.59),
    0 2px 4px 0 rgba(235,237,238,0.5);


  background-color: #ffffff;
}

.Content {
  margin: 50px 0;
  padding: 0.3em;
}
</style>
