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
    console.log(file);
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

export const CardView = ({ children, name = 'Công nghệ thông tin', quantity = '10' }) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [showFilter, setShowFilter] = useState(false);

    const [showCheckbox, setShowCheckbox] = useState(false);
    const handleShowCheckbox = () => {
        setShowCheckbox(!showCheckbox);
    };

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
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
                        Quản lý tất cả khóa học
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
                                        {name}
                                    </h1>
                                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                                        Chủ đề: {quantity}
                                    </h1>
                                </div>
                                <div className=" flex gap-3">
                                    <Button icon={true} right={true} title="Thêm">
                                        <IconPlusCircle w="28" h="28" color="#3C79FE" />
                                    </Button>
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
                            onClick={handleShowFilter}
                            right={true}>
                            <IconArrowUp />
                        </Button>
                        {showFilter && (
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardItem = ({
    onClickDelete,
    name = 'Lập trình',
    quantityUnit = '10',
    quantityVocabulary = '51',
    createAt = '1',
    id,
    idCourse,
}) => {
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
                                {quantityUnit} Chương
                            </h1>
                            <h1 className=" text-body-2 font-body-2 font-plusjakartasans text-secondary-gray">
                                {quantityVocabulary} Chương
                            </h1>
                            <h1 className=" text-body-2 font-body-2 font-plusjakartasans text-secondary-gray">
                                Ngày thêm : {createAt}
                            </h1>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-3">
                        <NavLink to={`/managelearn/lessondetails/${id}`}>
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
