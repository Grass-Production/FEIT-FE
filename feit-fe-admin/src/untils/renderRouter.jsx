import { privateRouter, childRouter } from '../context';
import { createBrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Sidebar } from '../layouts';
import NotFound from '../pages/NotFound';

const childPrivate = childRouter.map((route) => {
    const Page = route.component;
    const title = route.title;
    return {
        path: route.href,
        element: (
            <>
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
    const element = (
        <>
            <Helmet>
                <title>{route.title}</title>
            </Helmet>
            {route.showSidebar ? (
                <Sidebar show={route.showSidebar} titleHeader={route.name}>
                    <Page />
                </Sidebar>
            ) : (
                <>
                    <Page />
                </>
            )}
        </>
    );
    const errorElement = (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <NotFound />
        </>
    );
    console.log(route.href);
    // const title = route.title;
    switch (route.href) {
        case '/manage/learn':
            return {
                path: route.href,
                element: element,
                children: childPrivate,
                errorElement: errorElement,
            };
        default:
            return {
                path: route.href,
                element: element,
                errorElement: errorElement,
            };
    }
});

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
//                 <SignIn />
//             </>
//         ),
//     };
// });

const routerPrivate = createBrowserRouter(routesPrivate);

// const publicRouter = createBrowserRouter(publicRouter);

export { routerPrivate };
