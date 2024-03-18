import { NavLink } from 'react-router-dom';
import { IconArrowLogin } from '../svgs/IconArrowLogin';
import { Button } from '../components';
export const Header = () => {
    return (
        <div>
            <div className="flex px-32 py-3 justify-between items-center border border-b border-black">
                <div className="">
                    <h1>LOGO</h1>
                </div>

                <div className=" flex items-center  justify-between">
                    <div className="  flex items-center justify-between gap-8 mr-16">
                        <a className="font-bitter  " href="">
                            Trang Chủ
                        </a>
                        <a href="">Giới Thiệu</a>
                        <a href="">Tính năng</a>
                        <a href="">Câu chuyện</a>
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
