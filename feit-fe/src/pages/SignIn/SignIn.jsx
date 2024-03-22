import { getGoogleURL } from '../../untils';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAuthGoogle } from '../../features';
import { FormSignIn } from './component';
import { useState } from 'react';

export default function SignIn() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const callApi = async () => {
        const res = await fetch(`http://localhost:8080/api/sessions/oauth/google`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // const b = await res.json()
        console.log(res);
    };
    // const location = useLocation();
    // let from = ((location.state && location.state.from && location.state.from.pathname) || '/') + '';
    // return (
    //     <div className=" bg-red-800">
    //         <h1 className=" text-zinc-800">Hello</h1>
    //         <a href={getGoogleURL(from)}>Login Google</a>
    //     </div>
    // );
    return (
        <div>
            <div className=" flex h-screen">
                <div className=" w-1/2 flex items-center h-screen bg-center bg-no-repeat bg-cover bg-[url('')]">
                    <img className=" w-3/4 m-auto" src="src/assets/images/img-signin.png" alt="" />
                </div>
                <div className=" px-52 flex justify-center items-center">
                    <div>
                        <h1 className=" text-center text-heading-4 text-primary-black font-heading-4 mb-10">
                            Đăng nhập
                        </h1>
                        <GoogleOAuthProvider clientId="168558856798-cohnb8nqdnl38nriop2v752sap4mgpb8.apps.googleusercontent.com">
                            <OAuthGoogle />
                        </GoogleOAuthProvider>
                        <h1 className=" mt-10 text-center mb-5 text-caption-1 font-bitter text-secondary-gray font-caption-1">
                            Hoặc đăng nhập bằng
                        </h1>
                        <FormSignIn
                            account={account}
                            setAccount={setAccount}
                            password={password}
                            setPassword={setPassword}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
