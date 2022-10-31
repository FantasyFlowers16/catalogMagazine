<template>
  <div class="filter-categoties">
    <div class="filter-categoties__title">Все категории</div>
    <router-link :to="category.link" class="filter-categoties__link" v-for="category in filteredCategory" :key="category.id">
      {{category.name}} ({{category.count}})
    </router-link>
    <div :class="{_hidden: openedCategory}" class="filter-categoties__link" @click="visibleCategory">Ещё {{countcategory}} категорий...</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup () {
    const maxCategory = ref(9)
    const filteredCategory = computed(() => categories.filter((el, ind) => ind < maxCategory.value))
    const openedCategory = ref(false)
    const categories = [
      {
        name: 'Категория в которой нашли что-то',
        id: 1,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 2,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 3,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 4,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 5,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 6,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 7,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 8,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 9,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 10,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 20,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 30,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 40,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 50,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 60,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 70,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 80,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 90,
        link: '#',
        count: 'xx'
      },
      {
        name: 'Категория в которой нашли что-то',
        id: 100,
        link: '#',
        count: 'xx'
      }
    ]
    const countcategory = ref(Number(categories.length) - Number(maxCategory.value) - 1)
    const visibleCategory = () => {
      maxCategory.value = 10000
      openedCategory.value = true
    }
    return { categories, maxCategory, filteredCategory, countcategory, openedCategory, visibleCategory }
  }
}
</script>

<style lang="scss">
@import '../../styles/vars.scss';
.filter-categoties{
  &__title{
    font: 400 14px/16px 'Arial',sans-serif;
    margin-bottom: 11px;
  }
  &__link{
    font: 400 14px/16px 'Arial',sans-serif;
    color: $link;
    display: block;
    text-decoration: none;
    margin-bottom: 10px;
    transition: color .15s ease;
    &:hover{
      color:$linkDark
    }
    &._hidden{
      display: none;
    }
  }
}
</style>
