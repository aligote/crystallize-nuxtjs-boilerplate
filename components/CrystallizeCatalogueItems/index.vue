<template>
  <ul v-if="items" class="items">
    <li v-for="item in items" :key="item.id" class="item">
      <Product v-if="item.type === 'product'" :data="item" />
      <FolderOrDocument v-else :data="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>
.items {
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
}

.item {
  margin: 0 0 15px;
  display: block;
}

@media (min-width: 768px) {
  .items {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 1rem;
  }

  .item {
    grid-column-end: span 4;
    margin: 0;
  }
}
</style>
