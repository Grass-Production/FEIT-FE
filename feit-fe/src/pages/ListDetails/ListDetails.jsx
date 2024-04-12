import { NavLink } from 'react-router-dom';
import { IconArrowUpLeft, IconDelete } from '../../svgs';
import { CardsListDetails } from './component';

export default function ListDetails() {
    const datas = [
        {
            work: 'Function',
            programing: 'Lập trình',
        },
        {
            work: 'Algorithm',
            programing: 'Lập trình',
        },
        {
            work: 'Push notification ',
            programing: 'Lập trình di động',
        },
        {
            work: 'Animation',
            programing: 'Lập trình game',
        },
        {
            work: 'Index',
            programing: 'Chỉ mục',
        },
    ];
    return (
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
                    return <CardsListDetails key={index} work={value.work} programing={value.programing} />;
                })}
            </div>
        </div>
    );
}
