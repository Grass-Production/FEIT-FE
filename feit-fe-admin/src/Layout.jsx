import { RouterProvider } from 'react-router-dom';
import Loading from './pages/Loading';
import { Suspense, useState } from 'react';
import { routerPrivate } from './untils/renderRouter';
import { useEffect } from 'react';

export default function Layout() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routerPrivate} />
        </Suspense>
    );
}
