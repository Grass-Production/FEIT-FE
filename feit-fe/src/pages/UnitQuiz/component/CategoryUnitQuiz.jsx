import { InputField } from '../../../components';
import { IconSpeakerHigh, IconSpeakerLow, IconClose } from '../../../svgs';
import { Button } from '../../../components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sound } from '../../../components';
export const Multiplechoice = ({ option = [], correctAnswer, checkresult, question, sendAnswer, sound }) => {
    const [index, setIndex] = useState(null);

    const [buttonValue, setButtonValue] = useState('');

    function handleClick(value) {
        setButtonValue(value); // Update state with retrieved value
        sendAnswer(value);
    }
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

    function setIndexNe(i, value) {
        setIndex(i);
        handleClick(value);
    }

    return (
        <div className=" w-[56.563rem] max-h-[700px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Chọn đáp án đúng
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    {question}
                </h1>
            </div>
            <div className="mx-auto w-2/3">
                <Sound sound={sound} />
                <div className=" flex gap-8 justify-center mb-10"></div>

                {checkresult ? (
                    <>
                        {option.map((a, i) => {
                            return (
                                <Button
                                    id={i}
                                    key={i}
                                    title={a}
                                    color={
                                        buttonValue === correctAnswer
                                            ? index === i
                                                ? 'success'
                                                : 'secondary'
                                            : 'secondary' && index === i
                                              ? 'error'
                                              : 'secondary'
                                    }
                                    className={'text-left w-full p-5 mb-5'}
                                    active={false}
                                    onClick={() => setIndexNe(i, a)}
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
                                    onClick={() => setIndexNe(i, a)}
                                    icon={false}></Button>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export const TrueFalse = ({ option = [], correctAnswer, checkresult, question, sendAnswer }) => {
    const [index, setIndex] = useState(null);
    const [buttonValue, setButtonValue] = useState('');

    function handleClick(value) {
        if (value == 'Đúng') {
            setButtonValue('1'); // Update state with retrieved value
            sendAnswer('1');
        } else {
            setButtonValue('0'); // Update state with retrieved value
            sendAnswer('0');
        }
    }

    const truefalse = ['Đúng', 'Sai'];
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

    function setIndexNe(i, value) {
        setIndex(i);
        handleClick(value);
    }

    return (
        <div className=" w-[56.563rem] max-h-[700px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Đúng hay sai
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    {question}
                </h1>
            </div>
            <div className=" border-[2px] border-secondary-gray p-4 rounded-2xl">
                <h1 className=" text-heading-6 font-heading-6 font-plusjakartasans text-primary-black text-center">
                    {question}
                </h1>
            </div>
            <div className="mx-auto w-2/3">
                <div className="flex gap-8">
                    {checkresult ? (
                        <>
                            {option.map((a, i) => {
                                return (
                                    <Button
                                        key={i}
                                        id={i}
                                        title={a}
                                        color={
                                            buttonValue === correctAnswer
                                                ? index === i
                                                    ? 'success'
                                                    : 'secondary'
                                                : 'secondary' && index === i
                                                  ? 'error'
                                                  : 'secondary'
                                        }
                                        className={'text-left w-full p-5 mb-5'}
                                        active={false}
                                        onClick={() => setIndexNe(i, a)}
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
                                        onClick={() => setIndexNe(i, a)}
                                        icon={false}></Button>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Listen = ({
    result,
    mean,
    content,
    right = false,
    error = false,
    inputValue,
    handleChange,
    sound,
    answer,
    sendAnswer,
}) => {
    // const [answer, setAnswer] = useState('');

    const handleOnChange = (event) => {
        sendAnswer(event.target.value);
    };

    return (
        <div className=" w-[56.563rem] max-h-[750px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Lắng nghe từ vựng
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    {content}
                </h1>
            </div>

            <div className=" flex gap-8 justify-center">
                <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                    <Sound sound={sound} />
                </div>
                <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                    <Sound sound={sound} />
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
                                    onChange={handleOnChange}
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
                                value={answer}
                                onChange={handleOnChange}
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

export const FillInTheBlankReview = ({
    result,
    content,
    right = false,
    error = false,
    inputValue,
    handleChange,
    sendAnswer,
}) => {
    const [answer, setAnswer] = useState('');

    const handleOnChange = (event) => {
        setAnswer(event.target.value);
        sendAnswer(event.target.value);
    };
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
                {content}
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
                                    onChange={handleOnChange}
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
                                onChange={handleOnChange}
                                value={answer}
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

export const PageLoading = () => {
    return (
        <div className=" h-screen justify-center flex flex-col items-center">
            <div class=" relative flex justify-center items-center">
                <div class="absolute animate-spin rounded-full  h-96 w-96 border-t-4 border-b-4 border-purple-500"></div>
                <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" class="rounded-full w-[15vw]" />
            </div>
        </div>
    );
};

export const PopupDeleteList = ({ handleSendIsPopup, lessonid }) => {
    const HandleParentSendIsPopup = () => {
        handleSendIsPopup(false);
    };

    const HandleChilSendIsPopup = (event) => {
        event.stopPropagation();
        handleSendIsPopup(false);
    };

    return (
        <div className="">
            <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div
                    onClick={HandleParentSendIsPopup}
                    className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className=" z-20  relative w-[20vw] max-h-[60vh] h-[40vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" flex bg-white justify-between items-center px-8 mb-6 py-4 border-b border-black">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-danger">
                                    Xóa danh sách
                                </h1>
                                <Button onClick={HandleChilSendIsPopup} icon={true} right={true} title="">
                                    <IconClose color="#000000" />
                                </Button>
                            </div>
                            <div className=" mx-auto w-16 h-16 flex justify-center items-center rounded-full bg-semantic-danger">
                                <IconClose color="#fff" />
                            </div>
                            <div className=" flex flex-col justify-center items-center  px-4 gap-3">
                                <h1 className=" text-button-2 font-button-2 font-plusjakartasans text-semantic-danger">
                                    Bạn có có chắc muốn kết thúc phiên học ?
                                </h1>
                            </div>
                            <div className=" flex px-4 border-secondary-gray gap-8 py-4 border-t">
                                <NavLink className={'w-full'} to={`/learn/lesson/${lessonid}`}>
                                    <Button
                                        color={'primary'}
                                        onClick={HandleChilSendIsPopup}
                                        title="Chắn chắn"
                                        className="w-full"></Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
