import { CardsLeaderBoard } from './component';

export default function LeaderBoard() {
    const datas = [
        {
            name: 'Đình hoàng',
            score: '340',
        },
        {
            name: 'Nhật Duật',
            score: '330',
        },
        {
            name: 'Hoài Phong',
            score: '320',
        },
    ];
    return (
        <div className=" px-10">
            <h1 className=" mt-7 text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-1">
                Bảng xếp hạng của tuần
            </h1>
            <h1 className="text-center text-heading-7 font-plusjakartasans font-heading-7 text-secondary-gray mb-8">
                Bảng xếp hạng của tuần
            </h1>
            <div className=" border-[4px] w-3/5 max-w-3xl border-secondary-gray rounded-xl p-6 mx-auto">
                {datas.map((value, index) => {
                    return <CardsLeaderBoard key={index} index={index + 1} name={value.name} score={value.score} />;
                })}
            </div>
        </div>
    );
}
