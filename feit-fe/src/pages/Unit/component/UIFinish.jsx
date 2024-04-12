import { IconSuccess } from '../../../svgs';
import { IconDictionary, IconList } from '../../../svgs';

export const Score = ({ score = '10' }) => {
    return (
        <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-start gap-20 items-center">
            <div className=" flex justify-center items-center">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Số điểm đạt được
                </h1>
            </div>
            <div className="">
                <div className=" w-32 h-36 bg-white shadow-card-home ">
                    <h1 className=" text-center text-heading-1 font-heading-1 font-bitter text-primary-blue-500">
                        {score}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export const ListVocabulary = ({ list = [] }) => {
    return (
        <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-start gap-20 items-center">
            <div className=" flex justify-center gap-4 items-center">
                <IconDictionary />
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Đây là những từ vựng của bài học này !
                </h1>
            </div>
            <div className="">
                {list.map((value, i) => {
                    return (
                        <div key={i} className="w-[30vw] p-3 flex justify-between items-center">
                            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">
                                {i + 1}. &nbsp;{value}
                            </h1>
                            <IconList />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

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
