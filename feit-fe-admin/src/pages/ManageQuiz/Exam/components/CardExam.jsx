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
    IconClose,
} from '../../../../svgs';
import { useEffect, useState } from 'react';
import { Button, InputSection, InputField } from '../../../../components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';

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
    const [page, setPage] = useState(3);

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
                        Quản lý bài kiểm tra
                    </h1>
                    <div className=" w-2/5 border-l border-primary-black pl-6">
                        <div className=" flex justify-between items-center ">
                            <h1 className=" text-body-3 font-body-3 font-plusjakartasans text-primary-black">
                                2 bài kiểm tra
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
                                <div className=" flex h-1/2 gap-3">
                                    <NavLink to="/manage/quiz/create">
                                        <Button icon={true} color={'primary'} right={true} title="Thêm bài kiểm tra">
                                            <IconPlusCircle w="28" h="28" color="#3C79FE" />
                                        </Button>
                                    </NavLink>
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
                                {dataCourse !== null && (
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
                                {datalesson !== null && (
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
                                {dataunit !== null && (
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
    idExam,
    position = 'IT',
    title,
    lessonName,
    unitName,
}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/manage/quiz/quizdetail/${idExam}`);
    };

    const [isShowPopup, setIsShowPopup] = useState(false);
    const handleShowPopup = () => {
        setIsShowPopup(!isShowPopup);
    };

    const handleReceiveIsShowPopup = (value) => {
        setIsShowPopup(value);
    };
    return (
        <>
            <tr onClick={handleNavigate} className=" justify-between bg-white items-center cursor-pointer">
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-start py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    <strong className=" text-primary-blue-400">{title}</strong>
                    {/* {title} */}
                </td>
                {/* <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {lessonName}
                </td>
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {unitName}
                </td> */}
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
                                    Chi tiết câu hỏi
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
