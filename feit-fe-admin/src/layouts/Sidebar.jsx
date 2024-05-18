import { routerList, routerSidebar } from '../context';
import { NavLink } from 'react-router-dom';
import { LogoFEIT } from '../svgs';
import { Header, HeaderRouter } from './Header';
export const Sidebar = ({ show, children, titleHeader }) => {
    // ----------- Active Link Router
    const navLinkStyle = ({ isActive }) => {
        return isActive
            ? ' text-primary-blue-400 bor text-button-1 font-plusjakartasans font-button-1 p-3 flex gap-1  mb-4 rounded items-center justify-start'
            : ' text-primary-black border  border-transparent hover:border hover:border-primary-black text-button-1 font-plusjakartasans font-button-1 p-3 flex gap-1  mb-4 rounded items-center justify-start';
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
                className=" border-r-[3px]   border-primary-black bg-white w-[20%]  h-screen "
                style={{ display: show ? '' : 'none' }}>
                <div className="px-10 pt-5">
                    <LogoFEIT />
                    <div className=" mt-10">
                        {routerSidebar.map((link) => {
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
                <div className=" bg-white px-10 py-7 absolute overflow-y-auto inset-x-0 inset-y-0  ">
                    <div className=" mb-7">
                        <Header title={titleHeader} />
                    </div>
                    <div className="">{children}</div>
                </div>
            </div>
        </div>
    );
};
