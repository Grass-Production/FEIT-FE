import { HomePage, SignIn, SignUp, LandingPage } from "../pages";

export const ROUTES = {
    HomePage: '/home',
    LandingPge: '/',
    SignIn: '/signin',
    SignUp: '/signup'
}

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
