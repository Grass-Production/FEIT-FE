export const Example = ({ exampleen, examplevn }) => {
    return (
        <div className=" w-[56.563rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-Dmd">Câu ví dụ</h1>
                <h1 className=" text-center text-Hsm ">Bạn hãy đọc kỹ phần ví dụ để hiểu rõ hơn từ vựng nha hí hí !</h1>
            </div>
            <div className="mx-auto w-3/4">
                <div className="">
                    <div className=" mb-10">
                        <h1 className=" text-lg mb-3">Tiếng Anh</h1>
                        <p className=" text-lg">
                            {exampleen}
                        </p>
                    </div>
                    <div>
                        <h1 className=" text-lg mb-3">Tiếng Việt</h1>
                        <p className=" text-lg">
                            {examplevn}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
