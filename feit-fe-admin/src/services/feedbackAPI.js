import { get } from "./fetch";

export const getFeedbacks = async () => {
    const res = await get(`http://localhost:8080/api/admin/feedback/fetch`, {
        header: {
            "Content-Type": "application / json"
        },
        credentials: "include",
    })
    return res
}
