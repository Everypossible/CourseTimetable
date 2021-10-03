<template>
  <div class="addCourse">
    <header class="addCourseHeader">添加课程编排</header>
    <hr>
    <div class="addCourseMain">
      <el-form
        :model="addCourseForm"
        :rules="rules"
        ref="addCourseForm"
        label-width="150px"
        class="demo-addCourseForm"
        label-position="left"
      >
        <el-form-item label="学校" prop="school">
          <el-select v-model="addCourseForm.school" placeholder="请选择学校" style="width:500px">
            <!-- <el-option label="广东工业大学" value="广东工业大学"></el-option> -->
            <el-option
              v-for="item in schools"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院" prop="college">
          <el-select
            v-model="addCourseForm.college"
            placeholder="请选择学院"
            multiple
            @change="collegeSelected"
            style="width:500px"
          >
            <el-option
              v-for="item in colleges"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-select
            v-model="addCourseForm.major"
            multiple
            placeholder="请选择专业"
            style="width:500px"
          >
            <el-option
              v-for="item in majors"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="region">
          <div class="grid-content bg-purple-light">
            <el-button type="primary" plain @click="classNameFormVisible = true"
              >选择</el-button
            >
            <span v-for="item in addCourseForm.classNameSelected" :key="item.className">{{ item.className }}</span>
            <el-dialog title="选择班级" :visible.sync="classNameFormVisible">
              <el-table
                :data="classNameTableData"
                border
                style="width: 100%"
                ref="multipleTable"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column type="index" label="序号"> </el-table-column>
                <el-table-column prop="className" label="班级" width="150">
                </el-table-column>
                <el-table-column prop="year" label="年界" width="150" sortable>
                </el-table-column>
              </el-table>
              <div slot="footer" class="dialog-footer">
                <span>共 {{ totalRow }} 条</span>
                <el-button type="primary" @click="classNameFormSubmit"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </div>
        </el-form-item>
        <el-form-item label="课程" prop="courseName">
          <el-select
            v-model="addCourseForm.courseName"
            placeholder="请选择课程"
            style="width:500px"
          >
            <el-option
              v-for="item in coursesName"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教师" prop="teacher">
          <el-select v-model="addCourseForm.teacher" placeholder="请选择教师" style="width:500px">
            <el-option
              v-for="item in teachers"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作业表" prop="homework">
          <div>
            <el-button type="primary" plain @click="homeworkFormVisible = true"
              >选择</el-button
            >
            <span v-for="item in addCourseForm.homeworkSelected" :key="item.homework">{{ item.homework }}</span>
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
                <el-button type="primary" @click="homeworkFormSubmit"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </div>
        </el-form-item>
        <el-form-item label="所属学期" required>
          <el-col :span="12">
            <el-form-item prop="year">
              <el-select
                placeholder="选择年份"
                v-model="addCourseForm.year"
                style="width: 200px"
              >
                <el-option
                  v-for="item in years"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value"
                ></el-option
              ></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="term">
              <el-select
                placeholder="选择学期"
                v-model="addCourseForm.term"
                style="width: 200px; margin-left: -20px"
              >
                <el-option
                  v-for="item in terms"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value"
                ></el-option
              ></el-select>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item style="margin-left: 80px">
          <el-button type="primary" @click="submitForm('addCourseForm')"
            >确定</el-button
          >
          <!-- 重置表单 -->
          <!-- <el-button @click="resetForm('addCourseForm')" style="margin-left: 40px">返回</el-button> -->
           <el-button @click="hideChange" style="margin-left: 40px">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      // 引入组价时的数据
      addCourseForm: {
        school: '',
        college: [],
        major: [],
        courseName: '',
        teacher: '',
        classNameSelected: [],
        homeworkSelected: [],
        year: '',
        term: '',
      },
      schools: [
        {
          value: "广东工业大学",
          label: "广东工业大学",
        },
        {
          value: "华南理工大学",
          label: "华南理工大学",
        },
        {
          value: "中山大学",
          label: "中山大学",
        },
      ],

      colleges: [
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "自动化学院",
          label: "自动化学院",
        },
        {
          value: "外国语学院",
          label: "外国语学院",
        },
        {
          value: "信息工程学院",
          label: "信息工程学院",
        },
      ],
      coursesName: [
        {
          value: "数据结构",
        },
        {
          value: "电工学",
        },
        {
          value: "机械制造",
        },
        {
          value: "Java程序设计",
        },
      ],
      teachers: [
        {
          value: "苏定方",
        },
        {
          value: "李开阳",
        },
        {
          value: "比尔盖茨",
        },
        {
          value: "扎克伯格",
        },
      ],
      years: [
        {
          value: "2021",
        },
        {
          value: "2020",
        },
      ],
      terms: [
        {
          value: "2021年秋",
        },
        {
          value: "2020年秋",
        },
        {
          value: "2021年春",
        },
      ],
      rules: {
        // region: [
        //   { required: true, message: "请选择活动区域", trigger: "change" },
        // ],
        school: [{ required: true, message: "请选择学校", trigger: "change" }],
        college: [{ required: true, message: "请选择学院", trigger: "change" }],
        major: [{ required: true, message: "请选择专业", trigger: "change" }],
        courseName: [
          { required: true, message: "请选择课程", trigger: "change" },
        ],
        teacher: [{ required: true, message: "请选择教师", trigger: "change" }],
        // homework: [
        //   { required: true, message: "请选择作业表", trigger: "change" },
        // ],
        year: [{ required: true, message: "请选择年份", trigger: "change" }],
        term: [{ required: true, message: "请选择学期", trigger: "change" }],
      },

      //   自己添加的数据

      majors: [],
      classNameFormVisible: false,
      homeworkFormVisible: false,

      classNameTableData: [
        {
          className: "计科12班",
          year: "2021年春",
        },
        {
          className: "计科2班",
          year: "2021年秋",
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
    //table表格组件多选自带的方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
    //   console.log(val[0].className);
    //   console.log(this.multipleSelection);
    },
    //自己定义的方法
    collegeSelected(val) {
      const _self = this;
      this.majors.splice(0, this.majors.length);
      for (let value of val) {
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
    submitForm(formName) {
      // let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          pubsub.publish('addNewCourse', this.addCourseForm);
          alert("submit!");
          // _this.
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    classNameFormSubmit(){
        this.classNameFormVisible = false;
        this.addCourseForm.classNameSelected = Array.from(this.multipleSelection);
        console.log(this.multipleSelection[0].className);
    },
    homeworkFormSubmit() {
        this.homeworkFormVisible = false;
        this.addCourseForm.homeworkSelected = Array.from(this.multipleSelection);
    },
    hideChange(){
      pubsub.publish('showCourseProvision', true)
    }
  },

  computed: {
    totalRow() {
      return this.classNameTableData.length;
    },
    homeworkTotalRow() {
      return this.homeworkTableData.length;
    },
  },
};
</script>

<style scoped>
.addCourse {
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: 5px 5px 5px #888888;
  width: 680px;
  padding-left: 20px;
}
hr {
    margin-left: -21px;
    size: 2px;
    color: rgba(0, 0, 0, 0.2);
}
.addCourseHeader {
    font-size: 22px;
}

</style>