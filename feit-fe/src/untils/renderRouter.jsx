import { publicRouter, privateRouter } from '../context';
import { createBrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { lazy, useState } from 'react';
import { Sidebar } from '../layouts';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
// const [isLogin, setIsLogin] = useState(true);
// const NotFound = lazy(() => import('../pages/NotFound'));

const routes = publicRouter.map((route) => {
    const Page = route.component;
    return {
        path: route.href,
        element: (
            <>
                <Helmet>
                    <title>{route.title}</title>
                </Helmet>
                {route.showSidebar ? (
                    <Sidebar show={route.showSidebar}>
                        <Page />
                    </Sidebar>
                ) : (
                    <>
                        <Page />
                    </>
                )}
            </>
        ),
        errorElement: (
            <>
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
                <NotFound />
            </>
        ),
    };
});

const routesPrivate = privateRouter.map((route) => {
    const Page = route.component;

    return {
        path: route.href,
        element: (
            <>
                <Helmet>
                    <title>{route.title}</title>
                </Helmet>
                {route.showSidebar ? (
                    <Sidebar show={route.showSidebar}>
                        <Page />
                    </Sidebar>
                ) : (
                    <>
                        <Page />
                    </>
                )}
            </>
        ),
        errorElement: (
            <>
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
                <SignIn />
            </>
        ),
    };
});

const routerPublic = createBrowserRouter(routes);
const routerPrivate = createBrowserRouter(routesPrivate);

export { routerPublic, routerPrivate };

// const routes = publicRouter.map((route) => {
//     const Page = route.component;
//     return {
//         path: route.href,
//         element: (
//             <>
//                 <Helmet>
//                     <title>{route.title}</title>
//                 </Helmet>
//                 {route.showSidebar ? (
//                     <Sidebar show={route.showSidebar}>
//                         <Page />
//                     </Sidebar>
//                 ) : (
//                     <>
//                         <Page />
//                     </>
//                 )}
//             </>
//         ),
//         errorElement: (
//             <>
//                 <Helmet>
//                     <title>Not Found</title>
//                 </Helmet>
//                 <NotFound />
//             </>
//         ),
//     };
// });

// const routesPrivate = privateRouter.map((route) => {
//     const Page = route.component;

//     return {
//         path: route.href,
//         element: (
//             <>
//                 <Helmet>
//                     <title>{route.title}</title>
//                 </Helmet>
//                 {route.showSidebar ? (
//                     <Sidebar show={route.showSidebar}>
//                         <Page />
//                     </Sidebar>
//                 ) : (
//                     <>
//                         <Page />
//                     </>
//                 )}
//             </>
//         ),
//         errorElement: (
//             <>
//                 <Helmet>
//                     <title>Not Found</title>
//                 </Helmet>
//                 <SignIn />
//             </>
//         ),
//     };
// });

// export const router = createBrowserRouter(login ? routes : routesPrivate);
