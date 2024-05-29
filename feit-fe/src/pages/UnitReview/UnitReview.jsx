import { useEffect, useState } from 'react';
import { Button, LoadingProgressBar } from '../../components';
import { RenderComponentUnitReview } from '../../untils/renderComponentUnitReview';
import { IconXCircle } from '../../svgs';
import { Multiplechoice, FillInTheBlankReview, Listen } from './component';
import 'animate.css';

export default function UnitReview() {
    const datas = [
        {
            id: '6611a3c017dae17cd8ca050b',
            question: 'What is the capital of France?',
            options: ['Phong', 'London', 'Berlin', 'Rome'],
            correct_answer: 'London',
            mean: 'Anh',
            explanation: '',
            question_type: 'checkbox',
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
            correct_answer: 'Ha Noi',
            explanation: '',
            mean: 'Vietnam',
            question_type: 'checkbox',
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
            correct_answer: 'Seoul',
            mean: 'Hàn',
            explanation: '',
            question_type: 'checkbox',
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
            correct_answer: 'Bangkok',
            mean: 'Thái',
            explanation: '',
            question_type: 'checkbox',
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
            correct_answer: 'Washington',
            mean: 'Mỹ',
            explanation: '',
            question_type: 'checkbox',
            level: 0,
            filename: '',
            audio_duration: '',
            is_complete: 0,
            created_at: '0001-01-01T00:00:00Z',
            updated_at: '2024-04-06T19:38:49.264Z',
            who_updates: 'John Doe',
        },
    ];
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

    useEffect(() => {
        // Random 0->2 phục vụ cho random giao diện
        function createArrayRandomUI(length) {
            const numbers = [];
            let count = [0, 0, 0]; // Số lần xuất hiện của mỗi số

            for (let i = 0; i < length; i++) {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * 3); // Tạo số ngẫu nhiên từ 0 đến 2
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
        //Lưu mãng từ 0->2 để random Giao diện
        setArrayRandomUI(createArrayRandomUI(20));

        setArrayRandomRes(createArrayRandomRes(20));

        setDataRes({
            question: datas[index].question,
            options: datas[index].options,
            correct_answer: datas[index].correct_answer,
            filename: datas[index].filename,
            mean: datas[index].mean,
        });
    }, []);

    function handleOnClick() {
        // Nếu process đạt 100% thì return
        if (process === 100) {
            return;
        }
        setCheck(false);

        setRightResult(false);

        setErrortResult(false);

        setIndex((n) => n + 1);

        setCount(arrayRandomUI[index]);

        setProcess((n) => n + 5);

        setDataRes({
            question: datas[arrayRandomRes[index]].question,
            options: datas[arrayRandomRes[index]].options,
            correct_answer: datas[arrayRandomRes[index]].correct_answer,
            filename: datas[arrayRandomRes[index]].filename,
            mean: datas[arrayRandomRes[index]].mean,
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

            <RenderComponentUnitReview
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
                count={count}
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
