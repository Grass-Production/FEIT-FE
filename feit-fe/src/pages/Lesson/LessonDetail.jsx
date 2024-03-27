import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { UnitCard, UnitCardLoad } from './component';
import { Button } from '../../components';
import { getUnits, getUnitByIdLesson } from '../../services/unitAPI';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconArrowUpLeft } from '../../svgs';
export default function LessonDetail({ name }) {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);
    let { lessonid } = useParams();
    console.log(lessonid);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getUnitByIdLesson(lessonid);
                if (res === null || res === '') {
                    return;
                }
                setLoading(!loading);
                setUnits(res);
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
        dots: true,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    slidesToScroll: 3,
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
                <IconArrowUpLeft size="40" className={' mt-8 rounded-md border border-secondary-gray'} />
            </NavLink>
            <div className=" flex flex-col  ">
                <div className=" flex justify-center mb-20 ">
                    <div className=" w-2/5 ">
                        <h1 className=" text-center text-heading-2 font-heading-2 font-bitter text-primary-black">
                            Lập trình
                        </h1>
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
                    </Slider>
                ) : (
                    <Slider {...settings}>
                        {units.map((unit) => {
                            return (
                                <div key={unit._id} className=" px-3">
                                    <UnitCard
                                        lessonid={unit.lesson_id}
                                        unitid={unit._id}
                                        name={unit.name}
                                        percent={unit.is_complete}
                                        checkprocess={false}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
}
