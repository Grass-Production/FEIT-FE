import { LineChart } from './component/CardDashboar';
import { CardTime, CardLessonComplete, CardStreak, CardVocabulareComplete, CardScore } from './component';
import { getAllExercise } from '../../services/exerciseAPI';
import { getAllExam } from '../../services/examAPI';
import { getAllUser } from '../../services/userAPI';
import { useEffect, useState } from 'react';
import { Loading } from '../../components';
export default function Dashboard() {
    const [countExercise, setCountExercise] = useState([]);
    const [countExam, setCountExam] = useState([]);
    const [countUser, setCountUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const GetAllExercise = async () => {
            const res = await getAllExercise();
            setCountExercise(res.page.count_exercise);
        };
        const GetAllExam = async () => {
            const res = await getAllExam();
            setCountExam(res.detail.count_exam);
        };
        const GetAllUser = async () => {
            const res = await getAllUser();
            setCountUser(res.user.statistics.total);
        };

        const StartFunction = async () => {
            await GetAllExercise();
            await GetAllExam();
            await GetAllUser();
            setIsLoading(false);
        };
        StartFunction();
    }, []);

    return (
        <div className=" ">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-3 grid-rows-1 gap-4">

                    <div className="  col-span-3">
                        <div className=" grid grid-rows-2 grid-flow-col grid-cols-4 gap-4">
                            <div className="  bg-[#35696B]  border-[4px] border-primary-black row-span-3 col-span-3  ...">
                                <LineChart />
                            </div>
                            <div className=" bg-[#F2FEFF]  border-[4px]  border-primary-black flex justify-center items-center col-span-2 ...">
                                <CardScore quantitylearns={countExercise} />
                            </div>
                            <div className="  border-[4px]  border-primary-black flex justify-center items-center row-span-2 col-span-2 ...">
                                <CardTime quantityExam={countExam} />
                            </div>
                        </div>
                    </div>
                    <div className="  border-[4px] bg-primary-blue-50  border-primary-black flex justify-center items-center ">
                        <CardVocabulareComplete />
                    </div>
                    <div className=" bg-[#EAFFEA ]  border-[4px]  border-primary-black flex justify-center items-center ...">
                        <CardLessonComplete />
                    </div>
                    <div className="  border-[4px]  border-primary-black flex justify-center items-center ...">
                        <CardStreak users={countUser} />
                    </div>
                    {/* <div className="  border-[4px]  border-primary-black flex justify-center items-center ...">
                    <CardVocabulareComplete />
                </div> */}
                </div>
            )}
        </div>
    );
}
