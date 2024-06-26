import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { UnitCard, UnitCardLoad } from './component';
import { Button } from '../../components';
import { getUnits, getUnitByIdLesson } from '../../services/unitAPI';
import { getLessons } from '../../services/lessonAPI';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconArrowUpLeft } from '../../svgs';
import { PopupCreateList } from './component';
import { useNavigate } from 'react-router-dom';

export default function LessonDetail({ name }) {
    const [units, setUnits] = useState([]);

    const [loading, setLoading] = useState(true);

    const [nameLesson, setNameLesson] = useState([]);

    let { lessonid } = useParams();

    const navigate = useNavigate();

    const isUnitDisabled = (index) => {
        if (index === 0) return false; // Unit 1 luôn được enable
        const previousUnit = units[index - 1];
        return (
            previousUnit.exam_is_complete === 0 ||
            previousUnit.exercise_is_complete === 0 ||
            previousUnit.quiz_is_complete === 0
        );
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getUnitByIdLesson(lessonid);
                const resLesson = await getLessons();
                const lessons = await resLesson.data;
                const name = lessons.filter((value) => value._id === lessonid);
                setNameLesson(name);
                if (res === null || res === '') {
                    return;
                }
                setLoading(!loading);
                setUnits(res.unit);
            } catch (error) {
                console.log(error);
                navigate(`/signIn`);
            }
        }
        fetchData();
    }, []);

    var settings = {
        infinite: false,
        speed: 500,
        dots: true,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                    slidesToScroll: 4,
                    infinite: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="px-10">
            <NavLink to="/learn">
                <IconArrowUpLeft size="40" className={' mt-8 border bg-white border-primary-black'} />
            </NavLink>

            <div className=" flex flex-col  ">
                <div className=" flex justify-center mb-20 ">
                    <div className="  ">
                        {nameLesson !== null && (
                            <>
                                {nameLesson.map((a, i) => (
                                    <h1
                                        key={i}
                                        className=" text-center text-heading-2 font-heading-2 font-bitter text-primary-black">
                                        {a.name}
                                    </h1>
                                ))}
                            </>
                        )}
                        <p className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black">
                            Đây là các từ vựng nền tảng trong ngành IT. Bạn hãy học thật tập trung và kỹ càng bạn nhé.
                            Chúc bạn học tập tốt.
                        </p>
                    </div>
                </div>
                {loading ? (
                    <Slider {...settings}>
                        <div className="px-3">
                            <UnitCardLoad />
                        </div>
                        <div className="px-3">
                            <UnitCardLoad />
                        </div>
                        <div className="px-3">
                            <UnitCardLoad />
                        </div>
                        <div className="px-3">
                            <UnitCardLoad />
                        </div>
                    </Slider>
                ) : (
                    <Slider className=" " {...settings}>
                        {units.map((unit, i) => {
                            return (
                                <div key={unit._id} className=" px-3 ">
                                    <UnitCard
                                        level={unit.level}
                                        isUnitDisabled={isUnitDisabled(i)}
                                        exam_is_complete={unit.exam_is_complete}
                                        exercise_is_complete={unit.exercise_is_complete}
                                        quiz_is_complete={unit.quiz_is_complete}
                                        lessonid={unit.lesson_id}
                                        unitid={unit._id}
                                        name={unit.name}
                                        percent={unit.is_complete}
                                        checkprocess={false}
                                    />
                                    {/* <PopupCreateList /> */}
                                </div>
                            );
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
}
