import {publicRouter} from '../context';
import {NavLink} from 'react-router-dom';
export const Sidebar = ({show, children}) => {
    return (
        <div className=" grid grid-cols-3  ">
            <div className="col-span-1 bg-[#F0F0F0] sticky h-screen px-10" style={{display: show ? '' : 'none'}}>
                <h1 className=" text-Dmd mb-5">FEIT</h1>
                <div className=" ">
                    {publicRouter.map((link) => {
                        return (
                            <NavLink className=" block text-Tlg mb-7" key={link.href} to={link.href}>
                                {link.name}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <div className="">{children}</div>
        </div>
    );
};
