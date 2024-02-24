import {Outlet} from 'react-router-dom';
import {Navbar} from '../../layouts';

export const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
        </div>
    );
};
