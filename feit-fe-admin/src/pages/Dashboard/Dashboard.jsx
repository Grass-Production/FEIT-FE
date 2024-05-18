import { LineChart } from './component/CardDashboar';
import { CardTime, CardLessonComplete, CardStreak, CardVocabulareComplete, CardScore } from './component';

export default function Dashboard() {
    return (
        <div className="">
            <div className="grid grid-cols-3 grid-rows-1 gap-4 ">
                <div className="  col-span-3">
                    <div className=" grid grid-rows-2 grid-flow-col grid-cols-4 gap-4">
                        <div className="  border-[4px]  border-primary-black row-span-3 col-span-3  ...">
                            <LineChart />
                        </div>
                        <div className="  border-[4px]  border-primary-black flex justify-center items-center col-span-2 ...">
                            <CardScore />
                        </div>
                        <div className="  border-[4px]  border-primary-black flex justify-center items-center row-span-2 col-span-2 ...">
                            <CardTime />
                        </div>
                    </div>
                </div>
                <div className="  border-[4px]  border-primary-black flex justify-center items-center ">
                    <CardTime />
                </div>
                <div className="  border-[4px]  border-primary-black flex justify-center items-center ...">
                    <CardLessonComplete />
                </div>
                <div className="  border-[4px]  border-primary-black flex justify-center items-center ...">
                    <CardStreak />
                </div>
                {/* <div className="  border-[4px]  border-primary-black flex justify-center items-center ...">
                    <CardVocabulareComplete />
                </div> */}
            </div>
        </div>
    );
}
