import { IconChartBar, ArrowRight, IconCircleNotch, IconListNumbers } from '../../../svgs';
import { useState, useEffect } from 'react';
import { Button, LoadingProgressBar } from '../../../components';
import { getLessons } from '../../../services/lessonAPI';

export const CardProgress = () => {
    const [lessons, setLesson] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getLessons();
                setLoading(!loading);
                setLesson(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className=" w-3/4">
            <IconCircleNotch className={'bg-primary-blue-400 rounded mb-2 '} size={'54'} color="#FFFFFF" />
            <h1 className=" text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-2">Tiến độ</h1>
            <p className=" mb-2 text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                Theo dõi tiến độ của mình và hãy hoàn thành các bài học của bạn nhé.
            </p>
            <div className=" overflow-auto max-h-24">
                {loading ? (
                    <div className=" animate-pulse bg-secondary-gray h-3 rounded-2xl"></div>
                ) : (
                    <>
                        {lessons.map((lesson, i) => {
                            return (
                                <div
                                    className=" mb-2 border-[0.2px] border-secondary-gray rounded-2xl p-2"
                                    key={lesson.id}>
                                    <h1 className=" mb-2 text-body-1 font-plusjakartasans font-body-1 text-primary-black">
                                        {i + 1}. {lesson.name}
                                    </h1>
                                    <div className=" flex gap-2 justify-between items-center">
                                        <LoadingProgressBar percent={lesson.level} />
                                        <h1 className=" text-body-2 font-plusjakartasans font-body-2 text-primary-black">
                                            {lesson.level}%
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};
