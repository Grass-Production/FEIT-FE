import { routerList } from '../context';
import { NavLink } from 'react-router-dom';

export const Sidebar = ({ show, children }) => {
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

    const colorStyle = ({ isActive }) => {
        return isActive ? ' #5C8FFE' : '#14121B';
    };
    return (
        <div className=" flex ">
            <div className=" bg-[#F0F0F0] w-[20%] h-screen " style={{ display: show ? '' : 'none' }}>
                <div className="px-10">
                    <h1 className=" text-Dmd mb-5">FEIT</h1>
                    <div className=" ">
                        {routerList.map((link) => {
                            const Page = link.icon;
                            return (
                                <NavLink style={borderStyle} className={navLinkStyle} key={link.href} to={link.href}>
                                    <Page color={colorStyle} key={link.href} />
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className=" relative flex-1   ">
                <div className=" absolute overflow-y-scroll inset-x-0 inset-y-0  ">{children}</div>
            </div>
        </div>
    );
};
