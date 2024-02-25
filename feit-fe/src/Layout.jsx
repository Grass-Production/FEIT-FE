import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routerList from './context/routes';
import {MainLayout} from './pages/MainLayout/MainLayout';
import {Helmet} from 'react-helmet';
import {SignIn} from './pages';
export default function Layout() {
    return (
        <Router>
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
        </Router>
    );
}
