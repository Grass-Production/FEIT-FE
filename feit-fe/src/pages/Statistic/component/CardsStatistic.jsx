import { IconTimer, IconListNumbers, FireSimple, IconBook } from '../../../svgs';

export const CardTime = ({ time = '153' }) => {
    return (
        <div className=" ">
            <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                <IconTimer />
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">Thời gian</h1>
            </div>
            <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                {time} phút
            </h1>
        </div>
    );
};

export const CardScore = ({ score = '1800' }) => {
    return (
        <div className=" ">
            <div className="border-b border-secondary-gray py-2 mb-6">
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                    Tổng số điễm đã đạt
                </h1>
            </div>
            <h1 className=" text-center text-heading-4 font-heading-4 font-plusjakartasans text-primary-blue-800">
                {score}
            </h1>
        </div>
    );
};

export const CardLessonComplete = ({ number = '3' }) => {
    return (
        <div className=" ">
            <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                <IconListNumbers />
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                    Chủ đề hoàn thành
                </h1>
            </div>
            <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                {number}
            </h1>
        </div>
    );
};

export const CardStreak = ({ streak = '7' }) => {
    return (
        <div className="">
            <div className=" ">
                <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                    <FireSimple />
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">Streak</h1>
                </div>
                <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                    {streak}
                </h1>
            </div>
        </div>
    );
};
export const CardVocabulareComplete = ({ vocabulary = '50' }) => {
    return (
        <div className="">
            <div className=" ">
                <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                    <IconBook />
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                        Từ đã học
                    </h1>
                </div>
                <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                    {vocabulary}
                </h1>
            </div>
        </div>
    );
};
