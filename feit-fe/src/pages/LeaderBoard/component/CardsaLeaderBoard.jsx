export const CardsLeaderBoard = ({
    index,
    img = 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464162/feit-static/Ch%C6%B0%C6%A1ng%208.png.png',
    score,
    name,
}) => {
    return (
        <div className=" border-b border-secondary-gray px-3 py-2 mb-8 ">
            <div className=" flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <h1 className=" text-heading-7 mr-12 font-heading-7 font-plusjakartasans text-primary-blue-400">
                        {index}
                    </h1>
                    <div className=" w-9 h-9 mr-7">
                        <img src={img} className="" alt="" />
                    </div>
                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">{name}</h1>
                </div>
                <div className="">
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">{score}</h1>
                </div>
            </div>
        </div>
    );
};
