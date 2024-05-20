import { get } from "./fetch";
import axios from "axios";
export const getCourse = async () => {
    const res = await get('http://localhost:8080/api/admin/course/fetch', {
        header: {
            "Content-Type": "application / json"
        },
        credentials: "include",

    })
    return res
}


export const createCourseFileLoading = async (newData, sendprogress) => {
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