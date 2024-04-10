import { routerList } from '../context';
import { NavLink } from 'react-router-dom';
import { LogoFEIT } from '../svgs';
export const Sidebar = ({ show, children }) => {
    // ----------- Active Link Router
    const navLinkStyle = ({ isActive }) => {
        return isActive
            ? 'border-primary-blue-500 border-[2px] text-primary-blue-400 text-body-1 font-plusjakartasans font-body-1 p-3 flex gap-1  mb-4 rounded items-center justify-start'
            : ' border-secondary-gray border text-primary-black text-body-1 font-plusjakartasans font-body-1 p-3 flex gap-1  mb-4 rounded items-center justify-start';
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
                                <NavLink style={borderStyle} className={navLinkStyle} key={link.href} to={link.href}>
                                    {/* // ----------- Active Link Router */}
                                    {({ isActive }) => (
                                        <>
                                            <Icon color={isActive ? '#5C8FFE' : '#14121B'} key={link.href} />
                                            {link.name}
                                        </>
                                    )}
                                    {/* // ----------- Active Link Router */}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className=" relative flex-1 ">
                <div className=" absolute bg-white overflow-y-auto inset-x-0 inset-y-0  ">{children}</div>
            </div>
        </div>
    );
};
