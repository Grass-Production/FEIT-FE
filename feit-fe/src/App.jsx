import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './OAuth/login';
import {publicRoutes} from './routes';
export default function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </Router>
    );
}
