import { useState } from 'react';
import { Form, Button } from '../../../components';
import { Link } from 'react-router-dom';
export const FormSignUp = ({ account, setAccount, password, setPassword, repassword, setRepassword, onClick }) => {
    const [checkInput, setCheckInput] = useState({
        email: true,
        pass: true,
        repass: true,
    });
    const handleSubmit = (event) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
        const isValidEmail = emailPattern.test(account);
        const isValidPass = passPattern.test(password);
        console.log(isValidPass);
        setCheckInput({
            ...checkInput,
            email: emailPattern.test(account),
            pass: passPattern.test(password),
        });

        event.preventDefault();
    };
    console.log(checkInput);
    return (
        <form onSubmit={handleSubmit} noValidate>
            <Form
                label={'Tài khoảng'}
                placeholder={'Email hoặc số điện thoại'}
                className={''}
                classNameInput=" border-semantic-danger border outline-semantic-danger w-full"
                value={account}
                type="email"
                onChange={setAccount}
            />
            <span className="mb-6 block text-semantic-danger">Email không hợp lệ</span>

            <Form
                label={'Mật khẩu'}
                placeholder={'Tạo mật khẩu '}
                className={' mb-6'}
                value={password}
                onChange={setPassword}
            />
            <Form
                label={'Nhập lại mật khẩu'}
                placeholder={'Nhập lại mật khẩu'}
                className={' mb-9'}
                value={repassword}
                onChange={setRepassword}
            />

            <div className=" flex justify-center ">
                <Button
                    onClick={onClick}
                    title="Đăng ký"
                    color={'tertiaryicon'}
                    type="submit"
                    className=" w-full py-4"
                    size={'lg'}
                />
            </div>
            <h1 className=" text-center text-button-1 text-primary-black font-button-1 font-plusjakartasans mt-16 ">
                Đã có tài khoảng ?{' '}
                <Link to="/signin" className=" text-button-1 text-primary-blue-500 font-button-1 font-plusjakartasans">
                    Đăng nhập
                </Link>
            </h1>
        </form>
    );
};
