<template>
  <div class="catalog">
    <CatalogSort />
    <CatalogList />
  </div>
</template>

<script>
import CatalogSort from './CatalogSort.vue'
import CatalogList from './CatalogList.vue'
export default {
  components: {
    CatalogSort,
    CatalogList
  }
}
</script>

<style  lang="scss">
.catalog{
  width: 100%;
}
</style>
