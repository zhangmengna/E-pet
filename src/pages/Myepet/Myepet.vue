<template>
  <div class="login">
    <div class="head">
      <div class="head-top">
        <span class="back"></span>
        <span class="logininfo">注册</span>
      </div>
      <div class="mlogin">
        <img src="./images/logo.png">
      </div>
      <div class="loginway">
        <span>
        普通登录
        <i class="on"></i>
      </span>
        <span>
        手机动态密码登录
        <i class></i>
      </span>
      </div>
    </div>
    <div class="center">
      <div class="login-form">
        <form class="old-way">
          <div>
            <span class="person"></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </div>
          <div>
            <span class="pass"></span>
            <input type="password" placeholder="输入密码">
          </div>
        </form>
        <form class="phone-way on">
          <div>
            <span class="person"></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </div>
          <div>
            <span class="pass"></span>
            <input type="password" placeholder="请输入图片内容">
            <img src="./images/seccode.png">
          </div>
          <div>
            <span class="pass"></span>
            <input type="password" placeholder="动态密码">
            <span class="getbtn">获取动态密码</span>
          </div>
        </form>
      </div>

      <p class="getpass">忘记密码？</p>
      <div class="loginbtn">
        <span>登&nbsp&nbsp&nbsp录</span>
      </div>
      <div class="others">
        <p>合作网站登录</p>
        <div class="login-list">
        <span>
          <img src="./images/login_ico4.png">
        </span>
          <span>
          <img src="./images/login_ico2.png">
        </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login
    width 100%
    height 100%
    background #f3f4f5
    .head
      background url("./images/2ac7b0a4f0ab1e4a63819e0668d1cb39.png") no-repeat
      background-size 100% 100%
      overflow hidden
      .head-top
        height 50px
        line-height 50px
        padding 0 12px
        .back
          float left
          width 22px
          height 20px
          margin-top 16px
          background url("./images/personal-bico3.png") no-repeat
          background-size 12px 17px
        .logininfo
          float right
          color #fff

      .mlogin
        padding 12px 0 24px
        img
          display block
          margin 0 auto
          width 20%
      .loginway
        overflow hidden
        span
          float left
          width 50%
          height 44px
          line-height 44px
          font-size 15px
          color #fff
          background rgba(255,255,255,0.3)
          text-align center
          i
            display none
            width 0px
            height 0px
            border-top 0 solid transparent
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #fff
            margin -10px auto 0
            &.on
              display block
    .center
      background #fff
      overflow hidden
      .login-form
        margin 0 15px 12px
        padding 0 6px
        form
          display none
          overflow hidden
          &.on
            display block
          div
            padding 12px 0 12px 30px
            border-bottom 1px solid #e2e2e2
            span
              float left
              width 17px
              height 21px
              margin-left -25px
              margin-top 1px
              vertical-align top
              &.person
                background url("./images/ico3.png") no-repeat
                background-size contain
              &.pass
                height 20px
                margin-top -1px
                background url("./images/ico4.png") no-repeat
                background-size contain
            input
              display block
              width 100%
              padding 0
              line-height 21px
              font-size 15px
              outline none
            img
              float right
              height 30px
              margin-top -30px
            .getbtn
              float right
              width 100px
              height auto
              padding-top 6px
              padding-bottom 6px
              border 1px solid #ff4259
              border-radius 3px
              margin-top -23px
              font-size 13px
              color #ff4259
              text-align center
      .getpass
        line-height 20px
        padding 0 24px
        text-align right
        font-size 14px
        color #898989
      .loginbtn
        padding 6px 15px 0
        span
          display block
          background-color #2ec975
          border-radius 5px
          padding 9px 0
          line-height 20px
          text-align center
          color #fff
      .others
        margin-top 120px
        overflow hidden
        p
          padding-top 8px
          line-height 20px
          color #d7d7d7
          text-align center
        .login-list
          padding 18px 0
          overflow hidden
          span
            float left
            width 33.3%
            pading 0 14px
            img
              display block
              width 47%
              margin 0 auto

</style>
