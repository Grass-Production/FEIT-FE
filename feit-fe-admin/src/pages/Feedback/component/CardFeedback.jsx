import PaginationItem from '@mui/material/PaginationItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    IconGraduationCap,
    IconBookOpenText,
    IconBook,
    IconTextAUnderline,
    IconArrowUpRight,
    IconChatTeardropText,
    IconUsers,
    IconEmotionDissapointed,
    IconEmotionGood,
    IconEmotionHappy,
    IconEmotionSad,
    IconClose,
} from '../../../svgs';
import { Fragment } from 'react';
import { PieChart } from './Chart';

import { Form, InputSection, Button, InputField } from '../../../components';

export const CardStatic = ({ statistics }) => {
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
                        <IconChatTeardropText color="#858585" />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {statistics.total}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Phản hồi
                        </h1>
                    </div>
                </div>

                <div className=" border w-full bg-primary-blue-50  border-primary-black flex justify-center flex-col ">
                    <div className="">
                        <PieChart
                            labelsChart={['Quá được', 'Hài lòng', 'Tạm được', 'Thất vọng']}
                            percent={[
                                statistics.count_good,
                                statistics.count_happy,
                                statistics.count_sad,
                                statistics.count_disappointed,
                            ]}
                            colorAray={['#FFFF00', '#FFFFB0', '#E8420F', '#FFC7B5']}
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
            <div className=" border-[4px] border-primary-black shadow-card-home bg-neutral-grey  px-10 py-8">
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

export const TableData = ({ date, feeling, content, is_love_web, name = 'Hoang', position = 'IT' }) => {
    const [isShowPopup, setIsShowPopup] = useState(false);
    const handleShowPopup = () => {
        setIsShowPopup(!isShowPopup);
    };

    const handleReceiveIsShowPopup = (value) => {
        setIsShowPopup(value);
    };
    return (
        <>
            <tr onClick={handleShowPopup} className=" justify-between bg-white items-center cursor-pointer">
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-start py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    <strong className=" bg-primary-green p-2">Mới</strong> <br />
                    <strong className=" text-primary-blue-400">{name}</strong>
                </td>
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {position}
                </td>
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {date}
                </td>
            </tr>
            {isShowPopup && (
                <PopupFeedback
                    feeling={feeling}
                    content={content}
                    isloveweb={is_love_web}
                    handleSendIsPopup={handleReceiveIsShowPopup}
                    name={name}
                />
            )}
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

// export const CardStatic = () => {
//     return (
//         <div className="">
//             <h1>Thống kê tổng quan</h1>
//         </div>
//     );
// };

export const PopupFeedback = ({ handleSendIsPopup, name, feeling, content, isloveweb }) => {
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
                        <div className="  z-20  relative w-[60vw]  h-[95vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" px-8 py-4 flex justify-between items-center border-b border-secondary-gray">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Phản hồi
                                </h1>
                                <Button onClick={HandleChilSendIsPopup} icon={true} left={true} title="">
                                    <IconClose />
                                </Button>
                            </div>
                            <div className="px-20 flex flex-col h-full justify-center ">
                                <div className=" flex flex-col justify-between p-8 border-[2px] border-primary-black bg-neutral-grey shadow-card-home">
                                    <div className=" ">
                                        <h1 className=" mb-1 text-heading-4 font-heading-4 font-plusjakartasans text-primary-black">
                                            Phản hồi của người dùng
                                        </h1>
                                    </div>
                                    <div className="">
                                        <h1 className=" mb-1 text-lable-2 font-lable-2 font-plusjakartasans text-secondary-gray">
                                            Cảm xúc
                                        </h1>
                                        <div className=" flex w-3/4 justify-start">
                                            {feeling === 'sad' && (
                                                <div className=" flex flex-col justify-center items-center p-2">
                                                    <IconEmotionDissapointed />
                                                    <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                                        Thất vọng
                                                    </h1>
                                                </div>
                                            )}
                                            {feeling === 'happy' && (
                                                <div className=" flex flex-col justify-center items-center p-2">
                                                    <IconEmotionSad />
                                                    <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                                        Tạm được
                                                    </h1>
                                                </div>
                                            )}
                                            {feeling === 'disappointed' && (
                                                <div className=" flex flex-col justify-center items-center p-2">
                                                    <IconEmotionHappy />
                                                    <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                                        Hài lòng
                                                    </h1>
                                                </div>
                                            )}
                                            {feeling === 'good' && (
                                                <div className=" flex flex-col justify-center items-center p-2">
                                                    <IconEmotionGood />
                                                    <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                                        Quá tuyệt
                                                    </h1>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="">
                                        <h1 className="mb-3 text-lable-2 font-lable-2 font-plusjakartasans text-secondary-gray">
                                            Ý kiến của bạn
                                        </h1>
                                        <textarea
                                            className=" text-body-1 font-body-1 font-plusjakartasans resize-none w-full border border-primary-black px-3 py-4"
                                            rows={'5'}
                                            name=""
                                            value={content}
                                            disabled
                                            id=""
                                            placeholder="Nhập ý kiến của bạn"></textarea>
                                    </div>

                                    <div className=" ">
                                        <h1 className="mb-3 text-lable-2 font-lable-2 font-plusjakartasans text-secondary-gray">
                                            Tiếp tục ở lại web
                                        </h1>
                                        <div className=" flex justify-between w-2/5 items-start">
                                            <InputSection
                                                name="choicse"
                                                className={'w-full'}
                                                id="1"
                                                Checked={isloveweb === 1 && true}
                                                value={1}
                                                size={' w-5 h-5'}
                                                type="radio"
                                                label="Có"
                                            />
                                            <InputSection
                                                name="choicse"
                                                className={'w-full'}
                                                id="1"
                                                Checked={isloveweb === 0 && true}
                                                value={1}
                                                size={' w-5 h-5'}
                                                type="radio"
                                                label="Không"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  px-4 border-secondary-gray  py-4 border-t">
                                <Button
                                    color={'primary'}
                                    onClick={HandleChilSendIsPopup}
                                    icon={true}
                                    right={true}
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
