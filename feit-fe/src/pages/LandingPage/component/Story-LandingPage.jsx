export const StoryLandingPage = () => {
    return (
        <div id="story" className=" mb-24">
            <div className="mb-24 flex justify-center">
                <h1 className="  w-fit fontplusjakartasans text-center p-3 bg-primary-blue-50 text-heading-4 text-primary-blue-800 font-heading-4">
                    Câu chuyện của chúng mình
                </h1>
            </div>
            <div className=" flex justify-between gap-8">
                <div className=" px-12 py-3 w-1/2">
                    <h1 className=" font-plusjakartasans text-heading-6 font-heading-6 text-primary-black mb-5">
                        Mong muốn giỏi tiếng Anh
                    </h1>
                    <p className=" text-secondary-gray text-body-1 font-body-1 font-plusjakartasans ">
                        Tiếng Anh - câu chuyện muôn thưở với sinh viên công nghệ thông tin. Là những người có tư duy
                        logic để viết ra những dòng code thì đâu đó cũng không ít người thì ngoại ngữ nói chung và tiếng
                        Anh nói riếng là thứ gì đó thật sự ác mọng. Vì phải chán ngán cái cảnh không thể biết tiếng Anh
                        chuyên ngành nên chiếc website này đã ra đời.
                    </p>
                </div>

                <div className=" w-[1px] bg-black"></div>

                <div className=" px-12 py-3 w-1/2 ">
                    <h1 className=" font-plusjakartasans text-heading-6 font-heading-6 text-primary-black mb-5">
                        Nếu có tiếng Anh mọi chuyện đã khác
                    </h1>
                    <p className=" text-secondary-gray text-body-1 font-body-1 font-plusjakartasans ">
                        Khi đi phỏng vấn với nhiều người vào các vị trí IT, ngoài những thứ xịn xò như GPA, kỹ năng,...
                        thì một thứ giúp tăng lương đó chính là tiếng Anh. Có tiếng Anh mọi chuyện đã trở nên sáng sủa
                        hơn khi có thể chinh phục nhà tuyển dụng bằng khả năng tiếng Anh của mình, có thể làm remote cho
                        các công ty nước ngoài, có thể làm việc trong môi trường đã quốc gia.
                    </p>
                </div>
            </div>
        </div>
    );
};
