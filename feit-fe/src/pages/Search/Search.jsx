import { useState } from 'react';
import { Button, InputField } from '../../components';
import { getVocabularyByWord } from '../../services/vocabulary';
import { useEffect } from 'react';
export default function Search() {
    var data = [
        {
            title: 'a',
        },
        {
            title: 'b',
        },
        {
            title: 'c',
        },
        {
            title: 'd',
        },
    ];
    const [index, setIndex] = useState(null);

    function setIndexNe(i) {
        setIndex(i);
    }
    const [word, setWord] = useState('');
    useEffect(() => {
        async function getApi() {
            const res = await getVocabularyByWord('syntax');
            console.log(res);
        }
        getApi();
    }, []);
    return (
        // <div className="">
        //     {data.map((a, i) => {
        //         return (
        //             <Button
        //                 key={i}
        //                 title={a.title}
        //                 color={'success'}
        //                 className={'w-96'}
        //                 active={index === i}
        //                 onClick={() => setIndexNe(i)}
        //                 icon={false}></Button>
        //         );
        //     })}
        // </div>
        <div className=" px-10">
            <h1 className=" mt-7 text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-1">
                Bảng xếp hạng của tuần
            </h1>
            <h1 className="text-center text-heading-7 font-plusjakartasans font-heading-7 text-secondary-gray mb-8">
                Bảng xếp hạng của tuần
            </h1>
            <InputField value={word} onChange={(event) => setWord(event.target.value)} />
            <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">Hôm nay</h1>
            </div>
        </div>
    );
}
