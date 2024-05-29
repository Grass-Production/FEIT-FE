import { post } from "./fetch";

export const createAnswerExam = async (newData) => {
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

export const createAnswerExercise = async (newData) => {
    const res = await post(`http://localhost:8080/api/exercise/answer/create`,
        newData,
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}

export const createAnswerQuiz = async (newData) => {
    const res = await post(`http://localhost:8080/api/quiz/answer/create`,
        newData,
        {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    return res
}