import { LessonCard, LessonLoading } from './component';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { getLessons } from '../../services/lessonAPI';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className=" pl-10">
            <h1 className="text-Dsm mb-4">Chủ đề của bạn</h1>
            {loading ? (
                <Slider {...settings} className=" mb-8">
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                </Slider>
            ) : (
                <Slider {...settings} className=" mb-8">
                    {lessons.map((lesson) => {
                        return (
                            <div key={lesson.id} className="pr-8">
                                <LessonCard name={lesson.name} />
                                <LoadingProgressBar className={'mb-3'} />
                                <NavLink to={`/learn/lesson/${lesson._id}`}>
                                    <Button title="Xem" className=" w-full"></Button>
                                </NavLink>
                            </div>
                        );
                    })}
                </Slider>
            )}
        </div>
    );
}
