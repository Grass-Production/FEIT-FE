import { CardView, CardItem, TableData, CardStatic } from './component';
import { getActivityLog } from '../../services/activitylogAPI';
import { useEffect, useState } from 'react';
import { getAllUser } from '../../services/userAPI';
import { Loading } from '../../components';
export default function Feedback() {
    const [AllUser, setAllUser] = useState([]);
    const [pageCurrent, setPageCurrent] = useState('');
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GetAllUser = async () => {
            try {
                setLoading(true);
                const res = await getAllUser(pageCurrent);
                if (res.status === 'success') {
                    setLoading(false);
                    setAllUser(res.user.user);
                }
                console.log('user', res);
            } catch (error) {
                console.log('message :', error);
            }
        };

        GetAllUser();
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
                    <Loading />
                ) : (
                    // <CardItem data={activitylog} />
                    <>
                        {AllUser !== null && (
                            <>
                                <TableData data={AllUser} />
                            </>
                        )}
                    </>
                )}
            </CardView>
        </div>
    );
}
