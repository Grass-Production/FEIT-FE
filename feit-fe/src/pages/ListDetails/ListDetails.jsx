import { NavLink } from 'react-router-dom';
import { IconArrowUpLeft, IconDelete } from '../../svgs';
import { CardsListDetails } from './component';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PopUp } from '../../components/PopupVocabulary';
export default function ListDetails() {
    let { idlist } = useParams();

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

    return (
        <>
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
                    {datas.length} từ vựng
                </h1>
                <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                    {datas.map((value, index) => {
                        return (
                            <CardsListDetails
                                idVocabulary={value._id}
                                key={index}
                                word={value.word}
                                programing={value.programing}
                                link_url={value.link_url}
                                part_of_speech={value.part_of_speech}
                                pronunciation={value.pronunciation}
                                explain_vie={value.explain_vie}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
