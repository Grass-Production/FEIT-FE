import { IconBooks } from '../../svgs';

import { CardLeaderBoard, CardLearn, CardLesson, CardProgress, CardStatistic } from './components';
export default function HomePage() {
    return (
        <div className="grid grid-cols-3 gap-4 h-screen px-10 py-7">
            <div className=" shadow-card-home bg-foundation-blue-primary-50 border-[4px] border-primary-black  flex justify-center items-center rounded-lg">
                <CardLeaderBoard />
            </div>
            <div className=" shadow-card-home bg-gradient-to-r from-purple-200 to-[#8EC5FC] border-[4px] border-primary-black flex justify-center items-center rounded-lg">
                <CardLearn />
            </div>
            <div className=" shadow-card-home bg-foundation-soft-blue-50 border-[4px] border-primary-black flex justify-center items-center rounded-lg">
                <CardLesson />
            </div>
            <div className=" shadow-card-home bg-white border-[4px] border-primary-black flex justify-center items-center rounded-lg">
                <CardProgress />
            </div>
            <div className=" col-span-2 px-12 shadow-card-home bg-no-repeat bg-contain bg-[url(src/assets/images/img-wellcome-home.png)] border-[4px] border-primary-black flex justify-end items-center rounded-lg">
                <div className=" p-2 border border-primary-black  w-[60%]">
                    <h1 className=" text-left bg-primary-blue-50 text-heading-4 font-plusjakartasans text-primary-black font-heading-4">
                        Chào mừng mừng bạn đến với FEIT.
                    </h1>
                </div>
            </div>
            <div className=" shadow-card-home bg-foundation-green-highlight-50 border-[4px] border-primary-black flex justify-center items-center rounded-lg">
                <CardStatistic />
            </div>
            <div className=" shadow-card-home bg-foundation-purple-50 border-[4px] border-primary-black flex justify-center items-center rounded-lg">
                <div className=" w-3/4">
                    <IconBooks className={'bg-primary-blue-400 rounded mb-2 '} size={'54'} color="#FFFFFF" />
                    <h1 className=" text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-2">
                        “Học, học nữa, học mãi”
                    </h1>
                </div>
            </div>
            <div className=" shadow-card-home bg-no-repeat bg-center bg-cover bg-[url(src/assets/images/img-decorate-home.jpg)] border-[4px] border-primary-black flex justify-center items-center rounded-lg"></div>
        </div>
    );
}
