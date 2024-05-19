import { FormSignIn } from './component';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import { IconGoogleLogo } from '../../svgs';
import { Login } from '../../services/loginAPI';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

export default function SignIn() {
    // const history = useHistory();
    const [formInput, setFormInput] = useState({
        account: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };
    const LoginGoogle = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            // Gửi mã phản hồi đến máy chủ để đăng nhập
            try {
                const res = await axios.get(
                    `http://localhost:8080/api/auth/google/callback?code=${codeResponse.code}`,
                    { withCredentials: true },
                );
                if (res.status === 200) {
                    localStorage.setItem('access_token', res.data.token);
                    navigate(`/`);
                    window.location.reload();
                    console.log('tokenResponse', res.data.token);
                }
                return res;
            } catch (error) {
                console.error('Error while exchanging code for token:', error);
            }
        },
        flow: 'auth-code',
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        const res = await Login(formInput.account, formInput.password);
        if (res.status === 200) {
            navigate(`/`);
            window.location.reload();
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    };

    return (
        <div>
            <div className=" flex h-screen overflow-hidden">
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
                        <Button
                            className=" w-full border-[2px] border-primary-black rounded-none"
                            color={'primaryicon'}
                            onClick={LoginGoogle}
                            title="Đăng nhập bằng Google"
                            icon={true}
                            left={true}>
                            <IconGoogleLogo />
                        </Button>
                        <h1 className=" mt-10 text-center mb-5 text-caption-1 font-bitter text-secondary-gray font-caption-1">
                            Hoặc đăng nhập bằng
                        </h1>
                        <FormSignIn onClick={handleLogin} inputData={formInput} onChange={handleOnChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}
