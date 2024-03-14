import { useEffect, useState } from 'react';
import { getLessons } from '../../services/lessonAPI';
import { Choise } from './Choise';

export default function Welcome() {
    const [lessons, setLesson] = useState([]);
    const [status, setStatus] = useState(true);
    const [choise, setChoise] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getLessons();
                setLesson(res);
                setStatus(!status);
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {choise ? (
                <Choise lessons={lessons} />
            ) : (
                <div className=" p-28 m-auto">
                    <h1 className=" text-5xl text-center mb-20">Bạn là ai trong ngành IT ?</h1>
                    <div className=" flex justify-between items-center gap-8">
                        <div className=" w-full rounded-sm flex items-center justify-center h-96 bg-gray-400">
                            <h1 className=" text-2xl text-center">Người mới bắt đầu</h1>
                        </div>
                        <div className=" w-full rounded-sm flex items-center justify-center h-96 bg-gray-400">
                            <h1 className=" text-2xl text-center">Sinh viên</h1>
                        </div>
                        <div className=" w-full rounded-sm flex items-center justify-center h-96 bg-gray-400">
                            <h1 className=" text-2xl text-center">Người đang đi làm</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
