<template>
  <div>
    <el-container>
      <el-header>添加课程编排</el-header>
      <el-main>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*学校</div></el-col
          >
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-select
                v-model="schoolName"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option label="广东工业大学" value="1"></el-option>
                <el-option label="华南理工大学" value="2"></el-option>
                <el-option label="中山大学" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*学院</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select
                v-model="value"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择文章标签"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*专业</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="major" slot="prepend" placeholder="请选择">
                <el-option label="计算机科学与技术" value="1"></el-option>
                <el-option label="软件工程" value="2"></el-option>
                <el-option label="电气工程及其自动化" value="3"></el-option>
                <el-option label="大数据" value="4"></el-option>
                <el-option label="电子技术" value="5"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*班级</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select
                v-model="className"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option label="计科1班" value="1"></el-option>
                <el-option label="自动化创新班" value="2"></el-option>
                <el-option label="电子技术2班" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*课程</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select
                v-model="courseName"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option label="C语言程序设计" value="1"></el-option>
                <el-option label="Java数据结构" value="2"></el-option>
                <el-option label="电工学" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*教师</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="teacher" slot="prepend" placeholder="请选择">
                <el-option label="苏定方" value="1"></el-option>
                <el-option label="陈订房" value="2"></el-option>
                <el-option label="刘洋" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*作业表</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="homework" slot="prepend" placeholder="请选择">
                <el-option label="广东工业大学" value="1"></el-option>
                <el-option label="华南理工大学" value="2"></el-option>
                <el-option label="中山大学" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">*所属学期</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="year" slot="prepend" placeholder="请选择">
                <el-option label="2021" value="1"></el-option>
                <el-option label="2020" value="2"></el-option>
                <el-option label="2022" value="3"></el-option>
              </el-select></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="term" slot="prepend" placeholder="请选择">
                <el-option label="2021年春" value="1"></el-option>
                <el-option label="2021年秋" value="2"></el-option>
                <el-option label="2020年秋" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schoolName: "",
      college: "",
      className: "",
      select: "",
      options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
    };
  },
};
</script>

<style>
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
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* 输入下拉框 */
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>