<template>
  <div class="filter">
    <Category />
    <Price />
    <Brand />
  </div>
</template>

<script>
import Category from './CatalogFilterCatagory.vue'
import Price from './CatalogFilterPrice.vue'
import Brand from './CatalogFilterBrand.vue'
export default {
  components: {
    Category,
    Price,
    Brand
  }
}
</script>

<style lang="scss">
.filter{
  min-width: 290px;
  margin-right: 40px;
}
</style>
