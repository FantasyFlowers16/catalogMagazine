<template>
  <div class="main">
      <Search />
      <SearchText />
      <Category />
      <div class="main-content">
        <CatalogFilter />
        <Catalog />

      </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import SearchText from '../components/SearchText.vue'
import Category from '../components/Category.vue'
import CatalogFilter from '../components/CatalogFilter/CatalogFilter.vue'
import Catalog from '../components/Catalog/Catalog.vue'

export default {
  name: 'Home',
  components: {
    Search,
    SearchText,
    Category,
    CatalogFilter,
    Catalog
  }
}
</script>
<style lang="scss">
.main-content{
  margin-top: 39px;
}
@media screen and (min-width: 1280px) {
  .main-content{
    display: flex;
    margin-top: 39px;
  }
}
</style>
