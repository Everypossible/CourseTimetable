<template>
  <div class="addCourse">
    <header class="addCourseHeader">添加课程编排</header>
    <hr />
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
          <el-select
            v-model="addCourseForm.school"
            placeholder="请选择学校"
            style="width: 500px"
          >
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
            style="width: 500px"
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
            style="width: 500px"
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
            <span
              class="selected"
              v-for="item in addCourseForm.classNameSelected"
              :key="item.className"
              >{{ item.className }}</span
            >
            <el-dialog class="classDialog" title="选择班级" :visible.sync="classNameFormVisible" width="600px">
              <el-table
              class="classTable"
                :data="classNameTableData"
                border
                style="width: 600px"
                ref="multipleTable"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column type="index" label="序号" width="55"> </el-table-column>
                <el-table-column prop="className" label="班级" width="180">
                </el-table-column>
                <el-table-column prop="year" label="年界" sortable>
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
            style="width: 500px"
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
          <el-select
            v-model="addCourseForm.teacher"
            placeholder="请选择教师"
            style="width: 500px"
          >
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
            <span
            class="selected"
              v-for="item in addCourseForm.homeworkSelected"
              :key="item.homework"
            >
              {{ item.homework }}
            </span>
            <el-dialog class="homeworkDialog" title="选择作业表" :visible.sync="homeworkFormVisible" width="600px">
              <el-table
              class="homeworkTable"
                :data="homeworkTableData"
                border
                style="width: 600px"
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
                  width="140"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="homework"
                  label="作业表"
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
          <el-button @click="hideChange" style="margin-left: 40px"
            >返回</el-button
          >
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
      addCourseForm: {
        school: "",
        college: [],
        major: [],
        courseName: "",
        teacher: "",
        classNameSelected: [],
        homeworkSelected: [],
        year: "",
        term: "",
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
  props: ["courseSelected", "isModify", "dialog_visible"],
  methods: {
    //table表格组件多选自带的方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
      //   console.log(val[0].className);
      //   console.log(this.multipleSelection);
    },
    //自己定义的方法
    //清空addCourseForm的数据
    clearAddCourseForm(_this) {
      _this.addCourseForm.school = '';
      _this.addCourseForm.college = [];
      _this.addCourseForm.major = [];
      _this.addCourseForm.courseName = '';
      _this.addCourseForm.teacher = '';
      _this.addCourseForm.classNameSelected = [];
      _this.addCourseForm.homeworkSelected = [];
      _this.addCourseForm.year = '';
      _this.addCourseForm.term = '';
    },
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 确认添加表单的按钮
    submitForm(formName) {
      // let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$options.methods.resetForm(formName);
          // console.log('这是准备传过来的数据：' + this.addCourseForm.school);
          pubsub.publish("addNewCourse", this.addCourseForm);
          this.isModify = false;
          // this.$options.methods.clearAddCourseForm(_this);
          // console.log(this.addCourseForm.school);
          // 确认提交添加的课程后清空表单域
          // this.$refs.addCourseForm.resetFields();
          alert("submit!");
          // _this.
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    classNameFormSubmit() {
      this.classNameFormVisible = false;
      this.addCourseForm.classNameSelected = Array.from(this.multipleSelection);
      console.log(this.multipleSelection[0].className);
    },
    homeworkFormSubmit() {
      this.homeworkFormVisible = false;
      this.addCourseForm.homeworkSelected = Array.from(this.multipleSelection);
    },
    hideChange() {
      // let _this = this;
      this.isModify = false;
      pubsub.publish("showCourseProvision", true);
      // console.log('清空表单前');
      // this.$options.methods.clearAddCourseForm(_this);
      // console.log('清空表单后');
      this.$refs.addCourseForm.resetFields();
      console.log(this.addCourseForm);
    },
  },

  computed: {
    totalRow() {
      return this.classNameTableData.length;
    },
    homeworkTotalRow() {
      return this.homeworkTableData.length;
    },
  },

  watch: {
    //当添加或修改弹窗显示时
    dialog_visible: {
      handler() {
        if(this.dialog_visible) {
          this.$refs.addCourseForm.resetFields();
          // this.addCourseForm.classNameSelected.splice(0, this.addCourseForm.classNameSelected.length);
          // this.addCourseForm.homeworkSelected.splice(0, this.addCourseForm.homeworkSelected.length);
          this.addCourseForm.classNameSelected.length = 0;
          this.addCourseForm.homeworkSelected.length  = 0;
        }
      }
    },
    //删除表格数据
    isModify: {
      handler(newVal) {
        this.isModify = newVal;

        if (newVal) {
          // 判断已经按下了修改按钮
          console.log(this.isModify);
          if (this.isModify) {
            this.addCourseForm.school = this.courseSelected[0].school;
            this.addCourseForm.term = this.courseSelected[0].term;
            this.addCourseForm.courseName = this.courseSelected[0].courseName;
            this.addCourseForm.teacher = this.courseSelected[0].teacherName;
            console.log("老师的名字是：" + this.addCourseForm.teacher);

            console.log("选中的课程名称：" + this.addCourseForm.courseName);

            // 设置 下拉框 多选 默认值
            this.addCourseForm.college.unshift(this.courseSelected[0].college);

            console.log(
              "选中的学院名称：" + this.addCourseForm.college[0].value
            );

            this.addCourseForm.major.unshift(this.courseSelected[0].major);
            console.log("选中的专业名称是：" + this.addCourseForm.major[0]);
            let claName = {};
            claName.className = this.courseSelected[0].className;
            this.addCourseForm.classNameSelected.unshift(claName);
            console.log(
              "选中的班级是：" + this.addCourseForm.classNameSelected[0]
            );
            let howo = {};
            howo.homework = this.courseSelected[0].homework;
            this.addCourseForm.homeworkSelected.unshift(howo);
            console.log(
              "选中的作业表是：" + this.addCourseForm.homeworkSelected[0]
            );
          }
        }
      },
    },
    courseSelected: {
      deep: true,
      handler() {
        // // 判断已经按下了修改按钮
        // console.log(this.isModify);
        // if (this.isModify) {
        //   // let _this = this;
        //   // console.log(this.courseSelected);
        //   this.addCourseForm.school = this.courseSelected[0].school;
        //   this.addCourseForm.term = this.courseSelected[0].term;
        //   this.addCourseForm.courseName = this.courseSelected[0].courseName;
        //   this.addCourseForm.teacher = this.courseSelected[0].teacherName;
        //   console.log("老师的名字是：" + this.addCourseForm.teacher);
        //   // console.log(this.addCourseForm.term);
        //   console.log("选中的课程名称：" + this.addCourseForm.courseName);
        //   // let colle = {}
        //   // colle.value =  this.courseSelected[0].college
        //   // colle.label =  this.courseSelected[0].college
        //   // this.addCourseForm.college[0] = colle
        //   // 设置 下拉框 多选 默认值
        //   this.addCourseForm.college.unshift(this.courseSelected[0].college);
        //   // this.addCourseForm.college[0].label = this.courseSelected[0].college
        //   console.log("选中的学院名称：" + this.addCourseForm.college[0].value);
        //   // this.addCourseForm.major[0] = this.courseSelected[0].major;
        //   this.addCourseForm.major.unshift(this.courseSelected[0].major);
        //   console.log("选中的专业名称是：" + this.addCourseForm.major[0]);
        //   // this.addCourseForm.classNameSelected[0] = this.courseSelected[0].className;
        //   let claName = {};
        //   claName.className = this.courseSelected[0].className;
        //   this.addCourseForm.classNameSelected.unshift(claName);
        //   console.log(
        //     "选中的班级是：" + this.addCourseForm.classNameSelected[0]
        //   );
        //   // this.addCourseForm.homeworkSelected[0] =
        //   //   this.courseSelected[0].homework;
        //   let howo = {};
        //   howo.homework = this.courseSelected[0].homework;
        //   this.addCourseForm.homeworkSelected.unshift(howo);
        //   console.log(
        //     "选中的作业表是：" + this.addCourseForm.homeworkSelected[0]
        //   );
        //   //   if (this.courseSelected.length === 1) {
        //   //     console.log("进来了");
        //   //     this.addCourseForm.school = this.courseSelected[0].school;
        //   //     // console.log(this.courseSelected[0].school);
        //   //     // console.log(this.addCourseForm.school);
        //   //     this.addCourseForm.term = this.courseSelected[0].term;
        //   //     console.log(this.addCourseForm.term);
        //   //     this.addCourseForm.courseName = this.courseSelected[0].courseName;
        //   //     this.addCourseForm.teacherName = this.courseSelected[0].teacher;
        //   //     console.log("进来了2");
        //   //     // for (let i = 0; i < this.courseSelected.college.length; i++) {
        //   //     // console.log('进来了3');
        //   //     this.addCourseForm.college[0] = this.courseSelected[0].college;
        //   //     // for (let j = 0; j < this.courseSelected.major.length; j++) {
        //   //     this.addCourseForm.major[0] = this.courseSelected[0].major;
        //   //     // for (
        //   //     //   let a = 0;
        //   //     //   a < this.courseSelected.classNameSelected.length;
        //   //     //   a++
        //   //     // ) {
        //   //     this.addCourseForm.classNameSelected[0] =
        //   //       this.courseSelected[0].className;
        //   //     console.log("进来3");
        //   //     // for (
        //   //     //   let b = 0;
        //   //     //   b < this.courseSelected.homeworkSelected.length;
        //   //     //   b++
        //   //     // ) {
        //   //     this.addCourseForm.homeworkSelected[0] = this.courseSelected.homework;
        //   //     console.log("进来4");
        //   //     console.log(this.addCourseForm);
        //   //     // }
        //   //     // }
        //   //     // }
        //   //     // }
        //   //   }
        // }
      },
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

.el-form-item > div .selected {
  display: inline-block;
  height: 36px;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.dialog-footer span {
  display: inline-block;
  margin-right: 410px;
  /* background-color: blue; */
}

/* .classDialog ,
.homeworkDialog {
  width: 60%;
  background-color: blue;
} */

/* .classTable,
.homeworkTable {
  width: 100px;
} */
</style>