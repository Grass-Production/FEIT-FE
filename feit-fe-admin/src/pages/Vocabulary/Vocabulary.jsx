import { getLessons } from '../../services/lessonAPI';
import { getUnits, getUnitByIdLesson } from '../../services/unitAPI';
import { useEffect, useState } from 'react';
import { TableData, JsonUI } from './components/DataUI';
import { HeaderSearch } from '../../layouts';
import { useParams } from 'react-router-dom';
// import { PopUpCreate } from '../Unit/components';
import { PopUpCreate } from './components';
import { getVocabulary } from '../../services/vocabulary';
export default function UnitDetails() {
    const [units, setUnits] = useState([]);
    const [vocabulary, setVocabulary] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [changeUI, setChangeUI] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    function handleChangeUI(changeUI) {
        setChangeUI(changeUI);
    }
    function handleShowPopUp(showPopUp) {
        setShowPopUp(showPopUp);
    }
    let { lessonid } = useParams();

    useEffect(() => {
        async function GetVocabulary() {
            const res = await getVocabulary();
            setVocabulary(res);
        }
        async function GetLessons() {
            const res = await getLessons();
            setLesson(res);
        }
        GetLessons();
        async function GetUnits() {
            const res = await getUnits();
            setUnits(res);
        }
        GetVocabulary();
        GetUnits();
    }, []);

    return (
        <div className="">
            <div className=" mb-12">
                <HeaderSearch
                    handleShowPopUp={handleShowPopUp}
                    handleChangeUI={handleChangeUI}
                    link={'/unit/'}
                    id={'_id'}
                    filter={lesson}
                />
            </div>
            {showPopUp && <PopUpCreate handleClose={handleShowPopUp} lesson={lesson} />}
            {changeUI ? (
                <div className=" h-[60vh] overflow-auto">
                    <TableData data={vocabulary} />
                </div>
            ) : (
                <div className=" h-[60vh] overflow-auto">
                    <JsonUI data={vocabulary} />
                </div>
            )}
        </div>
    );
}
