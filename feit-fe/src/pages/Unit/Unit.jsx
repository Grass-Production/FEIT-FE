import { useState, useEffect } from 'react';
import { Button, LoadingProgressBar, Sound } from '../../components';
import { RenderComponentUnit } from '../../untils/renderComponentUnit';
import { IconXCircle } from '../../svgs';
import { NavLink, useParams } from 'react-router-dom';
// import { PopUp } from './component/PopUp';
import { PopUp } from '../../components/PopupVocabulary/PopupVocabulary';
import { Example, Listen, FillInTheBlank, Tip } from './component/CategoryUnit';
import { Finish, ListVocabulary, Score } from './component/UIFinish';
import { getVocabulary } from '../../services/vocabulary';
import { getExerciseByIdUnit, getQuestionByIdExercise } from '../../services/exerciseAPI';
import 'animate.css';

export default function Unit() {
    // Lấy lessonId và unitId
    let { lessonid, unitid } = useParams();
    const [vocabularys, setVocabularys] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [questions, setQuestions] = useState([]);

    const [vocabulary, setVocabulary] = useState({
        word: '',
        _id: '',
        part_of_speech: '',
        pronunciation: '',
        example: '',
        field_of_it: '',
        link_url: '',
        question: '',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const vocabularys = await getVocabulary(unitid);
                const res = vocabularys.vocabulary;
                console.log('res :', res);
                setVocabulary({
                    ...vocabulary,
                    word: res[index].word,
                    _id: res[index]._id,
                    part_of_speech: res[index].part_of_speech,
                    pronunciation: res[index].pronunciation,
                    mean: res[index].mean,
                    explain_vie: res[index].explain_vie,
                    example_vie: res[index].example_vie,
                    example_eng: res[index].example_eng,
                    field_of_it: res[index].field_of_it,
                    link_url: res[index].link_url,
                });

                setVocabularys(res);
            } catch (error) {
                console.log(error);
            }
        }

        async function GetQuestion() {
            const exam = await getExerciseByIdUnit(unitid);
            const question = await getQuestionByIdExercise(exam.data._id);
            const questionData = await question.data.exercise_question;
            setVocabulary({ ...vocabulary, question: questionData[index].content });
            setQuestions(questionData);
            console.log('questionData : ', questionData[index].content);
        }

        GetQuestion();
        fetchData();
    }, []);
    // Dùng để đếm số để render Component
    const [count, setCount] = useState(0);
    // vocabular
    const [index, setIndex] = useState(0);
    // Dùng để lưu phần trăm
    const [process, setProcess] = useState(5);
    // Dùng ẩn hiện pop up
    const [showpopup, setShowPopup] = useState(false);
    // Trả về true nếu đúng cho fillintheblank
    const [resultRight, setRightResult] = useState(false);
    // Dung để kiểm tra kết quả
    const [check, setCheck] = useState(false);
    // Trả về true nếu sai cho fillintheblank
    const [resultError, setErrortResult] = useState(false);

    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function checkResult() {
        if (inputValue === vocabulary.word.toLowerCase() || inputValue === vocabulary.word) {
            setRightResult(true);
        } else {
            setErrortResult(true);
        }
        setCheck(true);
    }

    // handleOnClick : Xử lý điều kiện render component bằng count và process để hiển thị thành phần trăm
    function handleOnClick() {
        // Nếu process đạt 100% thì return
        if (process === 100) {
            return;
        }
        setCheck(false);
        setRightResult(false);
        setErrortResult(false);

        if (process === 55) {
            setCount((n) => n - 1);
            setIndex((n) => n - 1);
            if (count === 0) {
                setIndex((n) => n + 1);
            }
        } else if (process === 25) {
            setCount((n) => n - 1);
            setIndex((n) => n - 1);
            console.log('process == 50');
        }

        if (count === 1) {
            setIndex((n) => n + 1);
            console.log('count === 1');
        }

        if (process < 85) {
            setVocabulary({
                word: vocabularys[index].word,
                part_of_speech: vocabularys[index].part_of_speech,
                pronunciation: vocabularys[index].pronunciation,
                mean: vocabularys[index].mean,
                _id: vocabularys[index]._id,
                explain_vie: vocabularys[index].explain_vie,
                example_vie: vocabularys[index].example_vie,
                example_eng: vocabularys[index].example_eng,
                field_of_it: vocabularys[index].field_of_it,
                link_url: vocabularys[index].link_url,
                question: questions[index].content,
            });
        }

        setCount((n) => (n + 1) % 3);

        setProcess((n) => n + 5);
    }

    function handlePopUp() {
        setShowPopup(!showpopup);
    }

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" flex w-full justify-center items-center gap-2 mt-7">
                <NavLink to={`/learn/lesson/${lessonid}`}>
                    <IconXCircle color={'#3C79FE'} />
                </NavLink>
                <div className=" w-3/4  flex justify-center items-center h-1.5 bg-gray-200 rounded-full  dark:bg-gray-700">
                    <LoadingProgressBar percent={process} />
                </div>
            </div>

            {/* <h1>d</h1> */}
            <RenderComponentUnit
                listen={
                    process === 90 ? (
                        <Finish />
                    ) : (
                        <Listen word={vocabulary.word} sound={vocabulary.link_url} mean={vocabulary.mean} />
                    )
                }
                example={
                    process === 95 ? (
                        <Score score="10" />
                    ) : (
                        <Example
                            exampleen={vocabulary.example}
                            example_vie={vocabulary.example_vie}
                            example_eng={vocabulary.example_eng}
                        />
                    )
                }
                fillInTheBlank={
                    process === 100 ? (
                        <ListVocabulary list={vocabularys.map((a, i) => a.word)} />
                    ) : (
                        <FillInTheBlank
                            question={vocabulary.question}
                            word={vocabulary.word}
                            result={vocabulary.word}
                            sound={vocabulary.link_url}
                            inputValue={inputValue}
                            right={resultRight && true}
                            error={resultError && true}
                            handleChange={handleChange}
                        />
                    )
                }
                tip={<Tip />}
                count={process === 25 || process == 55 ? 3 : count}
            />

            <div className=" w-full py-10 flex justify-around items-center border-t-2 border-black">
                {process === 100 ? (
                    <NavLink className="w-3/4" to={`/learn/lesson/${lessonid}`}>
                        <Button icon={false} color={'primary'} className="w-full" title="Hoàn tất"></Button>
                    </NavLink>
                ) : (
                    <>
                        {count === 2 ? (
                            <Button
                                icon={false}
                                color={'primary'}
                                onClick={check ? handleOnClick : checkResult}
                                className="w-3/4 "
                                title="Tiếp tục"></Button>
                        ) : (
                            <>
                                {count !== 2 && process < 90 ? (
                                    <>
                                        <Button
                                            icon={false}
                                            color={'primary'}
                                            onClick={handleOnClick}
                                            className=" w-1/4 py-6 !bg-primary-blue-400 hover:!bg-primary-blue-500 !border-primary-black text-white"
                                            title="Tiếp tục"></Button>
                                        <Button
                                            icon={false}
                                            color={'primary'}
                                            onClick={handlePopUp}
                                            className=" w-1/4 py-6"
                                            title="Giải thích từ vựng"></Button>
                                    </>
                                ) : (
                                    <Button
                                        icon={false}
                                        color={'primary'}
                                        onClick={handleOnClick}
                                        className="w-3/4"
                                        title="Tiếp tục"></Button>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
            {showpopup && (
                <div className={showpopup ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                    <PopUp
                        idVocabulary={vocabulary._id}
                        OnClose={handlePopUp}
                        sound={vocabulary.link_url}
                        word={vocabulary.word}
                        partofspeech={vocabulary.part_of_speech}
                        pronunciation={vocabulary.pronunciation}
                        example={vocabulary.explain_vie}
                    />
                </div>
            )}
        </div>
    );
}
