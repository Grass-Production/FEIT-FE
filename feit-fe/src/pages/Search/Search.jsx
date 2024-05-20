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
        const timeout = setTimeout(() => {
            getApi();
        }, 100);

        return () => clearTimeout(timeout);
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
        // w-3/5 mx-auto max-w-3xl mb-12 border-none
        <div className=" px-10">
            <div className=" flex justify-center items-center gap-5">
                <h1 className=" text-center text-heading-3 font-bitter font-heading-3 text-primary-black">Tìm kiếm</h1>
                <IconSearch sizew="40" sizeh="41" />
            </div>
            <div className="bg-[#fff] w-3/5 mx-auto max-w-3xl mb-12 p-2 border border-primary-black">
                <div className=" bg-[#fff] px-4 py-2 border border-primary-black  flex justify-center items-center  ">
                    <IconSearch sizew="24" sizeh="24" />
                    <InputField
                        value={value}
                        placeholder={'Tìm kiếm từ vựng'}
                        className=" w-full outline-none p-1 rounded-none border-none"
                        onChange={(event) => setValue(event.target.value)}
                    />
                </div>
            </div>
            {words != null && (
                <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                    {words.map((value, index) => {
                        return (
                            <CardsSearch
                                onClick={() => handleGetWord(value.word)}
                                key={index}
                                idVocabulary={value._id}
                                word={value.word}
                                programing={value.field_of_it}
                                partofspeech={value.part_of_speech}
                                pronunciation={value.pronunciation}
                                example={value.example_vie}
                                sound={value.link_url}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
