import PaginationItem from '@mui/material/PaginationItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const CardView = ({ children, sendPage, count }) => {
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        console.log(value);
        if (value > 1) {
            sendPage(`?page=${value}`);
        } else {
            sendPage('');
        }
    };

    return (
        <div className="">
            <div className=" border-[4px] border-primary-black shadow-card-home bg-white px-10 py-8">
                <div className="">
                    <div className="flex items-center mb-4 justify-between border-b border-primary-black pb-3">
                        <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                            Theo dõi
                        </h1>
                        <div className=" w-2/5 border-l border-primary-black pl-6">
                            <div className=" flex justify-start items-center ">
                                <Stack spacing={2}>
                                    <Pagination
                                        count={count}
                                        siblingCount={0}
                                        page={page}
                                        onChange={handleChange}
                                        variant="outlined"
                                        shape="rounded"
                                        renderItem={(item) => (
                                            <PaginationItem
                                                component={NavLink}
                                                to={`/logging${item.page === 1 ? '' : `?page=${item.page}`}`}
                                                {...item}
                                            />
                                        )}
                                    />
                                </Stack>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export const TableData = ({ data }) => {
    return (
        <table className=" w-full">
            <tr className=" justify-between items-center bg-primary-blue-400  ">
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-1 font-body-1 text-white font-plusjakartasans">
                    Client IP
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-1 font-body-1 text-white font-plusjakartasans">
                    Status code
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-1 font-body-1 text-white font-plusjakartasans">
                    Path
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-1 font-body-1 text-white font-plusjakartasans">
                    Latency
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-1 font-body-1 text-white font-plusjakartasans">
                    Thời gian hoạt động
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-1 font-body-1 text-white font-plusjakartasans">
                    Thời gian hoạt động
                </th>
            </tr>
            {data.map((v, i) => {
                return (
                    <tr key={i} className=" justify-between items-center ">
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                            {v.client_ip}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                            {v.status_code}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                            {v.path}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                            {v.latency}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                            {v.activity_time}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                            {v.expire_at}
                        </td>
                    </tr>
                );
            })}
        </table>
    );
};

export const CardItem = ({ data }) => {
    return (
        <>
            {data.map((v, i) => {
                return (
                    <div key={i} className=" border-b border-primary-black px-3 pt-3 pb-4">
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Client IP</h1>
                            </div>
                            <div className="">
                                <h1>{v.client_ip}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Method</h1>
                            </div>
                            <div className="">
                                <h1>{v.method}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Status code</h1>
                            </div>
                            <div className="">
                                <h1>{v.status_code}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Body size</h1>
                            </div>
                            <div className="">
                                <h1>{v.status_code}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Path</h1>
                            </div>
                            <div className="">
                                <h1>{v.path}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Latency</h1>
                            </div>
                            <div className="">
                                <h1>{v.latency}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Error</h1>
                            </div>
                            <div className="">
                                <h1>{v.error}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Thời gian hoạt động</h1>
                            </div>
                            <div className="">
                                <h1>{v.activity_time}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Thời gian hết hạn</h1>
                            </div>
                            <div className="">
                                <h1>{v.expire_at}</h1>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
