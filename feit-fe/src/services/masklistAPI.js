import { post, get, del } from "./fetch"

export const createMaskList = async (newData) => {
    const res = await post('http://localhost:8080/api/mark_list/create',
        newData, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getMaskList = async () => {
    const res = await get('http://localhost:8080/api/mark_list/fetch',
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}

export const getMarkVocabulary = async (idlist) => {
    const res = await get(`http://localhost:8080/api/mark_vocabulary/fetch/mark_list_id?mark_list_id=${idlist}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}

export const createMarkVocabulary = async (newData) => {
    const res = await post(`http://localhost:8080/api/mark_vocabulary/create`,
        newData,
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}

export const deleteMaskList = async (idmasklist) => {
    const res = await del(`http://localhost:8080/api/mark_list/delete/_id?_id=${idmasklist}`,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })
    return res
}