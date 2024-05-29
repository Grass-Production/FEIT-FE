import { FormSignIn } from './component';

import { useState } from 'react';

import { Login } from '../../services/loginAPI';
import { useNavigate } from 'react-router-dom';
import { ToastError } from '../../components/Toast';

export default function SignIn() {
    // const history = useHistory();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [isShowToast, setIsShowToast] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await Login(account, password);

            if (res.status === 200) {
                navigate(`/`);
                window.location.reload();
                console.log('Login successful');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            setIsShowToast(true);
            setTimeout(() => setIsShowToast(false), 2000);
        }
    };

    return (
        <div>
            {isShowToast && <ToastError message="Sai tên tài khoản hoặc nhập khẩu" />}
            <div className=" flex h-screen">
                <div className=" w-1/2 flex items-center h-screen bg-center bg-no-repeat bg-cover bg-[url('')]">
                    <img
                        className=" w-full m-auto"
                        src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711250572/feit-static/%C4%90%C4%83ng%20nh%E1%BA%ADp.png.png"
                        alt=""
                    />
                </div>

                <div className=" px-52 flex justify-center items-center">
                    <div>
                        <h1 className=" text-center text-heading-4 text-primary-black font-heading-4 mb-10">
                            Đăng nhập
                        </h1>

                        <h1 className=" mt-10 text-center mb-5 text-caption-1 font-bitter text-secondary-gray font-caption-1">
                            Hoặc đăng nhập bằng
                        </h1>
                        <FormSignIn
                            onClick={handleLogin}
                            account={account}
                            setAccount={(e) => setAccount(e.target.value)}
                            password={password}
                            setPassword={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
