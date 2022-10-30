<template>
  <div class="search-text">
    <h3>Результаты по запросу</h3>
    <p class="search-text__small">Показаны результаты для “Запрос пользозвателя”. Вы искали<i> “Зопрос пользователя”</i>.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../styles/text.scss';
@import '../styles/vars.scss';
.search-text{
  margin-top: 31px;
  &__small {
    color: $gray2;
  }
}
@media screen and (min-width: 1280px) {
  .search-text{
    display: flex;
    align-items: center;
    &__small {
      margin-left: 19px;
    }
  }
}
</style>
