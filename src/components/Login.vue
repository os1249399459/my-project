<template>
  <div id="app">
    <el-form :model="form" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name"></el-input
      ></el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input
      ></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.go("home")
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
