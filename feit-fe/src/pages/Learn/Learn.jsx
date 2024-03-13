import { Lesson } from '../Lesson';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { getLessons } from '../../services/lessonAPI';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, LoadingProgressBar } from '../../components';
import { NavLink } from 'react-router-dom';

export default function Learn() {
    const [lessons, setLesson] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getLessons();
                setLesson(res);
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 2,
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

            <Slider {...settings} className=" mb-8">
                {lessons.map((lesson) => {
                    return (
                        <div key={lesson.id} className="pr-8">
                            <Lesson name={lesson.name} />
                            <LoadingProgressBar className={'mb-3'} />
                            <NavLink to={`/learn/lesson/${lesson.id}`}>
                                <Button title="Xem" className=" w-full"></Button>
                            </NavLink>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
