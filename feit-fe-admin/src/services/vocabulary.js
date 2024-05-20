import { get, post, put, del, postfile } from "./fetch";

export const getVocabularyByUinit = async (unitid) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch/unit?unit_id=${unitid}`, {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res
}




export const getVocabularyByLesson = async (field_of_it) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch-by-lesson?field_of_it=${field_of_it}`, {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })

    return res.data.vocabulary
}

export const getVocabulary = async () => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch`, {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res.data.word.vocabulary
}

export const getVocabularyById = async (idvocabulary) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch/_id?_id=${idvocabulary}`, {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res
}

export const getVocabularyByWord = async (word) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch-by-word?word=${word}`, {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",


    })
    return res.data.vocabulary
}

export const createVocabulary = async (word, part_of_speech, pronunciation, mean, example_vie, example_eng, explain_vie, explain_eng, field_of_it, link_url, image_url, video_url, unit_id) => {

    console.log('unit_id', unit_id);
    console.log('word', word);
    console.log('part_of_speech', part_of_speech);
    console.log('pronunciation', pronunciation);
    console.log('example_vie', example_vie);
    console.log('mean', mean);
    console.log('example_eng', example_eng);
    console.log('explain_vie', explain_vie);
    console.log('explain_eng', explain_eng);
    console.log('field_of_it', field_of_it);
    console.log('link_url', link_url);
    console.log('image_url', image_url);
    console.log('video_url', video_url);
    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('unit_id', unit_id);
    formData.append('word', word);
    formData.append('part_of_speech', part_of_speech);
    formData.append('pronunciation', pronunciation);
    formData.append('example_vie', example_vie);
    formData.append('mean', mean);
    formData.append('example_eng', example_eng);
    formData.append('explain_vie', explain_vie);
    formData.append('explain_eng', explain_eng);
    formData.append('field_of_it', field_of_it);
    formData.append('link_url', link_url);
    formData.append('image_url', image_url);
    formData.append('video_url', video_url);
    // formData.append('content', content);
    // formData.append('level', level);
    // formData.append('file', file);
    try {
        const res = await fetch('http://localhost:8080/api/admin/lesson/create', {
            method: 'POST',
            credentials: "include",
            body: formData,
        })
        console.log("message : ", res)
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

// export const createVocabulary = async (newData) => {
//     const token = localStorage.getItem('access_token')
//     const res = await post('http://localhost:8080/api/admin/vocabulary/create',
//         newData, {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token} `,
//         },
//         credentials: "include",
//     })
//     return res
// }

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
                withCredentials: true,
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
    const res = await del(`http://localhost:8080/api/admin/vocabulary/delete/1/_id?_id=${vocabularyid}`,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token} `,
            },
        })
    return res
}

