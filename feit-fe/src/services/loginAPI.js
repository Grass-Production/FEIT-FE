import axios from "axios"
import { useGoogleLogin } from "@react-oauth/google";


export const Login = async (account, password) => {

    const response = await axios.post(
        'http://localhost:8080/api/login/user',
        {
            email: account,
            password: password,
        },
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        },
    );
    console.log(response)
    const token = await response.data.access_token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    console.log('heh :', axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)

    if (response.status === 200) {
        localStorage.setItem('access_token', response.data.access_token);
        return response
    } else {
        console.log('Login failed');
    }

}

// export const LoginGoogle = useGoogleLogin({
//     onSuccess: async (codeResponse) => {
//         // Gửi mã phản hồi đến máy chủ để đăng nhập
//         try {
//             const res = await axios.get(
//                 `http://localhost:8080/api/auth/google/callback?code=${codeResponse.code}`,
//                 { withCredentials: true }
//             );

//             console.log("tokenResponse", res);
//             return res
//         } catch (error) {
//             console.error("Error while exchanging code for token:", error);
//         }
//     },
//     flow: "auth-code",
// });

