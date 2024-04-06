import { Button } from '../../../components';
import { useState } from 'react';
export const Multiplechoice = ({ exampleen, examplevn }) => {
    const [index, setIndex] = useState(null);
    var data = [
        {
            title: 'a',
        },
        {
            title: 'b',
        },
        {
            title: 'c',
        },
        {
            title: 'd',
        },
    ];
    let abc = false;
    function setIndexNe(i) {
        setIndex(i);
    }
    return (
        <div className=" w-[56.563rem] max-h-[700px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Câu ví dụ
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Bạn hãy đọc kỹ phần ví dụ để hiểu rõ hơn từ vựng nha hí hí !
                </h1>
            </div>
            <div className="mx-auto w-2/3">
                <div className=" flex gap-8 justify-center">
                    <div className="  mb-10 border border-secondary-gray w-56 h-56 rounded-[40px] bg-white"></div>
                </div>
                {abc ? (
                    <>
                        {data.map((a, i) => {
                            return (
                                <Button
                                    key={i}
                                    title={a.title}
                                    color={'secondary'}
                                    className={'text-left w-full p-5 mb-5'}
                                    active={index === i}
                                    onClick={() => setIndexNe(i)}
                                    icon={false}></Button>
                            );
                        })}
                    </>
                ) : (
                    <>
                        {data.map((a, i) => {
                            return (
                                <Button
                                    key={i}
                                    title={a.title}
                                    color={
                                        a.title === 'a' ? 'success' : 'secondary' && index === i ? 'error' : 'secondary'
                                    }
                                    className={'text-left w-full p-5 mb-5'}
                                    active={false}
                                    onClick={() => setIndexNe(i)}
                                    icon={false}></Button>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};
