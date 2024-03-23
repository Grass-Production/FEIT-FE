export const LessonCard = ({ name = null, img = '/src/assets/images/img-card.jpg' }) => {
    return (
        <div className=" ">
            <div className="">
                <div
                    className={` max-h-72 bg-no-repeat bg-contain bg-center bg-[url(${img})] h-72 overflow-hidden rounded-lg `}>
                    {/* <img className="object-cover" src="/src/assets/images/img-card.jpg" alt="" /> */}
                </div>
                {name !== null && (
                    <h1 className="truncate overflow-hidden whitespace-nowrap mt-3 text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-3">
                        {name}
                    </h1>
                )}
            </div>
        </div>
    );
};

export const LessonLoading = () => {
    return (
        <div className=" animate-pulse pr-8">
            <div className="">
                <div className=" h-80 overflow-hidden rounded-lg mb-3 ">
                    <div className=" bg-gray-500 w-full h-full "></div>
                </div>
                <h1 className=" text-Hlg mb-3 bg-gray-500"></h1>
            </div>
        </div>
    );
};
