import { post, get, del } from "./fetch";
import axios from "axios";


export const createExam = async (newdata) => {

    const res = await post('http://localhost:8080/api/admin/exercise/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })

    return res
}
export const updateExam = async (newData) => {
    try {
        const res = await axios.patch('http://localhost:8080/api/admin/exercise/update',
            newData,
            {
                withCredentials: true,
            },
        );
        return res;
    } catch (error) {
        console.log('error : ', error)
    }
};

export const updateQuestion = async (newData) => {
    try {
        const res = await axios.patch('http://localhost:8080/api/admin/exercise/question/update',
            newData,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            },
        );
        return res;
    } catch (error) {
        console.log('error : ', error)
    }
};
export const createQuestionExam = async (newdata) => {
    const res = await post('http://localhost:8080/api/admin/exercise/question/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const createOptionExam = async (newdata) => {
    const res = await post('http://localhost:8080/api/admin/exercise/options/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllQuestionExamByIdExam = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/exercise/question/fetch/n/exercise_id?exercise_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getQuestionByIdQuestion = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/exercise/question/fetch/_id?_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getExamByIdExam = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/exercise/fetch/_id?_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}



export const getManyExamByIdUnit = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/exercise/fetch/ns/unit_id?unit_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllExam = async () => {
    const res = await get('http://localhost:8080/api/admin/exercise/fetch', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllExercise = async () => {
    const res = await get('http://localhost:8080/api/admin/exercise/fetch', {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const deleteVocabulary = async (vocabularyid) => {
    const token = localStorage.getItem('access_token')
    const res = await del(`http://localhost:8080/api/exercise/question/delete`,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token} `,
            },
        })
    return res
}