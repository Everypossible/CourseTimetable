<template>
  <div class="table-header">
    <div class="left">
      <span>Anyview System</span>
    </div>
    <div class="right">
      <i class="iconfont icon-courseyonghu"></i>
      <span>林志颖</span>
      <i class="iconfont icon-coursemima"></i>
      <span>修改密码</span>
      <i class="iconfont icon-coursetuichu"></i>
      <span>退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableHeader",
};
</script>

<style>
.table-header {
  display: flex;
  height: 60px;
  line-height: 60px;
  background-color: rgba(41,36,33);
  color: aliceblue;
}
.table-header .left {
  font-size: 20px;
}
.table-header .right {
  margin-left: auto;
  font-size: 14px;
}
.table-header .right span {
  display: inline-block;
}
.table-header .right span:nth-child(2n) {
  margin-right: 25px;
}
.table-header .right i:nth-child(odd) {
  margin-right: 5px;
}
</style>