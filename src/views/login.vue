<template>
  <div class="login">
    <div class="container">
      <el-form
        ref="userform"
        :model="userform"
        :rules = "rules"
      >
      <img class="avatar" src="../assets/u=1522420942,2324605756&fm=26&gp=0.jpg" alt="">
        <el-form-item prop="username">
          <el-input v-model="userform.username" prefix-icon="myicon myicon-user" placeholder="用户"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input type="password" v-model="userform.password" prefix-icon="myicon myicon-key" placeholder="密码" ></el-input>
        </el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="loginbtn('userform')"
        >主要按钮</el-button>
      </el-form>
    </div>

  </div>
</template>

<script>
// 引入login
import {login} from '@/api/index.js'
export default {
  data () {
    return {
      userform: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    loginbtn (formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          login(this.userform).then((result) => {
            if (result.meta.status === 200) {
              localStorage.setItem('itcastToken', result.data.token)
              this.$router.push({name: 'Home'})
            } else {
              this.$message.error(result.meta.msg)
            }
          })
        } else {
          this.$message.error('错了哦，这是一条错误消息')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
        .login {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #2f4050;

    .container {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 0px 40px 15px 40px;
        margin: 200px auto;
        background: white;
        .avatar {
        position: relative;
        left: 50%;
        width: 120px;
        height: 120px;
        margin-left: -60px;
        margin-top: -60px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 10px solid #fff;
        box-shadow: 0 1px 5px #ccc;
        overflow: hidden;
        }
        .login-btn {
        width: 100%;
        }
    }
}
</style>
