import { useEffect, useState } from 'react';
import { getLessons } from '../../../services/lessonAPI';
import { CardCrud, CardView, CardItem } from './components';
import {
    createLesson,
    updateLesson,
    deleteLesson,
    createLessonFile,
    createLessonFiles,
} from '../../../services/lessonAPI';
import { Loading } from '../../../components';
export default function HomePage() {
    const [data, setData] = useState([]);
    const [courseId, setCourseId] = useState('');
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [level, setLevel] = useState(0);
    // const [file, setFile] = useState(null);
    const [render, setRender] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function GetLessons() {
            const res = await getLessons();
            setData(res.data);
            setIsLoading(false);
        }
        GetLessons();
    }, [render]);

    // const handleFileChange = (event) => {
    //     setFile(event.target.files[0]);
    // };

    // const handleCreateLessonFile = async (event) => {
    //     event.preventDefault();
    //     const res = await createLessonFile(file);
    //     console.log(res);
    // };

    const handleCreateLessonFile = async (file) => {
        const res = await createLessonFile(file);
        if (res.status === 200) {
            alert('Thêm Dữ liệu bằng file thành công');
            setRender((n) => n + 1);
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        console.log(res);
    };

    const handleCreateLessonFiles = async (event) => {
        event.preventDefault();

        const res = await createLessonFiles(courseId, name, content, level, file);
        console.log(res);
    };
    console.log(data);
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

    // const handleDelete = async (event) => {
    //     event.preventDefault();
    //     const lessonId = '661fedc181599688dbfa2b17';
    //     const res = await deleteLesson(lessonId);
    //     console.log(res);
    // };

    const handleDelete = async (lessonId) => {
        const res = await deleteLesson(lessonId);
        if (res.status === 'success') {
            alert('Xóa thành công');
            setRender((n) => n + 1);
        } else if (res.message === 'validate: Token is expired') {
            alert('Vui lòng đăng nhập');
        }
        console.log(res);
    };

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="">
                    <div className=" mb-7">
                        <CardCrud onClickAddFile={handleCreateLessonFile} />
                    </div>
                    <CardView>
                        {data !== null && (
                            <>
                                {data.map((v, i) => {
                                    return (
                                        <CardItem
                                            id={v._id}
                                            createAt={v.created_at}
                                            onClickDelete={handleDelete}
                                            key={i}
                                            name={v.name}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </CardView>
                </div>
            )}
        </div>

        // <div className="">
        //     <form onSubmit={handleCreateLessonFiles} className=" flex  flex-col">
        //         <input
        //             type="text"
        //             value={courseId}
        //             onChange={(e) => setCourseId(e.target.value)}
        //             placeholder="Id course"
        //         />
        //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        //         <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
        //         <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Level" />
        //         <input type="file" onChange={handleFileChange} />
        //         <button type="submit">Create</button>
        //     </form>

        //     <div className=" mb-12">
        //         <HeaderSearch link={'/'} id={'course_id'} filter={data} />
        //     </div>
        //     <div className=" h-[60vh] overflow-auto">
        //         <TableData data={data} />
        //     </div>
        // </div>
    );
}
