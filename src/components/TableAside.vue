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
  width: 100px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
/* .table-aside div:first-child {
  position: absolute;
  top: 30px;
} */
.table-aside div{
  padding-top: 30px;
}

</style>