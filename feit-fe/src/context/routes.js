
import { lazy } from "react";


const Announce = lazy(() => import("../pages/Announce"))
const History = lazy(() => import("../pages/History"))
const HomePage = lazy(() => import("../pages/HomePage"))
const LandingPage = lazy(() => import("../pages/LandingPage"))
const LeaderBoard = lazy(() => import("../pages/LeaderBoard"))
const Lesson = lazy(() => import("../pages/Lesson"))
const Profile = lazy(() => import("../pages/Profile"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Welcome = lazy(() => import("../pages/Welcome"))




export const ROUTES = {
    Announce: '/announce',
    History: '/history',
    HomePage: '/',
    LandingPage: '/about',
    LeaderBoard: '/leaderboard',
    Lesson: '/lesson',
    Profile: '/profile',
    SignIn: '/signIn',
    SignUp: '/signUp',
    Welcome: '/welcome',
}

export const publicRouter = [
    {
        title: 'FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
        showSidebar: true,
        name: 'Trang chủ'
    },
    {
        title: 'FEIT | Lesson',
        href: ROUTES.Lesson,
        component: Lesson,
        showSidebar: true,
        name: 'Học tập'
    },
    {
        title: 'FEIT | LeaderBoard',
        href: ROUTES.LeaderBoard,
        component: LeaderBoard,
        showSidebar: true,
        name: 'Bảng xếp hạng'
    },
    {
        title: 'FEIT | Announce',
        href: ROUTES.Announce,
        component: Announce,
        showSidebar: true,
        name: 'Thông báo'
    },
    {
        title: 'FEIT | History',
        href: ROUTES.History,
        component: History,
        showSidebar: true,
        name: 'Lịch sử'
    },
    {
        title: 'FEIT | Profile',
        href: ROUTES.Profile,
        component: Profile,
        showSidebar: true,
        name: 'Tài khoản'
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

const routerList = [
    {
        title: 'FEIT',
        href: ROUTES.LandingPge,
        component: LandingPage,
        showSidebar: true,
        name: ''
    },
    {
        title: 'FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
        showSidebar: true,
        name: ''
    },
    {
        title: 'Sign Up | FEIT',
        href: ROUTES.SignUp,
        component: SignUp,
        showSidebar: true,
        name: ''
    },
]
export default routerList
