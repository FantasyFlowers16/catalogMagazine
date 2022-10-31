<template>
  <div class="catalog">
    <div class="catalog__points">
      <div class="catalog__point" v-for="point in points" :key="point.ind">{{point.name}}</div>
    </div>
    <div class="catalog__list">
      <div class="catalog__list-item catalog-item" v-for="item in catalog" :key="item.id">
        <img class="catalog-item__img" v-if="item.img" />
        <div v-else class="catalog-item__no-img"></div>
        <div class="catalog-item__title">{{item.title}}</div>
        <div class="catalog-item__price-container">
          <div class="catalog-item__price">{{item.summ}}</div>
          <div v-if="item.oldSumm" class="catalog-item__old-price">{{item.oldSumm}}</div>
        </div>
        <button class="catalog-item__btn btn btn--yellow">Кнопка</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const points = [
      {
        name: 'Уточнение',
        id: 1
      },
      {
        name: 'Уточнение',
        id: 2
      },
      {
        name: 'Уточнение',
        id: 3
      },
      {
        name: 'Уточнение',
        id: 4
      }
    ]
    const catalog = [
      {
        id: 1,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 2,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 3,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 4,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 5,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 6,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 66,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 7,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 77,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 8,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 9,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 10,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      },
      {
        id: 11,
        title: 'Наименование товара, которое не более 2 строк',
        img: null,
        summ: 'ХХ ХХХ , $',
        oldSumm: 'ХХ ХХХ $'
      }
    ]
    return { points, catalog }
  }
}
</script>

<style lang="scss">
@import '../../styles/vars.scss';
@import '../../styles/controls.scss';
.catalog{
  &__points{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  &__point{
    cursor: pointer;
    margin-right: 10px;
    padding: 7px 15px;
    background: $yellow2;
    margin-bottom: 5px;
    color: $black;
    border-radius: 3px;
    font: 400 14px/16px 'Open Sans',sans-serif;
    transition: background .3s ease;
    &:hover{
      background: $yellow;
    }
  }
  &__list{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 20px;
  }
}
.catalog-item{
  width: calc(50% - 20px);
  transition: transform .3s ease,  box-shadow .3s ease, padding .3s ease;
  &:hover{
    padding: 5px;
    transform: scale(1.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  &__no-img{
    width: 100%;
    height: 0;
    background: $grayImg;
    border-radius: 3px;
    padding-top: 100%;
  }
  &__title{
    font: 400 14px/18px 'Open Sans',sans-serif;
    margin-top: 10px;
  }
  &__price-container{
    display: flex;
    margin-top:18px
  }
  &__btn{
    width: 100%;
    margin-top:15px;
    border-radius: 3px;
  }
  &__price{
    font: 400 16px/16px 'Open Sans',sans-serif;
  }
  &__old-price{
    color: $grayTxt;
    font: 400 14px/16px 'Open Sans',sans-serif;
    margin-left:16px;
  }
}

@media screen and (min-width: 768px) {
  .catalog{
    &__list{
      gap: 44px;
    }
  }
  .catalog-item{
    width: calc(33.33% - 30px);
  }
}
</style>
