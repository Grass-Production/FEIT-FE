import { get } from "./fetch";

export const getInforUser = async () => {
    const res = await get('http://localhost:8080/api/admin/get-me', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}


export const getAllUser = async () => {
    const res = await get('http://localhost:8080/api/admin/user/fetch', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}
