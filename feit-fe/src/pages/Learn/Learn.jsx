import { LessonCard, LessonLoading } from './component';
import { useEffect, useState } from 'react';
import { getLessons } from '../../services/lessonAPI';
import { Button, LoadingProgressBar } from '../../components';
import { NavLink } from 'react-router-dom';

export default function Learn() {
    const [lessons, setLesson] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dữ liệu bạn muốn lưu vào cache

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getLessons();
                setLesson(res);
                setLoading(!loading);
                const cacheName = 'lessons-cache'; // Đặt tên cho cache
                const cacheData = { data: res }; // Chuẩn bị dữ liệu để lưu vào cache
                // Mở hoặc tạo một cache mới với tên được xác định
                const cache = await caches.open(cacheName);
                // Lưu dữ liệu vào cache
                await cache.put('lessons-data', new Response(JSON.stringify(cacheData)));
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className=" px-10">
            <h1 className=" mt-7 text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-8">
                Chủ đề của bạn
            </h1>
            {loading ? (
                <div className="grid grid-cols-4 gap-4">
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                </div>
            ) : (
                <div className=" grid grid-cols-4 gap-4">
                    {lessons.map((lesson) => {
                        return (
                            <div
                                key={lesson.id}
                                className="border p-4 border-secondary-gray hover:border-[2px] active:border-[2px] hover:border-primary-blue-500 bg-background-disable hover:bg-white active:bg-white">
                                <LessonCard name={lesson.name} />
                                <LoadingProgressBar className={'mb-3'} percent={lesson.level} />
                                <NavLink to={`/learn/lesson/${lesson._id}`}>
                                    <Button
                                        icon={false}
                                        color={'primary'}
                                        title="Tiếp tục"
                                        className=" w-full"></Button>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
