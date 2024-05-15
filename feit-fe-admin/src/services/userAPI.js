import { get } from "./fetch";

const token = localStorage.getItem('myData')
export const getInforUser = async () => {
    const res = await get('http://localhost:8080/api/user/info', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
        },
        credentials: "include",
    })
    console.log(res)
    console.log('token : ', token)
    return res
}