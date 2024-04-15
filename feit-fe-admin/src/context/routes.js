import { lazy } from "react";


import { IconLaptop, IconHouse, IconBell, IconList, IconChartBar, IconSearch, IconUser, IconClockClockwise, IconCrown } from "../svgs";


const Lesson = lazy(() => import("../pages/Lesson"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Unit = lazy(() => import("../pages/Unit"))
const UnitDetails = lazy(() => import("../pages/UnitDetails"))
const Vocabulary = lazy(() => import("../pages/Vocabulary"))


export const ROUTES = {

    Lesson: '/',
    SignIn: '/signIn',
    SignUp: '/signUp',
    Unit: '/unit',
    Vocabulary: '/vocabulary',
    UnitDetails: '/unit/:lessonid',
}


export const privateRouter = [
    {
        title: 'FEIT',
        href: ROUTES.Lesson,
        component: Lesson,
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.Vocabulary,
        component: Vocabulary,
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.Unit,
        component: Unit,
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.UnitDetails,
        component: UnitDetails,
        showSidebar: true,
    },
    {
        title: 'FEIT | Sign Up',
        href: ROUTES.SignUp,
        component: SignUp,
        showSidebar: false,

    },
    {
        title: 'FEIT | Sign In',
        href: ROUTES.SignIn,
        component: SignIn,
        showSidebar: false,
    },
]

export const routerList = [
    {
        title: 'FEIT',
        href: ROUTES.Lesson,
        component: Lesson,
        name: 'Chủ đề',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: ROUTES.Vocabulary,
        component: Vocabulary,
        name: 'Từ vựng',
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
        href: ROUTES.SignIn,
        component: SignIn,
        name: 'Đăng nhập',
        icon: IconHouse,
    },

]
export default routerList
