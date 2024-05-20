import { useState } from 'react';
import { IconSuccess } from '../../../svgs';
import { Button } from '../../../components';
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

export const Start = ({ handleSendValue }) => {
    const [active, setActive] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const [second, setSecond] = useState(0);

    const handleCardClick = (index, duration) => {
        setSelectedCardIndex(index);
        setSecond(duration);
    };

    const SendValue = () => {
        handleSendValue(false, second);
    };
    const data = [
        {
            title: 'Dễ',
            subtitle: '20 câu, 50s trả lời',
            duration: 50,
            img: 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711706257/feit-static/Frame%20854.png.png',
        },
        {
            title: 'Trung bình ',
            subtitle: '20 câu, 40s trả lời',
            duration: 40,
            img: 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711706258/feit-static/Frame%20854-1.png.png',
        },
        {
            duration: 5,
            title: 'Khó',
            subtitle: '20 câu, 30s trả lời',
            img: 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711706258/feit-static/Frame%20854-2.png.png',
        },
    ];
    return (
        <div className=" w-full h-screen flex flex-col justify-between items-center">
            <div className=" flex flex-col justify-center items-center mb-20">
                <h1 className="text-heading-2 font-heading-2 font-bitter text-primary-black">Bắt đầu</h1>
                <h1 className="text-body-2 font-body-2 font-plusjakartasans text-secondary-gray">
                    Hãy chuẩn bị cho các câu hỏi bạn nhé, có ba cấp độ dành cho bạn, hãy chọn cấp độ tùy vào năng lực
                    của bạn nhé. Chúc bạn làm bài tốt.
                </h1>
            </div>
            <div className="flex justify-around items-center gap-14">
                {data.map((a, i) => {
                    const isSelected = selectedCardIndex === i;
                    return (
                        <div
                            onClick={() => handleCardClick(i, a.duration)}
                            key={i}
                            className={` ${isSelected ? 'shadow-active-button' : ''} hover:shadow-active-button hover:border-primary-blue-800 border-[4px] border-primary-black rounded-[20px] p-3`}>
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
            <div className=" w-full py-10 flex justify-around items-center border-t-2 border-black">
                <Button
                    onClick={SendValue}
                    icon={false}
                    color={'primary'}
                    className="w-3/4"
                    title={'Tiếp tục'}></Button>
            </div>
        </div>
    );
};
