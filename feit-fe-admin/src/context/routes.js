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

export const ROUTES = {
    Dashboard: '/',
    Course: '/course',
    Lesson: '/lesson',
    SignIn: '/signIn',
    SignUp: '/signUp',
    Unit: '/unit',
    Vocabulary: '/vocabulary',
    UnitDetails: '/unit/:lessonid',
}


export const privateRouter = [
    {
        title: 'FEIT',
        href: ROUTES.Dashboard,
        component: Dashboard,
        showSidebar: true,
        showHeader: false,
    },
    {
        title: 'FEIT',
        href: ROUTES.Course,
        component: Course,
        showSidebar: true,
        showHeader: true,

    },
    {
        title: 'FEIT',
        href: ROUTES.Lesson,
        component: Lesson,
        showSidebar: true,
        showHeader: true,

    },
    {
        title: 'FEIT',
        href: ROUTES.Vocabulary,
        component: Vocabulary,
        showSidebar: true,
        showHeader: true,

    },
    {
        title: 'FEIT',
        href: ROUTES.Unit,
        component: Unit,
        showSidebar: true,
        showHeader: true,

    },
    {
        title: 'FEIT',
        href: ROUTES.UnitDetails,
        component: UnitDetails,
        showSidebar: true,
        showHeader: true,

    },
    {
        title: 'FEIT | Sign Up',
        href: ROUTES.SignUp,
        component: SignUp,
        showSidebar: false,
        showHeader: false,
    },
    {
        title: 'FEIT | Sign In',
        href: ROUTES.SignIn,
        component: SignIn,
        showSidebar: false,
        showHeader: false,
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
        href: ROUTES.Course,
        component: Course,
        name: 'Quản lý bài học',
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
        href: ROUTES.Course,
        component: Course,
        name: 'Khóa học',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.Lesson,
        component: Lesson,
        name: 'Chủ đề',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.Unit,
        component: Unit,
        name: 'Chương',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.Vocabulary,
        component: Vocabulary,
        name: 'Từ vựng',
        icon: IconHouse,
    },


]
export default routerList
