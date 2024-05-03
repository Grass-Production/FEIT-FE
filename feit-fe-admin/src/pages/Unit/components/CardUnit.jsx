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
} from '../../../svgs';
import { useState } from 'react';
import { Button, InputSection, InputField } from '../../../components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { NavLink } from 'react-router-dom';

export const CardCrud = () => {
    return (
        <div className=" flex justify-between">
            <h1 className=" text-heading-4 font-heading-4 font-plusjakartasans text-primary-black">Chủ đề</h1>
        </div>
    );
};

export const CardView = ({
    sendidlesson,
    children,
    nameCourse = 'Công nghệ thông tin',
    nameLesson = 'IT',
    quantity = '10',
    datalesson,
}) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleSendIdLesson = (id) => {
        sendidlesson(id);
    };
    const [showFilterCourse, setShowFilterCourse] = useState(false);
    const [showFilterLesson, setShowFilterLesson] = useState(false);
    const [checked, setChecked] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(false);
    const handleShowCheckbox = () => {
        setShowCheckbox(!showCheckbox);
        setChecked(!checked);
    };

    const handleShowFilterCourse = () => {
        setShowFilterCourse(!showFilterCourse);
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
                                            <InputSection Checked={checked} label="Chọn" className={'gap-2'} />
                                        </div>
                                    )}
                                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">
                                        {nameCourse}
                                    </h1>
                                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                                        Chủ đề: {nameLesson}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardItem = ({ onClickDelete, name = 'Lập trình', quantityVocabulary = '51', id }) => {
    const handleDelete = () => {
        onClickDelete(id);
    };
    return (
        <div className=" bg-white border-t border-dashed border-secondary-gray px-12 py-6">
            <div className="">
                <InputSection id={id} label="Chọn" />
                <div className=" flex justify-between items-center">
                    <div className=" flex justify-start items-center gap-7">
                        <div className=" max-w-24">
                            <img
                                src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464143/feit-static/DevOps.png.png"
                                alt=""
                                className=" w-full"
                            />
                        </div>
                        <div className="">
                            <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                                {name}
                            </h1>
                            <h1 className=" text-body-2 font-body-2 font-plusjakartasans text-secondary-gray">
                                {quantityVocabulary} từ vựng
                            </h1>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-3">
                        <NavLink to={`/managelearn/unitdetails/${id}`}>
                            <IconPencilSimple w="28" h="28" color="#3C79FE" />
                        </NavLink>
                        <Button onClick={handleDelete} icon={true} left={true} title="">
                            <IconDelete size="28" color="#3C79FE" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
