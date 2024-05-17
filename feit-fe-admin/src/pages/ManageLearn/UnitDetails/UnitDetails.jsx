import { NavLink, Outlet } from 'react-router-dom';
import { Button, InputSection } from '../../../components';

import { IconArrowUpLeft } from '../../../svgs';
import { CardLesson, CardUnit, CardCourse } from './component';
import { useEffect, useState } from 'react';
import { getLessonByIdCourse, getLessonById } from '../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../services/unitAPI';
import { getVocabularyByUinit } from '../../../services/vocabulary';
import { useParams } from 'react-router-dom';

export default function UnitDetails() {
    const [lesson, setLesson] = useState([]);
    const [unit, setUnit] = useState([]);
    const [vocabulary, setVocabulary] = useState([]);
    let { idlesson, idunit } = useParams();

    useEffect(() => {
        async function GetLessonByIdCourse() {
            const res = await getLessonByIdCourse();
            console.log(res.lesson);
            setLesson(res.lesson);
        }

        async function GetUnit() {
            const res = await getUnitByIdLesson(idlesson);
            console.log(res);
            setUnit(res.unit);
        }
        async function GetLessonById() {
            const res = await getLessonById(idlesson);
            console.log(res);
            setLesson(res.lesson);
        }

        async function GetVocabulary() {
            const res = await getVocabularyByUinit(idunit);
            setVocabulary(res.vocabulary.vocabulary);
            console.log('res voca', res);
        }

        // GetLessonByIdCourse();
        GetLessonById();
        GetUnit();
    }, []);

    return (
        <div className="">
            <NavLink to="/manage/learn">
                <Button icon={true} title="Trở về" left={true}>
                    <IconArrowUpLeft />
                </Button>
            </NavLink>

            <div className="px-8 py-8 border bg-primary-grey border-primary-black">
                <div className=" border-b border-primary-black pb-2 mb-10">
                    <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans">Chủ đề</h1>
                </div>

                <div className=" border border-primary-black">
                    <div className=" border-b px-8 py-8 border-dashed border-primary-black">
                        <CardCourse />
                    </div>

                    <div className=" px-8 py-8 bg-white">
                        <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans">Chủ đề</h1>
                        <div className="flex  justify-between">
                            <div className="">
                                <CardLesson id={idlesson} name={lesson.name} quantityUnit={lesson.count_unit} />
                            </div>
                            <div className=" w-3/4 grid grid-cols-2 gap-4">
                                {unit.map((v) => {
                                    return <CardUnit key={v._id} idUnit={v._id} name={v.name} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
