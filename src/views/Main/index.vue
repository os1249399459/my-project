<template>
  <el-container>
    <el-aside> <common-aside></common-aside></el-aside>
    <el-container>
      <el-header>
        <common-header/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../../components/CommonAside.vue";
import CommonHeader from "../../components/CommonHeader.vue";
export default {
  components: { CommonAside, CommonHeader},
  name: "Main",
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background: black;
}
</style>
