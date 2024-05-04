import { get } from './fetch';

export const getUnits = async () => {
    const res = await get('http://localhost:8080/api/unit/fetch', {
        headers: {
            'Content-Type': 'application / json',
        },
    });
    return res.data.unit;
};

export const getUnitByIdLesson = async (lessonId) => {
    const res = await get(`http://localhost:8080/api/unit/fetch/:lesson_id?lesson_id=${lessonId}`, {
        headers: {
            'Content-Type': 'application / json',
        },
    });
    return res;
};
