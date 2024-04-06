import { IconNote } from '../../../svgs';

export const Test = () => {
    return (
        <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div className=" flex gap-4 justify-center items-center">
                <IconNote />
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-secondary-gray">Tip ghi nhớ</h1>
            </div>
            <div className="">
                <h1 className=" text-center text-heading-3 font-heading-3 font-bitter text-foundation-brightcyan-700">
                    “Các bạn nên ghi chú những từ vựng này để ghi nhớ tốt hơn nhé !”
                </h1>
            </div>
        </div>
    );
};
