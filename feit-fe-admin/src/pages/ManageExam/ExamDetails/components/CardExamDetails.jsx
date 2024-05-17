import {
    IconGraduationCap,
    IconBookOpenText,
    IconBook,
    IconTextAUnderline,
    IconArrowUpRight,
    IconPlusCircle,
    IconDelete,
    IconPencilSimple,
    IconExport,
    IconArrowUp,
    IconArrowUpLeft,
    IconGear,
    IconClose,
} from '../../../../svgs';
import { useState } from 'react';
import { Button, InputSection, InputField } from '../../../../components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { NavLink } from 'react-router-dom';

export const CardView = ({
    sendidlesson,
    sendidunit,
    children,
    nameCourse = 'Công nghệ thông tin',
    nameLesson = 'IT',
    nameUnit = 'Unit 5',
    quantity = '10',
    datalesson,
    dataunit,
    unit_id,
}) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleSendIdLesson = (id) => {
        sendidlesson(id);
    };

    const handleSendIdUnit = (id) => {
        sendidunit(id);
    };
    const [showFilterCourse, setShowFilterCourse] = useState(false);
    const [showFilterLesson, setShowFilterLesson] = useState(false);
    const [showFilterUnit, setShowFilterUnit] = useState(false);

    const [showCheckbox, setShowCheckbox] = useState(false);
    const handleShowCheckbox = () => {
        setShowCheckbox(!showCheckbox);
    };

    const handleShowFilterCourse = () => {
        setShowFilterCourse(!showFilterCourse);
    };
    const handleShowFilterUnit = () => {
        setShowFilterUnit(!showFilterUnit);
    };
    const handleShowFilterLesson = () => {
        setShowFilterLesson(!showFilterLesson);
    };
    const dataCourse = [
        {
            name: 'Công nghệ thông tin',
        },
        {
            name: 'Marketing',
        },
    ];
    return (
        <div className=" border-[4px] border-primary-black shadow-card-home bg-primary-grey px-10 py-8">
            <div className="">
                <div className="flex mb-4 justify-between items-center border-b border-primary-black pb-3">
                    <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                        Câu hỏi bài kiểm tra
                    </h1>
                    <div className=" w-2/5 border-l border-primary-black pl-6">
                        <div className=" flex justify-between items-center ">
                            <h1 className=" text-body-3 font-body-3 font-plusjakartasans text-primary-black">
                                2 Khóa học
                            </h1>
                            <Stack spacing={2}>
                                <Pagination
                                    count={1}
                                    siblingCount={0}
                                    page={page}
                                    onChange={handleChange}
                                    variant="outlined"
                                    shape="rounded"
                                    renderItem={(item) => (
                                        <PaginationItem
                                            component={NavLink}
                                            to={`/course${item.page === 1 ? '' : `?page=${item.page}`}`}
                                            {...item}
                                        />
                                    )}
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
                <div className="">
                    <NavLink to="">
                        <Button icon={true} onClick={handleShowCheckbox} right={true} title="">
                            <IconArrowUpLeft w="38" h="38" color="#3C79FE" />
                        </Button>
                    </NavLink>
                </div>
                <div className=" flex justify-between">
                    <div className=" w-3/4">
                        <div className=" bg-white border border-primary-black">
                            <div className=" flex gap-3 justify-between px-5 py-4 ">
                                <div className=" w-3/5">
                                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">
                                        {nameCourse}
                                    </h1>
                                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                                        Chủ đề: {nameLesson}
                                    </h1>
                                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                                        Chương: {nameUnit}
                                    </h1>
                                </div>

                                <div className=" ">
                                    <Button icon={true} onClick={handleShowCheckbox} left={true} title="">
                                        <IconPencilSimple w="28" h="28" color="#3C79FE" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {children}
                    </div>
                    <div className="">
                        <InputField className=" mb-5 rounded-none w-full" placeholder={'Từ khóa'} />
                        <h1 className=" w-full mb-5 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                            Bộ lọc
                        </h1>
                        <Button
                            title="Khóa học"
                            className=" mb-2 border-[2px] border-primary-black rounded-none w-full justify-between"
                            icon={true}
                            onClick={handleShowFilterCourse}
                            right={true}>
                            <IconArrowUp />
                        </Button>
                        {showFilterCourse && (
                            <>
                                {dataCourse.map((v) => {
                                    return (
                                        <div
                                            key={v.name}
                                            className=" border-l border-primary-black text-button-1 font-button-1 font-plusjakartasans text-secondary-gray px-4 py-2 bg-primary-grey">
                                            {v.name}
                                        </div>
                                    );
                                })}
                            </>
                        )}
                        <Button
                            title="Chủ đề"
                            className=" mb-2 border-[2px] border-primary-black rounded-none w-full justify-between"
                            icon={true}
                            onClick={handleShowFilterLesson}
                            right={true}>
                            <IconArrowUp />
                        </Button>
                        {showFilterLesson && (
                            <>
                                {datalesson.map((v) => {
                                    return (
                                        <Button
                                            onClick={() => handleSendIdLesson(v._id)}
                                            key={v.name}
                                            title={v.name}
                                            className="block rounded-none border-l border-primary-black text-button-1 font-button-1 font-plusjakartasans text-secondary-gray px-4 py-2 bg-primary-grey"></Button>
                                    );
                                })}
                            </>
                        )}
                        <Button
                            title="Chương"
                            className=" mb-2 border-[2px] border-primary-black rounded-none w-full justify-between"
                            icon={true}
                            onClick={handleShowFilterUnit}
                            right={true}>
                            <IconArrowUp />
                        </Button>
                        {showFilterUnit && (
                            <>
                                {dataunit.map((v) => {
                                    return (
                                        <Button
                                            onClick={() => handleSendIdUnit(v._id)}
                                            key={v.name}
                                            title={v.name}
                                            className="block rounded-none border-l border-primary-black text-button-1 font-button-1 font-plusjakartasans text-secondary-gray px-4 py-2 bg-primary-grey"></Button>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TableData = ({
    date = '1',
    feeling = '1',
    content = '1',
    is_love_web = '1',
    name = 'Hoang',
    position = 'IT',
}) => {
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
                                    {/* <div className=" ">
                                        <h1 className=" mb-1 text-heading-4 font-heading-4 font-plusjakartasans text-primary-black">
                                            Phản hồi của người dùng
                                        </h1>
                                    </div> */}
                                    <div className=" mb-10 flex justify-between items-center pb-2 border-b border-primary-black">
                                        <div className="">
                                            <h1 className=" mb-1 text-left text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                                Chủ đề
                                            </h1>
                                            <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                                Chủ đề
                                            </h1>
                                        </div>
                                        <div className="">
                                            <h1 className=" mb-1 text-left text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                                Chương
                                            </h1>
                                            <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                                Chương
                                            </h1>
                                        </div>
                                        <div className="">
                                            <h1 className=" mb-1 text-left text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                                Loại câu hỏi
                                            </h1>
                                            <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                                Loại câu hỏi
                                            </h1>
                                        </div>
                                    </div>

                                    <div className=" mb-5">
                                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                            Tiêu đề câu hỏi
                                        </h1>
                                        <h1 className="mb-3 text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                                            Nghĩa của từ Syntax là gì?
                                        </h1>
                                    </div>
                                    <div className="">
                                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                            Đáp án trả lời
                                        </h1>
                                        <h1 className="mb-3 text-heading-6 font-heading-6 font-plusjakartasans text-semantic-success">
                                            Đúng
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-10  px-4 border-secondary-gray  py-4 border-t">
                                <Button
                                    color={'primary'}
                                    onClick={HandleChilSendIsPopup}
                                    icon={true}
                                    right={true}
                                    title="Xóa"
                                    className="w-full py-4">
                                    <IconDelete size="24" />
                                </Button>
                                <Button
                                    color={'primary'}
                                    onClick={HandleChilSendIsPopup}
                                    icon={true}
                                    right={true}
                                    title="Tùy chỉnh"
                                    className="w-full py-4">
                                    <IconGear size={'24'} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
