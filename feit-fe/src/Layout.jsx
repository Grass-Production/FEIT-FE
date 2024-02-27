import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routerList from './context/routes';
import Loading from './pages/LandingPage/component/Loading';
import {Helmet} from 'react-helmet';
import SignIn from './pages/SignIn/SignIn';
import {Suspense, lazy} from 'react';

const MainLayout = lazy(() => import('./pages/MainLayout/MainLayout'));
export default function Layout() {
    const path = window.location.pathname;
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        {routerList.map((route) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={route.title}
                                    path={route.href}
                                    element={
                                        <>
                                            <Helmet>
                                                <title>{route.title}</title>
                                            </Helmet>
                                            <Page />
                                        </>
                                    }
                                />
                            );
                        })}
                        <Route />
                    </Route>
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
