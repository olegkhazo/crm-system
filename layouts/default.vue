<template>
  <section class="grid" style="min-height: 100vh">
    <LayoutSidebar />
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
console.log("Setup");
</script>

<style scoped>
.grid {
  display: grid;
  background-color: aliceblue;
  grid-template-columns: 1fr 6fr;
}
</style>
