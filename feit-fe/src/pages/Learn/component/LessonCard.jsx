export const LessonCard = ({
    name = null,
    img = 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464147/feit-static/L%E1%BA%ADp%20tr%C3%ACnh.png.png',
}) => {
    return (
        <div className=" ">
            <div className="">
                <div
                    className={` max-h-72 flex items-center justify-center bg-no-repeat bg-contain bg-center  h-72 overflow-hidden rounded-lg `}>
                    <img className="" src={img} alt="" />
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
