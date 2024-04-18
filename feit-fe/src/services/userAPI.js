import { get } from "./fetch";

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

export const logout = async () => {
    const res = await get('http://localhost:8080/api/user/logout', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}