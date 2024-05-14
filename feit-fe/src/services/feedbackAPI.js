import { post } from "./fetch";

export const createFeedback = async (newData) => {
    const res = await post(`http://localhost:8080/api/feedback/create`,
        newData,
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}