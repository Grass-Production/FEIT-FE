import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAuthGoogle } from '../../features';
import { FormSignUp } from './component';
import { useState } from 'react';
import { signup } from '../../services/userAPI';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const [formInput, setFormInput] = useState({
        full_name: '',
        email: '',
        password: '',
        avatar_url:
            'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711246614/feit-user/Ch%C6%B0%C6%A1ng%202.png.png',
        specialize: '',
        phone: '',
        repassword: '',
    });
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const res = await signup({
                full_name: formInput.full_name,
                email: formInput.email,
                password: formInput.password,
                avatar_url: formInput.avatar_url,
                specialize: formInput.specialize,
                phone: formInput.phone,
            });
            if (res.status === 200) {
                navigate(`/verify/signup`);
            }
            console.log(res);
        } catch (error) {
            console.log('error : ', error);
        }
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };

    return (
        <div>
            <div className=" flex h-screen">
                <div className=" px-52 flex justify-center items-center">
                    <div>
                        <h1 className=" text-center text-heading-4 text-primary-black font-heading-4 mb-10">Đăng Ký</h1>
                        {/* <GoogleOAuthProvider clientId="168558856798-cohnb8nqdnl38nriop2v752sap4mgpb8.apps.googleusercontent.com">
                            <OAuthGoogle />
                        </GoogleOAuthProvider> */}
                        <h1 className=" mt-6  text-center mb-5 text-caption-1 font-bitter text-secondary-gray font-caption-1">
                            Hoặc đăng ký bằng
                        </h1>
                        <FormSignUp onSubmit={handleSignUp} onChange={handleOnChange} inputData={formInput} />
                    </div>
                </div>
                <div className=" w-1/2 flex items-center h-screen bg-center bg-no-repeat bg-cover bg-[url('')]">
                    <img
                        className=" w-full m-auto"
                        src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711250571/feit-static/%C4%90%C4%83ng%20k%C3%BD.png.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
