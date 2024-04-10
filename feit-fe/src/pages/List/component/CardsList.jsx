import { IconHeart } from '../../../svgs';

export const CardFavoritesList = ({ vocabulary = '5' }) => {
    return (
        <div className=" flex h-full  justify-center items-center shadow-card-home border-[4px] bg-gradient-to-r from-[#FDCBF1] via-pink-150 to-[#E6DEE9] border-secondary-gray rounded-xl px-3 ">
            <div className=" flex flex-col justify-center items-center">
                <IconHeart color="#343330" size="80" />
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans mt-6 text-primary-black">
                    Danh sách yêu thích
                </h1>
                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray">
                    {vocabulary} từ vựng
                </h1>
            </div>
        </div>
    );
};
