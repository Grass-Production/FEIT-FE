export const LessonCard = ({ name = null, img = '' }) => {
    return (
        <div className="">
            <div className="">
                <div className=" h-80 overflow-hidden rounded-lg  ">
                    <img className="object-cover" src="/src/assets/images/img-card.jpg" alt="" />
                </div>
                {name !== null && <h1 className="mt-3 text-Hlg mb-3">{name}</h1>}
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
