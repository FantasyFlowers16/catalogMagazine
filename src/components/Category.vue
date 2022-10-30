<template>
  <div class="categiries">
    <div class="categiries__item category"  v-for="category in Categories " :key="category.id">
      <img class="category__img" v-if="category.img" />
      <div class="category__no-img"></div>
      <div class="category__text-block">
        <div class="category__title">{{category.name}}</div>
        <div class="category__count">{{category.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const Categories = [
      {
        name: 'Название категории',
        id: 1,
        count: 132,
        img: null
      },
      {
        name: 'Название категории',
        id: 2,
        count: 23,
        img: null
      },
      {
        name: 'Название категории',
        id: 3,
        count: 34,
        img: null
      },
      {
        name: 'Название категории',
        id: 4,
        count: 5,
        img: null
      },
      {
        name: 'Название категории',
        id: 5,
        count: 78,
        img: null
      }
    ]
    return { Categories }
  }
}
</script>

<style lang="scss">
@import '../styles/vars.scss';
.categiries{
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  &__item{
    width: calc(50% - 20px);
    display: flex;
    padding-right: 40px;
    border-left: 1px solid $gray;
    border-radius: 3px;
    margin-bottom: 40px;
    transition: background .3s ease ;
    cursor:pointer;
    &:hover{
      background: $yellow2;
    }
  }
}
.category{
  &__no-img{
    background: $grayImg;
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 3px;
  }
  &__text-block{
    margin-left: 20px;
  }
}
@media screen and (min-width: 1280px) {
  .categiries{
    overflow: auto;
    flex-wrap: nowrap;
    &::before{
      content: '';
      display: block;
      position: absolute;
      background: linear-gradient(269.76deg, #FFFFFF 62.83%, rgba(255, 255, 255, 0) 145.7%);
      height: 100%;
      width: 154px;
      z-index: 10;
      top:0;
      right: 0;
    }
    &__item{
      min-width: 20%;
      width: 20%;
      padding: 0 20px;
      border-left: 1px solid $gray;
      margin-bottom: 0;
      &:first-child, &:nth-child(5n+1){
        padding-left: 0;
      }
    }
  }
}
</style>
