import { InputField, FormSelectOption, InputSection } from '../../../../components';
import { IconCloudArrowUp, IconDesktopTower } from '../../../../svgs';
import { useState, useEffect } from 'react';
import { Button } from '../../../../components';

import { getLessonById, getLessons } from '../../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../../services/unitAPI';
import { getVocabularyByUinit } from '../../../../services/vocabulary';
import { createExam, getAllExam, createQuestionExam, getManyExamByIdUnit } from '../../../../services/examAPI';

export const FormCreateExam = () => {
    const [lessons, setLessons] = useState([]);
    const [units, setUnits] = useState([]);
    const [idLesson, setIdLesson] = useState('');
    const [idUnit, setIdUnit] = useState('');
    const [nameExam, setNameExam] = useState('');

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
            if (re.status === 'success') {
                alert('Tạo bài kiểm tra thành công');
            }
        } catch (error) {
            console.log('message createExam :', error);
        }
    };

    const handleInputChangeNameExam = (event) => {
        setNameExam(event.target.value);
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
                    {lessons !== null && (
                        <>
                            {lessons.map((v, i) => {
                                return (
                                    <option key={v._id} value={v._id} className="">
                                        {v.name}
                                    </option>
                                );
                            })}
                        </>
                    )}
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

                    {idLesson !== '' && (
                        <>
                            {units.map((v, i) => {
                                return (
                                    <option value={v._id} className=" ">
                                        {v.name}
                                    </option>
                                );
                            })}
                        </>
                    )}
                </FormSelectOption>
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

export const FormCreate = () => {
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
            if (createQuestion.status === 'success') {
                alert('Tạo câu hỏi thành công');
            }
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
                    {lessons !== null && (
                        <>
                            {lessons.map((v, i) => {
                                return (
                                    <option key={v._id} value={v._id} className="">
                                        {v.name}
                                    </option>
                                );
                            })}
                        </>
                    )}
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
                                {units !== null && (
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
                                {vocabularys !== null && (
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
