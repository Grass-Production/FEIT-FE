import {Link, NavLink, useLocation} from 'react-router-dom';
import {getGoogleURL} from '../../untils';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {OAuthGoogle} from '../../features';
import {Form} from '../../components';
export default function SignUp() {
    return (
        <div>
            <div className=" flex h-screen">
                <div className=" px-52 flex justify-center items-center">
                    <div>
                        <h1 className=" text-center text-Dmd mb-10">Đăng Ký</h1>
                        <h1 className=" text-center">Hoặc đăng nhập bằng</h1>
                        <Form valueName={'hi'} valuePass={'hehe'} />
                        <h1 className=" text-center mt-16 ">
                            Chưa có tài khoản ?{' '}
                            <NavLink to="/signup" className=" text-red-600">
                                Đăng ký
                            </NavLink>
                        </h1>
                    </div>
                </div>
                <div className=" w-1/2  bg-red-400">
                    <div className=" bg-red-400"></div>
                </div>
            </div>
        </div>
    );
}
