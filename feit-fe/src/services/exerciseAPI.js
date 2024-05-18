import { get } from "./fetch"

export const getExerciseByIdUnit = async (id) => {
    const res = await get(`http://localhost:8080/api/exercise/fetch/1/unit_id?unit_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getQuestionByIdExercise = async (id) => {
    const res = await get(`http://localhost:8080/api/exercise/question/fetch/n/exercise_id?exercise_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}