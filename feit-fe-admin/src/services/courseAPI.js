import { get } from "./fetch";

export const getCourse = async () => {
    const res = await get('http://localhost:8080/api/course/fetch', {
        header: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res.data.course
}