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
} from '../../../../svgs';
import { useState } from 'react';
import { Button, InputSection, InputField } from '../../../../components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { NavLink } from 'react-router-dom';

export const CardCrud = ({ onClickAddFile }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleDeteleFile = () => {
        setFile(null);
    };

    const handleAddFile = () => {
        onClickAddFile(file);
    };
    return (
        <div className=" flex justify-between">
            <h1 className=" text-heading-4 font-heading-4 font-plusjakartasans text-primary-black">Chủ đề</h1>
            <div className=" flex justify-center items-center gap-1">
                {file != null ? (
                    <>
                        <Button
                            icon={true}
                            right={true}
                            onClick={handleAddFile}
                            title="Thêm bằng file"
                            color={'primary'}>
                            <IconPlusCircle size="20" color="#3C79FE" />
                        </Button>
                        <Button icon={true} right={true} title="Xóa file" onClick={handleDeteleFile} color={'primary'}>
                            <IconDelete size="20" color="#3C79FE" />
                        </Button>
                    </>
                ) : (
                    <h1>Chọn File Excel : </h1>
                )}
                <input type="file" onChange={handleFileChange} />
                <Button icon={true} right={true} title="Xuất file mẫu" color={'primary'}>
                    <IconExport size="24" color="#3C79FE" />
                </Button>
            </div>
        </div>
    );
};

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
                        Quản lý chương
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
                <div className=" flex justify-between">
                    <div className=" w-3/4">
                        <div className=" bg-white border border-primary-black">
                            <div className=" flex gap-3 justify-between px-5 py-4 ">
                                <div className=" w-3/5">
                                    {showCheckbox && (
                                        <div>
                                            <InputSection label="Chọn" className={'gap-2'} />
                                        </div>
                                    )}
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
                                    <Button icon={true} onClick={handleShowCheckbox} right={true} title="Xóa nhiều">
                                        <IconDelete w="28" h="28" color="#3C79FE" />
                                    </Button>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                    <div className="">
                        <InputField className=" mb-5 rounded-none w-full" placeholder={'Từ khóa'} />
                        <h1 className=" mb-5 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
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

export const CardItem = ({
    onClickDelete,
    word = 'Function',
    mean = 'Chức năng',
    partofspeech = 'Noun(danh từ)',
    pronunciation,
    example_vie,
    example_eng,
    explain_vie,
    explain_eng,
    field_of_it,
    link_url,
    id,
    handleChange,
    unit_id,
    handleUpdate,
    onClose,
}) => {
    const [showPopUp, setShowPopUp] = useState(false);

    const handleDelete = () => {
        onClickDelete(id);
    };
    function OnClickClose() {
        setShowPopUp(!showPopUp);
    }
    return (
        <div className=" bg-white border-t border-dashed border-secondary-gray px-12 py-6">
            <div className="">
                <div className=" flex justify-between items-center">
                    <div className=" flex justify-start items-center gap-7 w-4/5">
                        <InputSection id="1" label="" />
                        <div className="flex justify-between items-center w-full">
                            <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">{word}</h1>
                            <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                                {mean}
                            </h1>
                            <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                                {partofspeech}
                            </h1>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-3">
                        <Button onClick={OnClickClose} icon={true} left={true} title="">
                            <IconPencilSimple w="28" h="28" color="#3C79FE" />
                        </Button>
                        <Button onClick={handleDelete} icon={true} left={true} title="">
                            <IconDelete size="28" color="#3C79FE" />
                        </Button>
                    </div>
                </div>
            </div>
            {showPopUp && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                                <div class="relative p-4 w-full max-w-md max-h-full">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                Create New Unit
                                            </h3>
                                            <button
                                                type="button"
                                                onClick={OnClickClose}
                                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-toggle="crud-modal">
                                                <svg
                                                    class="w-3 h-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 14">
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                    />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <form onSubmit={() => handleUpdate(id)} className=" flex  flex-col">
                                            <input
                                                type="text"
                                                name="word"
                                                value={word}
                                                onChange={handleChange}
                                                placeholder="Word"
                                            />
                                            <input
                                                type="text"
                                                name="part_of_speech"
                                                value={partofspeech}
                                                onChange={handleChange}
                                                placeholder="Part of Speech"
                                            />
                                            <input
                                                type="text"
                                                name="pronunciation"
                                                value={pronunciation}
                                                onChange={handleChange}
                                                placeholder="Pronunciation"
                                            />
                                            <input
                                                type="text"
                                                name="mean"
                                                value={mean}
                                                onChange={handleChange}
                                                placeholder="Mean"
                                            />
                                            <input
                                                type="text"
                                                name="example_vie"
                                                value={example_vie}
                                                onChange={handleChange}
                                                placeholder="Example (Vietnamese)"
                                            />
                                            <input
                                                type="text"
                                                name="example_eng"
                                                value={example_eng}
                                                onChange={handleChange}
                                                placeholder="Example (English)"
                                            />
                                            <input
                                                type="text"
                                                name="explain_vie"
                                                value={explain_vie}
                                                onChange={handleChange}
                                                placeholder="Explanation (Vietnamese)"
                                            />
                                            <input
                                                type="text"
                                                name="explain_eng"
                                                value={explain_eng}
                                                onChange={handleChange}
                                                placeholder="Explanation (English)"
                                            />
                                            <input
                                                type="text"
                                                name="field_of_it"
                                                value={field_of_it}
                                                onChange={handleChange}
                                                placeholder="Field of IT"
                                            />
                                            <input
                                                type="text"
                                                name="link_url"
                                                value={link_url}
                                                onChange={handleChange}
                                                placeholder="Link URL"
                                            />
                                            <input
                                                type="text"
                                                name="unit_id"
                                                value={unit_id}
                                                onChange={handleChange}
                                                placeholder="Unit ID"
                                            />
                                            <input type="file" multiple onChange={(e) => setFile(e.target.files[0])} />
                                            <button type="submit">Create</button>
                                        </form>
                                        ;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
