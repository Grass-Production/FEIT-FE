import { NavLink } from 'react-router-dom';
import { LoadingProgressBar, Button, InputField } from '../../../components';
import { useState } from 'react';
import { IconClose, IconPlus } from '../../../svgs';
export const UnitCard = ({
    img = 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464162/feit-static/Ch%C6%B0%C6%A1ng%208.png.png',
    name = 'Chương 1',
    percent,
    lessonid,
    unitid,
    checkprocess,
    exam_is_complete = 0,
    exercise_is_complete,
    quiz_is_complete,
    level,
    isUnitDisabled,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [countComplete, setCountComplete] = useState(0);

    const [isPopup, setIsPopup] = useState(false);

    const handleSetIsPopup = () => {
        setIsPopup(!isPopup);
    };
    const handleReceiveIsPopup = (value) => {
        setIsPopup(value);
    };
    const handleCountComplete = (learn, quiz, exam) => {
        setCountComplete(learn + quiz + exam);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <div>
            <div className=" relative p-6 border  border-secondary-gray hover:bg-background-able bg-background-disable active:bg-background-disable hover:border-primary-blue-400 active:border-primary-blue-400 ">
                <div className="">
                    {isPopup && (
                        <PopupCreateList
                            exam_is_complete={exam_is_complete}
                            quiz_is_complete={quiz_is_complete}
                            handleSendIsPopup={handleReceiveIsPopup}
                        />
                    )}

                    <div className={`  max-h-72 bg-no-repeat bg-contain bg-center h-[25vh] overflow-hidden  `}>
                        <img
                            src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464162/feit-static/Ch%C6%B0%C6%A1ng%208.png.png"
                            alt=""
                        />
                    </div>
                    <h1 className="truncate overflow-hidden whitespace-nowrap mt-3 text-center text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-3">
                        {name}
                    </h1>
                    <p className=" text-center mb-2 text-body-2 font-body-2 text-secondary-gray font-plusjakartasans">
                        Đã học {exam_is_complete + exercise_is_complete + quiz_is_complete} / 3 bài học
                    </p>
                    <LoadingProgressBar className={'mb-2 h-2'} percent={percent} />
                    {/* 
                    {exercise_is_complete === 0 && (
                        <NavLink to={`/learn/lesson/${lessonid}/unit/${unitid}`}>
                            <Button
                                icon={false}
                                disabled={isUnitDisabled}
                                className=" w-full py-6 rounded-none"
                                title="Bắt đầu"
                                color={!isUnitDisabled && 'primaryicon'}></Button>
                        </NavLink>
                    )} */}
                    <NavLink to={`/learn/lesson/${lessonid}/unit/${unitid}/quiz`}>
                        <Button
                            icon={false}
                            disabled={isUnitDisabled}
                            className=" w-full py-6 rounded-none"
                            title="Bắt đầu"
                            color={!isUnitDisabled && 'primaryicon'}></Button>
                    </NavLink>
                    {exercise_is_complete !== 0 && (
                        <NavLink to={`/learn/lesson/${lessonid}/unit/${unitid}/exercise`}>
                            <Button
                                icon={false}
                                disabled={isUnitDisabled}
                                className=" w-full py-6 rounded-none"
                                title="Bắt đầu"
                                color={!isUnitDisabled && 'primaryicon'}></Button>
                        </NavLink>
                    )}
                    {exam_is_complete !== 0 && (
                        <NavLink to={`/learn/lesson/${lessonid}/unit/${unitid}/quiz`}>
                            <Button
                                icon={false}
                                disabled={isUnitDisabled}
                                className=" w-full py-6 rounded-none"
                                title="Bắt đầu"
                                color={!isUnitDisabled && 'primaryicon'}></Button>
                        </NavLink>
                    )}

                    <Button
                        onClick={handleSetIsPopup}
                        disabled={isUnitDisabled}
                        icon={false}
                        className=" w-full py-6 rounded-none text-button-1 font-button-1 text-primary-blue-500 "
                        title="Ôn tập"
                        color={''}></Button>
                </div>
            </div>
        </div>
    );
};

export const UnitCardLoad = () => {
    return (
        <div className="animate-pulse">
            <div className="">
                <div className=" h-80 bg-gray-300 overflow-hidden rounded-lg mb-3 "></div>
            </div>
        </div>
    );
};

export const PopupCreateList = ({ handleSendIsPopup, exam_is_complete, quiz_is_complete }) => {
    const HandleParentSendIsPopup = () => {
        handleSendIsPopup(false);
    };

    const HandleChilSendIsPopup = (event) => {
        event.stopPropagation();
        handleSendIsPopup(false);
    };

    return (
        <div className="absolute left-5 right-5 top-0 bottom-0 flex min-h-full items-center justify-start p-4 text-center sm:items-center sm:p-0">
            <div className=" z-20  relative w-[20vw] max-h-[90vh] h-[45vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
                <div className=" flex bg-white justify-start items-center px-8 mb-6 py-4 border-b border-black">
                    <h1 className=" w-full text-button-2 font-button-2 font-plusjakartasans text-primary-black">
                        Lựa chọn ôn tập
                    </h1>
                    <Button onClick={HandleChilSendIsPopup} icon={true} right={true} title="">
                        <IconClose color="#000000" />
                    </Button>
                </div>
                <div className=" flex flex-col justify-center items-start px-3  ">
                    <Button
                        color={'primary'}
                        onClick={HandleChilSendIsPopup}
                        title="Học từ mới"
                        className=" rounded-none w-full p-0"></Button>
                    <Button
                        color={exam_is_complete !== 0 && 'primary'}
                        disabled={exam_is_complete === 0 && true}
                        onClick={HandleChilSendIsPopup}
                        title="Ôn tập"
                        className=" rounded-none w-full p-0"></Button>
                    <Button
                        color={quiz_is_complete !== 0 && 'primary'}
                        disabled={quiz_is_complete === 0 && true}
                        onClick={HandleChilSendIsPopup}
                        title="Kiểm tra"
                        className=" rounded-none w-full p-0"></Button>
                </div>
                <div className=" flex px-4 border-secondary-gray gap-8 py-4 border-t">
                    <Button
                        color={'primary'}
                        onClick={HandleChilSendIsPopup}
                        icon={true}
                        right={true}
                        title="Hủy"
                        className="w-full  ">
                        <IconClose />
                    </Button>
                </div>
            </div>
        </div>
    );
};
