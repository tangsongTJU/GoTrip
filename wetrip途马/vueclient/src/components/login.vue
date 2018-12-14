<template>
  <div class="backlogin">
    <div class="login_box">
      <div class="title">途🐎旅游网登录</div>
      <div>
        <input class="myinput" type="text" placeholder="手机号/用户名" v-model="username" />
      </div>
      <div>
        <input @keyup.13="login" class="myinput" type="password" placeholder="口令" v-model="password" />
      </div>
      <div class="login_other">
        <a href="javascript:;">找回密码</a>
        <input type="checkbox" id="remenberme" /><label for="remenberme">记住我</label>
      </div>
      <button :disabled="disablebtn" class="login" @click="login">{{loginText}}</button>
      <br/><br/>
      <button class="login2" @click="tucao">我要吐槽</button>
      <button class="login2" @click="contact">联系我们</button>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'backlogin',
    data () {
      return {
        username:"admin",/*TODO:先预存测试值，以免手动输入*/
        password:"123456",
        disablebtn:false,
        loginText:"登录"
      }
    },
    methods:{
      tucao(){
        window.open("https://support.qq.com/products/48356")
      },
      contact(){//联系我们
        window.open("http://www.heshuhao.com");
      },
      login(){
        var _this = this;
        this.disablebtn = true;
        this.loginText = "登录中...";
        //this.$reqs就访问到了main.js中绑定的axios
        // this.$reqs.post("/users/login",{
        //   username:this.username,
        //   password:this.password
        // }).then(function(result){
        //   //成功
        //   console.log(result)
        //   _this.disablebtn = false;
        //   _this.loginText = "登录";
        //
        // }).catch(function (error) {
        //   //失败
        //   _this.disablebtn = false;
        //   _this.loginText = "登录"
        // });

        if (this.username==='admin'){
          this.$reqs.post("/users/login",{
            username:this.username,
            password:this.password
          }).then(function(result){
            //成功
            if(result.data.err){
              alert(result.data.err);
            }else{
              _this.$router.push({path:'/backIndex/indexContent'});
            }
            _this.disablebtn = false;
            _this.loginText = "登录";

          }).catch(function (error) {
            //失败
            _this.disablebtn = false;
            _this.loginText = "登录"
          });
        }else{//还没写完！！！！！！！！！！！！！！！
          this.$reqs.post("/users/login",{
            username:this.username,
            password:this.password
          }).then(function(result){
            //成功
            if(result.data.err){
              alert(result.data.err);
            }else{
              _this.$router.push({path:'/backIndex2'});
            }
            _this.disablebtn = false;
            _this.loginText = "登录";

          }).catch(function (error) {
            //失败
            _this.disablebtn = false;
            _this.loginText = "登录"
          });

        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*body{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-size:cover;*/
    /*background: #CCCCCC url(../assets/images/back.jpg) no-repeat fixed center center;*/
  /*}*/
  .backlogin{
    width: 100%;
    height: 100%;
    position: fixed;
    background-size:cover;
    background: #CCCCCC url(../assets/images/background.jpg) no-repeat fixed center center;
    /*filter:Alpha(Opacity=60);*/
    /*opacity:0.6;*/
  }
  .header{
    height: 60px;
    box-shadow: 0 1px 5px rgba(13,62,73,0.2) ;
  }
  .header img{
    width: 170px;
    margin-top: 12px;
    margin-left: 15px;
    float: left;
  }
  .header span{
    float: left;
    color: #566a80;
    margin: 21px 0 0 20px;
  }
  .login_box{
    width: 320px;
    margin-top: 15%;
    margin-left: 60%
    /*margin: 50px auto;*/
    /*box-shadow: 0 1px 5px rgba(13,62,73,0.2) ;*/
    /*background: #fff;*/
  }
  .login_box .myinput{
    width: 100%;
    border: 1px solid #cad3de;
    height: 40px;
    line-height: 40px;
    margin: 5px 0 10px;
    border-radius: 3px;
    padding: 0 10px;
    outline: none;
    box-sizing: border-box;
  }
  .login_box .myinput:focus{
    border: 1px solid #4289dc;
  }
  .login_other{
    overflow: hidden;
  }

  .login_other a{
    float: right;
    color: #727f8f;
  }
  .login_other a:hover{
    color: #273444;
  }
  .login_other input, .login_other label{
    float: left;
    color: #727f8f;
  }
  .login_other input{
    margin: 4px 5px 0 0;
  }
  .login{
    box-sizing: border-box;
    border: none 0;
    height: 44px;
    line-height: 44px;
    width: 100%;
    background:#4187db;
    font-size: 16px;
    border-radius: 3px;
    margin-right: 40px;
    transition: all 0.5s ease;
    cursor: pointer;
    outline: none;
    color: #fff;
    margin-top: 15px;
  }
  .login:hover{
    background: #2668b5;
  }
  .login[disabled]{
    opacity: 0.8;
  }
  .login[disabled]:hover{
    background:#4187db;
  }


  .login2{
    box-sizing: border-box;
    border: none 0;
    height: 44px;
    line-height: 44px;
    width: 100%;
    background:#4187db;
    font-size: 16px;
    border-radius: 3px;
    margin-right: 40px;
    transition: all 0.5s ease;
    cursor: pointer;
    outline: none;
    color: #fff;
    margin-top: 15px;
  }
  .login2:hover{
    background: #2668b5;
  }
  .login2[disabled]{
    opacity: 0.8;
  }
  .login2[disabled]:hover{
    background:#4187db;
  }


  .title{
    color: #273444;
    /*font-size: 1.5em;*/
    font-size: 3em;
    text-align: center;
    margin: 0 0 20px 0;
  }

  @media only screen and (max-width: 768px) {
    .login_box{
      width: 280px;
      margin: 50px auto;
    }
  }
</style>
