import { CardView, CardItem } from './component';
import { getActivityLog } from '../../services/activitylogAPI';
import { useEffect, useState } from 'react';

export default function ActivityLog() {
    const [activitylog, setActivityLog] = useState([]);
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const GetActivityLog = async () => {
            try {
                setLoading(true);
                const res = await getActivityLog(page);
                if ((res.status = '"success"')) {
                    setLoading(false);
                    setActivityLog(res.activity_log.ActivityLog);
                }
                console.log(res);
            } catch (error) {
                console.log('message :', error);
            }
        };
        GetActivityLog();
    }, [page]);
    console.log('page:', page);

    const handleSetPage = (page) => {
        setPage(page);
    };

    return (
        <div className="">
            <CardView sendPage={handleSetPage}>
                {loading ? (
                    <div className=" animate-pulse h-[40vh] w-full bg-gray-200"></div>
                ) : (
                    <CardItem data={activitylog} />
                )}
            </CardView>
        </div>
    );
}
