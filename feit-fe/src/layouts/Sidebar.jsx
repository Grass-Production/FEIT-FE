import {publicRouter} from '../context';
import {NavLink} from 'react-router-dom';
export const Sidebar = ({show, children}) => {
    return (
        <div className=" flex ">
            <div className=" bg-[#F0F0F0] h-screen " style={{display: show ? '' : 'none'}}>
                <div className="px-10">
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
            </div>
            <div className=" relative flex-1   ">
                <div className=" absolute overflow-y-scroll inset-x-0 inset-y-0 ">{children}</div>
            </div>
        </div>
    );
};
