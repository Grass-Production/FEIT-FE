export const FeatureLangdingPage = () => {
    const cards = [
        {
            img: 'src/assets/images/img-feat-landing-1.png',
            title: 'Hệ thống từ vựng chuyên ngành',
            descr: 'Cung cấp từ vựng chuyên ngành giúp bạn đọc tài liệu, lắng nghe các bài giảng.',
        },
        {
            img: 'src/assets/images/img-feat-landing-2.png',
            title: 'Học theo chủ đề',
            descr: 'Bạn sẽ được học theo nhiều chủ đề khác nhau',
        },
        {
            img: 'src/assets/images/img-feat-landing-3.png',
            title: 'Theo dõi tiến độ',
            descr: 'Theo dõi quá trình học tập của mình',
        },
        {
            img: 'src/assets/images/img-feat-landing-4.png',
            title: 'Tạo lập danh sách yêu thích',
            descr: 'Có thể tạo danh sách từ vựng yêu thích phù hợp với bạn.',
        },
    ];
    return (
        <div id="feat" className=" mb-120px">
            <div>
                <h1 className=" mb-24  fontplusjakartasans text-center   text-heading-4   text-primary-blue-800 font-heading-4">
                    Những tính năng của website này có gì ?
                </h1>
                <div className=" flex gap-8 justify-between">
                    {cards.map((card, i) => {
                        return (
                            <div key={i} className=" shadow-md bg-[#FFFFFF] w-1/4 rounded-[40px]">
                                <div className=" p-6">
                                    <div className=" flex justify-center items-center  max-h-[504px] min-h-[504px] mb-4 rounded-lg   ">
                                        <img src={card.img} alt="" />
                                    </div>
                                    <h1 className=" mb-2   text-heading-7  fontplusjakartasans text-primary-black font-heading-7">
                                        {card.title}
                                    </h1>
                                    <p className=" text-body-1  fontplusjakartasans text-secondary-gray font-body-1">
                                        {card.descr}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const FeatureLangdingPageLoading = () => {
    return (
        <div className="">
            <div className=" w-2/3 mb-8 mx-auto bg-gray-400 animate-pulse p-6 rounded-lg"></div>
            <div className="flex gap-8 justify-between">
                <div className=" w-full ">
                    <div className=" mb-4 rounded-lg min-h-[504px] max-h-[504px]  bg-gray-400 animate-pulse"></div>
                    <div className=" mb-2 rounded-lg bg-gray-400 animate-pulse p-2 w-28"></div>
                    <div className=" rounded-lg bg-gray-400 animate-pulse p-2 w-40 "></div>
                </div>
                <div className=" w-full ">
                    <div className=" mb-4 rounded-lg min-h-[504px] max-h-[504px]  bg-gray-400 animate-pulse"></div>
                    <div className=" mb-2 rounded-lg bg-gray-400 animate-pulse p-2 w-28"></div>
                    <div className=" rounded-lg bg-gray-400 animate-pulse p-2 w-40 "></div>
                </div>
                <div className=" w-full ">
                    <div className=" mb-4 rounded-lg min-h-[504px] max-h-[504px]  bg-gray-400 animate-pulse"></div>
                    <div className=" mb-2 rounded-lg bg-gray-400 animate-pulse p-2 w-28"></div>
                    <div className=" rounded-lg bg-gray-400 animate-pulse p-2 w-40 "></div>
                </div>
                <div className=" w-full ">
                    <div className=" mb-4 rounded-lg min-h-[504px] max-h-[504px]  bg-gray-400 animate-pulse"></div>
                    <div className=" mb-2 rounded-lg bg-gray-400 animate-pulse p-2 w-28"></div>
                    <div className=" rounded-lg bg-gray-400 animate-pulse p-2 w-40 "></div>
                </div>
            </div>
        </div>
    );
};
