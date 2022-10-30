<template>
  <div class="brands">
    <div class="brands__title-block">
      <div class="brands__title">Бренды</div>
      <div class="brands__clear" @click="clearBrands">Очистить</div>
    </div>
    <div class="brands__list">
      <div class="brands__item" v-for="brand in brands" :key="brand.id">
        <input v-model="brand.check" class="checkbox" type="checkbox" :id="'check' + brand.id" />
        <label class="brands__label" :for="'check' + brand.id"> {{brand.name}} <span class="brands__item-count">({{brand.count}})</span></label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const brands = ref([
      {
        name: 'Бренд',
        id: 1,
        link: '#',
        count: 'xx',
        check: false
      },
      {
        name: 'Бренд',
        id: 2,
        link: '#',
        count: 'x',
        check: false
      },
      {
        name: 'Бренд',
        id: 3,
        link: '#',
        count: 'xx',
        check: false
      }
    ])

    const clearBrands = () => {
      brands.value.forEach(el => { el.check = false })
    }
    return { brands, clearBrands }
  }
}
</script>

<style lang="scss">
@import '../../styles/vars.scss';
@import '../../styles/controls.scss';
.brands{
  margin-top: 27px;
  &__title-block{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title{
    font: 700 14px/19px 'Arial',sans-serif;
    margin-bottom: 15px;
  }
  &__label{
    cursor: pointer;
  }
  &__clear{
    text-decoration-line: underline;
    color: $dark;
    opacity: 0.5;
    font: 400 10px/11px 'Arial',sans-serif;
    cursor: pointer
  }
  &__item-count{
    color: $gray;
    font: 400 12px/12px 'Arial',sans-serif;
  }
  &__item{
    margin-bottom: 14px
  }
}
</style>
