import { useState } from 'react';
import { Button, InputField } from '../../components';
import { getVocabularyByWord } from '../../services/vocabulary';
import { useEffect } from 'react';
import { IconSearch } from '../../svgs';
import { CardsSearch } from './component/CardsSearch';
export default function Search() {
    const datas = [
        {
            word: '',
            field_of_it: '',
        },
    ];

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
    const [words, setWord] = useState([]);
    const [value, setValue] = useState('');
    function setIndexNe(i) {
        setIndex(i);
    }
    useEffect(() => {
        async function getApi() {
            try {
                const res = await getVocabularyByWord(value);

                setWord(res.data.vocabulary);
                // if (res == null || res == '') {
                //     setWord([
                //         {
                //             word: '',
                //             field_of_it: '',
                //         },
                //     ]);
                // }
            } catch (error) {
                console.log(error);
            }
        }
        getApi();
    }, [value]);
    const handleGetWord = (word) => {
        console.log('word : ', word);
    };
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
            <div className=" flex justify-center items-center gap-5">
                <h1 className=" text-center text-heading-3 font-bitter font-heading-3 text-primary-black">Tìm kiếm</h1>
                <IconSearch sizew="40" sizeh="41" />
            </div>
            <InputField
                value={value}
                className="w-3/5 mx-auto max-w-3xl mb-12"
                onChange={(event) => setValue(event.target.value)}
            />
            {words != null && (
                <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                    {words.map((value, index) => {
                        return (
                            <CardsSearch
                                onClick={() => handleGetWord(value.word)}
                                key={index}
                                word={value.word}
                                programing={value.field_of_it}
                                partofspeech={value.part_of_speech}
                                pronunciation={value.pronunciation}
                                example={value.example_vie}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
