import routerList from '../context/routes';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="">
            {routerList.map((route) => {
                return (
                    <NavLink to={route.href} key={route.title}>
                        {route.title}
                    </NavLink>
                );
            })}
        </div>
    );
};
