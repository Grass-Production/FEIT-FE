import { postfile } from "./fetch";


export const createImages = async (newData) => {
    const token = localStorage.getItem('access_token')
    const formData = new FormData(); // Tạo đối tượng FormData
    formData.append('files', newData);
    try {
        const res = await postfile('http://localhost:8080/api/admin/image/files/upload/many/static',
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