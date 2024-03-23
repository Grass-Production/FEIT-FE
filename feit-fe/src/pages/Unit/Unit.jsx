import { useState, useEffect, useRef } from 'react';
import { Button, LoadingProgressBar } from '../../components';
import { Listen, Example, FillInTheBlank, PopUp, Test } from './component';
import { RenderComponentUnit } from '../../untils/renderComponentUnit';
import 'animate.css';

import { useParams } from 'react-router-dom';
import { getVocabulary } from '../../services/vocabulary';
export default function Unit() {
    // Lấy lessonId và unitId
    let { lessonid, unitid } = useParams();
    const [vocabularys, setVocabularys] = useState([]);
    const [vocabulary, setVocabulary] = useState({
        word: '',
        part_of_speech: '',
        pronunciation: '',
        example: '',
        field_of_it: '',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getVocabulary();
                // vocabularyRef.current = res;
                const data = await res.filter((value) => {
                    return value.lesson_id === lessonid;
                });
                setVocabulary({
                    word: res[index].word,
                    part_of_speech: res[index].part_of_speech,
                    pronunciation: res[index].pronunciation,
                    example: res[index].example,
                    field_of_it: res[index].field_of_it,
                });

                setVocabularys(res);

                // setLoading(!loading);

                // console.log(vocabularyRef.current);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    // Dùng để đếm số để render Component
    const [count, setCount] = useState(0);
    // vocabular
    const [index, setIndex] = useState(0);
    // Dùng để lưu phần trăm
    const [process, setProcess] = useState(0);
    // Dùng ẩn hiện pop up
    const [showpopup, setShowPopup] = useState(false);

    // const ListenComponent = <Listen word={vocabularyRef.current[index].word} mean={'Thuật toán'} />;

    // handleOnClick : Xử lý điều kiện render component bằng count và process để hiển thị thành phần trăm

    function handleOnClick() {
        // Nếu process đạt 100% thì return
        if (process === 100) {
            return;
        }
        // Nếu
        if (process === 40) {
            setIndex((n) => n);
            console.log('process == 50');
        } else if (count === 1) {
            setIndex((n) => n + 1);
            console.log('count === 1');
        }
        setVocabulary({
            word: vocabularys[index].word,
            part_of_speech: vocabularys[index].part_of_speech,
            pronunciation: vocabularys[index].pronunciation,
            example: vocabularys[index].example,
            field_of_it: vocabularys[index].field_of_it,
        });

        if (process === 50) {
            setCount((n) => n - 1);
        }
        setCount((n) => (n + 1) % 3);
        setProcess((n) => n + 10);
        console.log(count);
        console.log(process);
    }

    function handlePopUp() {
        setShowPopup(!showpopup);
    }

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" w-3/4 mx-auto mt-7 flex h-1.5 bg-gray-200 rounded-full  dark:bg-gray-700">
                {/* <div
                    className="flex flex-col justify-center rounded-full  bg-primary-blue-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-primary-blue-500"
                    style={{ width: `${process}%` }}></div> */}
                <LoadingProgressBar percent={process} />
            </div>
            <h1>{count}</h1>
            <h1>{index}</h1>
            <h1>{vocabulary.word}</h1>
            <RenderComponentUnit
                listen={<Listen word={vocabulary.word} mean={'Thuật toán'} />}
                example={<Example exampleen={vocabulary.example} examplevn={vocabulary.example} />}
                fillInTheBlank={<FillInTheBlank word={''} />}
                test={<Test />}
                count={process === 50 ? 3 : count}
            />

            <div className=" w-full py-10 flex justify-around items-center border-t-2 border-black">
                {count !== 2 ? (
                    <>
                        <Button
                            icon={false}
                            color={'primary'}
                            onClick={handleOnClick}
                            className=" w-1/4 py-6"
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
            </div>
            {showpopup && (
                <div className={showpopup ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                    <PopUp OnClose={handlePopUp} />
                </div>
            )}
        </div>
    );
}
