import { InputField, LoadingProgressBar } from '../../../../components';
import {
    IconImagesSquare,
    IconCheckCircle,
    IconPlayCircle,
    IconCloudArrowUp,
    IconDesktopTower,
    IconVideoCamera,
} from '../../../../svgs';
import { useState } from 'react';
import { Button } from '../../../../components';
import { createLessonFileLoading } from '../../../../services/lessonAPI';
import axios from 'axios';

export const CardUpdate = ({ name = 'Programing', namefile = 'congnghe.png' }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isCheckInputFile, setIsCheckInputFile] = useState(false);
    const [inputChange, setInputChange] = useState('Programing');
    const [file, setFile] = useState(null);
    const [progress, setProgess] = useState(0);
    const [formInput, setFormInput] = useState({
        word: '',
        part_of_speech: '',
        pronunciation: '',
        mean: '',
        example_vie: '',
        example_eng: '',
        explain_vie: '',
        explain_eng: '',
        field_of_it: '',
        link_url: '',
        unit_id: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSetSetProgess = (value) => {
        setProgess(value);
    };

    const handleCreateLessonFile = async () => {
        const res = await createLessonFileLoading(selectedFile, handleSetSetProgess);
        if (res.status === 200) {
            alert('Thêm Dữ liệu bằng file thành công');
            setRender((n) => n + 1);
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        console.log(res);
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
        }
    };

    return (
        <div className=" border bg-white border-primary-black p-8">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">Thông tin</h1>
            <div className=" flex justify-between gap-4">
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Từ vựng</h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Từ vựng'}
                        name={'word'}
                        className=" rounded-none w-full py-2 mb-4"
                        value={formInput.word}
                    />
                </div>
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                        Nghĩa tiếng Việt
                    </h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Nghĩa tiếng Việt'}
                        name={'mean'}
                        className=" rounded-none w-full py-2 mb-4"
                        value={formInput.mean}
                    />
                </div>
            </div>
            <div className=" flex justify-between gap-4">
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Loại từ</h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Loại từ'}
                        className=" rounded-none w-full py-2 mb-4"
                        name={'part_of_speech'}
                        value={formInput.part_of_speech}
                    />
                </div>
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                        Phiên âm
                    </h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Phiên âm'}
                        name={'pronunciation'}
                        className=" rounded-none w-full py-2 mb-4"
                        value={formInput.pronunciation}
                    />
                </div>
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Ý nghĩa</h3>
                <InputField
                    isrequired={true}
                    onChange={handleInputChange}
                    placeholder={'Ý nghĩa'}
                    type="text"
                    name={'explain_vie'}
                    className=" rounded-none w-full py-2 mb-4 peer"
                    value={formInput.explain_vie}
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                </span>
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                    Ý nghĩa Tiếng Anh
                </h3>
                <InputField
                    onChange={handleInputChange}
                    placeholder={'Ý nghĩa Tiếng Anh'}
                    className=" rounded-none w-full py-2 mb-4"
                    name={'explain_eng'}
                    value={formInput.explain_eng}
                />
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Câu ví dụ</h3>
                <InputField
                    onChange={handleInputChange}
                    placeholder={'Câu ví dụ'}
                    className=" rounded-none w-full py-2 mb-4"
                    name={'example_vie'}
                    value={formInput.example_vie}
                />
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                    Câu ví dụ Tiếng Anh
                </h3>
                <InputField
                    onChange={handleInputChange}
                    placeholder={'Câu ví dụ Tiếng Anh'}
                    className=" rounded-none w-full py-2 mb-4"
                    name={'example_eng'}
                    value={formInput.example_eng}
                />
            </div>
            <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-1">Tập tin</h3>
            <div className=" p-3 border border-primary-black bg-primary-grey mb-5">
                <div className=" border flex justify-center items-center h-64 bg-white border-dashed border-primary-black mb-5">
                    <div className="">
                        <div className=" flex justify-center items-center mb-3">
                            <IconImagesSquare />
                            <IconVideoCamera />
                        </div>
                        <h1>Tải hình ảnh hoặc video của bạn lên</h1>
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
                    <Button
                        className=" w-full rounded-none"
                        title="Từ cloud"
                        icon={true}
                        right={true}
                        color={'primary'}>
                        <IconCloudArrowUp />
                    </Button>
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
                <Button
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Hủy"
                    icon={true}
                    right={true}
                    color={'primary'}>
                    <IconCloudArrowUp />
                </Button>
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
        </div>
    );
};

const FormCreateOne = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isCheckInputFile, setIsCheckInputFile] = useState(false);
    const [inputChange, setInputChange] = useState('Programing');
    const [file, setFile] = useState(null);
    const [progress, setProgess] = useState(0);
    const [formInput, setFormInput] = useState({
        word: '',
        part_of_speech: '',
        pronunciation: '',
        mean: '',
        example_vie: '',
        example_eng: '',
        explain_vie: '',
        explain_eng: '',
        field_of_it: '',
        link_url: '',
        unit_id: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSetSetProgess = (value) => {
        setProgess(value);
    };

    const handleCreateLessonFile = async () => {
        const res = await createLessonFileLoading(selectedFile, handleSetSetProgess);
        if (res.status === 200) {
            alert('Thêm Dữ liệu bằng file thành công');
            setRender((n) => n + 1);
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        console.log(res);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log('file', file);
        if (file !== undefined) {
            setIsCheckInputFile(true);
        } else {
            setIsCheckInputFile(false);
        }
    };
    return (
        <div className=" ">
            <div className=" flex justify-between gap-4">
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Từ vựng</h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Từ vựng'}
                        name={'word'}
                        className=" rounded-none w-full py-2 mb-4"
                        value={formInput.word}
                    />
                </div>
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                        Nghĩa tiếng Việt
                    </h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Nghĩa tiếng Việt'}
                        name={'mean'}
                        className=" rounded-none w-full py-2 mb-4"
                        value={formInput.mean}
                    />
                </div>
            </div>
            <div className=" flex justify-between gap-4">
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Loại từ</h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Loại từ'}
                        className=" rounded-none w-full py-2 mb-4"
                        name={'part_of_speech'}
                        value={formInput.part_of_speech}
                    />
                </div>
                <div className=" w-full">
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                        Phiên âm
                    </h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Phiên âm'}
                        name={'pronunciation'}
                        className=" rounded-none w-full py-2 mb-4"
                        value={formInput.pronunciation}
                    />
                </div>
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Ý nghĩa</h3>
                <InputField
                    isrequired={true}
                    onChange={handleInputChange}
                    placeholder={'Ý nghĩa'}
                    type="text"
                    name={'explain_vie'}
                    className=" rounded-none w-full py-2 mb-4 peer"
                    value={formInput.explain_vie}
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                </span>
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                    Ý nghĩa Tiếng Anh
                </h3>
                <InputField
                    onChange={handleInputChange}
                    placeholder={'Ý nghĩa Tiếng Anh'}
                    className=" rounded-none w-full py-2 mb-4"
                    name={'explain_eng'}
                    value={formInput.explain_eng}
                />
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Câu ví dụ</h3>
                <InputField
                    onChange={handleInputChange}
                    placeholder={'Câu ví dụ'}
                    className=" rounded-none w-full py-2 mb-4"
                    name={'example_vie'}
                    value={formInput.example_vie}
                />
            </div>
            <div className=" w-full">
                <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                    Câu ví dụ Tiếng Anh
                </h3>
                <InputField
                    onChange={handleInputChange}
                    placeholder={'Câu ví dụ Tiếng Anh'}
                    className=" rounded-none w-full py-2 mb-4"
                    name={'example_eng'}
                    value={formInput.example_eng}
                />
            </div>
            <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-1">Tập tin</h3>
            <div className=" p-3 border border-primary-black bg-primary-grey mb-5">
                <div className=" border flex justify-center items-center h-64 bg-white border-dashed border-primary-black mb-5">
                    <div className="">
                        <div className=" flex justify-center items-center mb-3">
                            <IconImagesSquare />
                            <IconVideoCamera />
                        </div>
                        <h1>Tải hình ảnh hoặc video của bạn lên</h1>
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
                    <Button
                        className=" w-full rounded-none"
                        title="Từ cloud"
                        icon={true}
                        right={true}
                        color={'primary'}>
                        <IconCloudArrowUp />
                    </Button>
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
                <Button
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Hủy"
                    icon={true}
                    right={true}
                    color={'primary'}>
                    <IconCloudArrowUp />
                </Button>
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
        </div>
    );
};

const FormCreateFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isCheckInputFile, setIsCheckInputFile] = useState(false);
    const [progress, setProgess] = useState(0);

    const handleSetSetProgess = (value) => {
        setProgess(value);
    };

    const handleCreateLessonFile = async () => {
        const res = await createLessonFileLoading(selectedFile, handleSetSetProgess);
        if (res.status === 200) {
            alert('Thêm Dữ liệu bằng file thành công');
            setRender((n) => n + 1);
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        console.log(res);
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
        }
    };

    return (
        <>
            <div className=" p-3 border border-primary-black bg-primary-grey mb-5">
                <div className=" border flex justify-center items-center h-64 bg-white border-dashed border-primary-black mb-5">
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
                    <Button
                        className=" w-full rounded-none"
                        title="Từ cloud"
                        icon={true}
                        right={true}
                        color={'primary'}>
                        <IconCloudArrowUp />
                    </Button>
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
                <Button
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Hủy"
                    icon={true}
                    right={true}
                    color={'primary'}>
                    <IconCloudArrowUp />
                </Button>
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
                    className={` w-full rounded-none ${isActive === 'createone' && 'text-white !bg-[#0A50E7]'}  `}
                    title="Thủ công"
                    onClick={() => handleSetIsActive('createone')}
                    color={'primary'}></Button>
                <Button
                    className={` w-full rounded-none ${isActive === 'createfile' && 'text-white !bg-[#0A50E7]'}  `}
                    title="Thêm bằng file"
                    onClick={() => handleSetIsActive('createfile')}
                    color={'primary'}></Button>
            </div>
            {isActive === 'createone' ? <FormCreateOne /> : <FormCreateFile />}
        </div>
    );
};
