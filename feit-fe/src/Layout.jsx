import { RouterProvider } from 'react-router-dom';
import Loading from './pages/LandingPage/component/Loading';
import { Suspense, useState } from 'react';
import { routerPublic, routerPrivate } from './untils/renderRouter';
import { useEffect } from 'react';

export default function Layout() {
    const [isLogin, setIslogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(null);
    useEffect(() => {
        // const checkLoginStatus = () => {
        //     const token = localStorage.getItem('access_token') !== null;
        //     if (token) {
        //         setIslogin(true);
        //     }
        // };
        const checkLoginStatus = () => {
            const loggedInValue = getCookie('logged_in');
            setLoggedIn(loggedInValue);
            if (loggedInValue !== null) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        };
        checkLoginStatus();
    }, []);

    console.log('loggedInValue', loggedIn);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    return (
        <Suspense fallback={<Loading />}>
            {loggedIn === true && <RouterProvider router={routerPrivate} />}
            {loggedIn !== true && <RouterProvider router={routerPublic} />}
            {/* <RouterProvider router={routerPrivate} /> */}
        </Suspense>
    );
}
