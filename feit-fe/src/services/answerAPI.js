import { post } from "./fetch";

export const createAnswer = async (newData) => {
    const res = await post(`http://localhost:8080/api/exam/answer/create`,
        newData,
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}