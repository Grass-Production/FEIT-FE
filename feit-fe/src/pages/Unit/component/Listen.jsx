export const Listen = ({ word, mean }) => {
    return (
        <div className=" w-[56.563rem]">
            <h1 className=" text-center text-Dmd">Hãy nhấn để nghe từ vựng</h1>
            <h1 className=" text-center text-Hsm mb-28">Hãy nhấn vào biểu tượng âm thanh để nghe từ vựng nha !</h1>
            <div className=" w-3/4 flex justify-center items-center mx-auto">
                <div className=" w-1/2 ">
                    <div className=" m-auto  w-56 h-56 rounded-[40px] bg-gray-500"></div>
                </div>
                <div className=" w-1/2 ">
                    <div className=" mb-8">
                        <h1 className=" text-lg mb-3">Tiếng Anh</h1>
                        <h1 className=" text-Dmd">{word}</h1>
                    </div>
                    <div>
                        <h1 className=" text-lg mb-3">Tiếng Việt</h1>
                        <h1 className=" text-2xl">{mean}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
