import { getLessons } from '../../services/lessonAPI';
import { getUnits, getUnitByIdLesson } from '../../services/unitAPI';
import { useEffect, useState } from 'react';
import { TableData, JsonUI } from './components/DataUI';
import { HeaderSearch } from '../../layouts';
import { useParams } from 'react-router-dom';
// import { PopUpCreate } from '../Unit/components';
import { PopUpCreate } from './components';
import {
    getVocabulary,
    createVocabulary,
    updateVocabulary,
    deleteVocabulary,
    createVocabularyFile,
} from '../../services/vocabulary';
import { createImages } from '../../services/imageAPI';
export default function UnitDetails() {
    const [units, setUnits] = useState([]);
    const [vocabulary, setVocabulary] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [changeUI, setChangeUI] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [file, setFile] = useState(null);
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

    const handleCreateFile = async (event) => {
        event.preventDefault();
        const res = await createVocabularyFile(file);
        console.log(res);
    };

    const handleCreateImages = async (event) => {
        event.preventDefault();
        const res = await createImages(file);
        console.log(res);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const vocabularyId = '662030caa497b9ef77855e50';
        const res = await updateVocabulary(formInput, vocabularyId);
        console.log(res);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const vocabularyId = '662030caa497b9ef77855e50';
        const res = await deleteVocabulary(vocabularyId);
        console.log(res);
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
            <form onSubmit={handleCreateImages} className=" flex  flex-col">
                <input type="text" name="word" value={formInput.word} onChange={handleChange} placeholder="Word" />
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
                <input type="text" name="mean" value={formInput.mean} onChange={handleChange} placeholder="Mean" />
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
