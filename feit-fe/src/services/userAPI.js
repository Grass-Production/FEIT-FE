import { get, post } from "./fetch";
import axios from "axios"

export const getInforUser = async () => {
    const token = localStorage.getItem('access_token')
    const res = await get('http://localhost:8080/api/user/info', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
        },
        credentials: "include",
    })
    console.log('token : ', token)
    return res
}

export const LoginGoogle = async () => {
    try {
        const res = await get('http://localhost:8080/api/sessions/oauth/google', {
            headers: {
                "Content-Type": "application/json",
            },

        })
        console.log(res)
        return res
    } catch (error) {
        console.log("message : ", error)
    }
}

export const Login = async (account, password) => {
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
        if (response.status === 200) {
            localStorage.setItem('access_token', response.data.access_token);
            return response
        } else {
            console.log('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export const signup = async (newData) => {
    try {
        const res = await post('http://localhost:8080/api/user/signup',
            newData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
        console.log(res)
        return res
    } catch (error) {
        console.log('error : ', error)
    }
}

export const logout = async () => {
    const res = await get('http://localhost:8080/api/user/logout', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}




