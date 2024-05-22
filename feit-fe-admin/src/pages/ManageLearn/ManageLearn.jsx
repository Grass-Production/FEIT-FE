import { Outlet } from 'react-router-dom';
import { CardStatistic } from './component';
import { HeaderRouter } from '../../layouts';
import { useEffect, useState } from 'react';
import { getCourse } from '../../services/courseAPI';
import { Loading } from '../../components';
export default function ManageLearn() {
    const [statistic, setStatistic] = useState([]);
    const [course, setCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const GetCourse = async () => {
            const res = await getCourse();
            if (res !== null || res !== '') {
                setCourse(res.detail.statistics.total);
                if (res.data) {
                    setStatistic(res.data[0]);
                }
                console.log(res.detail.statistics.total);
                setIsLoading(false);
            }
        };
        GetCourse();
    }, []);
    return (
        <div className="">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className=" mb-7">
                        <HeaderRouter />
                    </div>
                    <div className=" mb-7">
                        <CardStatistic
                            quantityCourse={course}
                            quantityLesson={statistic.count_lesson}
                            quantityVocabulary={statistic.count_vocabulary}
                        />
                    </div>
                    <Outlet />
                </>
            )}
        </div>
    );
}
