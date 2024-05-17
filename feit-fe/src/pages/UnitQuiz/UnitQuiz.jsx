import { useEffect, useState } from 'react';
import { Button, LoadingProgressBar } from '../../components';
// import { RenderComponentUnitReview } from '../../untils/renderComponentUnitReview';
// import { RenderComponentUnitQuiz } from '../../untils/renderComponentUnitReview';
import { RenderComponentUnitQuiz } from '../../untils/renderComponentUnitQuiz';
import { IconXCircle } from '../../svgs';
import { Multiplechoice, FillInTheBlankReview, Listen, TrueFalse } from './component';
import { getAllQuestionExamByIdExam, getOptionByIdQuestion } from '../../services/examAPI';
import { Start } from './component';
import 'animate.css';

export default function UnitQuiz() {
    const [questions, setQuestions] = useState([]);
    const [option, setOption] = useState([]);
    const datas = [
        {
            id: '6611a3c017dae17cd8ca050b',
            question: 'London is the capital of France',
            options: ['Đúng', 'Sai'],
            truefalse: 'London is the capital of France',
            correct_answer_truefalse: 'Sai',
            correct_answer: 'Sai',
            mean: 'Anh',
            explanation: '',
            question_type: 'truefalse',
            level: 0,
            filename: '_ _ _ is the capital of France',
            audio_duration: '',
            is_complete: 0,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '2024-04-06T19:34:54.335Z',
            who_updates: 'John Doe',
        },
        {
            id: '6611a3c017dae17cd8ca0521',
            question: 'What is the capital of VietNam?',
            options: ['Phong', 'London', 'Berlin', 'Ha Noi'],
            truefalse: 'Ha Noi is the capital of VietNam',
            correct_answer_truefalse: 'Đúng',
            correct_answer: 'Ha Noi',
            explanation: '',
            mean: 'Vietnam',
            question_type: 'multichoise',
            level: 0,
            filename: '',
            audio_duration: '',
            is_complete: 0,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '2024-04-06T19:38:49.264Z',
            who_updates: 'John Doe',
        },
        {
            id: '6611a3c017dae17cd8ca0521',
            question: 'What is the capital of Korena?',
            options: ['Phong', 'London', 'Berlin', 'Seoul'],
            truefalse: 'Berlin is the capital of Korena',
            correct_answer_truefalse: 'Sai',
            correct_answer: 'Seoul',
            mean: 'Hàn',
            explanation: '',
            question_type: 'fil',
            level: 0,
            filename: '',
            audio_duration: '',
            is_complete: 0,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '2024-04-06T19:38:49.264Z',
            who_updates: 'John Doe',
        },
        {
            id: '6611a3c017dae17cd8ca0521',
            question: 'What is the capital of Thailan?',
            options: ['Phong', 'London', 'Berlin', 'Bangkok'],
            truefalse: 'Bangkok is the capital of Thailan',
            correct_answer_truefalse: 'Đúng',
            correct_answer: 'Bangkok',
            mean: 'Thái',
            explanation: '',
            question_type: 'multichoise',
            level: 0,
            filename: '',
            audio_duration: '',
            is_complete: 0,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '2024-04-06T19:38:49.264Z',
            who_updates: 'John Doe',
        },
        {
            id: '6611a3c017dae17cd8ca0521',
            question: 'What is the capital of American?',
            options: ['Phong', 'London', 'Berlin', 'Washington'],
            truefalse: 'Berlin is the capital of American',
            correct_answer_truefalse: 'Sai',
            correct_answer: 'Washington',
            mean: 'Mỹ',
            explanation: '',
            question_type: 'listen',
            level: 0,
            filename: '',
            audio_duration: '',
            is_complete: 0,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '2024-04-06T19:38:49.264Z',
            who_updates: 'John Doe',
        },
    ];

    // useEffect(() => {
    //     const GetQuestion = async () => {
    //         const res = await getAllQuestionExamByIdExam('6646d4c193f595b4a8215f42');
    //         console.log(' question :', res.data.exam_question_response[0]._id);
    //         const idQuestion = await res.data.exam_question_response[0]._id;
    //         console.log(idQuestion);
    //         const option = await getOptionByIdQuestion(idQuestion);
    //         console.log('option :: ', option);
    //         console.log(' question :', option.data.exam_options);
    //         setOption(option.data.exam_options);
    //         setQuestions(res.data.exam_question_response);
    //     };
    //     GetQuestion();

    //     // const GetOption = async () => {
    //     //     const res = await getOptionByIdQuestion('6646d4c193f595b4a8215f42');
    //     //     console.log(' question :', res.data.exam_question_response);
    //     //     setQuestions(res.data.exam_question_response);
    //     // };

    // }, []);
    // Dùng để đếm số để render Component
    const [count, setCount] = useState(0);

    const [index, setIndex] = useState(0);

    const [arrayRandomRes, setArrayRandomRes] = useState([]);

    const [arrayRandomUI, setArrayRandomUI] = useState([]);

    const [dataRes, setDataRes] = useState({
        question: '',
        options: [],
        correct_answer: '',
        filename: '',
        mean: '',
        question_type: '',
    });

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

    function checkResult() {
        if (inputValue === dataRes.correct_answer.toLowerCase() || inputValue === dataRes.correct_answer) {
            setRightResult(true);
        } else {
            setErrortResult(true);
        }
        setCheck(true);
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    const GetOption = async (id) => {
        const res = await getOptionByIdQuestion(id);
        console.log(res);
        console.log(' question :', res.data.exam_options);
        setOption(res.data.exam_options);
    };
    useEffect(() => {
        // Random 0->2 phục vụ cho random giao diện
        function createArrayRandomUI(length) {
            const numbers = [];
            let count = [0, 0, 0]; // Số lần xuất hiện của mỗi số

            for (let i = 0; i < length; i++) {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * 4); // Tạo số ngẫu nhiên từ 0 đến 2
                } while (randomNumber === numbers[i - 1] && count[randomNumber] >= 2); // Kiểm tra số ngẫu nhiên có trùng với số trước đó và đã xuất hiện quá 2 lần chưa

                numbers.push(randomNumber);
                count[randomNumber]++;
            }
            return numbers;
        }
        //Random 0->4 phục vụ cho random câu hỏi
        function createArrayRandomRes(length) {
            const numbers = [];
            let lastNumber = -1; // Số trước đó

            for (let i = 0; i < length; i++) {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * 5); // Tạo số ngẫu nhiên từ 0 đến 4
                } while (randomNumber === lastNumber); // Kiểm tra số ngẫu nhiên có trùng với số trước đó không

                numbers.push(randomNumber);
                lastNumber = randomNumber;
            }
            return numbers;
        }
        const GetQuestion = async () => {
            const res = await getAllQuestionExamByIdExam('6646d4c193f595b4a8215f42');
            console.log(' question :', res.data.exam_question_response[0]._id);
            const idQuestion = await res.data.exam_question_response[0]._id;
            console.log(idQuestion);
            const option = await getOptionByIdQuestion(idQuestion);
            console.log('option :: ', option);
            console.log(' question :', option.data.exam_options);
            setOption(option.data.exam_options);
            setQuestions(res.data.exam_question_response);
        };
        GetQuestion();

        //Lưu mãng từ 0->2 để random Giao diện
        setArrayRandomUI(createArrayRandomUI(20));

        setArrayRandomRes(createArrayRandomRes(20));

        setDataRes({
            question: datas[index].question,
            options: datas[index].options,
            correct_answer: datas[index].correct_answer,
            filename: datas[index].filename,
            mean: datas[index].mean,
            truefalse: datas[index].truefalse,
            correct_answer_truefalse: datas[index].correct_answer_truefalse,
            question_type: datas[index].question_type,
        });
        if (dataRes.question_type === 'multichoise') {
            setCount(0);
        } else if (dataRes.question_type === 'truefalse') {
            setCount(3);
        } else if (dataRes.question_type === 'fil') {
            setCount(1);
        } else if (dataRes.question_type === 'listen') {
            setCount(2);
        }
    }, []);
    console.log(arrayRandomRes);
    function handleOnClick() {
        // Nếu process đạt 100% thì return
        if (process === 100) {
            return;
        }
        setCheck(false);
        GetOption(questions[index]._id);
        console.log('questionsid :', questions[index]._id);
        setRightResult(false);

        setErrortResult(false);

        setIndex((n) => n + 1);

        if (dataRes.question_type === 'multichoise') {
            setCount(0);
        } else if (dataRes.question_type === 'truefalse') {
            setCount(3);
        } else if (dataRes.question_type === 'fil') {
            setCount(1);
        } else if (dataRes.question_type === 'listen') {
            setCount(2);
        }
        console.log(count);

        // setCount(arrayRandomUI[index]);
        setProcess((n) => n + 5);
        setDataRes({
            question: datas[arrayRandomRes[index]].question,
            options: datas[arrayRandomRes[index]].options,
            correct_answer: datas[arrayRandomRes[index]].correct_answer,
            filename: datas[arrayRandomRes[index]].filename,
            mean: datas[arrayRandomRes[index]].mean,
            truefalse: datas[arrayRandomRes[index]].truefalse,
            correct_answer_truefalse: datas[arrayRandomRes[index]].correct_answer_truefalse,
            question_type: datas[arrayRandomRes[index]].question_type,
        });
    }

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" flex w-full justify-center items-center gap-2 mt-7">
                <IconXCircle color={'#3C79FE'} />
                <div className=" w-3/4   flex justify-center items-center h-1.5 bg-gray-200 rounded-full  dark:bg-gray-700">
                    <LoadingProgressBar percent={process} />
                </div>
            </div>
            {/* <Start /> */}
            <RenderComponentUnitQuiz
                multipleChoice={
                    <Multiplechoice
                        option={dataRes.options}
                        checkresult={check}
                        correctAnswer={dataRes.correct_answer}
                        question={dataRes.question}
                    />
                }
                fillInTheBlank={
                    <FillInTheBlankReview
                        inputValue={inputValue}
                        right={resultRight && true}
                        error={resultError && true}
                        handleChange={handleChange}
                        result={dataRes.correct_answer}
                        mean={dataRes.mean}
                    />
                }
                listen={
                    <Listen
                        inputValue={inputValue}
                        right={resultRight && true}
                        error={resultError && true}
                        handleChange={handleChange}
                        result={dataRes.correct_answer}
                        mean={dataRes.mean}
                    />
                }
                truefalse={
                    <TrueFalse
                        option={dataRes.options}
                        checkresult={check}
                        correctAnswer={dataRes.correct_answer}
                        question={dataRes.question}
                    />
                }
                count={dataRes.question_type}
            />

            <div className=" w-full py-10 flex justify-around items-center border-t-2 border-black">
                <Button
                    icon={false}
                    color={'primary'}
                    onClick={check ? handleOnClick : checkResult}
                    className="w-3/4"
                    title="Tiếp tục"></Button>
            </div>
        </div>
    );
}
