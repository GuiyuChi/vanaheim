<template>
<div id="app">
  <!-- 头部导航 -->
  <header class="header">
    <p style="color:#306cd9;font-size:28px;margin-left:50px;">学生画像系统</p>
  </header>
  <!-- <div style="position: relative;height: 60px;width: 100%;"></div> -->

  <main>
    <!-- 左侧导航 -->
    <div class="main-left">
      <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/personalGuide" :class="{'isActive': !active}">个人资料</el-menu-item>
        <el-menu-item index="/grade" :class="{'isActive': !active}">选课成绩</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">获奖情况</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">第二课堂</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">借阅展示</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">成绩预警</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">失联预警</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">消费分析</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">关系圈</el-menu-item>
        <el-menu-item index="/activeManage" :class="{'isActive': !active}">职业预测</el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧主内容区 -->
    <div class="main-right">
      <router-view class="view"></router-view>
    </div>
  </main>
</div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

export default {
  name: 'app',
  data: function() {
    return {
      active: true
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}

/* 头部导航 */

header {
  /* z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;*/
  /* border-top: solid 4px #3091F2; */
  /* background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04); */
  width: 100%;
  min-width: 1100px;
  /* opacity: 0.90; */
  height: 60px;
  border-bottom: solid 1px #dddddd;
  background: #ffffff;
  z-index: 1000
}

header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

header .el-menu-demo {
  padding-left: 300px !important;
  min-height: 40px;
}

/* 主内容区 */

main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  /* border: solid 40px #E9ECF1; */
  background-color: #FCFCFC;
}

main .main-left {
  text-align: center;
  width: 200px;
  float: left;
}

main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}

main .el-menu {
  background-color: transparent !important;
}
</style>
