import {publicRouter} from '../context';
import {createBrowserRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {lazy} from 'react';

// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const routes = publicRouter.map((route) => {
    const Page = route.component;
    return {
        path: route.href,
        element: (
            <>
                <Helmet>
                    <title>{route.title}</title>
                </Helmet>
                <Page />
            </>
        ),
        errorElement: (
            <>
                {' '}
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
                <NotFoundPage />
            </>
        ),
    };
});
console.log(routes);

export const router = createBrowserRouter(routes);
