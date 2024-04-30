import { get, post, put, del, postfile } from "./fetch";

export const getVocabularyByUinit = async (unitid) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch/unit?unit_id=${unitid}`, {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res
}

export const getVocabularyByLesson = async (field_of_it) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch-by-lesson?field_of_it=${field_of_it}`, {
        headers: {
            "Content-Type": "application / json"
        }
    })

    return res.data.word.Vocabulary
}

export const getVocabulary = async () => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch`, {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res.data.word.Vocabulary
}

export const getVocabularyByWord = async (word) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch-by-word?word=${word}`, {
        headers: {
            "Content-Type": "application / json"
        }

    })
    return res.data.Vocabulary
}

export const createVocabulary = async (newData) => {
    const token = localStorage.getItem('access_token')
    const res = await post('http://localhost:8080/api/admin/vocabulary/create',
        newData, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
        },
        credentials: "include",
    })
    return res
}

// export const createVocabularyFile = async (newData) => {
//     const token = localStorage.getItem('access_token')
//     const formData = new FormData(); // Tạo đối tượng FormData
//     formData.append('files', newData);
//     try {
//         const res = await fetch('http://localhost:8080/api/admin/vocabulary/create/file', {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${token} `,
//             },
//             body: formData,
//         })
//         console.log("message : ", res)
//         return res
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

export const createVocabularyFile = async (newData) => {
    const token = localStorage.getItem('access_token')
    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('files', newData);
    try {
        const res = await postfile('http://localhost:8080/api/admin/vocabulary/create/file',
            formData,
            {
                headers: { Authorization: `Bearer ${token} ` },
            }
        )
        console.log("message : ", res)
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

export const updateVocabulary = async (newData, vocabularyid) => {
    const token = localStorage.getItem('access_token')
    const res = await put(`http://localhost:8080/api/admin/vocabulary/update/:_id?id=${vocabularyid}`,
        newData,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token} `,
            },
        })
    return res
}

export const deleteVocabulary = async (vocabularyid) => {
    const token = localStorage.getItem('access_token')
    const res = await del(`http://localhost:8080/api/admin/vocabulary/delete/:_id?_id=${vocabularyid}`,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token} `,
            },
        })
    return res
}

