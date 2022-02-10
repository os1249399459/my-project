<template>
  <el-form :model="form" ref='form' :rules="rules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="form.name"></el-input
    ></el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password"></el-input
    ></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">登录</el-button>
    </el-form-item>
  </el-form>
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
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log("submit!");
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
#app {
  display: flex;
}
</style>
