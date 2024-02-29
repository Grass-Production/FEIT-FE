
import { lazy } from "react";


const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const SignIn = lazy(() => import("../pages/SignIn/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp/SignUp"))
const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"))

export const ROUTES = {
    HomePage: '/home',
    LandingPge: '/',
    SignIn: '/signin',
    SignUp: '/signup'
}

export const publicRouter = [
    {
        title: 'FEIT',
        href: ROUTES.LandingPge,
        component: LandingPage,
    },
    {
        title: 'FEIT | Home',
        href: ROUTES.HomePage,
        component: HomePage,
    },
    {
        title: 'FEIT | Sign Up',
        href: ROUTES.SignUp,
        component: SignUp,
    },
    {
        title: 'FEIT| Sign In',
        href: ROUTES.SignIn,
        component: SignIn,
    },
]

const privateRouter = [{}]

const routerList = [
    {
        title: 'FEIT',
        href: ROUTES.LandingPge,
        component: LandingPage,
    },
    {
        title: 'Home | FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
    },
    {
        title: 'Sign Up | FEIT',
        href: ROUTES.SignUp,
        component: SignUp,
    },
]
export default routerList
