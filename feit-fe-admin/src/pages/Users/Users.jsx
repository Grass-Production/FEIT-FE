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
                                <table className=" w-full">
                                    <tr className=" justify-between items-center bg-neutral-grey  ">
                                        <th className=" text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                            Tên
                                        </th>
                                        <th className=" text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                            Nhà cung cấp
                                        </th>
                                        <th className=" text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                            Ngày thêm vào
                                        </th>
                                    </tr>
                                    {AllUser.map((v, i) => {
                                        return (
                                            <TableData
                                                full_name={v.full_name}
                                                provider={v.provider}
                                                created_at={v.created_at}
                                                email={v.email}
                                                avatar_url={v.avatar_url}
                                                phone={v.phone}
                                                cover_url={v.cover_url}
                                            />
                                        );
                                    })}
                                </table>
                            </>
                        )}
                    </>
                )}
            </CardView>
        </div>
    );
}
