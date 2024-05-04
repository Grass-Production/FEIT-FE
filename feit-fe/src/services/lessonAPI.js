import { get } from './fetch';

export const getLessons = async () => {
    const res = await get('http://localhost:8080/api/lesson/fetch', {
        headers: {
            'Content-Type': 'application / json',
        },
    });
    return res.data;
};
