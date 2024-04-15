import { privateRouter } from '../context';
import { createBrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Sidebar } from '../layouts';
import NotFound from '../pages/NotFound';

const routesPrivate = privateRouter.map((route) => {
    const Page = route.component;
    const title = route.title;
    return {
        path: route.href,
        element: (
            <>
                <Helmet>
                    <title>{title}</title>
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

const routerPrivate = createBrowserRouter(routesPrivate);

export { routerPrivate };
