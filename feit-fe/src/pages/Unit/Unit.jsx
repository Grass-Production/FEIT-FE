import { useState } from 'react';
import { Button } from '../../components';
import { Listen, Example, FillInTheBlank, PopUp } from './component';
import { RenderComponentUnit } from '../../untils/renderComponentUnit';
import 'animate.css';

export default function Unit() {
    // Dùng để đếm số để render Component
    const [count, setCount] = useState(0);

    // Dùng để lưu phần trăm
    const [process, setProcess] = useState(0);

    // Dùng ẩn hiện pop up
    const [status, setStatus] = useState(false);

    const ListenComponent = <Listen word={'Algorithm'} mean={'Thuật toán'} />;
    const ExamplesComponent = <Example word={''} />;
    const FillInTheBlankComponent = <FillInTheBlank word={''} />;

    // handleOnClick : Xử lý điều kiện render component bằng count và process để hiển thị thành phần trăm
    function handleOnClick() {
        if (process === 100) {
            return;
        }
        setCount((n) => n + 1);
        setProcess((n) => n + 40);
    }

    function handlePopUp() {
        setStatus(!status);
    }

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" w-3/4 mx-auto mt-7 flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                    style={{ width: `${process}%` }}></div>
            </div>

            <RenderComponentUnit
                listen={ListenComponent}
                example={ExamplesComponent}
                fillInTheBlank={FillInTheBlankComponent}
                count={count}
            />

            <div className=" w-full  py-10 flex justify-around items-center border-t-2 border-black">
                {count !== 2 ? (
                    <>
                        <Button onClick={handleOnClick} className=" w-[25.5rem]" title="Tiếp tục"></Button>
                        <Button onClick={handlePopUp} className=" w-[25.5rem]" title="Giải thích từ vựng"></Button>
                    </>
                ) : (
                    <Button onClick={handleOnClick} className="w-3/4" title="Tiếp tục"></Button>
                )}
            </div>
            {status && (
                <div className={status ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                    <PopUp OnClose={handlePopUp} />
                </div>
            )}
        </div>
    );
}
