import { get, post, put, del, postfile } from "./fetch";
import axios from "axios"

export const getLessons = async () => {
    const res = await get('http://localhost:8080/api/lesson/fetch', {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res.data.lesson.Lesson
}

export const createLesson = async (newData) => {
    const token = localStorage.getItem('access_token')
    const res = await post('http://localhost:8080/api/admin/lesson/create',
        newData, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
        },
        credentials: "include",
    })
    return res
}





export const createLessonFiles = async (courseId, name, content, level, file) => {
    const token = localStorage.getItem('access_token')
    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('course_id', courseId);
    formData.append('name', name);
    formData.append('content', content);
    formData.append('level', level);
    formData.append('file', file);
    try {
        const res = await fetch('http://localhost:8080/api/admin/lesson/create', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token} `,
            },
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
            body: formData,
        })
        console.log("message : ", res)
        return res
    } catch (error) {
        console.error('Error:', error);
    }
}

export const updateLesson = async (newData, lessonid) => {
    const token = localStorage.getItem('access_token')
    const res = await put(`http://localhost:8080/api/admin/lesson/update/:_id?_id=${lessonid}`,
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

