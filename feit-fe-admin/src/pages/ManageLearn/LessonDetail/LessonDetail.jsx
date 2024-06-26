import { NavLink, Outlet } from 'react-router-dom';
import { Button, InputSection } from '../../../components';
import { IconArrowUpLeft } from '../../../svgs';
import { CardLesson, CardUnit, CardCourse } from './component';
import { useEffect, useState } from 'react';
import { getLessonByIdCourse, getLessonById } from '../../../services/lessonAPI';
import { getUnitByIdLesson } from '../../../services/unitAPI';
import { getVocabularyByUinit } from '../../../services/vocabulary';
import { useParams } from 'react-router-dom';
import { deleteVocabulary } from '../../../services/vocabulary';
export default function LessonDetail() {
    const [lesson, setLesson] = useState([]);
    const [unit, setUnit] = useState([]);
    const [isRender, setIsRender] = useState(0);

    let { idlesson } = useParams();

    const handleSetIsRender = (value) => {
        setIsRender(n => n + value)
    }

    useEffect(() => {
        async function GetUnit() {
            const res = await getUnitByIdLesson(idlesson);
            console.log('res unit ', res);
            setUnit(res.unit);
        }

        async function GetLessonById() {
            const res = await getLessonById(idlesson);
            console.log('lesson : ', res);
            setLesson(res.lesson);
        }
        GetLessonById();
        GetUnit();
    }, [isRender]);

    return (
        <div className="">
            <NavLink to="/manage/learn/lesson">
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
                            <div className=" w-1/3">
                                <CardLesson id={idlesson} name={lesson.name} quantityUnit={lesson.count_unit} />
                            </div>
                            <div className=" w-3/4 grid grid-cols-2 gap-4">
                                {unit !== null && (
                                    <>
                                        {unit.map((v) => {
                                            return <CardUnit render={handleSetIsRender} key={v._id} idUnit={v._id} name={v.name} />;
                                        })}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
