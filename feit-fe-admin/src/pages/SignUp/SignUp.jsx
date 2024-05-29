// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { OAuthGoogle } from '../../features';
import { FormSignUp } from './component';
import { useState } from 'react';

export default function SignUp() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    return (
        <div>
            <div className=" flex h-screen">
                <div className=" px-52 flex justify-center items-center">
                    <div>
                        <h1 className=" text-center text-heading-4 text-primary-black font-heading-4 mb-10">Đăng Ký</h1>
                        {/* <GoogleOAuthProvider clientId="168558856798-cohnb8nqdnl38nriop2v752sap4mgpb8.apps.googleusercontent.com">
                            <OAuthGoogle />
                        </GoogleOAuthProvider> */}
                        <h1 className="  mt-10 text-center mb-5 text-caption-1 font-bitter text-secondary-gray font-caption-1">
                            Hoặc đăng ký bằng
                        </h1>
                        <FormSignUp
                            account={account}
                            setAccount={setAccount}
                            password={password}
                            setPassword={setPassword}
                            repassword={repassword}
                            setRepassword={setRepassword}
                        />
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
