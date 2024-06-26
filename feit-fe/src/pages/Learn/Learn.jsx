import { LessonCard, LessonLoading } from './component';
import { useEffect, useState } from 'react';
import { getLessons } from '../../services/lessonAPI';
import { Button, LoadingProgressBar } from '../../components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Learn() {
    const [lessons, setLesson] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Dữ liệu bạn muốn lưu vào cache

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getLessons();
                setLesson(res.data);
                setLoading(!loading);
                const cacheName = 'lessons-cache'; // Đặt tên cho cache
                const cacheData = { data: res }; // Chuẩn bị dữ liệu để lưu vào cache
                // Mở hoặc tạo một cache mới với tên được xác định
                const cache = await caches.open(cacheName);
                // Lưu dữ liệu vào cache
                await cache.put('lessons-data', new Response(JSON.stringify(cacheData)));
                console.log(res);
            } catch (error) {
                // setLesson(null);
                // console.log('error', error);
                // navigate(`/signIn`);
            }
        }
        fetchData();
    }, []);
    console.log('message', lessons);
    return (
        <div className=" px-10 py-7">
            <h1 className=" text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-8 text-center">
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
                <div className=" grid grid-cols-4 gap-8">
                    {lessons !== null && (
                        <>
                            {lessons.map((lesson) => {
                                return (
                                    <div
                                        key={lesson.id}
                                        className="border-[4px]  p-4 border-secondary-gray hover:border-[4px] active:border-[4px] hover:border-primary-blue-500 bg-background-disable hover:bg-white active:bg-white">
                                        <LessonCard name={lesson.name} />
                                        <LoadingProgressBar className={'mb-3'} percent={lesson.level} />
                                        <NavLink to={`/learn/lesson/${lesson._id}`}>
                                            <Button
                                                icon={false}
                                                color={'primary'}
                                                title="Tiếp tục"
                                                className=" w-full rounded-none"></Button>
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
