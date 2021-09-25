<template>
  <div>
    <div class="search-first-row">
      <el-input v-model="input" placeholder="请输入学校名称"></el-input>
      <el-input v-model="input" placeholder="请输入学院名称"></el-input>
      <el-input v-model="input" placeholder="请输入专业名称"></el-input>
      <el-input v-model="input" placeholder="请输入班级名称"></el-input>
    </div>
    <div class="search-second-row">
      <div class="input">
        <el-input v-model="input" placeholder="请输入课程名称"></el-input>
        <el-input v-model="input" placeholder="请输入教师名称"></el-input>
      </div>
      <el-button type="danger">查询</el-button>
      <el-checkbox v-model="checked">仅显示当前学期的作业安排</el-checkbox>
    </div>
    <div class="opration">
      <el-button type="primary" icon="el-icon-plus" plain>添加</el-button>
      <el-button type="success" icon="el-icon-edit" plain>修改</el-button>
      <el-button type="danger" icon="el-icon-delete" plain>删除</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      :default-sort="{ prop: 'term', order: 'descending' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column prop="term" label="学期" width="120" sortable>
        <template slot-scope="scope">{{ scope.row.term }}</template>
      </el-table-column>
      <el-table-column prop="courseName" label="课程名称" width="120" sortable> </el-table-column>
      <el-table-column
        prop="school"
        label="学校"
        show-overflow-tooltip
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column prop="college" label="学院名称" width="120"> </el-table-column>
      <el-table-column prop="major" label="专业" width="120"> </el-table-column>
      <el-table-column prop="className" label="班级名称" width="120"> </el-table-column>
      <el-table-column prop="teacherName" label="教师姓名" width="120"> </el-table-column>
      <el-table-column prop="homework" label="作业表" width="120"> </el-table-column>
      <el-table-column prop="regenerator" label="更新者" width="120"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="120"> </el-table-column>
    </el-table>
    <div>共<input v-model="totalRow">条</div>
  </div>
</template>

<script>
export default {
  name: "CourseProvision",
  data() {
    return {
      totalRow: 0,
      input: "",
      checked: true,
      tableData: [
        {
          term: "2021年秋",
          courseName: "C语言程序设计",
          school: "广东工业大学",
          college: "计算机学院",
          major: "计算机科学与技术",
          className: "计科1班",
          teacherName: "林志颖",
          homework: "C语言题库2021年秋",
          regenerator: "苏定方",
          updateTime: "2021-07-25",

        },
        {
          term: "2021年春",
          courseName: "JAVA程序设计",
          school: "广东工业大学",
          college: "计算机学院",
          major: "信息安全",
          className: "信安4班",
          teacherName: "林志颖",
          homework: "JAVA语言题库2021年春",
          regenerator: "苏号",
          updateTime: "2021-02-25",

        },
        {
          term: "2021年春",
          courseName: "C语言程序数据结构",
          school: "广东工业大学",
          college: "计算机学院",
          major: "软件工程",
          className: "软工卓越班",
          teacherName: "林志颖",
          homework: "C语言题库2021年春",
          regenerator: "苏定方",
          updateTime: "2021-03-25",

        },
        {
          term: "2020年秋",
          courseName: "Python语言程序设计",
          school: "广东工业大学",
          college: "计算机学院",
          major: "网络工程",
          className: "网工1班",
          teacherName: "林志颖",
          homework: "Python语言题库2020年秋",
          regenerator: "苏定方",
          updateTime: "2020-07-25",

        },
        
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    formatter(row) {
      return row.school;
    },
  },
};
</script>

<style>
.search-first-row {
  display: flex;
}
.search-second-row .input {
  width: 300px;
  display: flex;
}
</style>