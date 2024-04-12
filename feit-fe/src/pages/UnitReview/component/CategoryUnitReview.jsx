import { InputField } from '../../../components';
import { IconSpeakerHigh, IconSpeakerLow } from '../../../svgs';
import { Button } from '../../../components';
import { useState } from 'react';

export const Multiplechoice = ({ option = [], correctAnswer, checkresult, question }) => {
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

    let abc = true;

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
                    {question}
                </h1>
            </div>
            <div className="mx-auto w-2/3">
                <div className=" flex gap-8 justify-center">
                    <div className="  mb-10 border border-secondary-gray w-56 h-56 rounded-[40px] bg-white"></div>
                </div>
                {checkresult ? (
                    <>
                        {option.map((a, i) => {
                            return (
                                <Button
                                    key={i}
                                    title={a}
                                    color={
                                        a === correctAnswer
                                            ? 'success'
                                            : 'secondary' && index === i
                                              ? 'error'
                                              : 'secondary'
                                    }
                                    className={'text-left w-full p-5 mb-5'}
                                    active={false}
                                    onClick={() => setIndexNe(i)}
                                    icon={false}></Button>
                            );
                        })}
                    </>
                ) : (
                    <>
                        {option.map((a, i) => {
                            return (
                                <Button
                                    key={i}
                                    title={a}
                                    color={'secondary'}
                                    className={'text-left w-full p-5 mb-5'}
                                    active={index === i}
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

export const Listen = ({ result, mean, right = false, error = false, inputValue, handleChange }) => {
    return (
        <div className=" w-[56.563rem] max-h-[750px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Nghĩa của từ vựng {mean}
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Hãy viết nghĩa tiếng Việt của từ vựng dưới đây
                </h1>
            </div>

            <div className=" flex gap-8 justify-center">
                <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                    <IconSpeakerHigh sizeh="100" sizew="100" color="#14121B" />
                </div>
                <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                    <IconSpeakerLow />
                </div>
            </div>

            <div className="mx-auto w-11/12">
                <div className="">
                    {right ? (
                        <>
                            <div className=" mb-10">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                                    Đáp án của bạn
                                </h1>
                                <InputField
                                    className={' w-full'}
                                    value={result}
                                    placeholder={'Hãy viết từ còn trống'}
                                />
                            </div>
                            <div className=" border-t border-secondary-gray pt-4">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                                    Đáp án đúng
                                </h1>

                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                    {result}
                                </h1>
                            </div>
                        </>
                    ) : (
                        <div className=" mb-10">
                            <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                                Đáp án của bạn
                            </h1>
                            <InputField
                                status={error ? 'error' : null}
                                className={' w-full'}
                                value={inputValue}
                                onChange={handleChange}
                                placeholder={'Hãy viết từ còn trống'}
                            />
                        </div>
                    )}
                    {error && (
                        <>
                            <div className=" border-t border-secondary-gray pt-4">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                                    Đáp án đúng
                                </h1>

                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                    {result}
                                </h1>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export const FillInTheBlankReview = ({ result, mean, right = false, error = false, inputValue, handleChange }) => {
    return (
        <div className=" w-[56.563rem] max-h-[750px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Nghĩa của từ vựng
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Hãy viết nghĩa tiếng Việt của từ vựng dưới đây
                </h1>
            </div>

            <h1 className=" text-heading-6 font-heading-6 font-plusjakartasans text-primary-black text-center">
                {mean}
            </h1>

            <div className="mx-auto w-11/12">
                <div className="">
                    {right ? (
                        <>
                            <div className=" mb-10">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                                    Đáp án của bạn
                                </h1>
                                <InputField
                                    value={result}
                                    onChange={handleChange}
                                    className={' w-full'}
                                    placeholder={'Hãy viết từ còn trống'}
                                />
                            </div>
                            <div className=" border-t border-secondary-gray pt-4">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                                    Đáp án đúng
                                </h1>

                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                    {result}
                                </h1>
                            </div>
                        </>
                    ) : (
                        <div className=" mb-10">
                            <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                                Đáp án của bạn
                            </h1>
                            <InputField
                                status={error ? 'error' : null}
                                className={' w-full'}
                                placeholder={'Hãy viết từ còn trống'}
                                onChange={handleChange}
                                value={inputValue}
                            />
                        </div>
                    )}
                    {error && (
                        <>
                            <div className=" border-t border-secondary-gray pt-4">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                                    Đáp án đúng
                                </h1>

                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                    {result}
                                </h1>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
