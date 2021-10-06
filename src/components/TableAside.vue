<template>
  <div class="table-aside">
    <router-link to="/studentManage" active-class="active">学生管理<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <router-link to="/studentManage">学生管理</router-link> -->
    <router-link to="/courseProvision" active-class="active">课程编排<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>课程编排</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
    <router-link to="/myQuestionBank" active-class="active">我的题库<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>我的题库</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
    <router-link to="/myHomework" active-class="active">我的作业表<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>我的作业表</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
    <router-link to="homeworkCorrect" active-class="active">批改作业<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>批改作业</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
    <router-link to="/comprehensiveEvaluation" active-class="active">综合评分<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>综合评分</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
    <router-link to="/testManage" active-class="active">测验管理<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>测验管理</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
    <router-link to="/codeDetection" active-class="active">代码检测<i class="iconfont icon-courseyoujiantou"></i></router-link>
    <!-- <div><span>代码检测</span><i class="iconfont icon-courseyoujiantou"></i></div> -->
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
/* .table-aside div{
  position: relative;
  height: 60px; */
  /* padding-top: 30px; */
  /* padding-left: 10px;
  line-height: 60px;
  cursor: pointer;
} */

/* .table-aside div:hover {
  background-color: coral;
}

.table-aside div i {
  position: absolute;
  right: 10px;
} */

.table-aside a {
  display: block;
  position: relative;
  height: 60px;
  padding-left: 10px;
  line-height: 60px;
  color: aliceblue;
  text-decoration: none;
}
.table-aside a i {
  position: absolute;
  right: 10px;
}

.active {
  background-color: rgba(84, 131, 235, 0.8);
}

.table-aside a:hover {
  background-color: rgba(84, 131, 235, 0.8);
}

</style>