import { HomePage, SignIn, SignUp } from "../pages";

export const ROUTES = {
    HomePage: '/',
    SignIn: '/signin',
    SignUp: '/signup'
}

const routerList = [
    {
        title: 'Home | FEIT',
        href: ROUTES.HomePage,
        component: HomePage,
    },
    {
        title: 'Sign In | FEIT',
        href: ROUTES.SignIn,
        component: SignIn,
    },
    {
        title: 'Sign Up | FEIT',
        href: ROUTES.SignUp,
        component: SignUp,
    },
]
export default routerList
