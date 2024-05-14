import { NavLink } from 'react-router-dom';
import { LoadingProgressBar, Button } from '../../../components';
import { useState } from 'react';
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

    const handleCountComplete = (learn, quiz, exam) => {
        setCountComplete(learn + quiz + exam);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <>
            {isOpen && <div onClick={toggleDropdown} className=" z-10 bg-transparent fixed inset-0"></div>}

            <div className=" relative p-6 border  border-secondary-gray hover:bg-background-able bg-background-disable active:bg-background-disable hover:border-primary-blue-400 active:border-primary-blue-400 ">
                <div className="">
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

                    <NavLink to={checkprocess ? '/' : `/learn/lesson/${lessonid}/unit/${unitid}`}>
                        <Button
                            icon={false}
                            disabled={isUnitDisabled}
                            className=" w-full py-6 rounded-none"
                            title="Bắt đầu"
                            color={!isUnitDisabled && 'primaryicon'}></Button>
                    </NavLink>

                    <Button
                        onClick={toggleDropdown}
                        icon={false}
                        className=" w-full py-6 rounded-none text-button-1 font-button-1 text-primary-blue-500 "
                        title="Bắt đầu"
                        color={''}></Button>

                    {isOpen && (
                        <div className="z-40 w-40 bot-0 absolute flex flex-col  bg-white left-1/2 border-x border-b border-primary-black">
                            <NavLink to={checkprocess ? '/' : `/learn/lesson/${lessonid}/unit/${unitid}`}>
                                <Button
                                    icon={false}
                                    className=" w-full py-6 rounded-none"
                                    title="Bắt đầu"
                                    color={'primary'}></Button>
                            </NavLink>
                            <NavLink to={checkprocess ? '/' : `/learn/lesson/${lessonid}/unit/${unitid}`}>
                                <Button
                                    icon={false}
                                    className=" w-full py-6 rounded-none"
                                    title="Bắt đầu"
                                    color={'primary'}></Button>
                            </NavLink>
                            <NavLink to={checkprocess ? '/' : `/learn/lesson/${lessonid}/unit/${unitid}`}>
                                <Button
                                    icon={false}
                                    className=" w-full py-6 rounded-none"
                                    title="Bắt đầu"
                                    color={'primary'}></Button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </>
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
