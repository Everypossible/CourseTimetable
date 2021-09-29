<template>
  <div>
    <el-container>
      <el-header><div>添加课程编排</div></el-header>
      <el-main>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <span>*</span>学校
            </div></el-col
          >
          <el-col :span="16">
            <div class="grid-content bg-purple-light">
              <el-select
                v-model="schoolName"
                slot="prepend"
                placeholder="请选择学校"
              >
                <el-option label="广东工业大学" value="1"></el-option>
                <el-option label="华南理工大学" value="2"></el-option>
                <el-option label="中山大学" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <span>*</span>学院
            </div></el-col
          >
          <el-col :span="16"
            ><div class="grid-content bg-purple-light">
              <el-select
                v-model="value"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择学院"
                @change="collegeSelected"
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
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <span>*</span>专业
            </div></el-col
          >
          <el-col :span="16"
            ><div class="grid-content bg-purple-light">
              <el-select
                v-model="major"
                multiple
                slot="prepend"
                placeholder="请选择专业"
              >
                <!-- <el-option label="计算机科学与技术" value="1"></el-option>
                <el-option label="软件工程" value="2"></el-option>
                <el-option label="电气工程及其自动化" value="3"></el-option>
                <el-option label="大数据" value="4"></el-option>
                <el-option label="电子技术" value="5"></el-option> -->
                <el-option
                  v-for="item in majors"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <span>*</span>班级
            </div></el-col
          >
          <el-col :span="16"
            ><div class="grid-content bg-purple-light">
              <el-button type="primary" plain @click="dialogFormVisible = true"
                >选择</el-button
              >
              <el-dialog title="选择班级" :visible.sync="dialogFormVisible">
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%"
                  ref="multipleTable"
                  @selection-change="handleSelectionChange"
                >
                  <el-table-column type="selection" width="55">
                  </el-table-column>
                  <el-table-column type="index" label="序号"> </el-table-column>
                  <el-table-column prop="className" label="班级" width="150">
                  </el-table-column>
                  <el-table-column
                    prop="year"
                    label="年界"
                    width="150"
                    sortable
                  >
                  </el-table-column>
                </el-table>
                <div slot="footer" class="dialog-footer">
                  <span>共 {{ totalRow }} 条</span>
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </div></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <span>*</span>课程
            </div></el-col
          >
          <el-col :span="16"
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
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <span>*</span>教师
            </div></el-col
          >
          <el-col :span="16"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="teacher" slot="prepend" placeholder="请选择">
                <el-option label="苏定方" value="1"></el-option>
                <el-option label="陈订房" value="2"></el-option>
                <el-option label="刘洋" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div><span>*</span>作业表</div></el-col
          >
          <el-col :span="16"
            ><div>
              <el-button type="primary" plain @click="homeworkFormVisible = true"
                >选择</el-button
              >
              <el-dialog title="选择作业表" :visible.sync="homeworkFormVisible">
                <el-table
                  :data="homeworkTableData"
                  border
                  style="width: 100%"
                  ref="multipleTable"
                  @selection-change="handleSelectionChange"
                >
                  <el-table-column
                    type="selection"
                    width="55"
                    :resizable="false"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    type="index"
                    label="序号"
                    :resizable="false"
                    width="100px"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="homework"
                    label="作业表"
                    width="215px"
                    :resizable="false"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
                <div slot="footer" class="dialog-footer">
                  <span>共 {{ homeworkTotalRow }} 条</span>
                  <el-button type="primary" @click="homeworkFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </div></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">所属学期</div></el-col
          >
          <el-col :span="8"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="year" slot="prepend" placeholder="请选择">
                <el-option label="2021" value="1"></el-option>
                <el-option label="2020" value="2"></el-option>
                <el-option label="2022" value="3"></el-option>
              </el-select></div
          ></el-col>
          <el-col :span="8"
            ><div class="grid-content bg-purple-light">
              <el-select v-model="term" slot="prepend" placeholder="请选择">
                <el-option label="2021年春" value="1"></el-option>
                <el-option label="2021年秋" value="2"></el-option>
                <el-option label="2020年秋" value="3"></el-option>
              </el-select></div
          ></el-col>
        </el-row>
      </el-main>
      <el-footer>
        <div>
          <el-button type="danger">确定</el-button>
          <el-button type="primary">返回</el-button>
        </div>
      </el-footer>
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
      major: "",
      courseName: "",
      teacher: "",
      homework: "",
      year: "",
      term: "",
      options: [
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "自动化学院",
          label: "自动化学院",
        },
        {
          value: "信息工程学院",
          label: "信息工程学院",
        },
      ],
      majors: [],

      value: [],

      dialogTableVisible: false,
      dialogFormVisible: false,
      homeworkFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",

      tableData: [
        {
          className: "计科12班",
          year: "2021年春",
        },
        {
          className: "计科2班",
          year: "2020年秋",
        },
        {
          className: "计科12班",
          year: "2020年秋",
        },
      ],
      homeworkTableData: [
        {
          homework: "广东供液大学作业表",
        },
      ],
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    collegeSelected(e) {
      const _self = this;
      this.majors.splice(0, this.majors.length);
      for (let value of e) {
        if (value === "计算机学院") {
          _self.majors.push(
            {
              value: "计算机科学与技术",
            },
            {
              value: "软件工程",
            },
            {
              value: "信息安全",
            }
          );
        }
        if (value === "自动化学院") {
          _self.majors.push(
            {
              value: "控制工程",
            },
            {
              value: "系统工程",
            }
          );
        }
        if (value === "信息工程学院") {
          _self.majors.push({
            value: "电子技术",
          });
        }
      }
    },
    showClassNameTable() {
      console.log(this);
    },
    showHomeworkTable() {
      console.log(this);
    },
  },

  computed: {
    totalRow() {
      return this.tableData.length;
    },
    homeworkTotalRow() {
      return this.homeworkTableData.length;
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 38px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* 输入下拉框 */
.el-select {
  width: 500px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-row {
  width: 700px;
}
.el-row .el-col:first-child span {
  color: red;
}
.el-row .el-col:first-child {
  padding-left: 30px;
  /* border: 3px solid green; */
  line-height: 36px;
}
.el-header > div {
  /* border: 3px solid green; */
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
  margin-top: 20px;
  padding-left: 30px;
  font-size: 24px;
}
.el-main > .el-row:last-child .el-select {
  width: 200px;
}
.el-footer > div {
  margin-left: 292px;
  width: 150px;
}
.el-container {
  border: 3px solid green;
  width: 780px;
}
</style>