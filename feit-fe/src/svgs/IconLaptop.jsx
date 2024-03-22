export default function IconLaptop({ color }) {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.75 15.8589H21V6.85889C21 6.26215 20.7629 5.68985 20.341 5.2679C19.919 4.84594 19.3467 4.60889 18.75 4.60889H5.25C4.65326 4.60889 4.08097 4.84594 3.65901 5.2679C3.23705 5.68985 3 6.26215 3 6.85889V15.8589H2.25C2.05109 15.8589 1.86032 15.9379 1.71967 16.0786C1.57902 16.2192 1.5 16.41 1.5 16.6089V18.1089C1.5 18.7056 1.73705 19.2779 2.15901 19.6999C2.58097 20.1218 3.15326 20.3589 3.75 20.3589H20.25C20.8467 20.3589 21.419 20.1218 21.841 19.6999C22.2629 19.2779 22.5 18.7056 22.5 18.1089V16.6089C22.5 16.41 22.421 16.2192 22.2803 16.0786C22.1397 15.9379 21.9489 15.8589 21.75 15.8589ZM4.5 6.85889C4.5 6.65997 4.57902 6.46921 4.71967 6.32856C4.86032 6.1879 5.05109 6.10889 5.25 6.10889H18.75C18.9489 6.10889 19.1397 6.1879 19.2803 6.32856C19.421 6.46921 19.5 6.65997 19.5 6.85889V15.8589H4.5V6.85889ZM21 18.1089C21 18.3078 20.921 18.4986 20.7803 18.6392C20.6397 18.7799 20.4489 18.8589 20.25 18.8589H3.75C3.55109 18.8589 3.36032 18.7799 3.21967 18.6392C3.07902 18.4986 3 18.3078 3 18.1089V17.3589H21V18.1089ZM14.25 8.35889C14.25 8.5578 14.171 8.74856 14.0303 8.88922C13.8897 9.02987 13.6989 9.10889 13.5 9.10889H10.5C10.3011 9.10889 10.1103 9.02987 9.96967 8.88922C9.82902 8.74856 9.75 8.5578 9.75 8.35889C9.75 8.15997 9.82902 7.96921 9.96967 7.82856C10.1103 7.6879 10.3011 7.60889 10.5 7.60889H13.5C13.6989 7.60889 13.8897 7.6879 14.0303 7.82856C14.171 7.96921 14.25 8.15997 14.25 8.35889Z"
                fill={color}
            />
        </svg>
    );
}

// import { routerList } from '../context';
// import { NavLink } from 'react-router-dom';

// export const Sidebar = ({ show, children }) => {
//     const navLinkStyle = ({ isActive }) => {
//         return isActive
//             ? ' border-secondary-gray border text-primary-black'
//             : 'border-primary-blue-500 border-[2px] text-primary-blue-400';
//     };
//     const borderStyle = ({ isActive }) => {
//         return {
//             boxShadow: isActive ? '4px 4px 0px 0px #000000' : '',
//         };
//     };

//     const colorStyle = ({ isActive }) => {
//         return isActive ? ' #5C8FFE' : '#14121B';
//     };

//     return (
//         <div className=" flex ">
//             <div className=" bg-[#F0F0F0] w-[20%] h-screen " style={{ display: show ? '' : 'none' }}>
//                 <div className="px-10">
//                     <h1 className=" text-Dmd mb-5">FEIT</h1>
//                     <div className=" ">
//                         {routerList.map((link) => {
//                             const Page = link.icon;
//                             return (
//                                 <NavLink
//                                     // style={borderStyle}
//                                     className={` ${navLinkStyle} text-body-1 font-plusjakartasans font-body-1 p-3 flex gap-1  mb-4 rounded items-center justify-start`}
//                                     key={link.href}
//                                     to={link.href}>
//                                     {<Page color={colorStyle} key={link.href} />}
//                                     {link.name}
//                                 </NavLink>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <div className=" relative flex-1   ">
//                 <div className=" absolute overflow-y-scroll inset-x-0 inset-y-0  ">{children}</div>
//             </div>
//         </div>
//     );
// };
