import { Form, Button } from '../../../components';
import { Link } from 'react-router-dom';
export const FormSignUp = ({ account, setAccount, password, setPassword, repassword, setRepassword, onClick }) => {
    return (
        <div>
            <Form
                label={'Tài khoảng'}
                placeholder={'Email hoặc số điện thoại'}
                className={' mb-6'}
                valueName={account}
                onChangeName={(e) => setAccount(e.target.value)}
            />
            <Form
                label={'Mật khẩu'}
                placeholder={'Tạo mật khẩu '}
                className={' mb-6'}
                valueName={password}
                onChangeName={(e) => setPassword(e.target.value)}
            />
            <Form
                label={'Nhập lại mật khẩu'}
                placeholder={'Nhập lại mật khẩu'}
                className={' mb-9'}
                valueName={repassword}
                onChangeName={(e) => setRepassword(e.target.value)}
            />

            <div className=" flex justify-center ">
                <Button onClick={onClick} title="Đăng ký" color={'tertiaryicon'} className=" w-full py-4" size={'lg'} />
            </div>
            <h1 className=" text-center text-button-1 text-primary-black font-button-1 font-plusjakartasans mt-16 ">
                Đã có tài khoảng ?{' '}
                <Link to="/signin" className=" text-button-1 text-primary-blue-500 font-button-1 font-plusjakartasans">
                    Đăng nhập
                </Link>
            </h1>
        </div>
    );
};
