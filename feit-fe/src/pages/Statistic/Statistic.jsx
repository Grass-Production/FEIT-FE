import {
    CardTime,
    CardLessonComplete,
    CardStreak,
    CardVocabulareComplete,
    CardScore,
    BarChart,
    PieChart,
} from './component';

export default function Statistic() {
    return (
        <div className=" px-10">
            <h1 className=" mt-7 text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-1">
                Thông kê
            </h1>
            <div className="grid grid-cols-4 gap-4 ">
                <div className=" shadow-card-home border-[4px] border-secondary-gray rounded-xl flex justify-center items-center ">
                    <CardTime />
                </div>
                <div className=" shadow-card-home border-[4px] border-secondary-gray rounded-xl flex justify-center items-center ...">
                    <CardLessonComplete />
                </div>
                <div className=" shadow-card-home border-[4px] border-secondary-gray rounded-xl flex justify-center items-center ...">
                    <CardStreak />
                </div>
                <div className=" shadow-card-home border-[4px] border-secondary-gray rounded-xl flex justify-center items-center ...">
                    <CardVocabulareComplete />
                </div>
                <div className="  col-span-4">
                    <div className=" grid grid-rows-3 grid-flow-col grid-cols-4 gap-4">
                        <div className=" px-8 shadow-card-home border-[4px] border-secondary-gray rounded-xl row-span-3 col-span-3  ...">
                            <BarChart />
                        </div>
                        <div className=" shadow-card-home border-[4px] border-secondary-gray rounded-xl flex justify-center items-center col-span-2 ...">
                            <CardScore />
                        </div>
                        <div className=" shadow-card-home border-[4px] border-secondary-gray rounded-xl flex justify-center items-center row-span-2 col-span-2 ...">
                            <PieChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
