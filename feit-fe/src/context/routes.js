import { lazy } from "react";

import IconLaptop from "../svgs/IconLaptop";

const Announce = lazy(() => import("../pages/Announce"))
const History = lazy(() => import("../pages/History"))
const HomePage = lazy(() => import("../pages/HomePage"))
const LandingPage = lazy(() => import("../pages/LandingPage"))
const LeaderBoard = lazy(() => import("../pages/LeaderBoard"))
const LessonDetail = lazy(() => import("../pages/Lesson/LessonDetail"))
const Profile = lazy(() => import("../pages/Profile"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Welcome = lazy(() => import("../pages/Welcome"))
const Unit = lazy(() => import("../pages/Unit"))
const Learn = lazy(() => import("../pages/Learn"))




export const ROUTES = {
    Announce: '/announce',
    History: '/history',
    HomePage: '/',
    LandingPage: '/about',
    LeaderBoard: '/leaderboard',
    Learn: '/learn',
    LessonDetail: '/learn/lesson/:lessonid',
    Profile: '/profile',
    SignIn: '/signIn',
    SignUp: '/signUp',
    Welcome: '/welcome',
    Unit: '/learn/lesson/:lessonid/unit/:unitid'
}

export const publicRouter = [
    {
        title: 'FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
        showSidebar: true,
        name: 'Trang chủ',
    },
    {
        title: 'FEIT | Learn',
        href: ROUTES.Learn,
        component: Learn,
        showSidebar: true,
        name: 'Học tập',

    },
    {
        title: 'FEIT | Lesson',
        href: ROUTES.LessonDetail,
        component: LessonDetail,
        showSidebar: true,


    },
    {
        title: 'FEIT | Unit',
        href: ROUTES.Unit,
        component: Unit,
    },
    {
        title: 'FEIT | LeaderBoard',
        href: ROUTES.LeaderBoard,
        component: LeaderBoard,
        showSidebar: true,
        name: 'Bảng xếp hạng',

    },
    {
        title: 'FEIT | Announce',
        href: ROUTES.Announce,
        component: Announce,
        showSidebar: true,
        name: 'Thông báo',

    },
    {
        title: 'FEIT | History',
        href: ROUTES.History,
        component: History,
        showSidebar: true,
        name: 'Lịch sử',

    },
    {
        title: 'FEIT | Profile',
        href: ROUTES.Profile,
        component: Profile,
        showSidebar: true,
        name: 'Tài khoản',

    },
    {
        title: 'FEIT | Welcome',
        href: ROUTES.Welcome,
        component: Welcome,
        showSidebar: false,

    },
    {
        title: 'FEIT',
        href: ROUTES.LandingPage,
        component: LandingPage,
        showSidebar: false,

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


const privateRouter = [{}]

export const routerList = [
    {
        title: 'FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
        name: 'Trang chủ',
        icon: IconLaptop,
    },
    {
        title: 'FEIT | Learn',
        href: ROUTES.Learn,
        component: Learn,
        name: 'Học tập',
        icon: IconLaptop,

    },
    {
        title: 'FEIT | LeaderBoard',
        href: ROUTES.LeaderBoard,
        component: LeaderBoard,
        name: 'Bảng xếp hạng',
        icon: IconLaptop,

    },
    {
        title: 'FEIT | Announce',
        href: ROUTES.Announce,
        component: Announce,
        name: 'Thông báo',
        icon: IconLaptop,

    },
    {
        title: 'FEIT | History',
        href: ROUTES.History,
        component: History,
        name: 'Lịch sử',
        icon: IconLaptop,
    },
    {
        title: 'FEIT | Profile',
        href: ROUTES.Profile,
        component: Profile,
        name: 'Tài khoản',
        icon: IconLaptop,
    },

]
export default routerList
