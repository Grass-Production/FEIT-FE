import { IconDelete, IconPencilSimple, IconArrowUpLeft, IconGear, IconClose } from '../../../../svgs';
import { useState } from 'react';
import { Button, InputSection, InputField } from '../../../../components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { NavLink } from 'react-router-dom';
import { updateExam } from '../../../../services/examAPI';
export const CardView = ({
    children,
    nameExam = 'Công nghệ thông tin',
    nameLesson = 'IT',
    nameUnit = 'Unit 5',
    id,
}) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const [isShowPopup, setIsShowPopup] = useState(false);

    const [showCheckbox, setShowCheckbox] = useState(false);
    const handleShowCheckbox = () => {
        setShowCheckbox(!showCheckbox);
    };
    const handleShowPopup = () => {
        setIsShowPopup(!isShowPopup);
    };

    const handleReceiveIsShowPopup = (value) => {
        setIsShowPopup(value);
    };

    return (
        <>
            {isShowPopup && (
                <PopupUpdateExam
                    title={nameExam}
                    id={id}
                    lesson={nameLesson}
                    unit={nameUnit}
                    handleSendIsPopup={handleReceiveIsShowPopup}
                />
            )}
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
                        <NavLink to="/manage/exam">
                            <Button icon={true} onClick={handleShowCheckbox} right={true} title="">
                                <IconArrowUpLeft w="38" h="38" color="#3C79FE" />
                            </Button>
                        </NavLink>
                    </div>
                    <div className=" flex justify-between">
                        <div className=" w-full">
                            <div className=" bg-white border border-primary-black">
                                <div className=" flex gap-3 justify-between px-5 py-4 ">
                                    <div className=" w-3/5">
                                        <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">
                                            {nameExam}
                                        </h1>
                                        <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                                            Chủ đề: {nameLesson}
                                        </h1>
                                        <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                                            Chương: {nameUnit}
                                        </h1>
                                    </div>

                                    <div className=" ">
                                        <Button icon={true} onClick={handleShowPopup} left={true} title="">
                                            <IconPencilSimple w="28" h="28" color="#3C79FE" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const TableData = ({ content, lesson, unit, type, result, idquestion, idexam }) => {
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
                    <strong className=" text-primary-blue-400">{content}</strong>
                </td>
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {type === 'blank' && 'Điền từ'}
                    {type === 'listen' && 'Nghe'}
                    {type === 'true/false' && 'Đúng/Sai'}
                    {type === 'choose' && 'Trắc nghiệm'}
                </td>
                <td className=" px-5 border-b-[2px] border-dashed border-secondary-gray  text-left py-2 text-body-1 font-body-1 text-primary-black font-plusjakartasans">
                    {result === '0' && 'Sai'}
                    {result === '1' && 'Đúng'}
                    {result !== '1' && result !== '0' && result}
                </td>
            </tr>
            {isShowPopup && (
                <PopupQuestion
                    lesson={lesson}
                    unit={unit}
                    idquestion={idquestion}
                    idexam={idexam}
                    content={content}
                    type={type}
                    result={result}
                    handleSendIsPopup={handleReceiveIsShowPopup}
                />
            )}
        </>
    );
};

export const PopupQuestion = ({ handleSendIsPopup, lesson, unit, type, content, result, idquestion, idexam }) => {
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
                                                {lesson}
                                            </h1>
                                        </div>
                                        <div className="">
                                            <h1 className=" mb-1 text-left text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                                Chương
                                            </h1>
                                            <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                                {unit}
                                            </h1>
                                        </div>
                                        <div className="">
                                            <h1 className=" mb-1 text-left text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                                Loại câu hỏi
                                            </h1>
                                            <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                                {type}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className=" mb-5">
                                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                            Tiêu đề câu hỏi
                                        </h1>
                                        <h1 className="mb-3 text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                                            {content}
                                        </h1>
                                    </div>
                                    <div className="">
                                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                            Đáp án trả lời
                                        </h1>
                                        <h1 className="mb-3 text-heading-6 font-heading-6 font-plusjakartasans text-semantic-success">
                                            {result === '0' && 'Sai'}
                                            {result === '1' && 'Đúng'}
                                            {result !== '1' && result !== '0' && result}
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
                                <NavLink
                                    className={' w-full'}
                                    to={`/manage/exam/${idexam}/question/${idquestion}/setting`}>
                                    <Button
                                        color={'primary'}
                                        onClick={HandleChilSendIsPopup}
                                        icon={true}
                                        right={true}
                                        title="Tùy chỉnh"
                                        className="w-full py-4">
                                        <IconGear size={'24'} />
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PopupUpdateExam = ({ handleSendIsPopup, unit, lesson, title, id }) => {
    const [inputNameExam, setInputNameExam] = useState(title);

    const handleOnChangeInput = (event) => {
        setInputNameExam(event.target.value);
    };
    const HandleChilSendIsPopup = (event) => {
        event.stopPropagation();
        handleSendIsPopup(false);
    };

    const UpdateExam = async () => {
        const res = updateExam({ _id: id, title: inputNameExam });
        console.log(res);
    };

    return (
        <div className="">
            <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-65 transition-opacity w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="  z-20  relative w-[60vw]  h-[95vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" px-8 py-4 flex justify-between items-center border-b border-secondary-gray">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Bài kiểm tra
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
                                                {lesson}
                                            </h1>
                                        </div>
                                        <div className="">
                                            <h1 className=" mb-1 text-left text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                                Chương
                                            </h1>
                                            <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                                {unit}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className=" mb-5">
                                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                            Tiêu đề bài kiểm tra
                                        </h1>
                                        {/* <h1 className="mb-3 text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                                            {title}
                                        </h1> */}
                                        <InputField
                                            className=" w-full"
                                            value={inputNameExam}
                                            onChange={handleOnChangeInput}
                                            placeholder={'Nhập tiêu đề bài kiểm tra'}
                                        />
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
                                    color={inputNameExam !== title && 'primary'}
                                    onClick={UpdateExam}
                                    icon={true}
                                    right={true}
                                    disabled={inputNameExam === title && true}
                                    title="Lưu"
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
