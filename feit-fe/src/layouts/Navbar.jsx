import {NavLink} from 'react-router-dom';
import {Button} from '../components';
export const Navbar = () => {
    return (
        <div className=" flex px-32 py-3 justify-between items-center border border-b border-black">
            <div className=" flex w-96 justify-between ">
                <a href="">Trang Chủ</a>
                <a href="">Giới Thiệu</a>
                <a href="">Tính Năng</a>
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
    );
};
