import { routerList } from '../context';
import { NavLink } from 'react-router-dom';
import { LogoFEIT } from '../svgs';
export const Sidebar = ({ show, children }) => {
    // ----------- Active Link Router
    const navLinkStyle = ({ isActive }) => {
        return isActive
            ? ' text-primary-blue-400 text-button-1 font-plusjakartasans font-button-1 p-3 flex gap-1  mb-4 rounded items-center justify-start'
            : ' text-primary-black text-button-1 font-plusjakartasans font-button-1 p-3 flex gap-1  mb-4 rounded items-center justify-start';
    };
    const borderStyle = ({ isActive }) => {
        return {
            boxShadow: isActive ? '4px 4px 0px 0px #000000' : '',
        };
    };
    // ----------- Active Link Router

    return (
        <div className=" flex ">
            <div
                className=" border-r-[3px] border-primary-black bg-white w-[20%]  h-screen "
                style={{ display: show ? '' : 'none' }}>
                <div className="px-10 pt-5">
                    <LogoFEIT />
                    <div className=" mt-10">
                        {routerList.map((link) => {
                            const Icon = link.icon;
                            return (
                                <NavLink className={navLinkStyle} key={link.href} to={link.href}>
                                    {/* // ----------- Active Link Router */}
                                    {({ isActive }) => (
                                        <div className=" flex justify-center items-center gap-2">
                                            <Icon color={isActive ? '#5C8FFE' : '#14121B'} key={link.href} />
                                            {link.name}
                                        </div>
                                    )}
                                    {/* // ----------- Active Link Router */}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className=" relative flex-1 ">
                <div className=" absolute bg-primary-grey overflow-y-auto inset-x-0 inset-y-0  ">{children}</div>
            </div>
        </div>
    );
};
