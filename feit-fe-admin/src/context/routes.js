import { lazy } from "react";


import { IconLaptop, IconHouse, IconBell, IconList, IconChartBar, IconSearch, IconUser, IconClockClockwise, IconCrown } from "../svgs";

const Lesson = lazy(() => import("../pages/Lesson"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Unit = lazy(() => import("../pages/Unit"))
const UnitDetails = lazy(() => import("../pages/UnitDetails"))
const Vocabulary = lazy(() => import("../pages/Vocabulary"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Course = lazy(() => import("../pages/Course"))
const ManageLearn = lazy(() => import("../pages/ManageLearn"))
const ActivityLog = lazy(() => import("../pages/ActivityLog"))
const LessonDetail = lazy(() => import("../pages/LessonDetail"))
const SubManageLearn = lazy(() => import("../pages/SubManageLearn"))
const VocabularyDetail = lazy(() => import("../pages/VocabularyDetail"))
const CourseDetail = lazy(() => import("../pages/CourseDetail"))

export const CHILD = {
    Lesson: 'lesson',
    Unit: 'unit',
    Vocabulary: 'vocabulary',
    Course: 'course',
}

export const ROUTES = {
    Dashboard: '/',
    ActivityLog: '/logging',
    SignIn: '/signIn',
    ManageLearn: '/managelearn',
    SignUp: '/signUp',
    SubManageLearn: '/managelearn/details/:idlesson',
    CourseDetail: '/managelearn/coursedetails/:idcourse',
    LessonDetail: '/managelearn/lessondetails/:idlesson',
    UnitDetails: '/managelearn/unitdetails/:idunit',
    VocabularyDetail: '/managelearn/vocabularydetails/:idvocabulary',
}


export const childRouter = [
    {
        title: 'FEIT',
        href: CHILD.Course,
        component: Course,
        showSidebar: false,
    },
    {
        title: 'FEIT',
        href: CHILD.Lesson,
        component: Lesson,
        showSidebar: false,

    },
    {
        title: 'FEIT',
        href: CHILD.Vocabulary,
        component: Vocabulary,
        showSidebar: false,

    },
    {
        title: 'FEIT',
        href: CHILD.Unit,
        component: Unit,
        showSidebar: false,
    },

]


export const privateRouter = [
    {
        title: 'FEIT',
        href: ROUTES.Dashboard,
        component: Dashboard,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.SubManageLearn,
        component: SubManageLearn,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CourseDetail,
        component: CourseDetail,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.LessonDetail,
        component: LessonDetail,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.UnitDetails,
        component: UnitDetails,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.VocabularyDetail,
        component: VocabularyDetail,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.ActivityLog,
        component: ActivityLog,
        name: 'Activity Log',
        showSidebar: true,
    },
    {
        title: 'FEIT | Quản lý bài học',
        href: ROUTES.ManageLearn,
        component: ManageLearn,
        name: 'Quản lý bài học',
        showSidebar: true,
    },
    {
        title: 'FEIT | Sign In',
        href: ROUTES.SignIn,
        component: SignIn,
        name: 'Đăng nhập',
        showSidebar: false,
    },
]

export const routerSidebar = [
    {
        title: 'FEIT',
        href: ROUTES.Dashboard,
        component: Dashboard,
        name: 'Dashboard',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.ManageLearn,
        component: ManageLearn,
        name: 'Quản lý bài học',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.ActivityLog,
        component: ActivityLog,
        name: 'Activity Log',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.SignIn,
        component: SignIn,
        name: 'Đăng nhập',
        icon: IconHouse,
    },
]

export const routerList = [
    {
        title: 'FEIT',
        href: CHILD.Course,
        component: Course,
        name: 'Khóa học',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: CHILD.Lesson,
        component: Lesson,
        name: 'Chủ đề',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: CHILD.Unit,
        component: Unit,
        name: 'Chương',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: CHILD.Vocabulary,
        component: Vocabulary,
        name: 'Từ vựng',
        icon: IconHouse,
    },

]
export default routerList
