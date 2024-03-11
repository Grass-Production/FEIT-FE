import { useState } from 'react';
import { Button } from '../../components';
import { Listen, Example } from './component';
import { RenderComponentUnit } from '../../untils/renderComponentUnit';
export default function Unit() {
    const [count, setCount] = useState(0);
    const [process, setProcess] = useState(0);

    const ListenComponent = <Listen word={'tiegn anh'} />;
    const ExamplesComponent = <Example word={''} />;

    // handleOnClick : Xử lý điều kiện render component bằng count và process để hiển thị thành phần trăm
    function handleOnClick() {
        if (process === 100) {
            return;
        }
        setCount((n) => n + 1);
        setProcess((n) => n + 50);
    }

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" w-3/4 mx-auto mt-7 flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                    style={{ width: `${process}%` }}></div>
            </div>

            <div className=" flex justify-center items-center ">
                <RenderComponentUnit listen={ListenComponent} example={ExamplesComponent} count={count} />
            </div>

            <div className=" w-full  py-10 flex justify-around items-center border-t-2 border-black">
                <Button onClick={handleOnClick} className=" w-[25.5rem]" title="Tiếp tục"></Button>
                <Button className=" w-[25.5rem]" title="Giải thích từ vựng"></Button>
            </div>
        </div>
    );
}
