// import { getLessons } from '../../services/lessonAPI';
import { getLessons } from '../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../services/unitAPI';
import { useEffect, useState } from 'react';
import { getAllQuestionExamByIdExam } from '../../../services/quizAPI';
import { getExamByIdExam } from '../../../services/quizAPI';
// import { TableData, JsonUI } from './components/DataUI';

import { getVocabularyByUinit } from '../../../services/vocabulary';

import { CardView, TableData } from './components';
import { useParams } from 'react-router-dom';

export default function ExamDetails() {
    const [units, setUnits] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [exam, setExam] = useState([]);
    // const [file, setFile] = useState(null);
    const [nameLesson, setNameLesson] = useState('Programing');
    const [nameUnit, setNameUnit] = useState('');
    const [idLesson, setIdLesson] = useState('');
    const [idUnit, setItUnit] = useState('');
    let { idquiz } = useParams();

    const handleSetIdLesson = (data) => {
        setIdLesson(data);
    };

    const handleSetIdUnit = (data) => {
        setItUnit(data);
    };

    useEffect(() => {
        async function GetVocabulary() {
            console.log('message idunit', idUnit === '');
            if (idUnit !== '') {
                const res = await getVocabularyByUinit(idUnit);
                setVocabulary(res.vocabulary);
            }
        }
        async function GetLessons() {
            const res = await getLessons();
            const lessondata = await res.data;
            setLesson(lessondata);
            if (idLesson !== '' || idLesson !== null) {
                const data = await lessondata.filter((v) => v._id === idLesson);
                setNameLesson(data[0].name);
            }
        }
        async function GetQuestions() {
            const res = await getAllQuestionExamByIdExam(idquiz);
            setQuestions(res.data.exam_question_response);
            console.log('question :', res.data.exam_question_response);
        }

        async function GetExam() {
            const res = await getExamByIdExam(idquiz);
            setExam(res.data);
            setIdLesson(res.data.lesson_id);
            setItUnit(res.data.unit_id);
        }

        async function GetUnits() {
            if (idLesson !== '' || idLesson !== null) {
                const res = await getUnitByIdLesson(idLesson);
                console.log('message aaa : ', res);
                if (res !== null || res !== '') {
                    const unitdata = await res.unit;
                    const data = await unitdata.filter((v) => v._id === idUnit);
                    setUnits(unitdata);
                    setNameUnit(data[0].name);
                }
            }
        }
        GetExam();
        GetUnits();
        GetLessons();
        GetQuestions();
        GetVocabulary();
    }, [idLesson, idUnit]);
    return (
        <div className="">
            <CardView
                sendidunit={handleSetIdUnit}
                nameUnit={nameUnit}
                nameExam={exam.title}
                id={exam._id}
                dataunit={units}
                sendidlesson={handleSetIdLesson}
                nameLesson={nameLesson}
                datalesson={lesson}>
                <>
                    <table className=" mt-6 w-full border-primary-black border-[2px] ">
                        <tr className=" justify-between items-center bg-neutral-grey  ">
                            <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                Câu hỏi
                            </th>
                            <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                Loại
                            </th>
                            <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                Đáp án
                            </th>
                        </tr>
                        {questions !== null && (
                            <>
                                {questions.map((v, i) => {
                                    return (
                                        <TableData
                                            idquestion={v._id}
                                            idexam={idquiz}
                                            lesson={nameLesson}
                                            unit={nameUnit}
                                            key={v._id}
                                            content={v.content}
                                            type={v.type}
                                            result={v.correct_answer}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </table>
                </>
            </CardView>
        </div>
    );
}
