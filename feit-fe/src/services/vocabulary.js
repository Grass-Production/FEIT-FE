import { get } from "./fetch";

export const getVocabulary = async () => {
    const res = await get('http://localhost:8080/api/vocabulary/fetch', {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res.data.word
}