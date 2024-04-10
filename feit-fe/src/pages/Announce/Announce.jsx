import { CardsListDetails } from './component';

export default function Announce() {
    const datas = [
        {
            log: 'Bạn đã ghi danh vào chủ đề “Lập Trình”',
        },
        {
            log: 'FEIT đã thêm chủ đề “Machine Learnign” vào bài học.',
        },
        {
            log: 'FEIT đã thêm chủ đề “Machine Learnign” vào bài học.',
        },
    ];
    return (
        <div className=" px-10">
            <h1 className=" mt-7 text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-8">
                Thông báo
            </h1>
            <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">Hôm nay</h1>
                {datas.map((value, index) => {
                    return <CardsListDetails key={index} log={value.log} />;
                })}
            </div>
        </div>
    );
}
