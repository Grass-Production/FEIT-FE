import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, InputField } from '../components';
import { NoneIcon } from '../svgs';
import { IconArrowLogin, LogoFEIT, IconSearch, IconPlusCircle, IconDelete, IconPencil, ArrowCircleDown } from '../svgs';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                // Chỉ đặt hiệu ứng đổ bóng khi cuộn xuống một khoảng cụ thể (ví dụ: 200px)
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="">
            <div className="flex justify-between items-center border border-primary-black p-3 mb-12">
                <div className="">
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                        Quản lý bài học
                    </h1>
                </div>
                <div className="flex justify-center items-center gap-6 ">
                    <img src="/src/assets/images/Avatar.png" alt="" />
                    <div className="">
                        <h1>Ngô Hoài Phong</h1>
                        <h1>Administrator </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HeaderSearch = ({ link, filter, id, handleChangeUI, handleShowPopUp }) => {
    const [showNav, setShowNav] = useState(false);
    const [changeUI, setChangeUI] = useState(false);
    function handleOnlick() {
        setShowNav(!showNav);
    }
    function OnClickShowPopUp() {
        handleShowPopUp(true);
    }
    function OnChangeUI(changeui) {
        // setChangeUI(changeui);
        handleChangeUI(changeui);
        console.log(changeui);
    }
    return (
        <div className=" flex justify-between items-center border border-primary-black p-3">
            <div className=" flex justify-start items-center gap-5">
                <div className=" flex items-center border border-secondary-gray rounded-md px-4 py-2">
                    <IconSearch />
                    <InputField placeholder={'Tìm kiếm'} className=" border-none p-0" />
                </div>
                <div className="flex items-center gap-5">
                    <Button icon={true} left={true} onClick={OnClickShowPopUp} title="Thêm dữ liệu" color={'primary'}>
                        <IconPlusCircle />
                    </Button>
                    <Button icon={true} left={true} title="Xóa" color={'primary'}>
                        <IconDelete />
                    </Button>
                    <Button icon={true} left={true} title="Sửa" color={'primary'}>
                        <IconPencil />
                    </Button>
                    <button onClick={() => OnChangeUI(true)}>
                        <NoneIcon />
                    </button>
                    <button onClick={() => OnChangeUI(false)}>
                        <NoneIcon />
                    </button>
                    <div class="relative inline-block text-left">
                        <Button onClick={handleOnlick} icon={true} left={true} title="Lọc" color={'primary'}>
                            <IconPlusCircle />
                        </Button>

                        {showNav && (
                            <div
                                class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabindex="-1">
                                {filter.map((v, i) => {
                                    return (
                                        <div key={i} class="py-1" role="none">
                                            <NavLink
                                                to={`${link}${v[id]}`}
                                                class="text-gray-700 block px-4 py-2 text-sm w-full"
                                                role="menuitem"
                                                tabindex="-1"
                                                id="menu-item-0">
                                                {v.name}
                                            </NavLink>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=" flex items-center gap-5">
                <Button title="Trước" className=" px-3 py-2 min-w-20" color={'primary'}></Button>
                <h1 className=" text-body-2 font-body-2 font-plusjakartasans text-primary-black">Trang 1 trên 10</h1>
                <Button title="Sau" className=" px-3 py-2 min-w-20" color={'primary'}></Button>
            </div>
        </div>
    );
};
