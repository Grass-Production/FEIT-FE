import { Form, InputSection, Button, InputField } from '../../../components';
import { NavLink } from 'react-router-dom';
export const FormSignIn = ({ inputData, onClick, onChange }) => {
    return (
        <form onSubmit={onClick}>
            <Form label={'Tài khoản'}>
                <InputField
                    placeholder={'Email hoặc số điện thoại'}
                    className={' w-full mb-6'}
                    name={Object.keys(inputData)[0]}
                    value={inputData.account}
                    type="text"
                    onChange={onChange}
                />
            </Form>
            <Form label={'Mật khẩu'}>
                <InputField
                    placeholder={'Tạo mật khẩu'}
                    className={' w-full mb-6'}
                    name={Object.keys(inputData)[1]}
                    value={inputData.password}
                    type="text"
                    onChange={onChange}
                />
            </Form>
            <div className=" flex justify-between mb-9">
                <InputSection label="Nhớ mật khẩu" />
                <NavLink
                    className=" text-primary-blue-500 text-button-1 font-button-1 font-plusjakartasans"
                    to="/forgetpassword">
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
