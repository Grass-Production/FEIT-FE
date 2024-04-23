import {
    IconGraduationCap,
    IconBookOpenText,
    IconBook,
    IconTextAUnderline,
    IconArrowUpRight,
    IconPlusCircle,
    IconDelete,
    IconPencilSimple,
} from '../../../svgs';
import { useState } from 'react';
import { Button, InputSection } from '../../../components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { NavLink } from 'react-router-dom';

export const CardStatistic = ({
    quantityCourse = '2',
    quantityLesson = '10',
    quantityUnit = '300',
    quantityVocabulary = '3000',
}) => {
    return (
        <div className=" shadow-card-home px-10 py-7 border-[4px] border-primary-black bg-foundation-yellow-400">
            <div className=" border-b border-primary-black pb-2 mb-4">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Thống kê tổng quát
                </h1>
            </div>
            <div className="flex w-full justify-between">
                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconGraduationCap />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityCourse}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Khóa học
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>

                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
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
                    </div>
                </div>

                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconBook color="#858585" size="40" />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityUnit}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Chương
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>

                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconTextAUnderline />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityVocabulary}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Từ vựng
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardCrud = () => {
    return (
        <div className=" flex justify-between">
            <h1 className=" text-heading-4 font-heading-4 font-plusjakartasans text-primary-black">Khóa học</h1>
            <div className=" flex justify-center items-center gap-1">
                <Button icon={true} right={true} title="Thêm" color={'primary'}>
                    <IconPlusCircle size="20" color="#3C79FE" />
                </Button>
                <Button icon={true} right={true} title="Xóa" color={'primary'}>
                    <IconDelete size="24" color="#3C79FE" />
                </Button>
            </div>
        </div>
    );
};

export const CardView = ({ children }) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
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
                {children}
            </div>
        </div>
    );
};

export const CardItem = ({ name = 'Công nghệ thông tin', quantity = '10' }) => {
    return (
        <div className=" bg-white">
            <div className=" flex gap-3 justify-between px-5 py-4 border border-primary-black">
                <div className=" w-3/4">
                    <div>
                        <InputSection label="Chọn" className={'gap-2'} />
                    </div>
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">{name}</h1>
                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-tetiary-tertiary">
                        Chủ đề: {quantity}
                    </h1>
                </div>
                <div className=" flex gap-3">
                    <IconPencilSimple w="28" h="28" />
                    <IconDelete />
                </div>
            </div>
            <div className=" border-x border-primary-black border-b">
                <div
                    className=" mx-auto w-[25rem] h-[25rem]"
                    style={{
                        background: `url(${'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464144/feit-static/GameDev.png.png'}) center/contain no-repeat`,
                    }}></div>
            </div>
        </div>
    );
};
