<template>
  <div class="img-content"></div>
</template>

<script>
export default {
  name: "ImgContent",
};
</script>

<style lang="scss" scoped>
.img-content {
  background-image: url(@/assets/img/yellow.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  overflow: hidden;
  position: relative;
}
</style>
