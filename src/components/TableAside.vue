<template>
  <div class="table-aside">
    <div><span>学生管理</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>课程编排</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>我的题库</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>我的作业表</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>批改作业</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>综合评分</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>测验管理</span><i class="iconfont icon-courseyoujiantou"></i></div>
    <div><span>代码检测</span><i class="iconfont icon-courseyoujiantou"></i></div>
  </div>
</template>

<script>
export default {
  name: "TableAside",
};
</script>

<style>
.table-aside {
  /* position: relative; */
  margin-left: 20px;
  width: 180px;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
/* .table-aside div:first-child {
  position: absolute;
  top: 30px;
} */
.table-aside div{
  position: relative;
  height: 60px;
  /* padding-top: 30px; */
  padding-left: 10px;
  line-height: 60px;
  cursor: pointer;
}

.table-aside div:hover {
  background-color: coral;
}

.table-aside div i {
  position: absolute;
  right: 10px;
}

</style>