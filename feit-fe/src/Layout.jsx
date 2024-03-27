import { RouterProvider } from 'react-router-dom';
import Loading from './pages/LandingPage/component/Loading';
import { Suspense, useState } from 'react';
import { routerPublic, routerPrivate } from './untils/renderRouter';
import { useEffect } from 'react';
import { privateRouter } from './context';

export default function Layout() {
    const [isLogin, setIslogin] = useState(false);
    const [hehe, setHehe] = useState(false);
    useEffect(() => {
        const cookies = document.cookie;
        const hehe = false;
        setHehe(hehe);
        const isLogin = cookies.includes('logged_in');
        setIslogin(isLogin);
        console.log('islogin : ', isLogin);
        console.log(cookies);
    }, []);
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider
                router={isLogin && hehe ? routerPublic : privateRouter || isLogin ? routerPrivate : routerPublic}
            />
        </Suspense>
    );
}
