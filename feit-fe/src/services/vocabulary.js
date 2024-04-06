import { get } from "./fetch";

export const getVocabulary = async (unitid) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch/unit?unit_id=${unitid}`, {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res.vocabulary.data
}