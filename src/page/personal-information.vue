<template>
<el-card class="box-card">
	<div slot="header" class="clearfix">
		<span>基本信息</span>
		<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
	</div>
	<div class="text item">
		<el-row>
			<el-col :span="3">
				<div class="grid-content bg-purple">
          <p>姓名</p>
					<p>年级</p>
					<p>学院</p>
					<p>专业</p>
				</div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content bg-purple-light">
          <p>张华华</p>
					<p>2015级</p>
					<p>软件学院</p>
					<p>软件工程</p>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
          <p>学号</p>
          <p>性别</p>
          <p>民族</p>
          <p>班级</p>
				</div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content bg-purple-light">
          <p>24320152203243</p>
          <p>女</p>
          <p>汉</p>
          <p>5班</p>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
          <p>邮箱</p>
					<p>电话</p>
					<p>宿舍</p>
					<p>生源地</p>
				</div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content bg-purple-light">
          <p>12345453@qq.com</p>
					<p>159803253245</p>
					<p>海韵4-943</p>
					<p>福建厦门</p>
				</div>
			</el-col>
		</el-row>
	</div>
</el-card>
</template>



<style>
.text {
	font-size: 14px;
}

.item {
	min-height: 50px;
	border-bottom: solid 1px #E9ECF1;
	background: /* margin-bottom: 18px; */
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}

.box-card {
	width: 100%;
	min-width: 1000px;
}

.item p{
  margin:0;
  padding: 0;
  font-family:"PingFang SC";
  color: #303133;
  min-height: 40px;
  font-size: 20px;
  text-align:center;
  border-bottom: solid 1px #DCDFE6;
}


.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}

.el-col {
	border-radius: 4px;
}

.bg-purple-dark {
	background: #99a9bf;
}

.bg-purple {
	background: #d3dce6;
}

.bg-purple-light {
	background: #e5e9f2;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
	border-bottom: solid 2px #E9ECF1;
}

.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
