<template>
  <button class="wl-button">
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'WlButton'
}
</script>

<style lang="scss" scoped>
.wl-button {
  border-width: 1px;
  border-style: solid;
  padding: 10px 36px;
  font-size: 13px;
  border-radius: 5px;
  background-color: #fff;
}

.wl-button,
.wl-button:hover,
.wl-button:active {
  display: inline-block;
  cursor: pointer;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  text-decoration: none;
}
</style>