<template>
  <div class="filter-categoties">
    <div class="filter-categoties__title">Все категории</div>
    <router-link :to="category.link" class="filter-categoties__link" v-for="category in categories" :key="category.id">
      {{category.name}} ({{category.count}})
    </router-link>
    <div class="filter-categoties__link">Ещё 10 категорий...</div>
  </div>
</template>

<script>
export default {
  setup () {
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
      }
    ]
    return { categories }
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
  }
}
</style>
