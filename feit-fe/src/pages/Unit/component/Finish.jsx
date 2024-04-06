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
