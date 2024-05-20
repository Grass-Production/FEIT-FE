import { Header } from '../../../layouts';
import { privateRouter } from '../../../context';
import { CardStatistic, CardCrud, CardView, CardItem } from './component';
import { useEffect, useState } from 'react';
import { getCourse } from '../../../services/courseAPI';
import { Loading } from '../../../components';
export default function Course() {
    const [course, setCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const GetCourse = async () => {
            const res = await getCourse();
            console.log(res);
            setCourse(res.data);
            setIsLoading(false);
        };
        GetCourse();
    }, []);
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="">
                    <div className=" mb-7">
                        <CardCrud />
                    </div>
                    <CardView>
                        {course !== null && (
                            <>
                                {course.map((v, i) => {
                                    return (
                                        <CardItem
                                            key={v._id}
                                            idcourse={v._id}
                                            name={v.name}
                                            quantity={v.count_lesson}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </CardView>
                </div>
            )}
        </div>
    );
}
