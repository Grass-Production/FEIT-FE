import {Card} from './component';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Lesson() {
    const data = [
        {
            id: 1,
            course: 'Lập trình',
            percent: 20,
        },
        {
            id: 2,
            course: 'Lập trìnha',
            percent: 50,
        },
        {
            id: 3,
            course: 'Lập trìnhb',
            percent: 70,
        },
        {
            id: 4,
            course: 'Lập trìnhv',
            percent: 40,
        },
        {
            id: 5,
            course: 'Lập trìnhd',
            percent: 23,
        },
        {
            id: 6,
            course: 'Lập trìnhf',
            percent: 10,
        },
    ];
    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
    };
    return (
        <div className="px-10">
            <h1 className="text-Dsm">Chủ đề của bạn</h1>
            <Slider {...settings} className=" ">
                {data.map((data, i) => {
                    return <Card key={data.id} course={data.course} percent={data.percent} />;
                })}
            </Slider>
        </div>
    );
}
