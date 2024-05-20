import PaginationItem from '@mui/material/PaginationItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, InputSection } from '../../../components';
import {
    IconGraduationCap,
    IconBookOpenText,
    IconBook,
    IconTextAUnderline,
    IconArrowUpRight,
    IconUsers,
    IconClose,
} from '../../../svgs';

import { PieChart } from './Chart';
export const CardStatic = ({
    quantityCourse = '2',
    quantityLesson = '10',
    quantityUnit = '300',
    quantityVocabulary = '3000',
}) => {
    return (
        <div className=" shadow-card-home px-10 py-7 border-[4px] border-primary-black bg-white">
            <div className=" border-b border-primary-black pb-2 mb-4">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Thống kê tổng quát
                </h1>
            </div>
            <div className="flex w-full justify-between gap-7">
                <div className=" border w-1/2 bg-primary-blue-50 p-8 border-primary-black  flex justify-start items-end gap-3">
                    <div className="">
                        <IconUsers />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityCourse}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Người dùng
                        </h1>
                    </div>
                </div>

                <div className=" border w-full bg-primary-blue-50  border-primary-black flex justify-center flex-col ">
                    <div className="">
                        <PieChart
                            labelsChart={['Người trái ngành', 'Đang đi làm', 'Sinh viên']}
                            percent={[48, 38, 14]}
                            colorAray={['#E7EEFF', '#5C8FFE', '#05256B']}
                        />
                    </div>
                </div>

                <div className=" border w-full bg-primary-blue-50  border-primary-black flex justify-center flex-col ">
                    {/* <div className="">
                        <IconBookOpenText />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityLesson}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Chủ đề
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div> */}
                    <div className="">
                        <PieChart
                            labelsChart={['Không hoạt động', 'Hoạt động']}
                            percent={[54, 46]}
                            colorAray={['#EAEAEC', '#21B521']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

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
            <div className=" border-[4px] border-primary-black shadow-card-home bg-neutral-grey px-10 py-8">
                <div className="">
                    <div className="flex items-center mb-4 justify-between border-b border-primary-black pb-3">
                        <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                            Tất cả người dùng
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

export const TableData = ({
    full_name,
    provider,
    created_at,
    email,
    avatar_url,
    phone,
    cover_url,
    position = 'IT',
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const handleRecieveIsOpen = (value) => {
        setIsOpen(value);
    };

    return (
        <>
            {isOpen && (
                <PopupUser
                    handleSendIsPopup={handleRecieveIsOpen}
                    email={email}
                    avatar_url={avatar_url}
                    phone={phone}
                    cover_url={cover_url}
                    position={position}
                    full_name={full_name}
                />
            )}
            <tr onClick={toggleDropdown} className=" cursor-pointer justify-between bg-white items-center ">
                <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {full_name}
                </td>
                <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {provider}
                </td>
                <td className=" px-5 border border-primary-black text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {created_at}
                </td>
            </tr>
        </>
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

export const PopupUser = ({
    handleSendIsPopup,
    full_name = 'Doan Dinh Hoang',
    email = 'Hoang@gmail.com',
    avatar_url,
    phone = '123456789',
    cover_url,
    position = 'IT',
}) => {
    const HandleParentSendIsPopup = () => {
        handleSendIsPopup(false);
    };

    const HandleChilSendIsPopup = (event) => {
        event.stopPropagation();
        handleSendIsPopup(false);
    };

    return (
        <div className="">
            <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-65 transition-opacity w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="  z-20  relative w-[50vw]  h-[95vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" px-8 py-4 flex justify-between items-center border-b border-secondary-gray">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Phản hồi
                                </h1>
                                {/* <Button onClick={HandleChilSendIsPopup} icon={true} left={true} title="">
                                    <IconClose />
                                </Button> */}
                                <Button onClick={HandleParentSendIsPopup} icon={true} left={true} title="">
                                    <IconClose />
                                </Button>
                            </div>
                            <div className=" px-5 flex flex-col h-full justify-center ">
                                <div className=" flex flex-col justify-between p-5 border-[2px] border-primary-black bg-neutral-grey shadow-card-home">
                                    <div className=" mb-3">
                                        <h1 className=" mb-1 text-lable-2 font-lable-2 font-plusjakartasans text-secondary-gray">
                                            Ảnh bìa
                                        </h1>
                                        <div
                                            className=" w-full h-52"
                                            style={{
                                                background: `url(${cover_url}) center center/cover no-repeat`,
                                            }}></div>
                                    </div>
                                    <div className=" flex justify-between items-center gap-7">
                                        <div className="w-1/2">
                                            <h1 className=" mb-1 text-lable-2 font-lable-2 font-plusjakartasans text-secondary-gray">
                                                Ảnh đại diện
                                            </h1>
                                            <div
                                                className=" w-full h-56"
                                                style={{
                                                    background: `url(${avatar_url}) center center/cover no-repeat`,
                                                }}></div>
                                        </div>

                                        <div className=" w-1/2">
                                            <h1 className=" mb-1 text-lable-2 font-lable-2 font-plusjakartasans text-secondary-gray">
                                                Thông tin cá nhân
                                            </h1>
                                            <div className=" border-[2px] border-primary-black p-2">
                                                <div className=" mb-2">
                                                    <h1 className=" text-label-3 font-label-3 font-plusjakartasans text-secondary-gray">
                                                        Họ và tên
                                                    </h1>
                                                    <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                                                        {full_name}
                                                    </h1>
                                                </div>
                                                <div className=" mb-2">
                                                    <h1 className=" text-label-3 font-label-3 font-plusjakartasans text-secondary-gray">
                                                        Email
                                                    </h1>
                                                    <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                                                        {email}
                                                    </h1>
                                                </div>
                                                <div className=" mb-2">
                                                    <h1 className=" text-label-3 font-label-3 font-plusjakartasans text-secondary-gray">
                                                        Số điện thoại
                                                    </h1>
                                                    <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                                                        {phone}
                                                    </h1>
                                                </div>
                                                <div className="">
                                                    <h1 className=" text-label-3 font-label-3 font-plusjakartasans text-secondary-gray">
                                                        Vai trò
                                                    </h1>
                                                    <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                                                        {position}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  px-4 border-secondary-gray  py-4 border-t">
                                <Button
                                    color={'primary'}
                                    icon={true}
                                    right={true}
                                    onClick={HandleParentSendIsPopup}
                                    title="Đóng"
                                    className="w-full py-4"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const CardStatic = () => {
//     return (
//         <div className="">
//             <h1>Thống kê tổng quan</h1>
//         </div>
//     );
// };
