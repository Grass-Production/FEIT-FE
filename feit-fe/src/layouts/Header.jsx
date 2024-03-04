import {NavLink} from 'react-router-dom';
import {Button} from '../components';
export const Header = () => {
    return (
        <div>
            <div className="flex px-32 py-3 justify-between items-center border border-b border-black">
                <div className=" flex w-96 justify-between">
                    <a href="">Trang Chủ</a>
                    <a href="">Giới Thiệu</a>
                    <a href=""></a>
                </div>
                <div className="">
                    <h1>LOGO</h1>
                </div>
                <div className=" flex items-center w-96 justify-between">
                    <a href="">Trang Chủ</a>
                    <a href="">Giới Thiệu</a>
                    <Button size={'md'} color={'primary'} icon={true} title={<NavLink to="/signin">Đăng nhập</NavLink>}>
                        <h1>Icon</h1>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const NavLoading = () => {
    return <div className=" w-full p-8 animate-pulse bg-gray-200 "></div>;
};
