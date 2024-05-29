import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '../components';

import { IconArrowLogin, LogoFEIT } from '../svgs';

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
        <div
            className={
                scrolled ? ' drop-shadow-2xl mb-120px sticky top-0 bg-white/95' : 'mb-120px sticky top-0 bg-white'
            }>
            <div className="flex px-32 py-3 justify-between items-center ">
                <div className="">
                    <LogoFEIT />
                </div>

                <div className=" flex items-center  justify-between">
                    <div className="  flex items-center justify-between gap-8 mr-16">
                        <a className=" text-body-1 text-primary-black font-body-1 font-plusjakartasans" href="#home">
                            Trang Chủ
                        </a>
                        <a className=" text-body-1 text-primary-black font-body-1 font-plusjakartasans" href="#intro">
                            Giới Thiệu
                        </a>
                        <a className=" text-body-1 text-primary-black font-body-1 font-plusjakartasans" href="#feat">
                            Tính năng
                        </a>
                        <a className=" text-body-1 text-primary-black font-body-1 font-plusjakartasans" href="#story">
                            Câu chuyện
                        </a>
                    </div>
                    <NavLink to="/signin">
                        <Button right={true} size={'md'} color={'primaryicon'} icon={true} title={'Đăng nhập'}>
                            <IconArrowLogin />
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export const NavLoading = () => {
    return <div className=" w-full p-8 animate-pulse bg-gray-200 "></div>;
};
