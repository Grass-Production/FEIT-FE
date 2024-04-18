import { RouterProvider } from 'react-router-dom';
import Loading from './pages/LandingPage/component/Loading';
import { Suspense, useState } from 'react';
import { routerPublic, routerPrivate } from './untils/renderRouter';
import { useEffect } from 'react';

export default function Layout() {
    const [isLogin, setIslogin] = useState(false);
    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem('access_token') !== null;
            if (token) {
                setIslogin(true);
            }
        };
        checkLoginStatus();
    }, []);
    return (
        <Suspense fallback={<Loading />}>
            {/* {isLogin ? <RouterProvider router={routerPrivate} /> : <RouterProvider router={routerPublic} />} */}
            <RouterProvider router={routerPrivate} />
        </Suspense>
    );
}
