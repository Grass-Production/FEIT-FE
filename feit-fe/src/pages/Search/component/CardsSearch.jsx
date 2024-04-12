import { IconHeartSearch } from '../../../svgs';

export const CardsSearch = ({ word = 'Funcion', programing = 'Lập trình' }) => {
    return (
        <div className=" border-b border-secondary-gray px-3 py-2 mb-8 ">
            <div className=" flex justify-between items-center">
                <div className="">
                    <h1 className=" text-body-1 mb-3 font-body-1 font-plusjakartasans text-primary-black">{word}</h1>
                    <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray">
                        {programing}
                    </h1>
                </div>
                <div className="">
                    <IconHeartSearch />
                </div>
            </div>
        </div>
    );
};
