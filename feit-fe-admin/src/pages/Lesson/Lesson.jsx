import { Button, InputField } from '../../components';
import { IconSearch, IconPlusCircle, IconDelete, IconPencil } from '../../svgs';
import { getLessons } from '../../services/lessonAPI';
import { useEffect, useState } from 'react';
import { TableData } from './components';
import { HeaderSearch } from '../../layouts';
export default function HomePage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function GetLessons() {
            const res = await getLessons();
            setData(res);
        }
        GetLessons();
    }, []);
    console.log(data);
    return (
        <div className="">
            <div className=" mb-12">
                <HeaderSearch link={'/'} id={'course_id'} filter={data} />
            </div>
            <div className=" h-[60vh] overflow-auto">
                <TableData data={data} />
            </div>
        </div>
    );
}
