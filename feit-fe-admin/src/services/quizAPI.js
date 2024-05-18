import { post, get, del } from "./fetch";
import axios from "axios";


export const createExam = async (newdata) => {

    const res = await post('http://localhost:8080/api/admin/quiz/create',
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
        const res = await axios.patch('http://localhost:8080/api/admin/quiz/update',
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

export const updateQuestion = async (newData) => {
    try {
        const res = await axios.patch('http://localhost:8080/api/admin/quiz/question/update',
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
    const res = await post('http://localhost:8080/api/admin/quiz/question/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const createOptionExam = async (newdata) => {
    const res = await post('http://localhost:8080/api/admin/quiz/options/create',
        newdata, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllQuestionExamByIdExam = async (id) => {
    const res = await get(`http://localhost:8080/api/quiz/question/fetch/quiz_id?quiz_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getQuestionByIdQuestion = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/quiz/question/fetch/_id?_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getExamByIdExam = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/quiz/fetch/_id?_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}


export const getManyExamByIdUnit = async (id) => {
    const res = await get(`http://localhost:8080/api/admin/quiz/fetch/ns/unit_id?unit_id=${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    return res
}

export const getAllExam = async () => {
    const res = await get('http://localhost:8080/api/admin/quiz/all/fetch', {
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