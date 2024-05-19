import { useEffect, useState } from 'react';
import { Button, LoadingProgressBar } from '../../components';
import { RenderComponentUnitQuiz } from '../../untils/renderComponentUnitQuiz';
import { IconXCircle } from '../../svgs';
import { Multiplechoice, FillInTheBlankReview, Listen, TrueFalse, PageLoading, PopupDeleteList } from './component';
import { getExamByIdUnit, getAllQuestionExamByIdExam } from '../../services/examAPI';
import { Start } from './component';
import { Finish } from './component';
import { NavLink, useParams } from 'react-router-dom';
import { createAnswer } from '../../services/answerAPI';
import 'animate.css';
export default function UnitQuiz() {
    let { lessonid, unitid } = useParams();

    const [question, setQuestion] = useState([]);

    const [count, setCount] = useState(0);

    const [index, setIndex] = useState(0);

    const [answer, setAnswer] = useState('');

    const [dataRes, setDataRes] = useState({
        content: '',
        options: [],
        correct_answer: '',
        type: '',
        link_url: '',
    });

    useEffect(() => {
        const GetQuestion = async () => {
            const exam = await getExamByIdUnit(unitid);
            const idexam = await exam.data._id;
            const res = await getAllQuestionExamByIdExam(idexam);
            const content = await res.data.exam_question_response[index].content;
            const options = await res.data.exam_question_response[index].options;
            const correct_answer = await res.data.exam_question_response[index].correct_answer;
            const type = await res.data.exam_question_response[index].type;
            const link_url = await res.data.exam_question_response[index].vocabulary.link_url;
            setQuestion(res.data.exam_question_response);
            console.log('message question : ', res.data.exam_question_response);

            setDataRes({
                content: content,
                options: options,
                correct_answer: correct_answer,
                type: type,
                link_url: link_url,
            });

            console.log('type ne :', type);
            if (type === 'choose') {
                setCount(0);
            } else if (type === 'true/false') {
                setCount(3);
            } else if (type === 'blank') {
                setCount(1);
            } else if (type === 'listen') {
                setCount(2);
            }
            setIndex(1);
        };

        GetQuestion();
    }, []);
    const [isPopup, setIsPopup] = useState(false);

    const handleReceivePopup = (value) => {
        setIsPopup(value);
    };
    // Dùng để lưu phần trăm
    const [process, setProcess] = useState(0);
    //Kiểm tra đáp án
    const [check, setCheck] = useState(false);
    // Trả về true nếu đúng cho fillintheblank
    const [resultRight, setRightResult] = useState(false);
    // Trả về true nếu sai cho fillintheblank
    const [resultError, setErrortResult] = useState(false);
    // inputvalue cho điền từ
    const [inputValue, setInputValue] = useState('');
    const handleRecieveAnswer = (value) => {
        setAnswer(value);
    };
    function checkResult() {
        if (answer === dataRes.correct_answer.toLowerCase() || answer === dataRes.correct_answer) {
            setRightResult(true);
        } else {
            setErrortResult(true);
        }
        setCheck(true);
    }

    const CreateAnswer = async () => {
        const res = await createAnswer({ question_id: question[index]._id, answer: answer });
        console.log('res answer :', res);
    };

    function handleOnClick() {
        // Nếu process đạt 100% thì return
        if (process > 100) {
            return;
        }

        setAnswer('');

        setCheck(false);

        setRightResult(false);

        setErrortResult(false);

        CreateAnswer();

        setIndex((n) => n + 1);

        if (dataRes.type === 'choose') {
            setCount(0);
        } else if (dataRes.type === 'true/false') {
            setCount(3);
        } else if (dataRes.type === 'blank') {
            setCount(1);
        } else if (dataRes.type === 'listen') {
            setCount(2);
        }

        setProcess((n) => n + 100 / question.length);

        setDataRes({
            content: question[index].content,
            options: question[index].options,
            correct_answer: question[index].correct_answer,
            type: question[index].type,
            link_url: question[index].vocabulary.link_url,
        });
    }

    return (
        <>
            {dataRes.type !== '' ? (
                <>
                    {isPopup && <PopupDeleteList handleSendIsPopup={handleReceivePopup} lessonid={lessonid} />}
                    <div className=" flex flex-col justify-between h-screen items-center">
                        <div className=" flex w-full justify-center items-center gap-2 mt-7">
                            <Button icon={true} left={true} title="" onClick={() => setIsPopup(true)}>
                                <IconXCircle color={'#3C79FE'} />
                            </Button>
                            <div className=" w-3/4   flex justify-center items-center h-1.5 bg-gray-200 rounded-full  dark:bg-gray-700">
                                <LoadingProgressBar percent={process} />
                            </div>
                        </div>
                        {process < 100 && (
                            <RenderComponentUnitQuiz
                                multipleChoice={
                                    <Multiplechoice
                                        option={dataRes.options}
                                        checkresult={check}
                                        correctAnswer={dataRes.correct_answer}
                                        question={dataRes.question}
                                        sendAnswer={handleRecieveAnswer}
                                        sound={dataRes.link_url}
                                    />
                                }
                                fillInTheBlank={
                                    <FillInTheBlankReview
                                        content={dataRes.content}
                                        right={resultRight && true}
                                        error={resultError && true}
                                        sendAnswer={handleRecieveAnswer}
                                        result={dataRes.correct_answer}
                                    />
                                }
                                listen={
                                    <Listen
                                        sendAnswer={handleRecieveAnswer}
                                        content={dataRes.content}
                                        right={resultRight && true}
                                        error={resultError && true}
                                        answer={answer}
                                        result={dataRes.correct_answer}
                                        sound={dataRes.link_url}
                                    />
                                }
                                truefalse={
                                    <TrueFalse
                                        option={dataRes.options}
                                        checkresult={check}
                                        correctAnswer={dataRes.correct_answer}
                                        question={dataRes.content}
                                        sendAnswer={handleRecieveAnswer}
                                    />
                                }
                                count={dataRes.type}
                            />
                        )}
                        {process === 100 && <Finish />}
                        <div className=" w-full py-10 flex justify-around items-center border-t-2 border-black">
                            {process < 100 && (
                                <Button
                                    icon={false}
                                    color={'primary'}
                                    onClick={check ? handleOnClick : checkResult}
                                    className="w-3/4"
                                    title={'Tiếp tục'}></Button>
                            )}
                            {process >= 100 && (
                                <NavLink className={' w-full flex justify-center'} to={`/learn/lesson/${lessonid}`}>
                                    <Button
                                        icon={false}
                                        color={'primary'}
                                        onClick={check ? handleOnClick : checkResult}
                                        className="w-3/4"
                                        title={'Hoàn thành'}></Button>
                                </NavLink>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className=" flex flex-col justify-between h-screen items-center">
                    <PageLoading />
                </div>
            )}
        </>
    );
}
