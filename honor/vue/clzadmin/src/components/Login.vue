<template>
  <div class="login-container">
    <el-row>
      <el-col :span="8" :offset="8">
        <h1 class="page-title">菜篮子管理系统</h1>
        <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login-form" :rules="rules">
          <el-form-item label="手机号码" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Button, Row, Col,Form,Input,FormItem } from 'element-ui';
import axios from 'axios';

export default {
  name: 'Login',
  data(){
    let validateTel = (rule, value, callback) => {
      if (!value.match(/1[3456789]\d{9}/)) {
        callback(new Error("请输入正确的手机号码！"))
      } else {
        callback()
      }
    }
    return {
      loginForm:{
        username: '',
        password: ''
      },
      rules: {
        username:[
          {required:true,message:'请输入手机号码！',trigger: 'blur'},
          {validator: validateTel, trigger:'blur'}
        ],
        password: [
          {required:true,message:'请输入手机号码！',trigger: 'blur'},
          {min: 6, max: 18, message:"密码长度6~18位",trigger:'blur'}
        ]
      }
    }
  },
  props: {
  },
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Input.name]: Input,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
  },
  methods: {
    onSubmit(){
      this.$refs['loginForm'].validate(valid => {
        if(!valid){
          console.log('验证失败');
          return
        } else {
          var params = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
        }
        axios.post('http:127.0.0.1:8000/cms/login',params).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
body {
  background: #eee;
}
.login-container{
  margin-top: 40px;
  .page-title{
    text-align: center;
  }
  .login-form{
    margin-top: 10px;
  }
  
}
</style>
