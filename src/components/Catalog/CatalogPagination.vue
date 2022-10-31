<template>
  <div class="pagination">
    <div v-for="page in pages"
    :key="page.id"
    :class="{'pagination__item': page.type===1,'pagination__symbol': page.type===2,_active:activePage === page.id}"
    @click="selectPage(page.id)"
    >
      {{page.name}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const activePage = ref(1)
    const pages = [
      {
        type: 1,
        name: '1',
        id: 1
      },
      {
        type: 1,
        name: '2',
        id: 2
      },
      {
        type: 2,
        name: '...',
        id: 3
      },
      {
        type: 1,
        name: '13',
        id: 4
      }
    ]
    const selectPage = (id) => {
      activePage.value = id
      // какие-то запросы на сервер для обновленного списка
    }
    return { pages, activePage, selectPage }
  }
}
</script>

<style lang="scss">
.pagination{
  margin-top: 41px;
  display: flex;
  &__symbol{
    margin: 0 6px 0 10px;
  }
  &__item{
    font: 400 16px/18px 'Arial',sans-serif;
    margin-left: 10px;
    transition: opacity .15s ease;
    cursor: pointer;
    opacity: .5;
    &._active{
      opacity: 1;
    }
    &:hover{
      opacity: 1;
    }
  }
}
</style>
