import {publicRouter} from '../context';
import {createBrowserRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {lazy} from 'react';
import {Sidebar} from '../layouts';
const NotFound = lazy(() => import('../pages'));

const routes = publicRouter.map((route) => {
    const Page = route.component;
    return {
        path: route.href,
        element: (
            <>
                <Helmet>
                    <title>{route.title}</title>
                </Helmet>
                <Sidebar show={route.showSidebar}>
                    <Page />
                </Sidebar>
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

export const router = createBrowserRouter(routes);
