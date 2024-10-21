<template>
  <footer>
    <slot name="title"><span></span></slot>
    <slot name="description"><p></p></slot>
  </footer>
</template>

<style scoped>
span {
  color: red;
}
p {
  color: blue;
}
</style>
