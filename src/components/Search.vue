<template>
  <div class="search-block">
    <div class="search-block__input-container">
      <input  type="text" name="text"  class="search-block__input text-input text-input--search" v-model="searchText" />
      <div class="search-block__delete" :v-if="!isFulSearch" @click="clearSearch"></div>
    </div>
    <div class="search-block__btn-container">
      <button class="search-block__search btn btn--yellow">Найти</button>
      <button class="search-block__close btn btn--transparent">Закрыть</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  setup () {
    const searchText = ref('Запрос пользователя')
    const isFulSearch = ref(false)
    watch(searchText, () => {
      if (searchText.value) {
        isFulSearch.value = true
      } else isFulSearch.value = false
    })
    const clearSearch = () => {
      searchText.value = ''
    }
    return {
      searchText, isFulSearch, clearSearch
    }
  }
}
</script>

<style lang="scss">
@import '../styles/controls.scss';
.search-block{
  position: relative;
  margin-top: 32px;
  width: 100%;
  &__input{
    width: 100%;
    padding-right: 30px;
  }
  &__search{
    width: 145px;
  }
  &__close{
    width: 117px;
    margin-left: 11px;
  }
  &__btn-container{
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
  }
  &__delete{
    position: absolute;
    width: 10px;
    height: 10px;
    background-image: url(../assets/svg/cross.svg);
    right: 12px;
    opacity: .7;
    transition: opacity .15s ease;
    cursor:pointer;
    top: 14px;
    &:hover{
      opacity: 1
    }
  }
  &__input-container{
    position: relative;
    width: 100%;
    &:before{
      content: '';
      display: block;
      background-image: url(../assets/svg/search.svg);
      width: 17px;
      height: 17px;
      position: absolute;
      left: 16px;
      top: 11px;
      z-index: 10;
    }
    &:after{
      content: '';
      display: block;
      height: 16px;
      width: 1px;
      position: absolute;
      background-color: $black;
      opacity: .5;
      z-index: 10;
      left: 45px;
      top: 12px;
    }
  }
}
@media screen and (min-width: 1280px) {
  .search-block{
    display: flex;
    &__btn-container{
      margin-top: 0;
      width: auto;
      justify-content: flex-start;
    }
  }
}
</style>
