import { get } from "./fetch";

export const getUnits = async () => {
    const res = await get('http://localhost:8080/api/unit/fetch', {
        headers: {
            "Content-Type": "application / json"
        }
    })
    return res.data.unit
}