import { lazy } from "react";


import { IconLaptop, IconHouse, IconBell, IconList, IconChartBar, IconSearch, IconUser, IconClockClockwise, IconCrown, IconChatTeardropText } from "../svgs";

const Announce = lazy(() => import("../pages/Announce"))
const Feedback = lazy(() => import("../pages/Feedback"))
const HomePage = lazy(() => import("../pages/HomePage"))
const LandingPage = lazy(() => import("../pages/LandingPage"))
const LeaderBoard = lazy(() => import("../pages/LeaderBoard"))
const LessonDetail = lazy(() => import("../pages/Lesson/LessonDetail"))
const Profile = lazy(() => import("../pages/Profile"))
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Welcome = lazy(() => import("../pages/Welcome"))
const Unit = lazy(() => import("../pages/Unit"))
const UnitReview = lazy(() => import("../pages/UnitReview"))
const Learn = lazy(() => import("../pages/Learn"))
const List = lazy(() => import("../pages/List"))
const Search = lazy(() => import("../pages/Search"))
const Statistic = lazy(() => import("../pages/Statistic"))
const ListDetails = lazy(() => import("../pages/ListDetails"))
const UnitQuiz = lazy(() => import("../pages/UnitQuiz"))
const VerifyCode = lazy(() => import("../pages/VerifyCode"))
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"))

export const ROUTES = {
    Announce: '/announce',
    Feedback: '/feedback',
    HomePage: '/',
    LandingPage: '/',
    LeaderBoard: '/leaderboard',
    Learn: '/learn',
    LessonDetail: '/learn/lesson/:lessonid',
    Profile: '/profile',
    SignIn: '/signin',
    SignUp: '/signup',
    Welcome: '/welcome',
    Unit: '/learn/lesson/:lessonid/unit/:unitid',
    UnitReview: '/learn/lesson/:lessonid/unit/:unitid/exercise',
    UnitQuiz: '/learn/lesson/:lessonid/unit/:unitid/quiz',
    List: '/list',
    Search: '/search',
    VerifyCode: '/verify/:verifytype',
    ForgetPassword: '/forgetpassword',
    Statistic: '/statistic',
    ListDetails: '/list/:idlist',
}

export const publicRouter = [
    {
        title: 'FEIT | Welcome',
        href: ROUTES.Welcome,
        component: Welcome,
        showSidebar: false,

    },
    {
        title: 'FEIT | Unit',
        href: ROUTES.VerifyCode,
        component: VerifyCode,
        showSidebar: false,
    },
    {
        title: 'FEIT | Forget Password',
        href: ROUTES.ForgetPassword,
        component: ForgetPassword,
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


export const privateRouter = [
    {
        title: 'FEIT | VerifyCode',
        href: ROUTES.VerifyCode,
        component: VerifyCode,
    },
    {
        title: 'FEIT | Forget Password',
        href: ROUTES.ForgetPassword,
        component: ForgetPassword,
    },
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
        title: 'FEIT | Search',
        href: ROUTES.Search,
        component: Search,
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
        title: 'FEIT | Unit',
        href: ROUTES.UnitReview,
        component: UnitReview,
    },
    {
        title: 'FEIT | Unit',
        href: ROUTES.UnitQuiz,
        component: UnitQuiz,
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
        title: 'FEIT | Statistic',
        href: ROUTES.Statistic,
        component: Statistic,
        showSidebar: true,
        name: 'Thống kê',
    },
    {
        title: 'FEIT | List',
        href: ROUTES.List,
        component: List,
        showSidebar: true,
        name: 'List',

    },
    {
        title: 'FEIT | Feedback',
        href: ROUTES.Feedback,
        component: Feedback,
        showSidebar: true,
        name: 'Lịch sử',

    },
    {
        title: 'FEIT | List',
        href: ROUTES.ListDetails,
        component: ListDetails,
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

export const routerList = [
    {
        title: 'FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
        name: 'Trang chủ',
        icon: IconHouse,
    },
    {
        title: 'FEIT | Learn',
        href: ROUTES.Learn,
        component: Learn,
        name: 'Học tập',
        icon: IconLaptop,

    },
    {
        title: 'FEIT | Search',
        href: ROUTES.Search,
        component: Search,
        name: 'Tìm kiếm',
        icon: IconSearch,

    },
    {
        title: 'FEIT | LeaderBoard',
        href: ROUTES.LeaderBoard,
        component: LeaderBoard,
        name: 'Bảng xếp hạng',
        icon: IconChartBar,

    },
    {
        title: 'FEIT | Announce',
        href: ROUTES.Announce,
        component: Announce,
        name: 'Thông báo',
        icon: IconBell,

    },
    {
        title: 'FEIT | Statistic',
        href: ROUTES.Statistic,
        component: Statistic,
        name: 'Thống kê',
        icon: IconCrown,
    },
    {
        title: 'FEIT | Feedback',
        href: ROUTES.Feedback,
        component: Feedback,
        name: 'Đóng góp ý kiến',
        icon: IconChatTeardropText,
    },
    {
        title: 'FEIT | List',
        href: ROUTES.List,
        component: List,
        name: 'Danh sách',
        icon: IconList,
    },
    {
        title: 'FEIT | Profile',
        href: ROUTES.Profile,
        component: Profile,
        name: 'Tài khoản',
        icon: IconUser,
    },

]
export default routerList
