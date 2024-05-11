import { IconChartBar, ArrowRight, IconCircleNotch, IconListNumbers } from '../../../svgs';
import { useState, useEffect } from 'react';
import { Button, LoadingProgressBar } from '../../../components';
import { getLessons } from '../../../services/lessonAPI';

export const CardProgress = () => {
    const [lessons, setLesson] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showpopup, setShowPopup] = useState(false);

    function handlePopUp() {
        setShowPopup(!showpopup);
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getLessons();
                setLoading(!loading);
                console.log('res: ', res);
                setLesson(res.data);
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
            <Button onClick={handlePopUp} icon={true} color={'secondaryicon'} title="Xem" right={true}>
                <ArrowRight color="#3C79FE" />
            </Button>
            {showpopup && <PopUp OnClose={handlePopUp} data={lessons} />}
            {/* <div className=" overflow-auto max-h-24">
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
            </div> */}
        </div>
    );
};

export const PopUp = ({ OnClose, data }) => {
    return (
        <div className="">
            <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative border-[4px] border-primary-black w-[60vh] max-h-[60vh] min-h-[60vh] flex flex-col justify-between transform overflow-hidden  bg-white text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" flex bg-white justify-between items-center px-8 mb-6 py-4 border-b border-black">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Chủ đề
                                </h1>
                                <Button title="X" onClick={OnClose}></Button>
                            </div>

                            <div className=" flex flex-col justify-center items-center overflow-auto h-[50vh] px-4 max-h-[60] ">
                                {data.map((a, i) => (
                                    <div className=" w-3/4 mb-2 " key={a.id}>
                                        <h1 className=" mb-2 text-body-1 font-plusjakartasans font-body-1 text-primary-black">
                                            {a.name}
                                        </h1>
                                        <div className=" flex gap-2 justify-between items-center">
                                            <LoadingProgressBar percent={a.level} />
                                            <h1 className=" text-body-2 font-plusjakartasans font-body-2 text-primary-black">
                                                {a.level}%
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className=" flex bg-white py-4 justify-center border-t border-secondary-gray">
                                <Button
                                    color={'primary'}
                                    onClick={OnClose}
                                    title="Đóng"
                                    className=" w-3/4 py-4 rounded-none"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
