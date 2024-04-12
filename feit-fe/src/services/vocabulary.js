import { get } from "./fetch";

export const getVocabulary = async (unitid) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch/unit?unit_id=${unitid}`, {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res.vocabulary.Vocabulary
}

export const getVocabularyByWord = async (word) => {
    const res = await get(`http://localhost:8080/api/vocabulary/fetch-by-word?word=${word}`, {
        headers: {
            "Content-Type": "application / json"
        }

    })
    return res.data.Vocabulary
}