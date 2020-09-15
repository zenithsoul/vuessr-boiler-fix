<template>
  <div :class="$style.design_one_continar">
    <div :class="$style.design_one_flexleft">
      <img width="180px" height="120" src="/image/Design_1.png">
    </div>
    <div :class="$style.design_one_flexright">
      <h1 :class="$style.design_one_h1">อั้ม รับไม่ไหว ขออันฟอลโลว์ เอ ศุภชัย หลังแต่งรูปเกินจริง !!! อั้ม รับไม่ไหว ขออันฟอลโลว์ เอ ศุภชัย หลังแต่งรูปเกินจริง !!!</h1>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" module>
  .design_one_continar {
    display: flex;
    width: 980px;
  }
  .design_one_flexleft {
    display: flex;
    flex-direction: column;
    width: 190px;
  }
  .design_one_flexright {
    display: flex;
    flex-direction: column;
    width: 790px;
  }
  .design_one_h1 {
    font-size: 18px;
  }
</style>

