import { InputField, LoadingProgressBar } from '../../../../components';
import {
    IconImagesSquare,
    IconCheckCircle,
    IconPlayCircle,
    IconCloudArrowUp,
    IconDesktopTower,
} from '../../../../svgs';
import { useState, useEffect } from 'react';
import { Button } from '../../../../components';
import { createLessonFileLoading } from '../../../../services/lessonAPI';
import { createCourseFileLoading } from '../../../../services/courseAPI';
import axios from 'axios';
import { updateLesson, getLessonById, createLesson, createLessonFiles } from '../../../../services/lessonAPI';

import { ToastSuccess, ToastError } from '../../../../components/Toast';
import { NavLink } from 'react-router-dom';

const FormCreateFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isCheckInputFile, setIsCheckInputFile] = useState(false);
    const [progress, setProgess] = useState(0);
    const [ishowToas, setIsShowToas] = useState(0);
    const handleSetSetProgess = (value) => {
        setProgess(value);
    };

    const handleCreateLessonFile = async () => {
        try {
            const res = await createCourseFileLoading(selectedFile, handleSetSetProgess);

            setIsShowToas(1);
            setTimeout(() => setIsShowToas(0), 2000);

            // if (res.status === 200) {
            //     alert('Thêm Dữ liệu bằng file thành công');
            // } else if (res.message === 'validate: Token is expired') {
            //     alert('Vui lòng đăng nhập');
            // }
            console.log('res create flie : ', res);
        } catch (error) {
            console.log(error);
            setIsShowToas(2);
            setTimeout(() => setIsShowToas(0), 2000);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log('file', file);
        // console.log('file name', file.name);
        if (file !== undefined) {
            setIsCheckInputFile(true);
        } else {
            setIsCheckInputFile(false);
            setProgess(0);
        }
    };

    return (
        <>
            {ishowToas === 1 && <ToastSuccess message="Thêm dữ liệu thằng file thành công" />}
            {ishowToas === 2 && <ToastError message="Thêm dữ liệu thằng file thất bại" />}
            <div className=" p-3 border border-primary-black bg-primary-grey mb-5">
                <div className=" mb-5 border flex justify-center items-center h-64 bg-white border-dashed border-primary-black">
                    <div className="">
                        <div className=" flex justify-center">
                            <IconImagesSquare />
                        </div>
                        <h1>Tệp tin của bạn</h1>
                    </div>
                </div>
                <div className=" border bg-white p-4  border-dashed border-primary-black mb-5">
                    <h1 className=" text-body-3 font-body-3 font-plusjakartasans text-primary-black mb-3">
                        Trạng thái
                    </h1>
                    {isCheckInputFile ? (
                        <div className=" bg-primary-grey border border-primary-black px-4 py-2 ">
                            <div className=" flex justify-between  items-center  ">
                                <div className=" w-3/5">
                                    <div className=" flex justify-between items-center">
                                        <h1 className=" text-label-3 font-label-3 font-plusjakartasans text-tetiary-tertiary">
                                            {selectedFile && selectedFile.name}
                                        </h1>
                                        <IconCheckCircle
                                            className="  stroke-semantic-success"
                                            size="12"
                                            color="#11D0B9"
                                        />
                                    </div>
                                    <LoadingProgressBar className={' rounded-none'} percent={progress} />
                                </div>
                                <div className=" flex justify-between items-center">
                                    <div className="">
                                        <h1 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black">
                                            Đã hoàn thành
                                        </h1>
                                        <h2 className=" text-label-3 font-label-3 font-plusjakartasans text-secondary-gray">
                                            Còn {progress}%
                                        </h2>
                                    </div>
                                </div>
                                <IconPlayCircle />
                            </div>
                        </div>
                    ) : (
                        <div className=" bg-primary-grey   ">
                            <div className=" ">
                                <InputField
                                    className=" rounded-none border-none w-full"
                                    status={false}
                                    value={'Trống'}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className=" flex justify-between items-center gap-7 ">
                    <label
                        for="uploadFile"
                        className="font-plusjakartasans cursor-pointer py-2 px-4  flex justify-center items-center gap-[6px] w-full bg-white text-button-1 font-button-1 border border-primary-blue-500 text-primary-blue-500  hover:bg-[#3C79FE] hover:text-white hover:fill-white active:text-white active:bg-[#0A50E7]">
                        <IconCloudArrowUp />
                        Từ máy tính của bạn
                        <input onChange={handleFileChange} type="file" id="uploadFile" class="hidden" />
                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center gap-7 border-t border-primary-black pt-5">
                <NavLink to="/manage/learn/course" className={' w-full'}>
                    <Button
                        className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                        title="Hủy"
                        icon={true}
                        right={true}
                        color={'primary'}>
                        <IconCloudArrowUp />
                    </Button>
                </NavLink>
                <Button
                    onClick={handleCreateLessonFile}
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Lưu"
                    icon={true}
                    right={true}
                    color={'primary'}>
                    <IconDesktopTower />
                </Button>
            </div>
        </>
    );
};

export const CardCreateOne = ({ name = 'Programing', namefile = 'congnghe.png' }) => {
    const [isActive, setIsActive] = useState('createone');

    const handleSetIsActive = (active) => {
        setIsActive(active);
    };

    return (
        <div className=" border bg-white border-primary-black p-8">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">Thông tin</h1>
            <div className="flex justify-between mb-4">
                <Button
                    className={` w-full rounded-none text-white !bg-[#0A50E7]  `}
                    title="Thêm bằng file"
                    onClick={() => handleSetIsActive('createfile')}
                    color={'primary'}></Button>
            </div>

            <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-1">Tập tin</h3>
            <FormCreateFile />
        </div>
    );
};
