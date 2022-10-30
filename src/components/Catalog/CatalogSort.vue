<template>
  <div class="sort-block">
    <div class="sort">
        <span class="sort__title">Сортировать по:</span>
        <span class="sort__item" @click="selectSort(point.id)" :class="{_active: point.id===activeSort}" v-for="point in sortingPoints" :key="point.id">{{point.name}}</span>
    </div>
    <div class="pages">показывать по
      <select class="select  pages__select" name="select"> <!--Supplement an id here instead of using 'name'-->
        <option value="24">24</option>
        <option value="50" selected>50</option>
        <option value="100">100</option>
      </select>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const activeSort = ref(1)
    const sortingPoints = ref([
      {
        name: 'популярности',
        id: 1
      },
      {
        name: 'сначала дешевые',
        id: 2
      },
      {
        name: 'сначала дорогие',
        id: 3
      }
    ])
    const selectSort = (ind) => {
      activeSort.value = ind
    }
    return { activeSort, sortingPoints, selectSort }
  }

}
</script>

<style lang="scss">
@import '../../styles/vars.scss';
@import '../../styles/controls.scss';
.sort-block{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pages{
  font: 400 14px/19px 'Open Sans',sans-serif;
  &__select{
    margin-left: 10px
  }
}
.sort{
  font: 400 14px/19px 'Open Sans',sans-serif;
  &__title{
    padding-right: 10px;
  }
  &__item{
    cursor:pointer;
    margin-right: 15px;
    color:$link;
    position: relative;
    transition: color .15s ease;
    &:hover{
      color:$linkDark;
    }
    &:before{
        content:'';
        position: absolute;
        transition: opacity .15s ease;
        width: 100%;
        height: 1px;
        background: $yellow;
        bottom: -2px;
        opacity: 0;
    }
    &._active{
      color:$dark;
      &:before{
        opacity: 1;
      }
    }
  }
}
</style>
