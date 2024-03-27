import { getGoogleURL } from '../../untils';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAuthGoogle } from '../../features';
import { FormSignIn } from './component';
import { useState } from 'react';
// import { Login } from '../../services/loginAPI';
import axios from 'axios';
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
    const LoginUser = async () => {
        try {
            const res = await Login({
                account,
                password,
            });
            console.log('hehe');
            return res;
        } catch (error) {
            console.log(error);
        }
    };
    const DangXuat = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/user/logout');
            console.log(response);
            if (response.status === 200) {
                // Xử lý dữ liệu nhận được từ phản hồi
                console.log('Data:', response.data);
            } else {
                // Xử lý khi nhận được phản hồi không thành công
                console.log('Error:', response.status);
            }
        } catch (error) {
            // Xử lý lỗi khi gửi yêu cầu GET
            console.error('Error:', error);
        }
    };
    const Login = async (account, password) => {
        // const axiosInstance = axios.create({
        //     withCredentials: true,
        // });
        try {
            const response = await axios.post(
                'http://localhost:8080/api/login/role',
                {
                    email: account,
                    password: password,
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                },
            );
            console.log(response);
            if (response.status === 200) {
                // Đăng nhập thành công, xử lý phản hồi ở đây (ví dụ: lưu token vào localStorage)
                localStorage.setItem('isLoggedIn', JSON.stringify(true));
                console.log('Login successful');
            } else {
                // Đăng nhập không thành công, xử lý phản hồi ở đây
                console.log('Login failed');
            }
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error('Error:', error);
        }
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
                        {/* <GoogleOAuthProvider clientId="168558856798-cohnb8nqdnl38nriop2v752sap4mgpb8.apps.googleusercontent.com">
                            <OAuthGoogle />
                        </GoogleOAuthProvider> */}
                        <h1 className=" mt-10 text-center mb-5 text-caption-1 font-bitter text-secondary-gray font-caption-1">
                            Hoặc đăng nhập bằng
                        </h1>
                        <button onClick={DangXuat}>Dang xaut</button>
                        <FormSignIn
                            onClick={() => Login(account, password)}
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
