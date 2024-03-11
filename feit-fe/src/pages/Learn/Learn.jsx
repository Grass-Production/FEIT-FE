import {Card} from './component';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Learn() {
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
        <div className=" pl-32">
            <h1 className="text-Dsm mb-4">Chủ đề của bạn</h1>

            <Slider {...settings} className=" mb-8">
                {data.map((data, i) => {
                    return <Card key={data.id} course={data.course} percent={data.percent} />;
                })}
            </Slider>
        </div>
    );
}
