import { useState } from 'react';
import { IconSuccess } from '../../../svgs';

export const Finish = () => {
    return (
        <div className=" max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
                <div className=" flex gap-4 justify-center items-center">
                    <h1 className=" text-heading-4 font-heading-4 font-plusjakartasans text-primary-blue-700">
                        Bạn đã hoàn thành bài học rồi !
                    </h1>
                </div>
                <div className="">
                    <IconSuccess />
                </div>
            </div>
        </div>
    );
};

export const Start = () => {
    const [active, setActive] = useState(false);

    const data = [
        {
            title: 'Dễ',
            subtitle: '20 câu, 50s trả lời',
            img: 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711706257/feit-static/Frame%20854.png.png',
        },
        {
            title: 'Trung bình ',
            subtitle: '20 câu, 40s trả lời',
            img: 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711706258/feit-static/Frame%20854-1.png.png',
        },
        {
            title: 'Khó',
            subtitle: '20 câu, 30s trả lời',
            img: 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711706258/feit-static/Frame%20854-2.png.png',
        },
    ];
    return (
        <div className=" flex flex-col justify-around items-center">
            <div className="w-[85rem] flex flex-col justify-around items-center">
                <div className=" flex flex-col justify-center items-center">
                    <h1 className="text-heading-2 font-heading-2 font-bitter text-primary-black">Bắt đầu</h1>
                    <h1 className="text-body-2 font-body-2 font-plusjakartasans text-secondary-gray">
                        Hãy chuẩn bị cho các câu hỏi bạn nhé, có ba cấp độ dành cho bạn, hãy chọn cấp độ tùy vào năng
                        lực của bạn nhé. Chúc bạn làm bài tốt.
                    </h1>
                </div>
                <div className="flex justify-around  items-center gap-14">
                    {data.map((a, i) => {
                        return (
                            <div
                                key={i}
                                className="hover:shadow-active-button hover:border-primary-blue-800 border-[4px] border-secondary-gray rounded-[20px] p-3">
                                <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                                    {a.title}
                                </h1>
                                <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray text-center">
                                    {a.subtitle}
                                </h1>
                                <img src={a.img} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
