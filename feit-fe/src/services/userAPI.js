import { get } from "./fetch";

export const getInforUser = async ({ token }) => {
    const res = await get('http://localhost:8080/api/user/info', {
        header: {
            "Content-Type": "application / json",
            Authorization: `Bearer ${token} `,
        }
    })
    return res
}