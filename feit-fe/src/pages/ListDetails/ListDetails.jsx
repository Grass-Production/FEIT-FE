import { NavLink, useParams } from 'react-router-dom';
import { IconArrowUpLeft, IconDelete } from '../../svgs';
import { CardsListDetails } from './component';
import { Loading } from '../../components/Loading/Loading';
import { useEffect, useState } from 'react';
import { getMarkVocabulary } from '../../services/masklistAPI';
import { PopUp } from '../../components/PopupVocabulary';

export default function ListDetails() {
    let { idlist } = useParams();
    const [maskVocabulary, setMaskVocabulary] = useState([]);
    const [totalVocabulary, setTotalVocabulary] = useState(null);
    const datas = [
        {
            word: 'Function',
            _id: '1',
            programing: 'Lập trình',
            link_url: 'a',
            part_of_speech: 'a',
            pronunciation: 'a',
            explain_vie: 'a',
        },
        {
            _id: '1',
            word: 'Algorithm',
            programing: 'Lập trình',
            link_url: 'a',
            part_of_speech: 'a',
            pronunciation: 'a',
            explain_vie: 'a',
        },
        {
            _id: '1',
            word: 'Push notification ',
            programing: 'Lập trình di động',
            link_url: 'a',
            part_of_speech: 'a',
            pronunciation: 'a',
            explain_vie: 'a',
        },
        {
            _id: '1',
            word: 'Animation',
            programing: 'Lập trình game',
            link_url: 'a',
            part_of_speech: 'a',
            pronunciation: 'a',
            explain_vie: 'a',
        },
        {
            _id: '1',
            word: 'Index',
            programing: 'Chỉ mục',
            link_url: 'a',
            part_of_speech: 'a',
            pronunciation: 'a',
            explain_vie: 'a',
        },
    ];
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const GetMaskVocabulary = async () => {
            const res = await getMarkVocabulary(idlist);
            console.log(res);
            setTotalVocabulary(res.mark_vocabulary.total);
            setMaskVocabulary(res.mark_vocabulary.mark_to_favourite);
            if (res.status === 'success') {
                setLoading(false);
            }
            // console.log(res.mark_vocabulary.mark_to_favourite);
        };
        GetMaskVocabulary(0);
    }, []);
    return (
        <>
            {loading === false ? (
                <div className=" px-10 mt-7">
                    <div className=" flex justify-start items-center mb-3">
                        <NavLink to="/list">
                            <div className=" border border-secondary-gray rounded-md p-[6px]">
                                <IconArrowUpLeft />
                            </div>
                        </NavLink>
                        <h1 className=" w-full text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black ">
                            Danh sách của bạn
                        </h1>
                    </div>
                    <h1 className=" text-center text-heading-7 font-heading-7 mb-12 font-plusjakartasans text-secondary-gray">
                        {totalVocabulary} từ vựng
                    </h1>
                    <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                        {maskVocabulary.map((value, index) => {
                            return (
                                <CardsListDetails
                                    idVocabulary={value.vocabulary._id}
                                    key={index}
                                    word={value.vocabulary.word}
                                    programing={value.vocabulary.programing}
                                    link_url={value.vocabulary.link_url}
                                    part_of_speech={value.vocabulary.part_of_speech}
                                    pronunciation={value.vocabulary.pronunciation}
                                    explain_vie={value.vocabulary.explain_vie}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
