export const Listen = ({ word, mean }) => {
    return (
        <div className=" w-[56.563rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" mb-1 text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black">
                    Hãy nhấn để nghe từ vựng
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                    Hãy nhấn vào biểu tượng âm thanh để nghe từ vựng nha !
                </h1>
            </div>
            <div className=" w-3/4 flex justify-center items-center mx-auto">
                <div className=" w-1/2 ">
                    <div className=" m-auto border border-secondary-gray w-56 h-56 rounded-[40px] bg-white"></div>
                </div>
                <div className=" w-1/2 ">
                    <div className=" mb-8">
                        <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray mb-3">
                            Tiếng Anh
                        </h1>
                        <h1 className=" text-heading-3 font-heading-3 font-bitter text-primary-blue-700">{word}</h1>
                    </div>
                    <div>
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                            Tiếng Việt
                        </h1>
                        <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">{mean}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
