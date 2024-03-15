import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { UnitCard, UnitCardLoad } from './component';
import { Button } from '../../components';
import { getUnits } from '../../services/unitAPI';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function LessonDetail({ name }) {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);
    let { lessonid } = useParams();
    console.log(lessonid);

    useEffect(() => {
        async function fetchData() {
            try {
                console.time('time');
                const res = await getUnits();
                const data = res.filter((value) => {
                    return value.Lesson._id === lessonid;
                });
                setUnits(data);
                setLoading(!loading);
                console.timeEnd('time');
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
        slidesToScroll: 3,
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
        <div className="px-10 py-9 h-[90vh]">
            <NavLink to="/learn">
                <Button title="<"></Button>
            </NavLink>
            <div className=" h-full flex justify-between items-center">
                <div className=" mr-8">
                    <h1 className=" mb-2">Lập trình</h1>
                    <p>Đây là các từ vựng nền tảng trong ngành IT.</p>
                </div>
                <div className=" w-[80%]">
                    <Slider {...settings} className=" mr-8">
                        {/* <NavLink to="/learn/lesson/:lessonname/unit/:unitid">
                            <UnitCard />
                        </NavLink> */}
                        {loading ? (
                            <div>
                                <UnitCardLoad />
                                <UnitCardLoad />
                                <UnitCardLoad />
                            </div>
                        ) : (
                            <>
                                {units.map((unit) => {
                                    return <UnitCard key={unit.id} />;
                                })}
                            </>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
