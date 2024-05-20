import { get, post, put, del, patch } from "./fetch";
import axios from "axios"

export const getLessons = async () => {
    const res = await get('http://localhost:8080/api/lesson/fetch', {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res
}

export const getLessonById = async (id) => {
    const res = await get(`http://localhost:8080/api/lesson/fetch/_id?_id=${id}`, {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res
}

export const getLessonByIdCourse = async () => {
    const res = await get('http://localhost:8080/api/lesson/fetch/course_id?course_id=664637556c4c00abf5dee033', {
        headers: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res
}


export const createLesson = async (courseId, name) => {

    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('course_id', courseId);
    formData.append('name', name);
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





export const createLessonFiles = async (courseId, name, content, level, file) => {

    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('course_id', courseId);
    formData.append('name', name);
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


export const createLessonFile = async (newData) => {
    const token = localStorage.getItem('access_token')
    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('files', newData);
    try {
        const res = await fetch('http://localhost:8080/api/admin/lesson/create/file', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token} `,
            },
            credentials: "include",
            body: formData,
        })
        console.log("message : ", res)
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

export const createLessonFileLoading = async (newData, sendprogress) => {
    const formData = new FormData();
    formData.append('files', newData);
    try {
        const res = await axios.post('http://localhost:8080/api/admin/course/create/file/final', formData, {
            withCredentials: true,
            // Theo dõi % hoàn thành
            onUploadProgress: (progressEvent) => {
                const percentComplete = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                sendprogress(percentComplete);
            },
        });
        return res;

    } catch (error) {
        console.log('error : ', error)
    }
};

// export const createLessonFileLoading = async (newData, sendprogress) => {
//     const formData = new FormData();
//     formData.append('files', newData);
//     try {
//         const res = await axios.post('http://localhost:8080/api/admin/lesson/create/file', formData, {
//             withCredentials: true,
//             // Theo dõi % hoàn thành
//             onUploadProgress: (progressEvent) => {
//                 const percentComplete = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                 sendprogress(percentComplete);
//             },
//         });
//         return res;

//     } catch (error) {
//         console.log('error : ', error)
//     }
// };

export const updateLesson = async (newData, sendprogress) => {

    try {
        const res = await axios.patch('http://localhost:8080/api/admin/lesson/update',
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

// export const updateLesson = async (newData) => {
//     const token = localStorage.getItem('access_token')
//     const res = await patch(`http://localhost:8080/api/admin/lesson/update`,
//         newData,
//         {
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token} `,
//             },
//         })
//     return res
// }

export const deleteLesson = async (lessonid) => {
    const token = localStorage.getItem('access_token')
    const res = await del(`http://localhost:8080/api/admin/lesson/delete/${lessonid}`,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token} `,
            },

        })
    return res
}

// export const updateLesson = async (newData) => {
//     try {
//         const token = localStorage.getItem('access_token')
//         const response = await axios.put(
//             'http://localhost:8080/api/admin/lesson/update/:_id?id=661e94b29570433c92f0b25e',
//             newData,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token} `,
//                 },
//                 withCredentials: true,
//             },
//         );
//         return response
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

