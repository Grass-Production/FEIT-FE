import { get } from "./fetch"

export const getAllQuestionExamByIdExam = async (id) => {
    const res = await get(`http://localhost:8080/api/exam/question/fetch/exam_id?exam_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getOptionByIdQuestion = async (id) => {
    const res = await get(`http://localhost:8080/api/exam/options/fetch?question_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}