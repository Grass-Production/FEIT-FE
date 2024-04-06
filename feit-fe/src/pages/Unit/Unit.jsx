import { useState, useEffect, useRef } from 'react';
import { Button, LoadingProgressBar } from '../../components';
import { Listen, Example, FillInTheBlank, PopUp, Test, Finish, Score, ListVocabulary } from './component';
import { RenderComponentUnit } from '../../untils/renderComponentUnit';
import { IconXCircle } from '../../svgs';
import { NavLink, useParams } from 'react-router-dom';
import 'animate.css';

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
                const res = await getVocabulary(unitid);
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
                console.log(res);

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
    const [process, setProcess] = useState(5);
    // Dùng ẩn hiện pop up
    const [showpopup, setShowPopup] = useState(false);
    // Dung để kiểm tra kết quả
    const [resultRight, setRightResult] = useState(false);
    const [result, setResult] = useState(false);
    const [resultError, setErrortResult] = useState(false);

    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    // handleOnClick : Xử lý điều kiện render component bằng count và process để hiển thị thành phần trăm

    function checkResult() {
        if (inputValue === vocabulary.word.toLowerCase() || inputValue === vocabulary.word) {
            setRightResult(true);
        } else {
            setErrortResult(true);
        }
        setResult(true);
    }

    function handleOnClick() {
        // Nếu process đạt 100% thì return
        if (process === 100) {
            return;
        }

        setResult(false);
        setRightResult(false);
        setErrortResult(false);
        if (process === 55) {
            setCount((n) => n - 1);
            setIndex((n) => n - 1);
            if (count === 0) {
                setIndex((n) => n + 1);
                console.log('count === 1');
            }
            console.log('process == 50');
        }
        if (count === 1) {
            setIndex((n) => n + 1);
            console.log('count === 1');
        }
        // Nếu
        if (process === 25) {
            setCount((n) => n - 1);
            setIndex((n) => n - 1);
            console.log('process == 50');
        }

        setVocabulary({
            word: vocabularys[index].word,
            part_of_speech: vocabularys[index].part_of_speech,
            pronunciation: vocabularys[index].pronunciation,
            example: vocabularys[index].example,
            field_of_it: vocabularys[index].field_of_it,
        });

        setCount((n) => (n + 1) % 3);
        setProcess((n) => n + 5);
        console.log(count);
        console.log(process);
    }

    function handlePopUp() {
        setShowPopup(!showpopup);
    }

    return (
        <div className=" flex flex-col justify-between h-screen items-center">
            <div className=" flex w-full justify-center items-center gap-2 mt-7">
                <IconXCircle color={'#3C79FE'} />
                <div className=" w-3/4  flex justify-center items-center h-1.5 bg-gray-200 rounded-full  dark:bg-gray-700">
                    <LoadingProgressBar percent={process} />
                </div>
            </div>
            <RenderComponentUnit
                listen={process === 90 ? <Finish /> : <Listen word={vocabulary.word} mean={vocabulary.example} />}
                example={
                    process === 95 ? (
                        <Score score="10" />
                    ) : (
                        <Example exampleen={vocabulary.example} examplevn={vocabulary.example} />
                    )
                }
                fillInTheBlank={
                    process === 100 ? (
                        <ListVocabulary list={vocabularys.map((a, i) => a.word)} />
                    ) : (
                        <FillInTheBlank
                            word={''}
                            inputValue={inputValue}
                            right={resultRight && true}
                            error={resultError && true}
                            handleChange={handleChange}
                        />
                    )
                }
                test={<Test />}
                count={process === 25 || process == 55 ? 3 : count}
            />
            {/* <RenderComponentUnit
                listen={<Listen word={'Xin Chào'} mean={'Thuật toán'} />}
                example={<Example exampleen={'Xin Chào'} examplevn={'Xin Chào'} />}
                fillInTheBlank={<FillInTheBlank word={''} />}
                test={<Test />}
                count={process === 50 ? 3 : count}
            /> */}

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
                                onClick={result ? handleOnClick : checkResult}
                                className="w-3/4"
                                title="Tiếp tục"></Button>
                        ) : (
                            <>
                                {count !== 2 && process < 90 ? (
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
                            </>
                        )}
                    </>
                )}
            </div>
            {showpopup && (
                <div className={showpopup ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                    <PopUp
                        OnClose={handlePopUp}
                        work={vocabulary.word}
                        partofspeech={vocabulary.part_of_speech}
                        pronunciation={vocabulary.pronunciation}
                        example={vocabulary.example}
                    />
                </div>
            )}
        </div>
    );
}
