// import { getLessons } from '../../services/lessonAPI';
import { getLessons } from '../../../services/lessonAPI';
import { getUnits, getUnitByIdLesson } from '../../../services/unitAPI';
import { useEffect, useState } from 'react';
import { TableData, JsonUI } from './components/DataUI';
import { HeaderSearch } from '../../../layouts';
import { useParams } from 'react-router-dom';
// import { PopUpCreate } from '../Unit/components';
import { PopUpCreate } from './components';
import {
    getVocabulary,
    createVocabulary,
    getVocabularyByUinit,
    updateVocabulary,
    deleteVocabulary,
    createVocabularyFile,
    getVocabularyByLesson,
} from '../../../services/vocabulary';

import { createImages } from '../../../services/imageAPI';
// import { CardStatistic } from '../../Managelearn/Course/component';
import { CardStatistic } from '../Course/component';
import { CardCrud, CardItem, CardView } from './components';
export default function UnitDetails() {
    const [units, setUnits] = useState([]);
    const [vocabulary, setVocabulary] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [changeUI, setChangeUI] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    // const [file, setFile] = useState(null);
    const [nameLesson, setNameLesson] = useState('Programing');
    const [nameUnit, setNameUnit] = useState('');
    const [idLesson, setIdLesson] = useState('');
    const [idUnit, setItUnit] = useState('');
    const [render, setRender] = useState(0);

    const handleSetIdLesson = (data) => {
        setIdLesson(data);
    };

    const handleSetIdUnit = (data) => {
        setItUnit(data);
    };

    const [formInput, setFormInput] = useState({
        word: '',
        part_of_speech: '',
        pronunciation: '',
        mean: '',
        example_vie: '',
        example_eng: '',
        explain_vie: '',
        explain_eng: '',
        field_of_it: '',
        link_url: '',
        unit_id: '',
    });

    const handleCreate = async (event) => {
        event.preventDefault();
        const res = await createVocabulary(formInput);
        console.log(res);
    };

    // const handleCreateFile = async (event) => {
    //     event.preventDefault();
    //     const res = await createVocabularyFile(file);
    //     console.log(res);
    // };

    const handleCreateFile = async (file) => {
        const res = await createVocabularyFile(file);
        if (res.status === 'success') {
            alert('Thêm bằng file thành công');
            setRender((r) => r + 1);
            console.log(res);
        }
        console.log(res);
    };

    const handleCreateImages = async (event) => {
        event.preventDefault();
        const res = await createImages(file);
        console.log(res);
    };

    const handleUpdateTest = async (event) => {
        event.preventDefault();
        const vocabularyId = '661e98b94c444275ae642ebe';
        const res = await updateVocabulary(formInput, vocabularyId);
        console.log(res);
    };

    const handleUpdate = async (id) => {
        const res = await updateVocabulary(formInput, id);
        console.log(res);
    };

    // const handleDelete = async (event) => {
    //     event.preventDefault();
    //     const vocabularyId = '662030caa497b9ef77855e50';
    //     const res = await deleteVocabulary(vocabularyId);
    //     console.log(res);
    // };

    const handleDelete = async (id) => {
        const res = await deleteVocabulary(id);
        if (res.status === 'success') {
            alert('Xóa thành công');
            setRender((n) => n + 1);
            console.log(res);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };

    function handleChangeUI(changeUI) {
        setChangeUI(changeUI);
    }
    function handleShowPopUp(showPopUp) {
        setShowPopUp(showPopUp);
    }
    let { lessonid } = useParams();

    useEffect(() => {
        async function GetVocabulary() {
            // const res = await getVocabularyByLesson(nameLesson);
            // setVocabulary(res);
            // if (nameLesson != null) {
            //     const res = await getVocabularyByLesson(nameLesson);
            //     setVocabulary(res);
            // }
            console.log('message idunit', idUnit === '');
            if (idUnit !== '') {
                const res = await getVocabularyByUinit(idUnit);
                setVocabulary(res.vocabulary);
            }
        }
        async function GetLessons() {
            const res = await getLessons();
            const lessondata = await res.data;
            console.log(lessondata);
            setLesson(lessondata);
            if (idLesson !== '' || idLesson !== null) {
                const data = await lessondata.filter((v) => v._id === idLesson);
                // console.log('data ::', data[0].name);
                // console.log('message da', data);
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
                    console.log('lessondata : ', data);
                    setNameUnit(data[0].name);
                }
            }
        }
        GetUnits();
        GetLessons();
        GetVocabulary();
    }, [idLesson, idUnit, render]);
    console.log(units);
    return (
        <div className="">
            {/* <>
                <div className="">
                    <form onSubmit={handleUpdateTest} className=" flex  flex-col">
                        <input
                            type="text"
                            name="word"
                            value={formInput.word}
                            onChange={handleChange}
                            placeholder="Word"
                        />
                        <input
                            type="text"
                            name="part_of_speech"
                            value={formInput.part_of_speech}
                            onChange={handleChange}
                            placeholder="Part of Speech"
                        />
                        <input
                            type="text"
                            name="pronunciation"
                            value={formInput.pronunciation}
                            onChange={handleChange}
                            placeholder="Pronunciation"
                        />
                        <input
                            type="text"
                            name="mean"
                            value={formInput.mean}
                            onChange={handleChange}
                            placeholder="Mean"
                        />
                        <input
                            type="text"
                            name="example_vie"
                            value={formInput.example_vie}
                            onChange={handleChange}
                            placeholder="Example (Vietnamese)"
                        />
                        <input
                            type="text"
                            name="example_eng"
                            value={formInput.example_eng}
                            onChange={handleChange}
                            placeholder="Example (English)"
                        />
                        <input
                            type="text"
                            name="explain_vie"
                            value={formInput.explain_vie}
                            onChange={handleChange}
                            placeholder="Explanation (Vietnamese)"
                        />
                        <input
                            type="text"
                            name="explain_eng"
                            value={formInput.explain_eng}
                            onChange={handleChange}
                            placeholder="Explanation (English)"
                        />
                        <input
                            type="text"
                            name="field_of_it"
                            value={formInput.field_of_it}
                            onChange={handleChange}
                            placeholder="Field of IT"
                        />
                        <input
                            type="text"
                            name="link_url"
                            value={formInput.link_url}
                            onChange={handleChange}
                            placeholder="Link URL"
                        />
                        <input
                            type="text"
                            name="unit_id"
                            value={formInput.unit_id}
                            onChange={handleChange}
                            placeholder="Unit ID"
                        />
                        <input type="file" multiple onChange={(e) => setFile(e.target.files[0])} />
                        <button type="submit">Create</button>
                    </form>
                </div>
            </> */}
            <div className=" mb-7">
                <CardCrud onClickAddFile={handleCreateFile} />
            </div>
            <CardView
                sendidunit={handleSetIdUnit}
                nameUnit={nameUnit}
                dataunit={units}
                sendidlesson={handleSetIdLesson}
                nameLesson={nameLesson}
                datalesson={lesson}>
                {vocabulary !== null && (
                    <>
                        {vocabulary.map((v) => {
                            return (
                                <CardItem
                                    id={v._id}
                                    onClickDelete={handleDelete}
                                    word={v.word}
                                    mean={v.mean}
                                    partofspeech={v.part_of_speech}
                                    pronunciation={v.pronunciation}
                                    example_eng={v.example_eng}
                                    example_vie={v.example_vie}
                                    explain_eng={v.explain_eng}
                                    explain_vie={v.explain_vie}
                                    field_of_it={v.field_of_it}
                                    link_url={v.link_url}
                                    unit_id={v.unit_id}
                                    handleChange={handleChange}
                                    onClose={handleShowPopUp}
                                    handleUpdate={handleUpdate}
                                />
                            );
                        })}
                    </>
                )}
            </CardView>
            {/* <button onClick={() => setShowPopUp(!showPopUp)}>Test Edit</button> */}
        </div>
    );
}
