<template>
  <div class="catalog">
    <CatalogSort />
    <CatalogList />
    <CatalogPagination />
  </div>
</template>

<script>
import CatalogSort from './CatalogSort.vue'
import CatalogList from './CatalogList.vue'
import CatalogPagination from './CatalogPagination.vue'
export default {
  components: {
    CatalogSort,
    CatalogList,
    CatalogPagination
  }
}
</script>

<style  lang="scss">
.catalog{
  width: 100%;
}
</style>
