import { InputField, FormSelectOption, InputSection } from '../../../../components';
import { IconCloudArrowUp, IconDesktopTower } from '../../../../svgs';
import { useState, useEffect } from 'react';
import { Button } from '../../../../components';

import { getLessonById } from '../../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../../services/unitAPI';
import { getVocabularyByUinit } from '../../../../services/vocabulary';
import { createQuestionExam, getExamByIdExam } from '../../../../services/examAPI';
import { getQuestionByIdQuestion, updateQuestion } from '../../../../services/examAPI';
import { getVocabularyById } from '../../../../services/vocabulary';

export const FormUpdate = ({ idexam, idquestion }) => {
    const [typeQuestion, setTypeQuestion] = useState('');
    const [selectedTitleTypeQuestion, setSelectedTitleTypeQuestion] = useState('');
    const [inputValuesOption, setInputValuesOption] = useState(['', '', '', '']);
    const [result, setResult] = useState('');
    const [vocabularys, setVocabularys] = useState([]);
    const [exams, setExams] = useState([]);
    const [idVocabulary, setIdVocabulary] = useState('');
    const [idQuestion, setIdQuestion] = useState('');
    const [contentQuestion, setContenQuestion] = useState('');
    const optionTrueFalse = ['Đúng', 'Sai'];
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
                GetVocabulary(res.data.unit_id);
            } catch (error) {
                console.log('message', error);
            }
        };

        const GetQuestion = async () => {
            const res = await getQuestionByIdQuestion(idquestion);
            console.log('message question : ', res);
            setQuestion(res.data);
            setIdQuestion(res.data._id);
            GetVocabularyById(res.data.vocabulary_id);
            setContenQuestion(res.data.content);
            setTypeQuestion(res.data.type);
            setResult(res.data.correct_answer);
            console.log('message choose : ', res.data.options[0]);
            if (res.data.type === 'choose') {
                setInputValuesOption([
                    res.data.options[0],
                    res.data.options[1],
                    res.data.options[2],
                    res.data.options[3],
                ]);
            }
        };

        const GetVocabulary = async (idunit) => {
            const res = await getVocabularyByUinit(idunit);
            if (res !== null) {
                setVocabularys(res.vocabulary);
            }
        };

        GetExamByIdExam();
        GetQuestion();
    }, []);

    const GetVocabularyById = async (id) => {
        const res = await getVocabularyById(id);
        setVocabularyCurent(res.vocabulary);
    };
    console.log('result: ', result);
    const CreateExam = async () => {
        try {
            //test
            console.log('vocabularyCurent._id: ', idVocabulary !== '' ? idVocabulary : vocabularyCurent._id);
            console.log('idVocabulary: ', idVocabulary);
            console.log('idexam: ', idexam);
            console.log('contentQuestion: ', contentQuestion);
            console.log('typeQuestion: ', typeQuestion);
            console.log('result: ', result);
            const createQuestion = await updateQuestion({
                _id: idQuestion,
                vocabulary_id: idVocabulary !== '' ? idVocabulary : vocabularyCurent._id,
                content: contentQuestion,
                type: typeQuestion,
                level: 1,
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
                        {vocabularys !== '' && (
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
                                value={'1'}
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
                                value={'0'}
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

export const FormCreate = ({ idexam }) => {
    const [typeQuestion, setTypeQuestion] = useState('');
    const [selectedTitleTypeQuestion, setSelectedTitleTypeQuestion] = useState('');
    const [inputValuesOption, setInputValuesOption] = useState(['', '', '', '']);
    const [result, setResult] = useState('');
    const [vocabularys, setVocabularys] = useState([]);
    const [exams, setExams] = useState([]);
    const [idVocabulary, setIdVocabulary] = useState('');
    const [contentQuestion, setContenQuestion] = useState('');
    const optionTrueFalse = ['Đúng', 'Sai'];
    const [nameLesson, setNameLesson] = useState('');
    const [nameUnit, setNameUnit] = useState('');

    useEffect(() => {
        const GetExamById = async () => {
            const res = await getExamByIdExam(idexam);
            setExams(res.data);
            console.log('examm : ', res.data);
            const idoflesson = await res.data.lesson_id;
            const idofunit = await res.data.unit_id;

            GetLessonById(idoflesson);
            GetVocabulary(idofunit);
            GetUnitByLesson(idoflesson, idofunit);
        };

        const GetVocabulary = async (idunit) => {
            const res = await getVocabularyByUinit(idunit);
            if (res !== null) {
                setVocabularys(res.vocabulary);
            }
        };

        GetExamById();
    }, []);

    const CreateExam = async () => {
        try {
            const createQuestion = await createQuestionExam({
                exam_id: idexam,
                vocabulary_id: idVocabulary,
                content: contentQuestion,
                type: typeQuestion,
                level: 1,
                options: typeQuestion === 'true/false' ? optionTrueFalse : inputValuesOption,
                correct_answer: result,
            });
            if (createQuestion.status === 'success') {
                alert('Thêm câu hỏi thành công');
            }

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

    return (
        <div className=" border bg-white border-primary-black p-8 overflow-y-scroll  h-[65vh]">
            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black mb-5">
                Thông tin câu hỏi
            </h1>
            <div className=" mb-4">
                <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-secondary-gray mb-1">Chủ đề</h1>
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
                        Chọn từ vựng
                    </option>
                    <>
                        {vocabularys !== '' && (
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
