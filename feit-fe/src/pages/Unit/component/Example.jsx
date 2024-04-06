export const Example = ({ exampleen, examplevn }) => {
    return (
        <div className=" w-[56.563rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Câu ví dụ
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Bạn hãy đọc kỹ phần ví dụ để hiểu rõ hơn từ vựng nha hí hí !
                </h1>
            </div>
            <div className="mx-auto w-3/4">
                <div className="">
                    <div className=" mb-10">
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                            Tiếng Anh
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">{exampleen}</p>
                    </div>
                    <div>
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                            Tiếng Việt
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">{examplevn}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
