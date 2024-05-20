import { Form, InputSection, InputField, Button } from '../../../components';
import { NavLink } from 'react-router-dom';
import { IconEyeRegular } from '../../../../../feit-fe/src/svgs';
import { useState } from 'react';
export const FormSignIn = ({ account, setAccount, password, setPassword, onClick }) => {
    const [showPass, setShowPass] = useState(false);
    const handleShowHidePass = () => {
        setShowPass(!showPass);
    };
    return (
        <form onSubmit={onClick}>
            <Form
                label={'Tài khoản'}
                placeholder={'Email hoặc số điện thoại'}
                className={' mb-6'}
                valueName={account}
                onChange={setAccount}
            />
            <Form
                label={'Mật khẩu'}
                placeholder={'Tạo mật khẩu '}
                className={' mb-6'}
                valueName={password}
                type="password"
                onChange={setPassword}
            />

            <div className=" flex justify-between mb-9">
                <InputSection label="Nhớ mật khẩu" />
                <NavLink className=" text-primary-blue-500 text-button-1 font-button-1 font-plusjakartasans" to="/home">
                    Quên mật khẩu ?
                </NavLink>
            </div>
            <div className=" flex justify-center ">
                <Button title="Đăng nhập" color={'tertiaryicon'} className=" w-full py-4" size={'lg'} />
            </div>
            <h1 className=" text-center text-button-1 text-primary-black font-button-1 font-plusjakartasans mt-16 ">
                Chưa có tài khoản ?{' '}
                <NavLink
                    to="/signup"
                    className=" text-button-1 text-primary-blue-500 font-button-1 font-plusjakartasans">
                    Đăng ký
                </NavLink>
            </h1>
        </form>
    );
};
