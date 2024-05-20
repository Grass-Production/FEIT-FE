import { RouterProvider } from 'react-router-dom';
import Loading from './pages/Loading';
import { Suspense } from 'react';
import { routerPrivate, routerPublic } from './untils/renderRouter';
import { useEffect, useState } from 'react';

export default function Layout() {
    const [loggedIn, setLoggedIn] = useState(null);
    useEffect(() => {
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

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routerPrivate} />
            {/* {loggedIn === true && <RouterProvider router={routerPrivate} />}
            {loggedIn !== true && <RouterProvider router={routerPublic} />} */}
        </Suspense>
    );
}
