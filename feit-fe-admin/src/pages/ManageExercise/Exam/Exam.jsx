// import { getLessons } from '../../services/lessonAPI';
import { getLessons } from '../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../services/unitAPI';
import { useEffect, useState } from 'react';
// import { TableData, JsonUI } from './components/DataUI';

import { getVocabularyByUinit } from '../../../services/vocabulary';
import { Loading } from '../../../components';
import { CardView, TableData } from './components';
import { NavLink } from 'react-router-dom';
import { getAllExam, getManyExamByIdUnit } from '../../../services/exerciseAPI';
export default function Exam() {
    const [units, setUnits] = useState([]);
    const [lesson, setLesson] = useState([]);

    // const [file, setFile] = useState(null);
    const [nameLesson, setNameLesson] = useState('Programing');
    const [nameUnit, setNameUnit] = useState('');
    const [idLesson, setIdLesson] = useState('');
    const [idUnit, setItUnit] = useState('');
    const [exams, setExams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
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
        async function GetAllExams() {
            if (idUnit !== '') {
                const manyExams = await getManyExamByIdUnit(idUnit);
                setExams(manyExams.data);
                setIsLoading(false);
                console.log('manyExams.data', manyExams.data);
                return;
            }
            const res = await getAllExam();
            setIsLoading(false);

            setExams(res.data);
        }

        GetAllExams();
        GetUnits();
        GetLessons();
        // GetVocabulary();
    }, [idLesson, idUnit]);
    return (
        <div className="">
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <CardView
                        sendidunit={handleSetIdUnit}
                        nameUnit={nameUnit}
                        dataunit={units}
                        sendidlesson={handleSetIdLesson}
                        nameLesson={nameLesson}
                        datalesson={lesson}>
                        <>
                            <table className=" mt-6 w-full border-primary-black border-[2px] ">
                                <tr className=" justify-between items-center bg-neutral-grey  ">
                                    <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                        Tiêu đề bài kiểm tra
                                    </th>
                                    {/* <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                    Chủ đề
                                </th>
                                <th className="text-start px-5 border border-primary-black  py-2 text-button-1 font-button-1 text-primary-black font-plusjakartasans">
                                    Chương
                                </th> */}
                                </tr>
                                {exams !== null && (
                                    <>
                                        {exams.map((v, i) => {
                                            return <TableData idExam={v._id} key={v._id} title={v.title} />;
                                        })}
                                    </>
                                )}
                            </table>
                        </>
                    </CardView>
                </div>
            )}
        </div>
    );
}
