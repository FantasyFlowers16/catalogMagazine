<template>
  <div class="price">
    <div class="price__title">Цена, валюта</div>
    <div class="price__inputs">
      <span class="price__input-text">от</span>
      <input  class="text-input price__input" type="text" v-model="value[0]"  />
      <span class="price__input-text">до</span>
      <input type="text" class="text-input price__input" v-model="value[1]"/>
      <span  class="price__input-text">P</span>
    </div>
    <vue-range-slider ref="slider" v-model="value"></vue-range-slider>
  </div>
</template>

<script>
import { ref } from 'vue'
import VueRangeSlider from 'vue-range-component'
import 'vue-range-component/dist/vue-range-slider.css'

export default {
  components: { VueRangeSlider },
  setup () {
    const value = ref([0, 100])
    return { value }
  }
}
</script>

<style lang="scss">
@import '../../styles/vars.scss';
@import '../../styles/controls.scss';

.vue-range-slider.slider-component .slider .slider-process{
  background-color: $black;
}
.vue-range-slider.slider-component .slider .slider-dot{
  box-shadow: none;
  border: 1px solid $black
}
.vue-range-slider.slider-component .slider .slider-dot.slider-always .slider-tooltip-wrap{
  display: none!important;
}
.price{
  &__inputs{
    display: flex;
    align-items: center;
  }
  &__title{
    font: 700 14px/16px 'Open Sans',sans-serif;
    margin-bottom: 16px;
  }
  &__input{
    max-width: 110px;
    margin-bottom: 14px;
  }
  &__input-text{
    opacity: .5;
    font: 400 12px/14px 'Open Sans',sans-serif;
    padding:  0 10px 0 9px;
    &:first-child{
      padding-left: 0
    }
    &:last-child{
      padding-right: 0;
    }
  }
}
</style>
