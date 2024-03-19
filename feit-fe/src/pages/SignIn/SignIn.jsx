import { Link, NavLink, useLocation } from 'react-router-dom';
import { getGoogleURL } from '../../untils';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAuthGoogle } from '../../features';
import { Form } from '../../components';
export default function SignIn() {
    const crential = '';
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
                <div className=" w-1/2 h-screen bg-center bg-no-repeat bg-cover bg-[url('/img/src/assets/images/img-signin.png')]"></div>
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
                        <Form valueName={''} valuePass={''} />
                        <h1 className=" text-center text-button-1 font-heading-1 text-primary-black mt-16 ">
                            Chưa có tài khoản ?{' '}
                            <NavLink to="/signup" className="text-button-1 font-heading-1 text-primary-blue-500">
                                Đăng ký
                            </NavLink>
                        </h1>
                    </div>
                </div>
            </div>
            {/* <TestLogin /> */}
            {/* <button onClick={callApi}>Login</button> */}
        </div>
    );
}
