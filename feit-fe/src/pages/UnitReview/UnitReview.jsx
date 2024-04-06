import { useState } from 'react';
import { Button, LoadingProgressBar } from '../../components';

// import { FillInTheBlankReview } from './component/FillInTheBlankReview';
import { Multiplechoice } from './component/Multiplechoice';
import { FillInTheBlankReview } from './component/FillInTheBlankReview';
import { PopUp } from './component/PopUp';

import { RenderComponentUnitReview } from '../../untils/renderComponentUnitReview';

import { IconXCircle } from '../../svgs';
import 'animate.css';

export default function UnitReview() {
    // Dùng để đếm số để render Component
    const [count, setCount] = useState(0);

    // Dùng để lưu phần trăm
    const [process, setProcess] = useState(0);
    // Dùng ẩn hiện pop up
    const [showpopup, setShowPopup] = useState(false);

    const [check, setCheck] = useState(false);
    // handleOnClick : Xử lý điều kiện render component bằng count và process để hiển thị thành phần trăm
    const [resultStatus, setResultStatus] = useState(false);
    function checkResult() {
        setCheck(true);
    }

    function handleOnClick() {
        // Nếu process đạt 100% thì return

        if (process === 100) {
            return;
        }
        setCheck(false);
        setCount((n) => (n + 1) % 3);
        setProcess((n) => n + 10);
        console.log(count);
        console.log(process);
    }

    function handlePopUp() {
        setShowPopup(!showpopup);
    }

    const dataTest = [
        {
            multipleChoice: ['Syntax', 'Javascrip', 'Post Man', 'Doulingo'],
            work: 'Syntax',
        },
    ];

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" flex w-full justify-center items-center gap-2 mt-7">
                <IconXCircle color={'#3C79FE'} />
                <div className=" w-3/4   flex justify-center items-center h-1.5 bg-gray-200 rounded-full  dark:bg-gray-700">
                    {/* <div
                        className="flex flex-col justify-center rounded-full  bg-primary-blue-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-primary-blue-500"
                        style={{ width: `${process}%` }}></div> */}

                    <LoadingProgressBar percent={process} />
                </div>
            </div>

            <RenderComponentUnitReview
                multipleChoice={<Multiplechoice multiplechoice={dataTest.map((a) => a.multipleChoice)} />}
                fillInTheBlank={<FillInTheBlankReview error={check} />}
                count={count}
            />
            <div className=" w-full py-10 flex justify-around items-center border-t-2 border-black">
                {/* {count !== 2 ? (
                    <>
                        <Button
                            icon={false}
                            color={'primary'}
                            onClick={check ? handleOnClick : checkResult}
                            className=" w-1/4 py-6"
                            title="Tiếp tục"></Button>
                        <Button
                            icon={false}
                            color={'primary'}
                            onClick={handlePopUp}
                            className=" w-1/4 py-6"
                            title="Giải thích từ vựng"></Button>
                    </>
                ) : (
                    <Button
                        icon={false}
                        color={'primary'}
                        onClick={check ? handleOnClick : checkResult}
                        className="w-3/4"
                        title="Tiếp tục"></Button>
                )} */}
                <Button
                    icon={false}
                    color={'primary'}
                    onClick={check ? handleOnClick : checkResult}
                    className="w-3/4"
                    title="Tiếp tục"></Button>
            </div>
            {showpopup && (
                <div className={showpopup ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                    <PopUp OnClose={handlePopUp} />
                </div>
            )}
        </div>
    );
}
