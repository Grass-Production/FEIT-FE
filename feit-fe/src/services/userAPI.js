import { get, post, patch, put } from "./fetch";
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

export const updateUser = async (full_name, cover_url, avatar_url, phone) => {

    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('full_name', full_name);
    formData.append('avatar_url', avatar_url);
    formData.append('cover_url', cover_url);
    formData.append('phone', phone);

    console.log('full_name', full_name);
    console.log('avatar_url', avatar_url);
    console.log('cover_url', cover_url);
    console.log('phone', phone);

    try {
        const res = await axios.patch('http://localhost:8080/api/user/update',
            formData,
            {
                withCredentials: true,
            },
        );
        return res;
    } catch (error) {
        console.log('error : ', error)
    }
};

// export const updateUser = async (_id, full_name, cover_url, avatar_url, phone,) => {

//     const formData = new FormData(); // Tạo đối tượng FormData
//     formData.append('_id', _id);
//     formData.append('full_name', full_name);
//     formData.append('avatar_url', avatar_url);
//     formData.append('cover_url', cover_url);
//     formData.append('phone', phone);

//     try {
//         const res = await fetch('http://localhost:8080/api/update', {
//             method: 'PUT',
//             credentials: "include",
//             body: formData,
//         })
//         console.log("message : ", res)
//         return res
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

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
    const formData = new FormData();
    formData.append('email', newData.email);
    formData.append('full_name', newData.full_name);
    formData.append('password', newData.password);
    formData.append('avatar_url', newData.avatar_url);
    formData.append('phone', newData.phone);
    console.log(newData.email)
    // try {
    //     const response = await axios.post(
    //         'http://localhost:8080/api/user/signup',
    //         formData,
    //         {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true,
    //         },
    //     );
    //     console.log(response)
    //     return response
    // } catch (error) {
    //     console.error('Error:', error);
    // }

    try {
        const res = await fetch('http://localhost:8080/api/user/signup', {
            method: 'POST',
            body: formData,
        })
        console.log("message : ", res)
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

export const forgetpassword = async (newData) => {
    const res = await post('http://localhost:8080/api/user/forget',
        newData, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    return res
}



export const changepassowrd = async (newData) => {

    try {
        const res = await axios.patch('http://localhost:8080/api/user/password/forget',
            newData,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            },
        )
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

export const verifypassowrd = async (newData) => {
    // try {
    //     const res = await patch('http://localhost:8080/api/user/verify/password',
    //         newData, {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     return res
    // } catch (error) {
    //     console.error('Error:', error);
    // }

    try {
        const res = await axios.patch('http://localhost:8080/api/user/verify/password',
            newData,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            },
        )
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

export const verifysignup = async (newData) => {

    try {
        const res = await axios.patch('http://localhost:8080/api/user/verify',
            newData,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            },
        )
        return res
    } catch (error) {
        console.error('Error:', error);
    }

    // try {
    //     const res = await patch('http://localhost:8080/api/user/verify',
    //         newData, {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     return res
    // } catch (error) {
    //     console.error('Error:', error);
    // }
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




