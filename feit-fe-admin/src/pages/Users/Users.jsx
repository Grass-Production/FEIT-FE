import { CardView, CardItem, TableData, CardStatic } from './component';
import { getActivityLog } from '../../services/activitylogAPI';
import { useEffect, useState } from 'react';

export default function Feedback() {
    const [activitylog, setActivityLog] = useState([]);
    const [pageCurrent, setPageCurrent] = useState('');
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const GetActivityLog = async () => {
            try {
                setLoading(true);
                const res = await getActivityLog(pageCurrent);
                if ((res.status = '"success"')) {
                    setLoading(false);
                    setActivityLog(res.activity_log.activity_log);
                    setPage(res.activity_log.page);
                }
                console.log(res);
            } catch (error) {
                console.log('message :', error);
            }
        };
        GetActivityLog();
    }, [pageCurrent]);
    console.log('page:', pageCurrent);

    const handleSetPage = (pageCurrent) => {
        setPageCurrent(pageCurrent);
    };

    return (
        <div className="">
            <div className=" mb-7">
                <CardStatic />
            </div>
            <CardView sendPage={handleSetPage} count={page}>
                {loading ? (
                    <div className=" animate-pulse h-[40vh] w-full bg-gray-200"></div>
                ) : (
                    // <CardItem data={activitylog} />
                    <TableData data={activitylog} />
                )}
            </CardView>
        </div>
    );
}
