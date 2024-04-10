import { IconStatuslight } from '../../../svgs';

export const CardsListDetails = ({ log = 'Bạn đã ghi danh vào chủ đề “Lập Trình”' }) => {
    return (
        <div className=" border-b border-secondary-gray px-3 py-2 mb-8 ">
            <div className=" flex justify-start items-center gap-2">
                <IconStatuslight />
                <div className="">
                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">{log}</h1>
                </div>
            </div>
        </div>
    );
};
