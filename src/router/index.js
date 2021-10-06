import StudentManage from '../components/StudentManage'
import VueRouter from 'vue-router'
import CourseProvision from '../components/CourseProvision'
import MyQuestionBank from '../components/MyQuestionBank'
import CodeDetection from '../components/CodeDetection'
import ComprehensiveEvaluation from '../components/ComprehensiveEvaluation'
import HomeworkCorrect from '../components/HomeworkCorrect'
import TestManage from '../components/TestManage'
import MyHomework from '../components/MyHomework'

export default new VueRouter({
    // 路由的对应地址的设置
    routes: [
        // {
        //     path: '/',
        //     redirect: '/all'
        // },
        {
            path: '/testManage',
            component: TestManage
        },
        {
            path: '/homeworkCorrect',
            component: HomeworkCorrect
        },
        {
            path: '/comprehensiveEvaluation',
            component: ComprehensiveEvaluation
        },
        {
            path: '/codeDetection',
            component: CodeDetection
        },
        {
            path: '*',
            redirect: '/courseProvision'
        },
        {
            path: '/courseProvision',
            component: CourseProvision
        },
        {
            path: '/studentManage',
            component: StudentManage
        },
        {
            path: '/myQuestionBank',
            component: MyQuestionBank
        },
        {
            path: '/myHomework',
            component: MyHomework
        },
        
    ]
})