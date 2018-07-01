<template>
  <div id="socialPage">
    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item  v-for="item in 4" :key="item" style="background-color: #99a9bf;">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
