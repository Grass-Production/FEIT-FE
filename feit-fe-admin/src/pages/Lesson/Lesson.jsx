import { Button, InputField } from '../../components';
import { IconSearch, IconPlusCircle, IconDelete, IconPencil } from '../../svgs';
import { getLessons } from '../../services/lessonAPI';
import { useEffect, useState } from 'react';
import { TableData } from './components';
import { HeaderSearch } from '../../layouts';
import {
    createLesson,
    updateLesson,
    deleteLesson,
    createLessonFile,
    createLessonFiles,
} from '../../services/lessonAPI';
export default function HomePage() {
    const [data, setData] = useState([]);
    const [courseId, setCourseId] = useState('');
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [level, setLevel] = useState(0);
    const [file, setFile] = useState(null);
    const [render, setRender] = useState(0);
    useEffect(() => {
        async function GetLessons() {
            const res = await getLessons();
            setData(res);
        }
        GetLessons();
    }, [render]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleCreateLessonFile = async (event) => {
        event.preventDefault();
        const res = await createLessonFile(file);
        console.log(res);
    };

    const handleCreateLessonFiles = async (event) => {
        event.preventDefault();

        const res = await createLessonFiles(courseId, name, content, level, file);
        console.log(res);
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        const res = await createLesson({
            course_id: courseId,
            name: name,
            content: content,
            level: level,
        });
        setRender((n) => n + 1);
        console.log(res);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const lessonId = '661e94b19570433c92f0b25a';
        const res = await updateLesson(
            {
                course_id: courseId,
                name: name,
                content: content,
                level: level,
            },
            lessonId,
        );
        console.log(res);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const lessonId = '661fedc181599688dbfa2b17';
        const res = await deleteLesson(lessonId);
        console.log(res);
    };

    return (
        <div className="">
            <form onSubmit={handleCreateLessonFiles} className=" flex  flex-col">
                <input
                    type="text"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    placeholder="Id course"
                />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
                <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Level" />
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Create</button>
            </form>

            <div className=" mb-12">
                <HeaderSearch link={'/'} id={'course_id'} filter={data} />
            </div>
            <div className=" h-[60vh] overflow-auto">
                <TableData data={data} />
            </div>
        </div>
    );
}
