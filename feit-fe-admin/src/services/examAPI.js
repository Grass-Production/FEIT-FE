import { post, get } from "./fetch";



export const createExam = async (newdata) => {

    const res = await post('http://localhost:8080/api/admin/exam/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })

    return res
}

export const createQuestionExam = async (newdata) => {
    const res = await post('http://localhost:8080/api/admin/exam/question/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const createOptionExam = async (newdata) => {
    const res = await post('http://localhost:8080/api/admin/exam/options/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllQuestionExamByIdExam = async (id) => {
    const res = await get(`http://localhost:8080/api/exam/question/fetch/exam_id?exam_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllExam = async () => {
    const res = await get('http://localhost:8080/api/admin/exam/all/fetch', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}