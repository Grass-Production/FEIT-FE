import { CardView, CardItem, TableData, CardStatic } from './component';
import { getActivityLog } from '../../services/activitylogAPI';
import { useEffect, useState } from 'react';
import { getFeedbacks } from '../../services/feedbackAPI';
export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [pageCurrent, setPageCurrent] = useState('');
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const GetFeedbacks = async () => {
            try {
                setLoading(true);
                const res = await getFeedbacks(pageCurrent);
                if ((res.status = '"success"')) {
                    setLoading(false);
                    setStatistics(res.data.statistics);
                    setFeedbacks(res.data.feedback);
                    setPage(res.data.page);
                }
                console.log(res);
            } catch (error) {
                console.log('message :', error);
            }
        };
        GetFeedbacks();
    }, [pageCurrent]);
    console.log('page:', pageCurrent);

    const handleSetPage = (pageCurrent) => {
        setPageCurrent(pageCurrent);
    };
    console.log('statistics ', statistics);

    return (
        <div className="">
            <div className=" mb-7">
                <CardStatic statistics={statistics} />
            </div>
            <CardView sendPage={handleSetPage} count={page}>
                {loading ? (
                    <div className=" animate-pulse h-[40vh] w-full bg-gray-200"></div>
                ) : (
                    // <CardItem data={activitylog} />
                    <>
                        <table className=" w-full border-primary-black border-[2px] ">
                            <tr className=" justify-between items-center bg-neutral-grey  ">
                                <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                    Tên
                                </th>
                                <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                    Vai trò
                                </th>
                                <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                    Thời gian
                                </th>
                            </tr>
                            {feedbacks !== null && (
                                <>
                                    {feedbacks.map((v, i) => {
                                        return (
                                            <>
                                                <TableData
                                                    key={i}
                                                    date={v.submitted_date}
                                                    feeling={v.feeling}
                                                    content={v.content}
                                                    is_love_web={v.is_love_web}
                                                />
                                            </>
                                        );
                                    })}
                                </>
                            )}
                        </table>
                    </>
                )}
            </CardView>
        </div>
    );
}
