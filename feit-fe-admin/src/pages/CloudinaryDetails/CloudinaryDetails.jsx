import { CardView, CardItem, Folders } from './component';
import { getActivityLog } from '../../services/activitylogAPI';
import { useEffect, useState } from 'react';

export default function ActivityLog() {
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
            <CardView sendPage={handleSetPage} count={page} />
        </div>
    );
}
