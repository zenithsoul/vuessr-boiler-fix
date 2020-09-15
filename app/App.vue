<template>
  <div :class="$style.wrapper">
    <div :class="$style.shortcut">SC</div>
    <div :class="$style.container"><router-view></router-view></div>
    <div :class="$style.status">Status Bar</div>
  </div>
</template>

<style lang="scss" module>
  @import "./src/styles/_variables.scss";

  .wrapper{
    margin: auto;
    width: 1362px;
    height: 100vh;
    
    display: flex;
    flex-direction: row;
    
    border-left: #858585 solid 1px;
    border-right: #858585 solid 1px;

    justify-content: center;
  }

  .shortcut{
    width: 50px;

    display: flex;
    justify-content: center;

    padding: 10px;
  }
  .container{
    width: 1000px;

    border-left: #b3b3b3 solid 1px;
    border-right: #b3b3b3 solid 1px;

    display: flex;
    justify-content: center;

    padding: 10px;
  }

  .status{
    width: 310px;

    display: flex;
    justify-content: center;

    padding: 10px;
  }
</style>
