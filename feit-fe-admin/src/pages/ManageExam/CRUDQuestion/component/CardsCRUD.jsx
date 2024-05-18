import { InputField, LoadingProgressBar, FormSelectOption, InputSection } from '../../../../components';
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
import axios from 'axios';
import {
    updateLesson,
    getLessonById,
    createLesson,
    createLessonFiles,
    getLessons,
} from '../../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../../services/unitAPI';
import { getVocabularyByUinit } from '../../../../services/vocabulary';
import {
    createExam,
    getAllExam,
    createQuestionExam,
    getAllQuestionExamByIdExam,
    createOptionExam,
    getManyExamByIdUnit,
    getExamByIdExam,
} from '../../../../services/examAPI';
import { getQuestionByIdQuestion } from '../../../../services/examAPI';
import { getVocabularyById } from '../../../../services/vocabulary';
import { Fragment } from 'react';
export const CardUpdate = ({ name = 'Programing', namefile = 'congnghe.png', id }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isCheckInputFile, setIsCheckInputFile] = useState(false);
    const [inputChange, setInputChange] = useState('Programing');
    const [file, setFile] = useState(null);
    const [progress, setProgess] = useState(0);

    const [lesson, setLesson] = useState([]);

    useEffect(() => {
        async function GetLessonById() {
            const res = await getLessonById(id);
            console.log('lesson : ', res);
            setLesson(res.lesson);
            setInputChange(res.lesson.name);
        }
        GetLessonById();
    }, []);

    const handleUpdate = async () => {
        const res = await updateLesson(
            {
                _id: id,
                course_id: '6631ff4e2f95034732cdbfaa',
                name: inputChange,
                content: 'Introduces fundamental concepts in computer networking.',
                level: 6,
                image_url: selectedFile,
            },
            handleSetSetProgess,
        );
        console.log('resupdate: ', res);
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

    const testLoading = async () => {
        const formData = new FormData(); // Tạo đối tượng FormData
        formData.append('files', selectedFile);
        const res = await axios.post('http://localhost:8080/api/admin/lesson/create/file', formData, {
            withCredentials: true,
            onUploadProgress: (progressEvent) => {
                const percentComplete = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgess(percentComplete);
            },
        });
        if (res.status === 200) {
            alert('Thêm Dữ liệu bằng file thành công');
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        return res;
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

    const handleInputChange = (event) => {
        const input = event.target.value;
        setInputChange(input);
    };

    return (
        <div className=" border bg-white border-primary-black p-8">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">Thông tin</h1>
            <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">Tên khóa học</h3>
            <InputField
                onChange={handleInputChange}
                placeholder={'Tên của chủ đề'}
                className=" rounded-none w-full mb-4"
                value={inputChange}
            />
            <h1>{inputChange}</h1>
            <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-1">Tập tin</h3>
            <div className=" p-3 border border-primary-black bg-primary-grey mb-5">
                <div className=" border flex justify-center items-center h-64 bg-white border-dashed border-primary-black">
                    <div className="">
                        <div className=" flex justify-center">
                            <IconImagesSquare />
                        </div>
                        <h1>Tải hình ảnh của bạn lên</h1>
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
                    {/* <Button
                        className=" w-full rounded-none"
                        title="Từ máy tính của bạn"
                        icon={true}
                        right={true}
                        color={'primary'}>
                        <IconDesktopTower />
                    </Button> */}
                    {/* <input type="file" /> */}
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
                    onClick={handleUpdate}
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

export const FormCreateExam = ({ name = 'Programing', namefile = 'congnghe.png', id }) => {
    const [lessons, setLessons] = useState([]);
    const [units, setUnits] = useState([]);
    const [idLesson, setIdLesson] = useState('');
    const [idUnit, setIdUnit] = useState('');
    const [nameExam, setNameExam] = useState('');
    const [descrExam, setDescrExam] = useState('');

    useEffect(() => {
        const GetLessons = async () => {
            try {
                const res = await getLessons();
                setLessons(res.data);
            } catch (error) {
                console.log('message', error);
            }
        };

        const GetUnit = async () => {
            try {
                if (idLesson !== '') {
                    const res = await getUnitByIdLesson(idLesson);
                    if (res !== null) {
                        setUnits(res.unit);
                    }
                }
            } catch (error) {
                console.log('message : ', error);
            }
        };
        getVocabularyByUinit;
        GetLessons();
        GetUnit();
    }, [idLesson]);

    const CreateExam = async () => {
        try {
            const res = await createExam({
                lesson_id: idLesson,
                unit_id: idUnit,
                title: nameExam,
                description: '',
            });
            console.log(res);
        } catch (error) {
            console.log('message createExam :', error);
        }
    };

    const handleInputChangeNameExam = (event) => {
        setNameExam(event.target.value);
    };

    const handleInputChangeDescrExam = (event) => {
        setDescrExam(event.target.value);
    };

    const handleChangeSelectLesson = (event) => {
        setIdLesson(event.target.value);
    };

    const handleChangeSelectUnit = (event) => {
        setIdUnit(event.target.value);
    };

    return (
        <div className=" border bg-white border-primary-black p-8 overflow-y-scroll  h-[65vh]">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">
                Thông tin bài kiểm tra
            </h1>
            <div className=" mb-5  border-t-[2px] border-secondary-gray pt-8 ">
                <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                    Tên bài kiểm tra
                </h1>
                <InputField
                    value={nameExam}
                    onChange={handleInputChangeNameExam}
                    placeholder={'Ví dụ: Bài kiểm tra Unit 1'}
                    className=" w-full rounded-none py-2 px-4"
                />
            </div>
            <div className=" mb-4">
                <FormSelectOption
                    value={idLesson}
                    onChange={handleChangeSelectLesson}
                    label={'Chọn chủ đề'}
                    className={
                        ' w-full  !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className="">
                        Chọn chủ đề
                    </option>
                    {lessons.map((v, i) => {
                        return (
                            <option key={v._id} value={v._id} className="">
                                {v.name}
                            </option>
                        );
                    })}
                </FormSelectOption>
            </div>
            <div className=" mb-4">
                <FormSelectOption
                    value={idUnit}
                    onChange={handleChangeSelectUnit}
                    label={'Chọn chương'}
                    className={
                        ' w-full !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className=" ">
                        Chọn chương
                    </option>
                    <>
                        {idLesson !== '' && (
                            <div key={v._id}>
                                {units.map((v, i) => {
                                    return (
                                        <option value={v._id} className=" ">
                                            {v.name}
                                        </option>
                                    );
                                })}
                            </div>
                        )}
                    </>
                </FormSelectOption>
            </div>
            {/* <div className=" mb-5  border-t-[2px] border-secondary-gray pt-8 ">
                <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                    Mô tả bài kiểm tra
                </h1>
                <textarea
                    value={descrExam}
                    placeholder={'Ví dụ: Bài kiểm tra Unit 1'}
                    onChange={handleInputChangeDescrExam}
                    className=" w-full py-2 px-4 resize-none border border-primary-black"
                    rows={5}
                    name=""
                    id=""></textarea>
            </div> */}
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
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Lưu"
                    onClick={CreateExam}
                    icon={true}
                    right={true}
                    color={'primary'}>
                    <IconDesktopTower />
                </Button>
            </div>
        </div>
    );
};

export const FormUpdate = ({ name = 'Programing', namefile = 'congnghe.png', idexam, idquestion }) => {
    const [lessons, setLessons] = useState([]);
    const [units, setUnits] = useState([]);
    const [idLesson, setIdLesson] = useState('');
    const [typeQuestion, setTypeQuestion] = useState('');
    const [idUnit, setIdUnit] = useState('');
    const [selectedTitleTypeQuestion, setSelectedTitleTypeQuestion] = useState('');
    const [inputValuesOption, setInputValuesOption] = useState(['', '', '', '']);
    const [result, setResult] = useState('');
    const [vocabularys, setVocabularys] = useState([]);
    const [exams, setExams] = useState([]);
    const [idVocabulary, setIdVocabulary] = useState('');
    const [contentQuestion, setContenQuestion] = useState('');
    const optionTrueFalse = ['Đúng', 'Sai'];
    const [idExam, setIdExam] = useState('');
    const [nameLesson, setNameLesson] = useState('');
    const [nameUnit, setNameUnit] = useState('');
    const [question, setQuestion] = useState([]);
    const [vocabularyCurent, setVocabularyCurent] = useState([]);
    useEffect(() => {
        const GetExamByIdExam = async () => {
            try {
                const res = await getExamByIdExam(idexam);
                console.log('res exam : ', res.data);
                setExams(res.data);
                GetLessonById(res.data.lesson_id);
                GetUnitByLesson(res.data.lesson_id, res.data.unit_id);
            } catch (error) {
                console.log('message', error);
            }
        };

        const GetQuestion = async () => {
            const res = await getQuestionByIdQuestion(idquestion);
            console.log('message question : ', res);
            setQuestion(res.data);
            GetVocabularyById(res.data.vocabulary_id);
            setContenQuestion(res.data.content);
            setTypeQuestion(res.data.type);
            setResult(res.data.correct_answer);
        };

        const GetLessons = async () => {
            try {
                const res = await getLessons();
                setLessons(res.data);
                if (res.status === 'success') {
                }
            } catch (error) {
                console.log('message', error);
            }
        };

        const GetUnit = async () => {
            try {
                if (idLesson !== '') {
                    const res = await getUnitByIdLesson(idLesson);
                    if (res !== null) {
                        setUnits(res.unit);
                    }
                }
            } catch (error) {
                console.log('message : ', error);
            }
        };

        const GetVocabulary = async () => {
            try {
                if (idUnit !== '') {
                    const res = await getVocabularyByUinit(idUnit);
                    if (res !== null) {
                        setVocabularys(res.vocabulary);
                    }
                }
            } catch (error) {
                console.log('message : ', error);
            }
        };
        GetExamByIdExam();
        GetVocabulary();
        GetQuestion();
        // GetLessons();
        // GetUnit();
    }, [idLesson, idUnit]);

    const GetVocabularyById = async (id) => {
        const res = await getVocabularyById(id);
        setVocabularyCurent(res.vocabulary);
    };
    const CreateExam = async () => {
        try {
            const createQuestion = await createQuestionExam({
                exam_id: idExam,
                vocabulary_id: idVocabulary,
                content: contentQuestion,
                type: typeQuestion,
                level: 1,
                options: typeQuestion === 'true/false' ? optionTrueFalse : inputValuesOption,
                correct_answer: result,
            });

            console.log('createQuestion :', createQuestion);
        } catch (error) {
            console.log('message createExam :', error);
        }
    };

    const handleInputChangeResultBlank = (event) => {
        setResult(event.target.value);
    };

    const handleRadioChangeResultTrueFalse = (event) => {
        setResult(event.target.value);
    };

    const handleInputChangeContenQuestion = (event) => {
        setContenQuestion(event.target.value);
    };

    const handleRadioChangeResult = (event) => {
        setResult(event.target.value);
    };

    const handleChangeInputOption = (index, event) => {
        const newValues = [...inputValuesOption];
        newValues[index] = event.target.value;
        setInputValuesOption(newValues);
    };

    const handleChangeSelectLesson = (event) => {
        setIdLesson(event.target.value);
        if (event.target.value === '') {
            setIdUnit('');
        }
    };

    const handleChangeSelectUnit = (event) => {
        setIdUnit(event.target.value);
    };
    const handleChangeSelectVocabulary = (event) => {
        setIdVocabulary(event.target.value);
    };

    const handleChangeSelectTypeQuestion = (event) => {
        const selectedOption = event.target.selectedOptions[0];
        const selectedTitle = selectedOption.title;
        setTypeQuestion(event.target.value);
        setSelectedTitleTypeQuestion(selectedTitle);
    };

    const GetLessonById = async (id) => {
        const res = await getLessonById(id);

        console.log('lesson ne :', res);
        setNameLesson(res.lesson.name);
    };

    const GetUnitByLesson = async (id, idofunit) => {
        const res = await getUnitByIdLesson(id);
        const units = await res.unit;
        const unit = units.filter((u) => u._id === idofunit);
        setNameUnit(unit[0].name);
        setIdUnit(unit[0]._id);
    };

    const handleChangeSelectIdExam = (event) => {
        const idExam = event.target.value;
        setIdExam(idExam);
        if (idExam === '') {
            setNameLesson('');
            setNameUnit('');
            return;
        }
        const Exam = exams.filter((exam) => exam._id === idExam);
        const idOfUnit = Exam[0].unit_id;
        const idOfLesson = Exam[0].lesson_id;
        // const idOfUnit = exams.unit_id;
        // const idOfLesson = exams.lesson_id;
        setIdUnit(idOfUnit);
        GetLessonById(idOfLesson);
        GetUnitByLesson(idOfLesson, idOfUnit);
    };
    console.log('question.options', question.options);
    return (
        <div className=" border bg-white border-primary-black p-8 overflow-y-scroll  h-[65vh]">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">
                Thông tin câu hỏi {question.options}
            </h1>
            <div className=" mb-4">
                <InputField status={true} value={exams.title} className=" w-full rounded-none px-4 " />
            </div>
            <div className=" mb-4">
                <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-secondary-gray mb-1">Chủ đề</h1>
                <InputField status={true} value={nameLesson} className=" w-full rounded-none px-4 " />
            </div>
            <div className=" mb-4">
                <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-secondary-gray mb-1">Chương</h1>
                <InputField status={true} value={nameUnit} className=" w-full rounded-none px-4 " />
            </div>
            <div className=" mb-4">
                <FormSelectOption
                    value={idVocabulary}
                    onChange={handleChangeSelectVocabulary}
                    label={'Chọn từ vựng bạn muốn cho kiểm tra'}
                    className={
                        ' w-full !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className=" ">
                        Từ vựng hiện tại : {vocabularyCurent.word}
                    </option>
                    <>
                        {idUnit !== '' && (
                            <>
                                {vocabularys.map((v, i) => {
                                    return (
                                        <>
                                            <option key={v._id} value={v._id} className=" ">
                                                {v.word}
                                            </option>
                                        </>
                                    );
                                })}
                            </>
                        )}
                    </>
                </FormSelectOption>
            </div>
            <div className=" mb-8">
                <FormSelectOption
                    value={typeQuestion}
                    onChange={handleChangeSelectTypeQuestion}
                    label={'Bạn muốn chọn loại câu hỏi gì ?'}
                    className={
                        ' w-full  !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value="" className="" title="">
                        Hiện tại : {question.type}
                    </option>

                    <option value="choose" title="Trắc nghiệm" className=" ">
                        Trắc nghiệm
                    </option>
                    <option value="true/false" title="Đúng / Sai" className=" ">
                        Đúng / Sai
                    </option>
                    <option value="blank" title="Điền từ" className=" ">
                        Điền từ
                    </option>
                    <option value="listen" title="Nghe" className=" ">
                        Nghe
                    </option>
                </FormSelectOption>
            </div>
            <div className="">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-secondary-gray pt-4 pb-2 border-t-[2px] border-dashed border-secondary-gray">
                    {selectedTitleTypeQuestion}
                </h1>
                <div className=" mb-5  border-t-[2px] border-secondary-gray pt-8 ">
                    <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                        Tiêu đề câu hỏi ?
                    </h1>
                    <InputField
                        value={contentQuestion}
                        onChange={handleInputChangeContenQuestion}
                        placeholder={'Ví dụ: hãy chọn câu trả lời đúng'}
                        className=" w-full rounded-none py-2 px-4"
                    />
                </div>
                <div>
                    <h1 className=" mb-5 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black pb-2 border-b-[2px] border-primary-black">
                        Đáp án của câu hỏi
                    </h1>
                    {typeQuestion === 'blank' && (
                        <InputField
                            value={result}
                            onChange={handleInputChangeResultBlank}
                            placeholder={'Ví dụ: hãy chọn câu trả lời đúng'}
                            className=" w-full rounded-none py-2 px-4"
                        />
                    )}
                    {typeQuestion === 'listen' && (
                        <InputField
                            value={result}
                            onChange={handleInputChangeResultBlank}
                            placeholder={'Ví dụ: hãy chọn câu trả lời đúng'}
                            className=" w-full rounded-none py-2 px-4"
                        />
                    )}
                    {typeQuestion === 'true/false' && (
                        <div className=" flex justify-start items-center gap-20 mb-8">
                            <InputSection
                                name="typequestion"
                                onChange={handleRadioChangeResultTrueFalse}
                                value={1}
                                id="1"
                                Checked={question.correct_answer === '1'}
                                size={' w-6 h-6'}
                                classNameText={'text-body-2 font-body-2 font-plusjakartasans text-primary-black'}
                                type="radio"
                                label="Đúng"
                            />
                            <InputSection
                                name="typequestion"
                                onChange={handleRadioChangeResultTrueFalse}
                                value={0}
                                Checked={question.correct_answer === '0'}
                                id="2"
                                size={' w-6 h-6'}
                                classNameText={'text-body-2 font-body-2 font-plusjakartasans text-primary-black'}
                                type="radio"
                                label="Sai"
                            />
                        </div>
                    )}
                    {typeQuestion === 'choose' && (
                        <>
                            <div className=" mb-4">
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[0]}
                                        id="1"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[0]}
                                    onChange={() => handleChangeInputOption(0, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                            <div className=" mb-4">
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[1]}
                                        id="2"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[1]}
                                    onChange={() => handleChangeInputOption(1, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                            <div className=" mb-4">
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[2]}
                                        id="3"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[2]}
                                    onChange={() => handleChangeInputOption(2, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                            <div>
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[3]}
                                        id="4"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[3]}
                                    onChange={() => handleChangeInputOption(3, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                        </>
                    )}
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
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Lưu"
                    onClick={CreateExam}
                    icon={true}
                    color={'primary'}
                    right={true}>
                    <IconDesktopTower />
                </Button>
            </div>
        </div>
    );
};

export const FormCreate = ({ name = 'Programing', namefile = 'congnghe.png', id }) => {
    const [lessons, setLessons] = useState([]);
    const [units, setUnits] = useState([]);
    const [idLesson, setIdLesson] = useState('');
    const [typeQuestion, setTypeQuestion] = useState('');
    const [idUnit, setIdUnit] = useState('');
    const [selectedTitleTypeQuestion, setSelectedTitleTypeQuestion] = useState('');
    const [inputValuesOption, setInputValuesOption] = useState(['', '', '', '']);
    const [result, setResult] = useState('');
    const [vocabularys, setVocabularys] = useState([]);
    const [exams, setExams] = useState([]);
    const [idVocabulary, setIdVocabulary] = useState('');
    const [contentQuestion, setContenQuestion] = useState('');
    const optionTrueFalse = ['Đúng', 'Sai'];
    const [idExam, setIdExam] = useState('');
    const [nameLesson, setNameLesson] = useState('');
    const [nameUnit, setNameUnit] = useState('');

    useEffect(() => {
        const GetManyExamByIdUnit = async () => {
            try {
                if (idUnit !== '') {
                    const res = await getManyExamByIdUnit(idUnit);
                    console.log('res exam : ', res.data);
                    setExams(res.data);

                    return;
                }
                const allexam = await getAllExam();
                setExams(allexam.data);
            } catch (error) {
                console.log('message', error);
            }
        };

        const GetLessons = async () => {
            try {
                const res = await getLessons();
                setLessons(res.data);
                if (res.status === 'success') {
                }
            } catch (error) {
                console.log('message', error);
            }
        };

        const GetUnit = async () => {
            try {
                if (idLesson !== '') {
                    const res = await getUnitByIdLesson(idLesson);
                    if (res !== null) {
                        setUnits(res.unit);
                    }
                }
            } catch (error) {
                console.log('message : ', error);
            }
        };
        const GetVocabulary = async () => {
            try {
                if (idUnit !== '') {
                    const res = await getVocabularyByUinit(idUnit);
                    if (res !== null) {
                        setVocabularys(res.vocabulary);
                    }
                }
            } catch (error) {
                console.log('message : ', error);
            }
        };
        GetManyExamByIdUnit();
        GetVocabulary();
        GetLessons();
        GetUnit();
    }, [idLesson, idUnit]);

    // const CreateExam = async () => {
    //     try {
    //         const res = await createExam({
    //             lesson_id: idLesson,
    //             unit_id: idUnit,
    //             vocabulary_id: '664637626c4c00abf5dee0a0',
    //             title: 'thuat toan, programing, unit1,0',
    //             description: '',
    //         });
    //         const exams = await getAllExam();
    //         const lenghtExams = await exams.data.length;
    //         const newExam = await exams.data[lenghtExams - 1];
    //         const idnewExam = await newExam._id;
    //         const createQuestion = await createQuestionExam({
    //             exam_id: idnewExam,
    //             vocabulary_id: idVocabulary,
    //             content: contentQuestion,
    //             type: typeQuestion,
    //             level: 1,
    //         });
    //         const questions = await getAllQuestionExamByIdExam(idnewExam);
    //         const lenghQuestions = await questions.data.exam_question_response.length;
    //         const newQuestion = await questions.data.exam_question_response[lenghQuestions - 1];
    //         const idNewQuestion = await newQuestion._id;

    //         const createOption = await createOptionExam({
    //             question_id: idNewQuestion,
    //             options: typeQuestion === 'true/false' ? optionTrueFalse : inputValuesOption,
    //             correct_answer: result,
    //         });
    //         if ((createOption.status = 'success')) {
    //             alert('Tạo thành công');
    //         }
    //         console.log('createQuestion :', createQuestion);
    //         console.log('newQuestion :', newQuestion);
    //         console.log('idNewQuestion :', idNewQuestion);
    //         console.log('createOption :', createOption);
    //         console.log(res);
    //     } catch (error) {
    //         console.log('message createExam :', error);
    //     }
    // };

    const CreateExam = async () => {
        try {
            const createQuestion = await createQuestionExam({
                exam_id: idExam,
                vocabulary_id: idVocabulary,
                content: contentQuestion,
                type: typeQuestion,
                level: 1,
                options: typeQuestion === 'true/false' ? optionTrueFalse : inputValuesOption,
                correct_answer: result,
            });

            // const questions = await getAllQuestionExamByIdExam(idExam);
            // const lenghQuestions = await questions.data.exam_question_response.length;
            // const newQuestion = await questions.data.exam_question_response[lenghQuestions - 1];
            // const idNewQuestion = await newQuestion._id;

            // const createOption = await createOptionExam({
            //     question_id: idNewQuestion,
            //     options: typeQuestion === 'true/false' ? optionTrueFalse : inputValuesOption,
            //     correct_answer: result,
            // });
            // if ((createOption.status = 'success')) {
            //     alert('Tạo thành công');
            // }
            console.log('createQuestion :', createQuestion);
            // console.log('newQuestion :', newQuestion);
            // console.log('idNewQuestion :', idNewQuestion);
            // console.log('createOption :', createOption);
            // console.log(res);
        } catch (error) {
            console.log('message createExam :', error);
        }
    };

    const handleInputChangeResultBlank = (event) => {
        setResult(event.target.value);
    };

    const handleRadioChangeResultTrueFalse = (event) => {
        setResult(event.target.value);
    };

    const handleInputChangeContenQuestion = (event) => {
        setContenQuestion(event.target.value);
    };

    const handleRadioChangeResult = (event) => {
        setResult(event.target.value);
    };

    const handleChangeInputOption = (index, event) => {
        const newValues = [...inputValuesOption];
        newValues[index] = event.target.value;
        setInputValuesOption(newValues);
    };

    const handleChangeSelectLesson = (event) => {
        setIdLesson(event.target.value);
        if (event.target.value === '') {
            setIdUnit('');
        }
    };

    const handleChangeSelectUnit = (event) => {
        setIdUnit(event.target.value);
    };
    const handleChangeSelectVocabulary = (event) => {
        setIdVocabulary(event.target.value);
    };

    const handleChangeSelectTypeQuestion = (event) => {
        const selectedOption = event.target.selectedOptions[0];
        const selectedTitle = selectedOption.title;
        setTypeQuestion(event.target.value);
        setSelectedTitleTypeQuestion(selectedTitle);
    };

    const GetLessonById = async (id) => {
        const res = await getLessonById(id);
        console.log('lesson ne :', res);
        setNameLesson(res.lesson.name);
    };

    const GetUnitByLesson = async (id, idofunit) => {
        const res = await getUnitByIdLesson(id);
        const units = await res.unit;
        const unit = units.filter((u) => u._id === idofunit);
        setNameUnit(unit[0].name);
    };

    const handleChangeSelectIdExam = (event) => {
        const idExam = event.target.value;
        setIdExam(idExam);
        if (idExam === '') {
            setNameLesson('');
            setNameUnit('');
            return;
        }
        const Exam = exams.filter((exam) => exam._id === idExam);
        const idOfUnit = Exam[0].unit_id;
        const idOfLesson = Exam[0].lesson_id;
        // const idOfUnit = exams.unit_id;
        // const idOfLesson = exams.lesson_id;
        setIdUnit(idOfUnit);
        GetLessonById(idOfLesson);
        GetUnitByLesson(idOfLesson, idOfUnit);
    };

    return (
        <div className=" border bg-white border-primary-black p-8 overflow-y-scroll  h-[65vh]">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">
                Bộ lọc tìm kiếm bài kiểm tra
            </h1>
            <div className=" mb-4">
                <FormSelectOption
                    value={idLesson}
                    onChange={handleChangeSelectLesson}
                    label={'Chọn chủ đề'}
                    className={
                        ' w-full  !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className="">
                        Chọn chủ đề
                    </option>
                    {lessons.map((v, i) => {
                        return (
                            <option key={v._id} value={v._id} className="">
                                {v.name}
                            </option>
                        );
                    })}
                </FormSelectOption>
            </div>
            <div className=" mb-4">
                <FormSelectOption
                    value={idUnit}
                    onChange={handleChangeSelectUnit}
                    label={'Chọn chủ đề'}
                    className={
                        ' w-full !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className=" ">
                        Chọn chương
                    </option>
                    <>
                        {idLesson !== '' && (
                            <>
                                {units.map((v, i) => {
                                    return (
                                        <option key={v._id} value={v._id} className=" ">
                                            {v.name}
                                        </option>
                                    );
                                })}
                            </>
                        )}
                    </>
                </FormSelectOption>
            </div>

            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">
                Thông tin câu hỏi
            </h1>
            <div className=" mb-4">
                <FormSelectOption
                    value={idExam}
                    onChange={handleChangeSelectIdExam}
                    label={'Chọn bài kiểm tra'}
                    className={
                        ' w-full  !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className="">
                        Chọn bài kiểm tra
                    </option>
                    {exams !== null && (
                        <>
                            {exams.map((v, i) => {
                                return (
                                    <option key={v._id} value={v._id} title={v.unit_id} className="">
                                        {v.title}
                                    </option>
                                );
                            })}
                        </>
                    )}
                </FormSelectOption>
            </div>
            <div className=" mb-4">
                <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-secondary-gray mb-1">Chủ đề</h1>
                <InputField status={true} value={nameLesson} className=" w-full rounded-none px-4 " />
            </div>
            <div className=" mb-4">
                <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-secondary-gray mb-1">Chương</h1>
                <InputField status={true} value={nameUnit} className=" w-full rounded-none px-4 " />
            </div>
            <div className=" mb-4">
                <FormSelectOption
                    value={idVocabulary}
                    onChange={handleChangeSelectVocabulary}
                    label={'Chọn từ vựng bạn muốn cho kiểm tra'}
                    className={
                        ' w-full !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value={''} className=" ">
                        Chọn từ vựng
                    </option>
                    <>
                        {idUnit !== '' && (
                            <>
                                {vocabularys.map((v, i) => {
                                    return (
                                        <>
                                            <option key={v._id} value={v._id} className=" ">
                                                {v.word}
                                            </option>
                                        </>
                                    );
                                })}
                            </>
                        )}
                    </>
                </FormSelectOption>
            </div>
            <div className=" mb-8">
                <FormSelectOption
                    value={typeQuestion}
                    onChange={handleChangeSelectTypeQuestion}
                    label={'Bạn muốn chọn loại câu hỏi gì ?'}
                    className={
                        ' w-full  !rounded-none text-button-1 font-button-1 font-plusjakartasans text-primary-black'
                    }>
                    <option value="" className="" title="">
                        Chọn loại câu hỏi
                    </option>
                    <option value="choose" title="Trắc nghiệm" className=" ">
                        Trắc nghiệm
                    </option>
                    <option value="true/false" title="Đúng / Sai" className=" ">
                        Đúng / Sai
                    </option>
                    <option value="blank" title="Điền từ" className=" ">
                        Điền từ
                    </option>
                    <option value="listen" title="Nghe" className=" ">
                        Nghe
                    </option>
                </FormSelectOption>
            </div>
            <div className="">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-secondary-gray pt-4 pb-2 border-t-[2px] border-dashed border-secondary-gray">
                    {selectedTitleTypeQuestion}
                </h1>
                <div className=" mb-5  border-t-[2px] border-secondary-gray pt-8 ">
                    <h1 className=" mb-1 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                        Tiêu đề câu hỏi ?
                    </h1>
                    <InputField
                        value={contentQuestion}
                        onChange={handleInputChangeContenQuestion}
                        placeholder={'Ví dụ: hãy chọn câu trả lời đúng'}
                        className=" w-full rounded-none py-2 px-4"
                    />
                </div>
                <div>
                    <h1 className=" mb-5 text-heading-7 font-heading-7 font-plusjakartasans text-primary-black pb-2 border-b-[2px] border-primary-black">
                        Đáp án của câu hỏi
                    </h1>
                    {typeQuestion === 'blank' && (
                        <InputField
                            value={result}
                            onChange={handleInputChangeResultBlank}
                            placeholder={'Ví dụ: hãy chọn câu trả lời đúng'}
                            className=" w-full rounded-none py-2 px-4"
                        />
                    )}
                    {typeQuestion === 'listen' && (
                        <InputField
                            value={result}
                            onChange={handleInputChangeResultBlank}
                            placeholder={'Ví dụ: hãy chọn câu trả lời đúng'}
                            className=" w-full rounded-none py-2 px-4"
                        />
                    )}
                    {typeQuestion === 'true/false' && (
                        <div className=" flex justify-start items-center gap-20 mb-8">
                            <InputSection
                                name="typequestion"
                                onChange={handleRadioChangeResultTrueFalse}
                                value={1}
                                id="1"
                                size={' w-6 h-6'}
                                classNameText={'text-body-2 font-body-2 font-plusjakartasans text-primary-black'}
                                type="radio"
                                label="Đúng"
                            />
                            <InputSection
                                name="typequestion"
                                onChange={handleRadioChangeResultTrueFalse}
                                value={0}
                                id="2"
                                size={' w-6 h-6'}
                                classNameText={'text-body-2 font-body-2 font-plusjakartasans text-primary-black'}
                                type="radio"
                                label="Sai"
                            />
                        </div>
                    )}
                    {typeQuestion === 'choose' && (
                        <>
                            <div className=" mb-4">
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[0]}
                                        id="1"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[0]}
                                    onChange={() => handleChangeInputOption(0, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                            <div className=" mb-4">
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[1]}
                                        id="2"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[1]}
                                    onChange={() => handleChangeInputOption(1, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                            <div className=" mb-4">
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[2]}
                                        id="3"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[2]}
                                    onChange={() => handleChangeInputOption(2, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                            <div>
                                <div className=" mb-2">
                                    <InputSection
                                        name="typequestion"
                                        onChange={handleRadioChangeResult}
                                        value={inputValuesOption[3]}
                                        id="4"
                                        size={' w-6 h-6'}
                                        classNameText={
                                            'text-body-2 font-body-2 font-plusjakartasans text-primary-black'
                                        }
                                        type="radio"
                                        label="Đáp án đúng"
                                    />
                                </div>
                                <InputField
                                    value={inputValuesOption[3]}
                                    onChange={() => handleChangeInputOption(3, event)}
                                    className="  rounded-none w-full"
                                    placeholder={'Đáp án'}
                                />
                            </div>
                        </>
                    )}
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
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Lưu"
                    onClick={CreateExam}
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
    const [progress, setProgess] = useState(0);

    const handleSetSetProgess = (value) => {
        setProgess(value);
    };
    const handleCreateLesson = async () => {
        const res = await createLessonFiles('6631ff4e2f95034732cdbfaa', inputChange);
        console.log(res);
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
    const handleSetIsActive = (active) => {
        setIsActive(active);
    };
    const handleInputChange = (event) => {
        const input = event.target.value;
        setInputChange(input);
    };
    return (
        <>
            <div className=" p-3 border border-primary-black bg-primary-grey mb-5">
                <>
                    <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-2">
                        Tên khóa học
                    </h3>
                    <InputField
                        onChange={handleInputChange}
                        placeholder={'Tên của chủ đề'}
                        className=" rounded-none w-full mb-4"
                        value={inputChange}
                    />
                </>
                <div className=" border mb-5 flex justify-center items-center h-64 bg-white border-dashed border-primary-black">
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
                    onClick={handleCreateLesson}
                    className=" w-full bg-background-disable border-background-disable text-secondary-gray rounded-none"
                    title="Thêm"
                    icon={true}
                    right={true}
                    color={'primary'}>
                    <IconDesktopTower />
                </Button>
            </div>
        </>
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
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        console.log('res create flie : ', res);
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

            <h3 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black mb-1">Tập tin</h3>
            {isActive === 'createone' ? <FormCreateOne /> : <FormCreateFile />}
        </div>
    );
};
