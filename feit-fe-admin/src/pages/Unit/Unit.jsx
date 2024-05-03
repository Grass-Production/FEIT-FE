import { getLessons } from '../../services/lessonAPI';
import { getUnits, getUnitByIdLesson } from '../../services/unitAPI';
import { useEffect, useState } from 'react';
import { TableData, JsonUI } from './components/DataUI';
import { HeaderSearch } from '../../layouts';
import { PopUpCreate } from './components';
import { CardCrud, CardView, CardItem } from './components';
import { CardStatistic } from '../Course/component';
export default function HomePage() {
    const [data, setData] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [changeUI, setChangeUI] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [idLesson, setIdLesson] = useState('');
    const [nameLesson, setNameLesson] = useState('Programing');
    function handleChangeUI(changeUI) {
        setChangeUI(changeUI);
    }
    function handleShowPopUp(showPopUp) {
        setShowPopUp(showPopUp);
    }
    const handleSetIdLesson = (data) => {
        setIdLesson(data);
    };
    useEffect(() => {
        async function GetUnits() {
            const res = await getUnitByIdLesson(idLesson);
            setData(res.unit.Unit);
        }
        async function GetLessons() {
            const res = await getLessons();
            const lessondata = await res.data;
            const data = await lessondata.filter((v) => v._id === idLesson);
            setLesson(lessondata);
            setNameLesson(data[0].name);
        }
        GetLessons();
        GetUnits();
    }, [idLesson]);
    console.log(data);
    console.log(lesson);
    return (
        <div className="">
            <div className=" mb-7">
                <CardCrud />
            </div>
            <CardView nameLesson={nameLesson} sendidlesson={handleSetIdLesson} datalesson={lesson}>
                {data != null && (
                    <>
                        {data.map((v) => {
                            return <CardItem id={v._id} key={v._id} name={v.name} />;
                        })}
                    </>
                )}
            </CardView>
        </div>

        // <div className="">
        //     <div className=" mb-12">
        //         <HeaderSearch
        //             link={'/unit/'}
        //             id={'_id'}
        //             filter={lesson}
        //             handleShowPopUp={handleShowPopUp}
        //             handleChangeUI={handleChangeUI}
        //         />
        //     </div>
        //     {showPopUp && <PopUpCreate handleClose={handleShowPopUp} lesson={lesson} />}
        //     {changeUI ? (
        //         <div className=" h-[60vh] overflow-auto">
        //             <TableData data={data} />
        //         </div>
        //     ) : (
        //         <div className=" h-[60vh] overflow-auto">
        //             <JsonUI data={data} />
        //         </div>
        //     )}
        // </div>
    );
}
