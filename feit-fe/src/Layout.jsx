import { RouterProvider } from 'react-router-dom';
import Loading from './pages/LandingPage/component/Loading';
import { Suspense, useState } from 'react';
import { routerPublic, routerPrivate } from './untils/renderRouter';
import { useEffect } from 'react';

export default function Layout() {
    const [isLogin, setIslogin] = useState(true);
    useEffect(() => {
        const checkLoginStatus = () => {
            const cookies = document.cookie;
            const statusLogin = cookies.includes('logged_in');
            setIslogin(statusLogin);
        };
        checkLoginStatus();
        console.log('setIslogin : ', isLogin);
    }, []);
    return (
        <Suspense fallback={<Loading />}>
            {/* {isLogin ? <RouterProvider router={routerPrivate} /> : <RouterProvider router={routerPublic} />} */}
            <RouterProvider router={routerPrivate} />
        </Suspense>
    );
}
