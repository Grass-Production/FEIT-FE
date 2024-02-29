import {RouterProvider} from 'react-router-dom';
import Loading from './pages/LandingPage/component/Loading';
import {Suspense} from 'react';
import {router} from './untils';

export default function Layout() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}
