<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title">
      <img src="https://yarn.bootcss.com/assets/feature-speed.png" />
      <h2>商城管理系统后台</h2>
    </div>
    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input placeholder="用户名">
              <template #prefix>
                <user-outlined type="user" />
              </template>
              <template #suffix>
                <a-tooltip title="注意不要打错">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input placeholder="密码">
              <template #prefix>
                <LockOutlined />
              </template>
              <template #suffix>
                <a-tooltip title="注意不要打错">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>
          <div class="item3">
            <a href="">忘记密码</a>
          </div>
          <div class="item">
            <a-button type="primary"> 登入 </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input placeholder="注册用户名" v-model:value="regForm.account">
              <template #prefix>
                <user-outlined type="user" />
              </template>
              <template #suffix>
                <a-tooltip title="注意不要打错">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input placeholder="密码" v-model:value="regForm.password">
              <template #prefix>
                <LockOutlined />
              </template>
              <template #suffix>
                <a-tooltip title="注意不要打错">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input placeholder="邀请码">
              <template #prefix>
               <FileProtectOutlined />
              </template>
              <template #suffix>
                <a-tooltip title="注意不要打错">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-button type="primary"
            @click="register"
            > 注册 </a-button>
          </div>s
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src='./index.js'>
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>
