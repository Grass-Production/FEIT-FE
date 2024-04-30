import { get } from "./fetch";

export const getActivityLog = async (page = '') => {
    try {
        const res = await get(`http://localhost:8080/api/admin/activity/fetch${page}`, {
            headers: {
                "Content-Type": "application / json"
            },
            credentials: "include",
        })
        return res
    } catch (error) {
        console.log('error : ', error)
    }
}